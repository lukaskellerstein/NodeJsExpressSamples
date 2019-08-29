import { Metadata, SystemMetadata } from './common';
import { LoadBalancerAlgorithm } from './enums';

export interface ClusterSpec {
  endpoints: any[];
  health_checks: any[];
  loadbalancer_algorithm: LoadBalancerAlgorithm;
}

export interface Cluster {
  metadata: Metadata;
  system_metadata: SystemMetadata;
  spec: ClusterSpec;
}
