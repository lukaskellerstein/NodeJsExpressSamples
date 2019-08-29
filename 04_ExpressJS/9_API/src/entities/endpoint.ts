import { Metadata, SchemaObjectRefType, SystemMetadata } from './common';

export interface KnownNetwork {
  value: string;
}

export interface VirtualSiteRef {
  value: SchemaObjectRefType;
}

export interface SiteRef {
  value: SchemaObjectRefType;
}

export interface VirtualNetworkRef {
  value: SchemaObjectRefType;
}

export interface EndpointClassifier {
  oneof: KnownNetwork | VirtualSiteRef | SiteRef | VirtualNetworkRef;
}

export interface EndpointSpec {
  dns_name: string;
  endpoint_classifier: EndpointClassifier;
}

export interface Endpoint {
  metadata: Metadata;
  system_metadata: SystemMetadata;
  spec: EndpointSpec;
}
