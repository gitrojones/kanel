// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { AddressId } from './Address';
import bytea from 'bytea';
import { z } from 'zod';

/** Identifier type for staff */
export type StaffId = number & { __flavor?: 'StaffId' };

/** Represents the table public.staff */
export default interface Staff {
  /** Database type: pg_catalog.int4 */
  staff_id: StaffId;

  /** Database type: pg_catalog.varchar */
  first_name: string;

  /** Database type: pg_catalog.varchar */
  last_name: string;

  /** Database type: pg_catalog.int2 */
  address_id: AddressId;

  /** Database type: pg_catalog.varchar */
  email: string | null;

  /** Database type: pg_catalog.int2 */
  store_id: number;

  /** Database type: pg_catalog.bool */
  active: boolean;

  /** Database type: pg_catalog.varchar */
  username: string;

  /** Database type: pg_catalog.varchar */
  password: string | null;

  /** Database type: pg_catalog.timestamp */
  last_update: Date;

  /** Database type: pg_catalog.bytea */
  picture: bytea | null;
}

/** Represents the initializer for the table public.staff */
export interface StaffInitializer {
  /**
   * Database type: pg_catalog.int4
   * Default value: nextval('staff_staff_id_seq'::regclass)
   */
  staff_id?: StaffId;

  /** Database type: pg_catalog.varchar */
  first_name: string;

  /** Database type: pg_catalog.varchar */
  last_name: string;

  /** Database type: pg_catalog.int2 */
  address_id: AddressId;

  /** Database type: pg_catalog.varchar */
  email?: string | null;

  /** Database type: pg_catalog.int2 */
  store_id: number;

  /**
   * Database type: pg_catalog.bool
   * Default value: true
   */
  active?: boolean;

  /** Database type: pg_catalog.varchar */
  username: string;

  /** Database type: pg_catalog.varchar */
  password?: string | null;

  /**
   * Database type: pg_catalog.timestamp
   * Default value: now()
   */
  last_update?: Date;

  /** Database type: pg_catalog.bytea */
  picture?: bytea | null;
}

/** Represents the mutator for the table public.staff */
export interface StaffMutator {
  /** Database type: pg_catalog.int4 */
  staff_id?: StaffId;

  /** Database type: pg_catalog.varchar */
  first_name?: string;

  /** Database type: pg_catalog.varchar */
  last_name?: string;

  /** Database type: pg_catalog.int2 */
  address_id?: AddressId;

  /** Database type: pg_catalog.varchar */
  email?: string | null;

  /** Database type: pg_catalog.int2 */
  store_id?: number;

  /** Database type: pg_catalog.bool */
  active?: boolean;

  /** Database type: pg_catalog.varchar */
  username?: string;

  /** Database type: pg_catalog.varchar */
  password?: string | null;

  /** Database type: pg_catalog.timestamp */
  last_update?: Date;

  /** Database type: pg_catalog.bytea */
  picture?: bytea | null;
}

/** Zod schema for staff */
export const staff = z.object({
  staff_id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  address_id: z.number(),
  email: z.string(),
  store_id: z.number(),
  active: z.boolean(),
  username: z.string(),
  password: z.string(),
  last_update: z.date(),
  picture: z.unknown(),
});
