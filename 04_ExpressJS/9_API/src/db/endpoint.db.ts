import { Metadata, SchemaObjectRefType, SystemMetadata } from '../entities/common';
import { Endpoint, EndpointClassifier, EndpointSpec, KnownNetwork, VirtualNetworkRef } from '../entities/endpoint';

export const endpointDatabase: Array<Endpoint> = [
  <Endpoint>{
    metadata: <Metadata>{
      uid: 'xcsd-dgtt-juik-gtbd',
      name: 'endpoint1',
      namespace: 'default',
      description: 'some description'
    },
    system_metadata: <SystemMetadata>{
      creation_timestamp: '',
      deletion_timestamp: '',
      modification_timestamp: '',
      tenant: ''
    },
    spec: <EndpointSpec>{
      dns_name: 'DNS1',
      endpoint_classifier: <EndpointClassifier>{ oneof: <KnownNetwork>{ value: 'newAAA1' } }
    }
  },
  <Endpoint>{
    metadata: <Metadata>{
      uid: 'serf-fcde-derf-hjkk',
      name: 'endpoint2',
      namespace: 'system',
      description: 'some description'
    },
    system_metadata: <SystemMetadata>{
      creation_timestamp: '',
      deletion_timestamp: '',
      modification_timestamp: '',
      tenant: ''
    },
    spec: <EndpointSpec>{
      dns_name: 'DNS2',
      endpoint_classifier: <EndpointClassifier>{
        oneof: <VirtualNetworkRef>{
          value: <SchemaObjectRefType>{
            uid: 'aaaa-aaaa-aaaa-aaaa',
            name: 'virtual-network-1',
            namespace: 'system'
          }
        }
      }
    }
  },
  <Endpoint>{
    metadata: <Metadata>{
      uid: 'aaaa-fcde-derf-bbbb',
      name: 'endpoint3',
      namespace: 'system',
      description: 'some description'
    },
    system_metadata: <SystemMetadata>{
      creation_timestamp: '',
      deletion_timestamp: '',
      modification_timestamp: '',
      tenant: ''
    },
    spec: <EndpointSpec>{
      dns_name: 'DNS2',
      endpoint_classifier: <EndpointClassifier>{
        oneof: <VirtualNetworkRef>{
          value: <SchemaObjectRefType>{
            uid: 'aaaa-aaaa-aaaa-aaaa',
            name: 'virtual-network-1',
            namespace: 'system'
          }
        }
      }
    }
  }
];
