//Imports the Google Cloud client library
const Monitoring = require( '@google-cloud/monitoring' );

//Your Google Cloud Platform project ID and service name
var projectId;
var service;

//Instantiates a monitoring client
var client = Monitoring.v3().metricServiceClient();

//Create a class MetricGcp
class MetricGcp {

  //Constructor initialization of Instance Object
  constructor( unitType, metricType ) {

    //Initialize a timeSeriesData variable to be pushed with metric
    this.timeSeriesData = {
        metric: {
          type: 'custom.googleapis.com/'+service+'/'+metricType,
        },
        resource: {
          type: 'global',
          labels: {
            "project_id": projectId
          }
        },
        points: []
    };
    //Initialize the type of metric data
    this.unitType = unitType + 'Value';

  }

  //Setting projectId and service
  static init( config ) {

    projectId = config.projectId;
    service = config.service;
    return this;

  }

  //Writing a Time Series Data to the particular metricType
  write ( value ) {
    var dataPoint = {
        interval: {
          endTime: {
            seconds: Date.now() / 1000
          }
        },
        value: {
        }
    };

    var valueKey = dataPoint.value;
    valueKey[ this.unitType ] = value;
    this.timeSeriesData.points[ 0 ] = dataPoint;

    //Creating a request for timeSeries.create
    const request = {
        name: client.projectPath( projectId ),
        timeSeries: [
          this.timeSeriesData
          ]
    };

    // Writes time series data
    client.createTimeSeries( request, function( err, result ) {
      if ( err ) {
        console.error( String( err ) );
      }
    } );

  }
}

module.exports = MetricGcp;
