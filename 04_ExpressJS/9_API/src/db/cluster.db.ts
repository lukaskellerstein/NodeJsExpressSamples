import { Cluster, ClusterSpec } from '../entities/cluster';
import { Metadata, SystemMetadata } from '../entities/common';

export const clusterDatabase: Array<Cluster> = [
  <Cluster>{
    metadata: <Metadata>{
      uid: 'abcd-efgh-ijkl-mnop',
      name: 'cluster1',
      namespace: 'default',
      description: 'some description'
    },
    system_metadata: <SystemMetadata>{
      creation_timestamp: '',
      deletion_timestamp: '',
      modification_timestamp: '',
      tenant: ''
    },
    spec: <ClusterSpec>{
      endpoints: ['a', 'b', 'c'],
      health_checks: [{ name: 'Heal1' }, { name: 'Heal2' }, { name: 'Heal3' }]
    }
  },
  <Cluster>{
    metadata: <Metadata>{
      uid: 'afgyj-drgt-cbop-ewsn',
      name: 'cluster2',
      namespace: 'system',
      description: 'some description'
    },
    system_metadata: <SystemMetadata>{
      creation_timestamp: '',
      deletion_timestamp: '',
      modification_timestamp: '',
      tenant: ''
    },
    spec: <ClusterSpec>{
      endpoints: ['asdfasf', 'asfasfdasf', 'uryurtyu'],
      health_checks: [{ name: 'name1' }, { name: 'name2' }, { name: 'name3' }]
    }
  },
  <Cluster>{
    metadata: <Metadata>{
      uid: 'dddd-rrrr-eeee-kkkk',
      name: 'cluster3',
      namespace: 'default',
      description: 'some description'
    },
    system_metadata: <SystemMetadata>{
      creation_timestamp: '',
      deletion_timestamp: '',
      modification_timestamp: '',
      tenant: ''
    },
    spec: <ClusterSpec>{
      endpoints: ['132131', '24242424', '453534534'],
      health_checks: [{ name: 'some11' }, { name: 'some22' }, { name: 'some33' }]
    }
  }
];
