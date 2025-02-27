import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "entry" */
export type Entry = {
  __typename?: 'entry';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  sub_record?: Maybe<Sub_Record>;
  sub_record_id?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  value: Scalars['Int']['output'];
};

/** aggregated selection of "entry" */
export type Entry_Aggregate = {
  __typename?: 'entry_aggregate';
  aggregate?: Maybe<Entry_Aggregate_Fields>;
  nodes: Array<Entry>;
};

export type Entry_Aggregate_Bool_Exp = {
  count?: InputMaybe<Entry_Aggregate_Bool_Exp_Count>;
};

export type Entry_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Entry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Entry_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "entry" */
export type Entry_Aggregate_Fields = {
  __typename?: 'entry_aggregate_fields';
  avg?: Maybe<Entry_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Entry_Max_Fields>;
  min?: Maybe<Entry_Min_Fields>;
  stddev?: Maybe<Entry_Stddev_Fields>;
  stddev_pop?: Maybe<Entry_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Entry_Stddev_Samp_Fields>;
  sum?: Maybe<Entry_Sum_Fields>;
  var_pop?: Maybe<Entry_Var_Pop_Fields>;
  var_samp?: Maybe<Entry_Var_Samp_Fields>;
  variance?: Maybe<Entry_Variance_Fields>;
};


/** aggregate fields of "entry" */
export type Entry_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Entry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "entry" */
export type Entry_Aggregate_Order_By = {
  avg?: InputMaybe<Entry_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Entry_Max_Order_By>;
  min?: InputMaybe<Entry_Min_Order_By>;
  stddev?: InputMaybe<Entry_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Entry_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Entry_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Entry_Sum_Order_By>;
  var_pop?: InputMaybe<Entry_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Entry_Var_Samp_Order_By>;
  variance?: InputMaybe<Entry_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "entry" */
export type Entry_Arr_Rel_Insert_Input = {
  data: Array<Entry_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Entry_On_Conflict>;
};

/** aggregate avg on columns */
export type Entry_Avg_Fields = {
  __typename?: 'entry_avg_fields';
  sub_record_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "entry" */
export type Entry_Avg_Order_By = {
  sub_record_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "entry". All fields are combined with a logical 'AND'. */
export type Entry_Bool_Exp = {
  _and?: InputMaybe<Array<Entry_Bool_Exp>>;
  _not?: InputMaybe<Entry_Bool_Exp>;
  _or?: InputMaybe<Array<Entry_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sub_record?: InputMaybe<Sub_Record_Bool_Exp>;
  sub_record_id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "entry" */
export enum Entry_Constraint {
  /** unique or primary key constraint on columns "id" */
  EntryPkey = 'entry_pkey'
}

/** input type for incrementing numeric columns in table "entry" */
export type Entry_Inc_Input = {
  sub_record_id?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "entry" */
export type Entry_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sub_record?: InputMaybe<Sub_Record_Obj_Rel_Insert_Input>;
  sub_record_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Entry_Max_Fields = {
  __typename?: 'entry_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sub_record_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "entry" */
export type Entry_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sub_record_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Entry_Min_Fields = {
  __typename?: 'entry_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sub_record_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "entry" */
export type Entry_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sub_record_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "entry" */
export type Entry_Mutation_Response = {
  __typename?: 'entry_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Entry>;
};

/** on_conflict condition type for table "entry" */
export type Entry_On_Conflict = {
  constraint: Entry_Constraint;
  update_columns?: Array<Entry_Update_Column>;
  where?: InputMaybe<Entry_Bool_Exp>;
};

/** Ordering options when selecting data from "entry". */
export type Entry_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sub_record?: InputMaybe<Sub_Record_Order_By>;
  sub_record_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: entry */
export type Entry_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "entry" */
export enum Entry_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SubRecordId = 'sub_record_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "entry" */
export type Entry_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sub_record_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Entry_Stddev_Fields = {
  __typename?: 'entry_stddev_fields';
  sub_record_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "entry" */
export type Entry_Stddev_Order_By = {
  sub_record_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Entry_Stddev_Pop_Fields = {
  __typename?: 'entry_stddev_pop_fields';
  sub_record_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "entry" */
export type Entry_Stddev_Pop_Order_By = {
  sub_record_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Entry_Stddev_Samp_Fields = {
  __typename?: 'entry_stddev_samp_fields';
  sub_record_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "entry" */
export type Entry_Stddev_Samp_Order_By = {
  sub_record_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "entry" */
export type Entry_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Entry_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Entry_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sub_record_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Entry_Sum_Fields = {
  __typename?: 'entry_sum_fields';
  sub_record_id?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "entry" */
export type Entry_Sum_Order_By = {
  sub_record_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** update columns of table "entry" */
export enum Entry_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SubRecordId = 'sub_record_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

export type Entry_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Entry_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Entry_Set_Input>;
  /** filter the rows which have to be updated */
  where: Entry_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Entry_Var_Pop_Fields = {
  __typename?: 'entry_var_pop_fields';
  sub_record_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "entry" */
export type Entry_Var_Pop_Order_By = {
  sub_record_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Entry_Var_Samp_Fields = {
  __typename?: 'entry_var_samp_fields';
  sub_record_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "entry" */
export type Entry_Var_Samp_Order_By = {
  sub_record_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Entry_Variance_Fields = {
  __typename?: 'entry_variance_fields';
  sub_record_id?: Maybe<Scalars['Float']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "entry" */
export type Entry_Variance_Order_By = {
  sub_record_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** columns and relationships of "global_vars" */
export type Global_Vars = {
  __typename?: 'global_vars';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  value: Scalars['jsonb']['output'];
};


/** columns and relationships of "global_vars" */
export type Global_VarsValueArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "global_vars" */
export type Global_Vars_Aggregate = {
  __typename?: 'global_vars_aggregate';
  aggregate?: Maybe<Global_Vars_Aggregate_Fields>;
  nodes: Array<Global_Vars>;
};

/** aggregate fields of "global_vars" */
export type Global_Vars_Aggregate_Fields = {
  __typename?: 'global_vars_aggregate_fields';
  avg?: Maybe<Global_Vars_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Global_Vars_Max_Fields>;
  min?: Maybe<Global_Vars_Min_Fields>;
  stddev?: Maybe<Global_Vars_Stddev_Fields>;
  stddev_pop?: Maybe<Global_Vars_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Global_Vars_Stddev_Samp_Fields>;
  sum?: Maybe<Global_Vars_Sum_Fields>;
  var_pop?: Maybe<Global_Vars_Var_Pop_Fields>;
  var_samp?: Maybe<Global_Vars_Var_Samp_Fields>;
  variance?: Maybe<Global_Vars_Variance_Fields>;
};


/** aggregate fields of "global_vars" */
export type Global_Vars_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Global_Vars_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Global_Vars_Append_Input = {
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Global_Vars_Avg_Fields = {
  __typename?: 'global_vars_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "global_vars". All fields are combined with a logical 'AND'. */
export type Global_Vars_Bool_Exp = {
  _and?: InputMaybe<Array<Global_Vars_Bool_Exp>>;
  _not?: InputMaybe<Global_Vars_Bool_Exp>;
  _or?: InputMaybe<Array<Global_Vars_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "global_vars" */
export enum Global_Vars_Constraint {
  /** unique or primary key constraint on columns "key" */
  GlobalVarsKeyKey = 'global_vars_key_key',
  /** unique or primary key constraint on columns "id" */
  GlobalVarsPkey = 'global_vars_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Global_Vars_Delete_At_Path_Input = {
  value?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Global_Vars_Delete_Elem_Input = {
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Global_Vars_Delete_Key_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "global_vars" */
export type Global_Vars_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "global_vars" */
export type Global_Vars_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Global_Vars_Max_Fields = {
  __typename?: 'global_vars_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Global_Vars_Min_Fields = {
  __typename?: 'global_vars_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "global_vars" */
export type Global_Vars_Mutation_Response = {
  __typename?: 'global_vars_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Global_Vars>;
};

/** on_conflict condition type for table "global_vars" */
export type Global_Vars_On_Conflict = {
  constraint: Global_Vars_Constraint;
  update_columns?: Array<Global_Vars_Update_Column>;
  where?: InputMaybe<Global_Vars_Bool_Exp>;
};

/** Ordering options when selecting data from "global_vars". */
export type Global_Vars_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: global_vars */
export type Global_Vars_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Global_Vars_Prepend_Input = {
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "global_vars" */
export enum Global_Vars_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "global_vars" */
export type Global_Vars_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate stddev on columns */
export type Global_Vars_Stddev_Fields = {
  __typename?: 'global_vars_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Global_Vars_Stddev_Pop_Fields = {
  __typename?: 'global_vars_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Global_Vars_Stddev_Samp_Fields = {
  __typename?: 'global_vars_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "global_vars" */
export type Global_Vars_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Global_Vars_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Global_Vars_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate sum on columns */
export type Global_Vars_Sum_Fields = {
  __typename?: 'global_vars_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "global_vars" */
export enum Global_Vars_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

export type Global_Vars_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Global_Vars_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Global_Vars_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Global_Vars_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Global_Vars_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Global_Vars_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Global_Vars_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Global_Vars_Set_Input>;
  /** filter the rows which have to be updated */
  where: Global_Vars_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Global_Vars_Var_Pop_Fields = {
  __typename?: 'global_vars_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Global_Vars_Var_Samp_Fields = {
  __typename?: 'global_vars_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Global_Vars_Variance_Fields = {
  __typename?: 'global_vars_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "entry" */
  delete_entry?: Maybe<Entry_Mutation_Response>;
  /** delete single row from the table: "entry" */
  delete_entry_by_pk?: Maybe<Entry>;
  /** delete data from the table: "global_vars" */
  delete_global_vars?: Maybe<Global_Vars_Mutation_Response>;
  /** delete single row from the table: "global_vars" */
  delete_global_vars_by_pk?: Maybe<Global_Vars>;
  /** delete data from the table: "records" */
  delete_records?: Maybe<Records_Mutation_Response>;
  /** delete single row from the table: "records" */
  delete_records_by_pk?: Maybe<Records>;
  /** delete data from the table: "sub_record" */
  delete_sub_record?: Maybe<Sub_Record_Mutation_Response>;
  /** delete single row from the table: "sub_record" */
  delete_sub_record_by_pk?: Maybe<Sub_Record>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "entry" */
  insert_entry?: Maybe<Entry_Mutation_Response>;
  /** insert a single row into the table: "entry" */
  insert_entry_one?: Maybe<Entry>;
  /** insert data into the table: "global_vars" */
  insert_global_vars?: Maybe<Global_Vars_Mutation_Response>;
  /** insert a single row into the table: "global_vars" */
  insert_global_vars_one?: Maybe<Global_Vars>;
  /** insert data into the table: "records" */
  insert_records?: Maybe<Records_Mutation_Response>;
  /** insert a single row into the table: "records" */
  insert_records_one?: Maybe<Records>;
  /** insert data into the table: "sub_record" */
  insert_sub_record?: Maybe<Sub_Record_Mutation_Response>;
  /** insert a single row into the table: "sub_record" */
  insert_sub_record_one?: Maybe<Sub_Record>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "entry" */
  update_entry?: Maybe<Entry_Mutation_Response>;
  /** update single row of the table: "entry" */
  update_entry_by_pk?: Maybe<Entry>;
  /** update multiples rows of table: "entry" */
  update_entry_many?: Maybe<Array<Maybe<Entry_Mutation_Response>>>;
  /** update data of the table: "global_vars" */
  update_global_vars?: Maybe<Global_Vars_Mutation_Response>;
  /** update single row of the table: "global_vars" */
  update_global_vars_by_pk?: Maybe<Global_Vars>;
  /** update multiples rows of table: "global_vars" */
  update_global_vars_many?: Maybe<Array<Maybe<Global_Vars_Mutation_Response>>>;
  /** update data of the table: "records" */
  update_records?: Maybe<Records_Mutation_Response>;
  /** update single row of the table: "records" */
  update_records_by_pk?: Maybe<Records>;
  /** update multiples rows of table: "records" */
  update_records_many?: Maybe<Array<Maybe<Records_Mutation_Response>>>;
  /** update data of the table: "sub_record" */
  update_sub_record?: Maybe<Sub_Record_Mutation_Response>;
  /** update single row of the table: "sub_record" */
  update_sub_record_by_pk?: Maybe<Sub_Record>;
  /** update multiples rows of table: "sub_record" */
  update_sub_record_many?: Maybe<Array<Maybe<Sub_Record_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_EntryArgs = {
  where: Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Entry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Global_VarsArgs = {
  where: Global_Vars_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Global_Vars_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RecordsArgs = {
  where: Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Records_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Sub_RecordArgs = {
  where: Sub_Record_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sub_Record_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_EntryArgs = {
  objects: Array<Entry_Insert_Input>;
  on_conflict?: InputMaybe<Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Entry_OneArgs = {
  object: Entry_Insert_Input;
  on_conflict?: InputMaybe<Entry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_VarsArgs = {
  objects: Array<Global_Vars_Insert_Input>;
  on_conflict?: InputMaybe<Global_Vars_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Vars_OneArgs = {
  object: Global_Vars_Insert_Input;
  on_conflict?: InputMaybe<Global_Vars_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RecordsArgs = {
  objects: Array<Records_Insert_Input>;
  on_conflict?: InputMaybe<Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Records_OneArgs = {
  object: Records_Insert_Input;
  on_conflict?: InputMaybe<Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sub_RecordArgs = {
  objects: Array<Sub_Record_Insert_Input>;
  on_conflict?: InputMaybe<Sub_Record_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sub_Record_OneArgs = {
  object: Sub_Record_Insert_Input;
  on_conflict?: InputMaybe<Sub_Record_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_EntryArgs = {
  _inc?: InputMaybe<Entry_Inc_Input>;
  _set?: InputMaybe<Entry_Set_Input>;
  where: Entry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Entry_By_PkArgs = {
  _inc?: InputMaybe<Entry_Inc_Input>;
  _set?: InputMaybe<Entry_Set_Input>;
  pk_columns: Entry_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Entry_ManyArgs = {
  updates: Array<Entry_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Global_VarsArgs = {
  _append?: InputMaybe<Global_Vars_Append_Input>;
  _delete_at_path?: InputMaybe<Global_Vars_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Global_Vars_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Global_Vars_Delete_Key_Input>;
  _inc?: InputMaybe<Global_Vars_Inc_Input>;
  _prepend?: InputMaybe<Global_Vars_Prepend_Input>;
  _set?: InputMaybe<Global_Vars_Set_Input>;
  where: Global_Vars_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Vars_By_PkArgs = {
  _append?: InputMaybe<Global_Vars_Append_Input>;
  _delete_at_path?: InputMaybe<Global_Vars_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Global_Vars_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Global_Vars_Delete_Key_Input>;
  _inc?: InputMaybe<Global_Vars_Inc_Input>;
  _prepend?: InputMaybe<Global_Vars_Prepend_Input>;
  _set?: InputMaybe<Global_Vars_Set_Input>;
  pk_columns: Global_Vars_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Vars_ManyArgs = {
  updates: Array<Global_Vars_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RecordsArgs = {
  _inc?: InputMaybe<Records_Inc_Input>;
  _set?: InputMaybe<Records_Set_Input>;
  where: Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Records_By_PkArgs = {
  _inc?: InputMaybe<Records_Inc_Input>;
  _set?: InputMaybe<Records_Set_Input>;
  pk_columns: Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Records_ManyArgs = {
  updates: Array<Records_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Sub_RecordArgs = {
  _inc?: InputMaybe<Sub_Record_Inc_Input>;
  _set?: InputMaybe<Sub_Record_Set_Input>;
  where: Sub_Record_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sub_Record_By_PkArgs = {
  _inc?: InputMaybe<Sub_Record_Inc_Input>;
  _set?: InputMaybe<Sub_Record_Set_Input>;
  pk_columns: Sub_Record_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sub_Record_ManyArgs = {
  updates: Array<Sub_Record_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "entry" */
  entry: Array<Entry>;
  /** fetch aggregated fields from the table: "entry" */
  entry_aggregate: Entry_Aggregate;
  /** fetch data from the table: "entry" using primary key columns */
  entry_by_pk?: Maybe<Entry>;
  /** fetch data from the table: "global_vars" */
  global_vars: Array<Global_Vars>;
  /** fetch aggregated fields from the table: "global_vars" */
  global_vars_aggregate: Global_Vars_Aggregate;
  /** fetch data from the table: "global_vars" using primary key columns */
  global_vars_by_pk?: Maybe<Global_Vars>;
  /** An array relationship */
  records: Array<Records>;
  /** An aggregate relationship */
  records_aggregate: Records_Aggregate;
  /** fetch data from the table: "records" using primary key columns */
  records_by_pk?: Maybe<Records>;
  /** fetch data from the table: "sub_record" */
  sub_record: Array<Sub_Record>;
  /** fetch aggregated fields from the table: "sub_record" */
  sub_record_aggregate: Sub_Record_Aggregate;
  /** fetch data from the table: "sub_record" using primary key columns */
  sub_record_by_pk?: Maybe<Sub_Record>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootEntryArgs = {
  distinct_on?: InputMaybe<Array<Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entry_Order_By>>;
  where?: InputMaybe<Entry_Bool_Exp>;
};


export type Query_RootEntry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entry_Order_By>>;
  where?: InputMaybe<Entry_Bool_Exp>;
};


export type Query_RootEntry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootGlobal_VarsArgs = {
  distinct_on?: InputMaybe<Array<Global_Vars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Vars_Order_By>>;
  where?: InputMaybe<Global_Vars_Bool_Exp>;
};


export type Query_RootGlobal_Vars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Vars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Vars_Order_By>>;
  where?: InputMaybe<Global_Vars_Bool_Exp>;
};


export type Query_RootGlobal_Vars_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRecordsArgs = {
  distinct_on?: InputMaybe<Array<Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Records_Order_By>>;
  where?: InputMaybe<Records_Bool_Exp>;
};


export type Query_RootRecords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Records_Order_By>>;
  where?: InputMaybe<Records_Bool_Exp>;
};


export type Query_RootRecords_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSub_RecordArgs = {
  distinct_on?: InputMaybe<Array<Sub_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sub_Record_Order_By>>;
  where?: InputMaybe<Sub_Record_Bool_Exp>;
};


export type Query_RootSub_Record_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sub_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sub_Record_Order_By>>;
  where?: InputMaybe<Sub_Record_Bool_Exp>;
};


export type Query_RootSub_Record_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "records" */
export type Records = {
  __typename?: 'records';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  inc_id: Scalars['Int']['output'];
  income: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  note: Scalars['String']['output'];
  question1: Scalars['String']['output'];
  question2: Scalars['String']['output'];
  /** An array relationship */
  sub_records: Array<Sub_Record>;
  /** An aggregate relationship */
  sub_records_aggregate: Sub_Record_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};


/** columns and relationships of "records" */
export type RecordsSub_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Sub_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sub_Record_Order_By>>;
  where?: InputMaybe<Sub_Record_Bool_Exp>;
};


/** columns and relationships of "records" */
export type RecordsSub_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sub_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sub_Record_Order_By>>;
  where?: InputMaybe<Sub_Record_Bool_Exp>;
};

/** aggregated selection of "records" */
export type Records_Aggregate = {
  __typename?: 'records_aggregate';
  aggregate?: Maybe<Records_Aggregate_Fields>;
  nodes: Array<Records>;
};

export type Records_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Records_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Records_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Records_Aggregate_Bool_Exp_Count>;
};

export type Records_Aggregate_Bool_Exp_Bool_And = {
  arguments: Records_Select_Column_Records_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Records_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Records_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Records_Select_Column_Records_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Records_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Records_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Records_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "records" */
export type Records_Aggregate_Fields = {
  __typename?: 'records_aggregate_fields';
  avg?: Maybe<Records_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Records_Max_Fields>;
  min?: Maybe<Records_Min_Fields>;
  stddev?: Maybe<Records_Stddev_Fields>;
  stddev_pop?: Maybe<Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Records_Stddev_Samp_Fields>;
  sum?: Maybe<Records_Sum_Fields>;
  var_pop?: Maybe<Records_Var_Pop_Fields>;
  var_samp?: Maybe<Records_Var_Samp_Fields>;
  variance?: Maybe<Records_Variance_Fields>;
};


/** aggregate fields of "records" */
export type Records_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "records" */
export type Records_Aggregate_Order_By = {
  avg?: InputMaybe<Records_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Records_Max_Order_By>;
  min?: InputMaybe<Records_Min_Order_By>;
  stddev?: InputMaybe<Records_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Records_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Records_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Records_Sum_Order_By>;
  var_pop?: InputMaybe<Records_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Records_Var_Samp_Order_By>;
  variance?: InputMaybe<Records_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "records" */
export type Records_Arr_Rel_Insert_Input = {
  data: Array<Records_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Records_On_Conflict>;
};

/** aggregate avg on columns */
export type Records_Avg_Fields = {
  __typename?: 'records_avg_fields';
  inc_id?: Maybe<Scalars['Float']['output']>;
  income?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "records" */
export type Records_Avg_Order_By = {
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "records". All fields are combined with a logical 'AND'. */
export type Records_Bool_Exp = {
  _and?: InputMaybe<Array<Records_Bool_Exp>>;
  _not?: InputMaybe<Records_Bool_Exp>;
  _or?: InputMaybe<Array<Records_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  inc_id?: InputMaybe<Int_Comparison_Exp>;
  income?: InputMaybe<Int_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  question1?: InputMaybe<String_Comparison_Exp>;
  question2?: InputMaybe<String_Comparison_Exp>;
  sub_records?: InputMaybe<Sub_Record_Bool_Exp>;
  sub_records_aggregate?: InputMaybe<Sub_Record_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "records" */
export enum Records_Constraint {
  /** unique or primary key constraint on columns "id" */
  RecordsPkey = 'records_pkey'
}

/** input type for incrementing numeric columns in table "records" */
export type Records_Inc_Input = {
  inc_id?: InputMaybe<Scalars['Int']['input']>;
  income?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "records" */
export type Records_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inc_id?: InputMaybe<Scalars['Int']['input']>;
  income?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  question1?: InputMaybe<Scalars['String']['input']>;
  question2?: InputMaybe<Scalars['String']['input']>;
  sub_records?: InputMaybe<Sub_Record_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Records_Max_Fields = {
  __typename?: 'records_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inc_id?: Maybe<Scalars['Int']['output']>;
  income?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  question1?: Maybe<Scalars['String']['output']>;
  question2?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "records" */
export type Records_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  question1?: InputMaybe<Order_By>;
  question2?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Records_Min_Fields = {
  __typename?: 'records_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  inc_id?: Maybe<Scalars['Int']['output']>;
  income?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  question1?: Maybe<Scalars['String']['output']>;
  question2?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "records" */
export type Records_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  question1?: InputMaybe<Order_By>;
  question2?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "records" */
export type Records_Mutation_Response = {
  __typename?: 'records_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Records>;
};

/** input type for inserting object relation for remote table "records" */
export type Records_Obj_Rel_Insert_Input = {
  data: Records_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Records_On_Conflict>;
};

/** on_conflict condition type for table "records" */
export type Records_On_Conflict = {
  constraint: Records_Constraint;
  update_columns?: Array<Records_Update_Column>;
  where?: InputMaybe<Records_Bool_Exp>;
};

/** Ordering options when selecting data from "records". */
export type Records_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  question1?: InputMaybe<Order_By>;
  question2?: InputMaybe<Order_By>;
  sub_records_aggregate?: InputMaybe<Sub_Record_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: records */
export type Records_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "records" */
export enum Records_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IncId = 'inc_id',
  /** column name */
  Income = 'income',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Note = 'note',
  /** column name */
  Question1 = 'question1',
  /** column name */
  Question2 = 'question2',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "records_aggregate_bool_exp_bool_and_arguments_columns" columns of table "records" */
export enum Records_Select_Column_Records_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActive = 'isActive'
}

/** select "records_aggregate_bool_exp_bool_or_arguments_columns" columns of table "records" */
export enum Records_Select_Column_Records_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActive = 'isActive'
}

/** input type for updating data in table "records" */
export type Records_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inc_id?: InputMaybe<Scalars['Int']['input']>;
  income?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  question1?: InputMaybe<Scalars['String']['input']>;
  question2?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Records_Stddev_Fields = {
  __typename?: 'records_stddev_fields';
  inc_id?: Maybe<Scalars['Float']['output']>;
  income?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "records" */
export type Records_Stddev_Order_By = {
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Records_Stddev_Pop_Fields = {
  __typename?: 'records_stddev_pop_fields';
  inc_id?: Maybe<Scalars['Float']['output']>;
  income?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "records" */
export type Records_Stddev_Pop_Order_By = {
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Records_Stddev_Samp_Fields = {
  __typename?: 'records_stddev_samp_fields';
  inc_id?: Maybe<Scalars['Float']['output']>;
  income?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "records" */
export type Records_Stddev_Samp_Order_By = {
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "records" */
export type Records_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Records_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Records_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  inc_id?: InputMaybe<Scalars['Int']['input']>;
  income?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  question1?: InputMaybe<Scalars['String']['input']>;
  question2?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Records_Sum_Fields = {
  __typename?: 'records_sum_fields';
  inc_id?: Maybe<Scalars['Int']['output']>;
  income?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "records" */
export type Records_Sum_Order_By = {
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
};

/** update columns of table "records" */
export enum Records_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IncId = 'inc_id',
  /** column name */
  Income = 'income',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Note = 'note',
  /** column name */
  Question1 = 'question1',
  /** column name */
  Question2 = 'question2',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Records_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Records_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Records_Set_Input>;
  /** filter the rows which have to be updated */
  where: Records_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Records_Var_Pop_Fields = {
  __typename?: 'records_var_pop_fields';
  inc_id?: Maybe<Scalars['Float']['output']>;
  income?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "records" */
export type Records_Var_Pop_Order_By = {
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Records_Var_Samp_Fields = {
  __typename?: 'records_var_samp_fields';
  inc_id?: Maybe<Scalars['Float']['output']>;
  income?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "records" */
export type Records_Var_Samp_Order_By = {
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Records_Variance_Fields = {
  __typename?: 'records_variance_fields';
  inc_id?: Maybe<Scalars['Float']['output']>;
  income?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "records" */
export type Records_Variance_Order_By = {
  inc_id?: InputMaybe<Order_By>;
  income?: InputMaybe<Order_By>;
};

/** columns and relationships of "sub_record" */
export type Sub_Record = {
  __typename?: 'sub_record';
  created_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  entries: Array<Entry>;
  /** An aggregate relationship */
  entries_aggregate: Entry_Aggregate;
  id: Scalars['Int']['output'];
  percentage: Scalars['Int']['output'];
  /** An object relationship */
  record?: Maybe<Records>;
  record_id?: Maybe<Scalars['uuid']['output']>;
  type: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "sub_record" */
export type Sub_RecordEntriesArgs = {
  distinct_on?: InputMaybe<Array<Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entry_Order_By>>;
  where?: InputMaybe<Entry_Bool_Exp>;
};


/** columns and relationships of "sub_record" */
export type Sub_RecordEntries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entry_Order_By>>;
  where?: InputMaybe<Entry_Bool_Exp>;
};

/** aggregated selection of "sub_record" */
export type Sub_Record_Aggregate = {
  __typename?: 'sub_record_aggregate';
  aggregate?: Maybe<Sub_Record_Aggregate_Fields>;
  nodes: Array<Sub_Record>;
};

export type Sub_Record_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sub_Record_Aggregate_Bool_Exp_Count>;
};

export type Sub_Record_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sub_Record_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sub_Record_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sub_record" */
export type Sub_Record_Aggregate_Fields = {
  __typename?: 'sub_record_aggregate_fields';
  avg?: Maybe<Sub_Record_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Sub_Record_Max_Fields>;
  min?: Maybe<Sub_Record_Min_Fields>;
  stddev?: Maybe<Sub_Record_Stddev_Fields>;
  stddev_pop?: Maybe<Sub_Record_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sub_Record_Stddev_Samp_Fields>;
  sum?: Maybe<Sub_Record_Sum_Fields>;
  var_pop?: Maybe<Sub_Record_Var_Pop_Fields>;
  var_samp?: Maybe<Sub_Record_Var_Samp_Fields>;
  variance?: Maybe<Sub_Record_Variance_Fields>;
};


/** aggregate fields of "sub_record" */
export type Sub_Record_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sub_Record_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "sub_record" */
export type Sub_Record_Aggregate_Order_By = {
  avg?: InputMaybe<Sub_Record_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sub_Record_Max_Order_By>;
  min?: InputMaybe<Sub_Record_Min_Order_By>;
  stddev?: InputMaybe<Sub_Record_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Sub_Record_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Sub_Record_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Sub_Record_Sum_Order_By>;
  var_pop?: InputMaybe<Sub_Record_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Sub_Record_Var_Samp_Order_By>;
  variance?: InputMaybe<Sub_Record_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sub_record" */
export type Sub_Record_Arr_Rel_Insert_Input = {
  data: Array<Sub_Record_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sub_Record_On_Conflict>;
};

/** aggregate avg on columns */
export type Sub_Record_Avg_Fields = {
  __typename?: 'sub_record_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "sub_record" */
export type Sub_Record_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sub_record". All fields are combined with a logical 'AND'. */
export type Sub_Record_Bool_Exp = {
  _and?: InputMaybe<Array<Sub_Record_Bool_Exp>>;
  _not?: InputMaybe<Sub_Record_Bool_Exp>;
  _or?: InputMaybe<Array<Sub_Record_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  entries?: InputMaybe<Entry_Bool_Exp>;
  entries_aggregate?: InputMaybe<Entry_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  percentage?: InputMaybe<Int_Comparison_Exp>;
  record?: InputMaybe<Records_Bool_Exp>;
  record_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "sub_record" */
export enum Sub_Record_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubRecordPkey = 'sub_record_pkey'
}

/** input type for incrementing numeric columns in table "sub_record" */
export type Sub_Record_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  percentage?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "sub_record" */
export type Sub_Record_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  entries?: InputMaybe<Entry_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  percentage?: InputMaybe<Scalars['Int']['input']>;
  record?: InputMaybe<Records_Obj_Rel_Insert_Input>;
  record_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Sub_Record_Max_Fields = {
  __typename?: 'sub_record_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  percentage?: Maybe<Scalars['Int']['output']>;
  record_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "sub_record" */
export type Sub_Record_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
  record_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sub_Record_Min_Fields = {
  __typename?: 'sub_record_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  percentage?: Maybe<Scalars['Int']['output']>;
  record_id?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "sub_record" */
export type Sub_Record_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
  record_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sub_record" */
export type Sub_Record_Mutation_Response = {
  __typename?: 'sub_record_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sub_Record>;
};

/** input type for inserting object relation for remote table "sub_record" */
export type Sub_Record_Obj_Rel_Insert_Input = {
  data: Sub_Record_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Sub_Record_On_Conflict>;
};

/** on_conflict condition type for table "sub_record" */
export type Sub_Record_On_Conflict = {
  constraint: Sub_Record_Constraint;
  update_columns?: Array<Sub_Record_Update_Column>;
  where?: InputMaybe<Sub_Record_Bool_Exp>;
};

/** Ordering options when selecting data from "sub_record". */
export type Sub_Record_Order_By = {
  created_at?: InputMaybe<Order_By>;
  entries_aggregate?: InputMaybe<Entry_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
  record?: InputMaybe<Records_Order_By>;
  record_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sub_record */
export type Sub_Record_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "sub_record" */
export enum Sub_Record_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Percentage = 'percentage',
  /** column name */
  RecordId = 'record_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "sub_record" */
export type Sub_Record_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  percentage?: InputMaybe<Scalars['Int']['input']>;
  record_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Sub_Record_Stddev_Fields = {
  __typename?: 'sub_record_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "sub_record" */
export type Sub_Record_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sub_Record_Stddev_Pop_Fields = {
  __typename?: 'sub_record_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "sub_record" */
export type Sub_Record_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sub_Record_Stddev_Samp_Fields = {
  __typename?: 'sub_record_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "sub_record" */
export type Sub_Record_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "sub_record" */
export type Sub_Record_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sub_Record_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sub_Record_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  percentage?: InputMaybe<Scalars['Int']['input']>;
  record_id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Sub_Record_Sum_Fields = {
  __typename?: 'sub_record_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  percentage?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "sub_record" */
export type Sub_Record_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** update columns of table "sub_record" */
export enum Sub_Record_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Percentage = 'percentage',
  /** column name */
  RecordId = 'record_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Sub_Record_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Sub_Record_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sub_Record_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sub_Record_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Sub_Record_Var_Pop_Fields = {
  __typename?: 'sub_record_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "sub_record" */
export type Sub_Record_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sub_Record_Var_Samp_Fields = {
  __typename?: 'sub_record_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "sub_record" */
export type Sub_Record_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Sub_Record_Variance_Fields = {
  __typename?: 'sub_record_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  percentage?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "sub_record" */
export type Sub_Record_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  percentage?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "entry" */
  entry: Array<Entry>;
  /** fetch aggregated fields from the table: "entry" */
  entry_aggregate: Entry_Aggregate;
  /** fetch data from the table: "entry" using primary key columns */
  entry_by_pk?: Maybe<Entry>;
  /** fetch data from the table in a streaming manner: "entry" */
  entry_stream: Array<Entry>;
  /** fetch data from the table: "global_vars" */
  global_vars: Array<Global_Vars>;
  /** fetch aggregated fields from the table: "global_vars" */
  global_vars_aggregate: Global_Vars_Aggregate;
  /** fetch data from the table: "global_vars" using primary key columns */
  global_vars_by_pk?: Maybe<Global_Vars>;
  /** fetch data from the table in a streaming manner: "global_vars" */
  global_vars_stream: Array<Global_Vars>;
  /** An array relationship */
  records: Array<Records>;
  /** An aggregate relationship */
  records_aggregate: Records_Aggregate;
  /** fetch data from the table: "records" using primary key columns */
  records_by_pk?: Maybe<Records>;
  /** fetch data from the table in a streaming manner: "records" */
  records_stream: Array<Records>;
  /** fetch data from the table: "sub_record" */
  sub_record: Array<Sub_Record>;
  /** fetch aggregated fields from the table: "sub_record" */
  sub_record_aggregate: Sub_Record_Aggregate;
  /** fetch data from the table: "sub_record" using primary key columns */
  sub_record_by_pk?: Maybe<Sub_Record>;
  /** fetch data from the table in a streaming manner: "sub_record" */
  sub_record_stream: Array<Sub_Record>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootEntryArgs = {
  distinct_on?: InputMaybe<Array<Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entry_Order_By>>;
  where?: InputMaybe<Entry_Bool_Exp>;
};


export type Subscription_RootEntry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Entry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Entry_Order_By>>;
  where?: InputMaybe<Entry_Bool_Exp>;
};


export type Subscription_RootEntry_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootEntry_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Entry_Stream_Cursor_Input>>;
  where?: InputMaybe<Entry_Bool_Exp>;
};


export type Subscription_RootGlobal_VarsArgs = {
  distinct_on?: InputMaybe<Array<Global_Vars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Vars_Order_By>>;
  where?: InputMaybe<Global_Vars_Bool_Exp>;
};


export type Subscription_RootGlobal_Vars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Vars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Vars_Order_By>>;
  where?: InputMaybe<Global_Vars_Bool_Exp>;
};


export type Subscription_RootGlobal_Vars_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGlobal_Vars_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Global_Vars_Stream_Cursor_Input>>;
  where?: InputMaybe<Global_Vars_Bool_Exp>;
};


export type Subscription_RootRecordsArgs = {
  distinct_on?: InputMaybe<Array<Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Records_Order_By>>;
  where?: InputMaybe<Records_Bool_Exp>;
};


export type Subscription_RootRecords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Records_Order_By>>;
  where?: InputMaybe<Records_Bool_Exp>;
};


export type Subscription_RootRecords_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRecords_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Records_Stream_Cursor_Input>>;
  where?: InputMaybe<Records_Bool_Exp>;
};


export type Subscription_RootSub_RecordArgs = {
  distinct_on?: InputMaybe<Array<Sub_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sub_Record_Order_By>>;
  where?: InputMaybe<Sub_Record_Bool_Exp>;
};


export type Subscription_RootSub_Record_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sub_Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sub_Record_Order_By>>;
  where?: InputMaybe<Sub_Record_Bool_Exp>;
};


export type Subscription_RootSub_Record_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSub_Record_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sub_Record_Stream_Cursor_Input>>;
  where?: InputMaybe<Sub_Record_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  changePass?: Maybe<Scalars['Boolean']['output']>;
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  grade?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isLocked: Scalars['Boolean']['output'];
  lastname: Scalars['String']['output'];
  password: Scalars['String']['output'];
  /** An array relationship */
  records: Array<Records>;
  /** An aggregate relationship */
  records_aggregate: Records_Aggregate;
  role: Scalars['String']['output'];
  section?: Maybe<Scalars['String']['output']>;
  strand?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "users" */
export type UsersRecordsArgs = {
  distinct_on?: InputMaybe<Array<Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Records_Order_By>>;
  where?: InputMaybe<Records_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRecords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Records_Order_By>>;
  where?: InputMaybe<Records_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  changePass?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  grade?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isLocked?: InputMaybe<Boolean_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  records?: InputMaybe<Records_Bool_Exp>;
  records_aggregate?: InputMaybe<Records_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  section?: InputMaybe<String_Comparison_Exp>;
  strand?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email", "id" */
  UsersIdEmailKey = 'users_id_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  changePass?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  grade?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isLocked?: InputMaybe<Scalars['Boolean']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  records?: InputMaybe<Records_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Scalars['String']['input']>;
  strand?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  section?: Maybe<Scalars['String']['output']>;
  strand?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstname?: Maybe<Scalars['String']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastname?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  section?: Maybe<Scalars['String']['output']>;
  strand?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  changePass?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isLocked?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  records_aggregate?: InputMaybe<Records_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  section?: InputMaybe<Order_By>;
  strand?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  ChangePass = 'changePass',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id',
  /** column name */
  IsLocked = 'isLocked',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  Section = 'section',
  /** column name */
  Strand = 'strand',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  changePass?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  grade?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isLocked?: InputMaybe<Scalars['Boolean']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Scalars['String']['input']>;
  strand?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  changePass?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstname?: InputMaybe<Scalars['String']['input']>;
  grade?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isLocked?: InputMaybe<Scalars['Boolean']['input']>;
  lastname?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  section?: InputMaybe<Scalars['String']['input']>;
  strand?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  ChangePass = 'changePass',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id',
  /** column name */
  IsLocked = 'isLocked',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  Section = 'section',
  /** column name */
  Strand = 'strand',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type EntryFragmentFragment = { __typename?: 'entry', id: any, title: string, value: number, sub_record_id?: number | null };

export type RecordFragmentFragment = { __typename?: 'records', id: any, question2: string, question1: string, note: string, income: number, inc_id: number, sub_records: Array<{ __typename?: 'sub_record', id: number, percentage: number, type: string, entries: Array<{ __typename?: 'entry', id: any, title: string, value: number, sub_record_id?: number | null }> }> };

export type UserFragmentFragment = { __typename?: 'users', id: any, updated_at: any, firstname: string, lastname: string, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null };

export type DeleteEntryMutationVariables = Exact<{
  id?: InputMaybe<Uuid_Comparison_Exp>;
}>;


export type DeleteEntryMutation = { __typename?: 'mutation_root', delete_entry?: { __typename?: 'entry_mutation_response', affected_rows: number } | null };

export type UpdatePasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  id: Scalars['uuid']['input'];
  password: Scalars['String']['input'];
}>;


export type UpdatePasswordMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: any, updated_at: any, firstname: string, lastname: string, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null }> } | null };

export type UpdateUserMutationVariables = Exact<{
  where: Users_Bool_Exp;
  set?: InputMaybe<Users_Set_Input>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: any, updated_at: any, firstname: string, lastname: string, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null }> } | null };

export type UpsertEntryMutationVariables = Exact<{
  objects?: InputMaybe<Array<Entry_Insert_Input> | Entry_Insert_Input>;
  on_conflict?: InputMaybe<Entry_On_Conflict>;
}>;


export type UpsertEntryMutation = { __typename?: 'mutation_root', insert_entry?: { __typename?: 'entry_mutation_response', returning: Array<{ __typename?: 'entry', id: any, title: string, value: number, sub_record_id?: number | null }> } | null };

export type UpsertRecordMutationVariables = Exact<{
  objects?: InputMaybe<Array<Records_Insert_Input> | Records_Insert_Input>;
}>;


export type UpsertRecordMutation = { __typename?: 'mutation_root', insert_records?: { __typename?: 'records_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'records', id: any, question2: string, question1: string, note: string, income: number, inc_id: number, sub_records: Array<{ __typename?: 'sub_record', id: number, percentage: number, type: string, entries: Array<{ __typename?: 'entry', id: any, title: string, value: number, sub_record_id?: number | null }> }> }> } | null };

export type UpsertUserMutationVariables = Exact<{
  object: Users_Insert_Input;
}>;


export type UpsertUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: any, updated_at: any, firstname: string, lastname: string, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null } | null };

export type GetPreviousRecordsQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPreviousRecordsQuery = { __typename?: 'query_root', records: Array<{ __typename?: 'records', id: any, question2: string, question1: string, note: string, income: number, inc_id: number, sub_records: Array<{ __typename?: 'sub_record', id: number, percentage: number, type: string, entries: Array<{ __typename?: 'entry', id: any, title: string, value: number, sub_record_id?: number | null }> }> }>, records_aggregate: { __typename?: 'records_aggregate', aggregate?: { __typename?: 'records_aggregate_fields', count: number } | null } };

export type GetRecordQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type GetRecordQuery = { __typename?: 'query_root', records: Array<{ __typename?: 'records', id: any, question2: string, question1: string, note: string, income: number, inc_id: number, sub_records: Array<{ __typename?: 'sub_record', id: number, percentage: number, type: string, entries: Array<{ __typename?: 'entry', id: any, title: string, value: number, sub_record_id?: number | null }> }> }> };

export type GetUserQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, updated_at: any, firstname: string, lastname: string, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null }> };

export type GetUserListQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<Users_Order_By> | Users_Order_By>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Users_Bool_Exp>;
}>;


export type GetUserListQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, updated_at: any, firstname: string, lastname: string, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null }>, users_aggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'query_root', global_vars: Array<{ __typename?: 'global_vars', value: any }> };

export const EntryFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment EntryFragment on entry {
  id
  title
  value
  sub_record_id
}
    `;
export const RecordFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment RecordFragment on records {
  id
  question2
  question1
  sub_records {
    id
    percentage
    type
    entries(order_by: {created_at: asc}) {
      ...EntryFragment
    }
  }
  note
  income
  inc_id
}
    ${EntryFragmentFragmentDoc}`;
export const UserFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment UserFragment on users {
  id
  updated_at
  firstname
  lastname
  email
  isLocked
  role
  section
  strand
  grade
  changePass
}
    `;
export const DeleteEntryDocument = /*#__PURE__*/ gql`
    mutation deleteEntry($id: uuid_comparison_exp = {_eq: ""}) {
  delete_entry(where: {id: $id}) {
    affected_rows
  }
}
    `;
export type DeleteEntryMutationFn = Apollo.MutationFunction<DeleteEntryMutation, DeleteEntryMutationVariables>;

/**
 * __useDeleteEntryMutation__
 *
 * To run a mutation, you first call `useDeleteEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEntryMutation, { data, loading, error }] = useDeleteEntryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEntryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEntryMutation, DeleteEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEntryMutation, DeleteEntryMutationVariables>(DeleteEntryDocument, options);
      }
export type DeleteEntryMutationHookResult = ReturnType<typeof useDeleteEntryMutation>;
export type DeleteEntryMutationResult = Apollo.MutationResult<DeleteEntryMutation>;
export type DeleteEntryMutationOptions = Apollo.BaseMutationOptions<DeleteEntryMutation, DeleteEntryMutationVariables>;
export const UpdatePasswordDocument = /*#__PURE__*/ gql`
    mutation updatePassword($email: String!, $id: uuid!, $password: String!) {
  update_users(
    where: {email: {_eq: $email}, id: {_eq: $id}}
    _set: {password: $password, changePass: false}
  ) {
    returning {
      ...UserFragment
    }
    affected_rows
  }
}
    ${UserFragmentFragmentDoc}`;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *      id: // value for 'id'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdateUserDocument = /*#__PURE__*/ gql`
    mutation updateUser($where: users_bool_exp!, $set: users_set_input) {
  update_users(where: $where, _set: $set) {
    affected_rows
    returning {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpsertEntryDocument = /*#__PURE__*/ gql`
    mutation upsertEntry($objects: [entry_insert_input!] = {}, $on_conflict: entry_on_conflict) {
  insert_entry(objects: $objects, on_conflict: $on_conflict) {
    returning {
      ...EntryFragment
    }
  }
}
    ${EntryFragmentFragmentDoc}`;
export type UpsertEntryMutationFn = Apollo.MutationFunction<UpsertEntryMutation, UpsertEntryMutationVariables>;

/**
 * __useUpsertEntryMutation__
 *
 * To run a mutation, you first call `useUpsertEntryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertEntryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertEntryMutation, { data, loading, error }] = useUpsertEntryMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *      on_conflict: // value for 'on_conflict'
 *   },
 * });
 */
export function useUpsertEntryMutation(baseOptions?: Apollo.MutationHookOptions<UpsertEntryMutation, UpsertEntryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertEntryMutation, UpsertEntryMutationVariables>(UpsertEntryDocument, options);
      }
export type UpsertEntryMutationHookResult = ReturnType<typeof useUpsertEntryMutation>;
export type UpsertEntryMutationResult = Apollo.MutationResult<UpsertEntryMutation>;
export type UpsertEntryMutationOptions = Apollo.BaseMutationOptions<UpsertEntryMutation, UpsertEntryMutationVariables>;
export const UpsertRecordDocument = /*#__PURE__*/ gql`
    mutation upsertRecord($objects: [records_insert_input!] = {}) {
  insert_records(
    objects: $objects
    on_conflict: {constraint: records_pkey, update_columns: [income, isActive, note, question1, question2, isActive]}
  ) {
    affected_rows
    returning {
      ...RecordFragment
    }
  }
}
    ${RecordFragmentFragmentDoc}`;
export type UpsertRecordMutationFn = Apollo.MutationFunction<UpsertRecordMutation, UpsertRecordMutationVariables>;

/**
 * __useUpsertRecordMutation__
 *
 * To run a mutation, you first call `useUpsertRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertRecordMutation, { data, loading, error }] = useUpsertRecordMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useUpsertRecordMutation(baseOptions?: Apollo.MutationHookOptions<UpsertRecordMutation, UpsertRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertRecordMutation, UpsertRecordMutationVariables>(UpsertRecordDocument, options);
      }
export type UpsertRecordMutationHookResult = ReturnType<typeof useUpsertRecordMutation>;
export type UpsertRecordMutationResult = Apollo.MutationResult<UpsertRecordMutation>;
export type UpsertRecordMutationOptions = Apollo.BaseMutationOptions<UpsertRecordMutation, UpsertRecordMutationVariables>;
export const UpsertUserDocument = /*#__PURE__*/ gql`
    mutation upsertUser($object: users_insert_input!) {
  insert_users_one(
    object: $object
    on_conflict: {update_columns: [password, isLocked, role, grade, strand, section, firstname, lastname], constraint: users_pkey}
  ) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;
export type UpsertUserMutationFn = Apollo.MutationFunction<UpsertUserMutation, UpsertUserMutationVariables>;

/**
 * __useUpsertUserMutation__
 *
 * To run a mutation, you first call `useUpsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertUserMutation, { data, loading, error }] = useUpsertUserMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpsertUserMutation(baseOptions?: Apollo.MutationHookOptions<UpsertUserMutation, UpsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertUserMutation, UpsertUserMutationVariables>(UpsertUserDocument, options);
      }
export type UpsertUserMutationHookResult = ReturnType<typeof useUpsertUserMutation>;
export type UpsertUserMutationResult = Apollo.MutationResult<UpsertUserMutation>;
export type UpsertUserMutationOptions = Apollo.BaseMutationOptions<UpsertUserMutation, UpsertUserMutationVariables>;
export const GetPreviousRecordsDocument = /*#__PURE__*/ gql`
    query getPreviousRecords($user_id: uuid, $offset: Int = 0, $limit: Int = 10) {
  records(
    where: {isActive: {_eq: false}, user_id: {_eq: $user_id}}
    offset: $offset
    limit: $limit
  ) {
    ...RecordFragment
  }
  records_aggregate(where: {isActive: {_eq: false}, user_id: {_eq: $user_id}}) {
    aggregate {
      count
    }
  }
}
    ${RecordFragmentFragmentDoc}`;

/**
 * __useGetPreviousRecordsQuery__
 *
 * To run a query within a React component, call `useGetPreviousRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreviousRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreviousRecordsQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetPreviousRecordsQuery(baseOptions?: Apollo.QueryHookOptions<GetPreviousRecordsQuery, GetPreviousRecordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPreviousRecordsQuery, GetPreviousRecordsQueryVariables>(GetPreviousRecordsDocument, options);
      }
export function useGetPreviousRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPreviousRecordsQuery, GetPreviousRecordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPreviousRecordsQuery, GetPreviousRecordsQueryVariables>(GetPreviousRecordsDocument, options);
        }
export function useGetPreviousRecordsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPreviousRecordsQuery, GetPreviousRecordsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPreviousRecordsQuery, GetPreviousRecordsQueryVariables>(GetPreviousRecordsDocument, options);
        }
export type GetPreviousRecordsQueryHookResult = ReturnType<typeof useGetPreviousRecordsQuery>;
export type GetPreviousRecordsLazyQueryHookResult = ReturnType<typeof useGetPreviousRecordsLazyQuery>;
export type GetPreviousRecordsSuspenseQueryHookResult = ReturnType<typeof useGetPreviousRecordsSuspenseQuery>;
export type GetPreviousRecordsQueryResult = Apollo.QueryResult<GetPreviousRecordsQuery, GetPreviousRecordsQueryVariables>;
export const GetRecordDocument = /*#__PURE__*/ gql`
    query getRecord($user_id: uuid) {
  records(limit: 1, where: {isActive: {_eq: true}, user_id: {_eq: $user_id}}) {
    ...RecordFragment
  }
}
    ${RecordFragmentFragmentDoc}`;

/**
 * __useGetRecordQuery__
 *
 * To run a query within a React component, call `useGetRecordQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecordQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetRecordQuery(baseOptions?: Apollo.QueryHookOptions<GetRecordQuery, GetRecordQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecordQuery, GetRecordQueryVariables>(GetRecordDocument, options);
      }
export function useGetRecordLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecordQuery, GetRecordQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecordQuery, GetRecordQueryVariables>(GetRecordDocument, options);
        }
export function useGetRecordSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecordQuery, GetRecordQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecordQuery, GetRecordQueryVariables>(GetRecordDocument, options);
        }
export type GetRecordQueryHookResult = ReturnType<typeof useGetRecordQuery>;
export type GetRecordLazyQueryHookResult = ReturnType<typeof useGetRecordLazyQuery>;
export type GetRecordSuspenseQueryHookResult = ReturnType<typeof useGetRecordSuspenseQuery>;
export type GetRecordQueryResult = Apollo.QueryResult<GetRecordQuery, GetRecordQueryVariables>;
export const GetUserDocument = /*#__PURE__*/ gql`
    query getUser($email: String) {
  users(where: {email: {_eq: $email}, isLocked: {_neq: true}}) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUserListDocument = /*#__PURE__*/ gql`
    query getUserList($orderBy: [users_order_by!], $limit: Int, $offset: Int, $where: users_bool_exp = {}) {
  users(
    order_by: $orderBy
    where: {_and: [{role: {_neq: "BACKDOOR_ADMIN"}}, $where]}
    limit: $limit
    offset: $offset
  ) {
    ...UserFragment
  }
  users_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useGetUserListQuery__
 *
 * To run a query within a React component, call `useGetUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserListQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUserListQuery(baseOptions?: Apollo.QueryHookOptions<GetUserListQuery, GetUserListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserListQuery, GetUserListQueryVariables>(GetUserListDocument, options);
      }
export function useGetUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserListQuery, GetUserListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserListQuery, GetUserListQueryVariables>(GetUserListDocument, options);
        }
export function useGetUserListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserListQuery, GetUserListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserListQuery, GetUserListQueryVariables>(GetUserListDocument, options);
        }
export type GetUserListQueryHookResult = ReturnType<typeof useGetUserListQuery>;
export type GetUserListLazyQueryHookResult = ReturnType<typeof useGetUserListLazyQuery>;
export type GetUserListSuspenseQueryHookResult = ReturnType<typeof useGetUserListSuspenseQuery>;
export type GetUserListQueryResult = Apollo.QueryResult<GetUserListQuery, GetUserListQueryVariables>;
export const PingDocument = /*#__PURE__*/ gql`
    query ping {
  global_vars(where: {key: {_eq: "ping"}}) {
    value
  }
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
      }
export function usePingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export function usePingSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingSuspenseQueryHookResult = ReturnType<typeof usePingSuspenseQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;