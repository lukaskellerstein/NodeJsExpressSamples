export interface Metadata {
  uid: string;
  name: string;
  namespace: string;
  description: string;
}

export interface SystemMetadata {
  creation_timestamp: string;
  deletion_timestamp: string;
  modification_timestamp: string;
  tenant: string;
}

export interface SchemaObjectRefType {
  kind: string;
  name: string;
  namespace: string;
  tenant: string;
  uid: string;
}
