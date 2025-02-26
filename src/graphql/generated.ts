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
  bigint: { input: any; output: any; }
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

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** meal categories */
export type Categories = {
  __typename?: 'categories';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An array relationship */
  meals: Array<Meals>;
  /** An aggregate relationship */
  meals_aggregate: Meals_Aggregate;
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** meal categories */
export type CategoriesMealsArgs = {
  distinct_on?: InputMaybe<Array<Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meals_Order_By>>;
  where?: InputMaybe<Meals_Bool_Exp>;
};


/** meal categories */
export type CategoriesMeals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meals_Order_By>>;
  where?: InputMaybe<Meals_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  meals?: InputMaybe<Meals_Bool_Exp>;
  meals_aggregate?: InputMaybe<Meals_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  meals?: InputMaybe<Meals_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meals_aggregate?: InputMaybe<Meals_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Categories_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

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

/** table of meals */
export type Meals = {
  __typename?: 'meals';
  /** An object relationship */
  category?: Maybe<Categories>;
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  order_meals: Array<Order_Meals>;
  /** An aggregate relationship */
  order_meals_aggregate: Order_Meals_Aggregate;
  price: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** table of meals */
export type MealsOrder_MealsArgs = {
  distinct_on?: InputMaybe<Array<Order_Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Meals_Order_By>>;
  where?: InputMaybe<Order_Meals_Bool_Exp>;
};


/** table of meals */
export type MealsOrder_Meals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Meals_Order_By>>;
  where?: InputMaybe<Order_Meals_Bool_Exp>;
};

/** aggregated selection of "meals" */
export type Meals_Aggregate = {
  __typename?: 'meals_aggregate';
  aggregate?: Maybe<Meals_Aggregate_Fields>;
  nodes: Array<Meals>;
};

export type Meals_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Meals_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Meals_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Meals_Aggregate_Bool_Exp_Count>;
};

export type Meals_Aggregate_Bool_Exp_Bool_And = {
  arguments: Meals_Select_Column_Meals_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meals_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Meals_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Meals_Select_Column_Meals_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meals_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Meals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Meals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Meals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "meals" */
export type Meals_Aggregate_Fields = {
  __typename?: 'meals_aggregate_fields';
  avg?: Maybe<Meals_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Meals_Max_Fields>;
  min?: Maybe<Meals_Min_Fields>;
  stddev?: Maybe<Meals_Stddev_Fields>;
  stddev_pop?: Maybe<Meals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Meals_Stddev_Samp_Fields>;
  sum?: Maybe<Meals_Sum_Fields>;
  var_pop?: Maybe<Meals_Var_Pop_Fields>;
  var_samp?: Maybe<Meals_Var_Samp_Fields>;
  variance?: Maybe<Meals_Variance_Fields>;
};


/** aggregate fields of "meals" */
export type Meals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Meals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "meals" */
export type Meals_Aggregate_Order_By = {
  avg?: InputMaybe<Meals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Meals_Max_Order_By>;
  min?: InputMaybe<Meals_Min_Order_By>;
  stddev?: InputMaybe<Meals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Meals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Meals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Meals_Sum_Order_By>;
  var_pop?: InputMaybe<Meals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Meals_Var_Samp_Order_By>;
  variance?: InputMaybe<Meals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "meals" */
export type Meals_Arr_Rel_Insert_Input = {
  data: Array<Meals_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Meals_On_Conflict>;
};

/** aggregate avg on columns */
export type Meals_Avg_Fields = {
  __typename?: 'meals_avg_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "meals" */
export type Meals_Avg_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "meals". All fields are combined with a logical 'AND'. */
export type Meals_Bool_Exp = {
  _and?: InputMaybe<Array<Meals_Bool_Exp>>;
  _not?: InputMaybe<Meals_Bool_Exp>;
  _or?: InputMaybe<Array<Meals_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  isActive?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_meals?: InputMaybe<Order_Meals_Bool_Exp>;
  order_meals_aggregate?: InputMaybe<Order_Meals_Aggregate_Bool_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "meals" */
export enum Meals_Constraint {
  /** unique or primary key constraint on columns "id" */
  MealsPkey = 'meals_pkey'
}

/** input type for incrementing numeric columns in table "meals" */
export type Meals_Inc_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "meals" */
export type Meals_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order_meals?: InputMaybe<Order_Meals_Arr_Rel_Insert_Input>;
  price?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Meals_Max_Fields = {
  __typename?: 'meals_max_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "meals" */
export type Meals_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Meals_Min_Fields = {
  __typename?: 'meals_min_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "meals" */
export type Meals_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "meals" */
export type Meals_Mutation_Response = {
  __typename?: 'meals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Meals>;
};

/** input type for inserting object relation for remote table "meals" */
export type Meals_Obj_Rel_Insert_Input = {
  data: Meals_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Meals_On_Conflict>;
};

/** on_conflict condition type for table "meals" */
export type Meals_On_Conflict = {
  constraint: Meals_Constraint;
  update_columns?: Array<Meals_Update_Column>;
  where?: InputMaybe<Meals_Bool_Exp>;
};

/** Ordering options when selecting data from "meals". */
export type Meals_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  isActive?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_meals_aggregate?: InputMaybe<Order_Meals_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: meals */
export type Meals_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "meals" */
export enum Meals_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "meals_aggregate_bool_exp_bool_and_arguments_columns" columns of table "meals" */
export enum Meals_Select_Column_Meals_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActive = 'isActive'
}

/** select "meals_aggregate_bool_exp_bool_or_arguments_columns" columns of table "meals" */
export enum Meals_Select_Column_Meals_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActive = 'isActive'
}

/** input type for updating data in table "meals" */
export type Meals_Set_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Meals_Stddev_Fields = {
  __typename?: 'meals_stddev_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "meals" */
export type Meals_Stddev_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Meals_Stddev_Pop_Fields = {
  __typename?: 'meals_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "meals" */
export type Meals_Stddev_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Meals_Stddev_Samp_Fields = {
  __typename?: 'meals_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "meals" */
export type Meals_Stddev_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "meals" */
export type Meals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Meals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Meals_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Meals_Sum_Fields = {
  __typename?: 'meals_sum_fields';
  category_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "meals" */
export type Meals_Sum_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** update columns of table "meals" */
export enum Meals_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsActive = 'isActive',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Meals_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Meals_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Meals_Set_Input>;
  /** filter the rows which have to be updated */
  where: Meals_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Meals_Var_Pop_Fields = {
  __typename?: 'meals_var_pop_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "meals" */
export type Meals_Var_Pop_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Meals_Var_Samp_Fields = {
  __typename?: 'meals_var_samp_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "meals" */
export type Meals_Var_Samp_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Meals_Variance_Fields = {
  __typename?: 'meals_variance_fields';
  category_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "meals" */
export type Meals_Variance_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "global_vars" */
  delete_global_vars?: Maybe<Global_Vars_Mutation_Response>;
  /** delete single row from the table: "global_vars" */
  delete_global_vars_by_pk?: Maybe<Global_Vars>;
  /** delete data from the table: "meals" */
  delete_meals?: Maybe<Meals_Mutation_Response>;
  /** delete single row from the table: "meals" */
  delete_meals_by_pk?: Maybe<Meals>;
  /** delete data from the table: "order_meals" */
  delete_order_meals?: Maybe<Order_Meals_Mutation_Response>;
  /** delete single row from the table: "order_meals" */
  delete_order_meals_by_pk?: Maybe<Order_Meals>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "global_vars" */
  insert_global_vars?: Maybe<Global_Vars_Mutation_Response>;
  /** insert a single row into the table: "global_vars" */
  insert_global_vars_one?: Maybe<Global_Vars>;
  /** insert data into the table: "meals" */
  insert_meals?: Maybe<Meals_Mutation_Response>;
  /** insert a single row into the table: "meals" */
  insert_meals_one?: Maybe<Meals>;
  /** insert data into the table: "order_meals" */
  insert_order_meals?: Maybe<Order_Meals_Mutation_Response>;
  /** insert a single row into the table: "order_meals" */
  insert_order_meals_one?: Maybe<Order_Meals>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "global_vars" */
  update_global_vars?: Maybe<Global_Vars_Mutation_Response>;
  /** update single row of the table: "global_vars" */
  update_global_vars_by_pk?: Maybe<Global_Vars>;
  /** update multiples rows of table: "global_vars" */
  update_global_vars_many?: Maybe<Array<Maybe<Global_Vars_Mutation_Response>>>;
  /** update data of the table: "meals" */
  update_meals?: Maybe<Meals_Mutation_Response>;
  /** update single row of the table: "meals" */
  update_meals_by_pk?: Maybe<Meals>;
  /** update multiples rows of table: "meals" */
  update_meals_many?: Maybe<Array<Maybe<Meals_Mutation_Response>>>;
  /** update data of the table: "order_meals" */
  update_order_meals?: Maybe<Order_Meals_Mutation_Response>;
  /** update single row of the table: "order_meals" */
  update_order_meals_by_pk?: Maybe<Order_Meals>;
  /** update multiples rows of table: "order_meals" */
  update_order_meals_many?: Maybe<Array<Maybe<Order_Meals_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['Int']['input'];
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
export type Mutation_RootDelete_MealsArgs = {
  where: Meals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meals_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Order_MealsArgs = {
  where: Order_Meals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Meals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid']['input'];
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
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
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
export type Mutation_RootInsert_MealsArgs = {
  objects: Array<Meals_Insert_Input>;
  on_conflict?: InputMaybe<Meals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meals_OneArgs = {
  object: Meals_Insert_Input;
  on_conflict?: InputMaybe<Meals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_MealsArgs = {
  objects: Array<Order_Meals_Insert_Input>;
  on_conflict?: InputMaybe<Order_Meals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Meals_OneArgs = {
  object: Order_Meals_Insert_Input;
  on_conflict?: InputMaybe<Order_Meals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
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
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
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
export type Mutation_RootUpdate_MealsArgs = {
  _inc?: InputMaybe<Meals_Inc_Input>;
  _set?: InputMaybe<Meals_Set_Input>;
  where: Meals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meals_By_PkArgs = {
  _inc?: InputMaybe<Meals_Inc_Input>;
  _set?: InputMaybe<Meals_Set_Input>;
  pk_columns: Meals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meals_ManyArgs = {
  updates: Array<Meals_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_MealsArgs = {
  _inc?: InputMaybe<Order_Meals_Inc_Input>;
  _set?: InputMaybe<Order_Meals_Set_Input>;
  where: Order_Meals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Meals_By_PkArgs = {
  _inc?: InputMaybe<Order_Meals_Inc_Input>;
  _set?: InputMaybe<Order_Meals_Set_Input>;
  pk_columns: Order_Meals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Meals_ManyArgs = {
  updates: Array<Order_Meals_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
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

/** columns and relationships of "order_meals" */
export type Order_Meals = {
  __typename?: 'order_meals';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  meal: Meals;
  mealId: Scalars['Int']['output'];
  /** An object relationship */
  order: Orders;
  orderId: Scalars['uuid']['output'];
  /** An array relationship */
  order_meal: Array<Orders>;
  /** An aggregate relationship */
  order_meal_aggregate: Orders_Aggregate;
  quantity: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "order_meals" */
export type Order_MealsOrder_MealArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "order_meals" */
export type Order_MealsOrder_Meal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "order_meals" */
export type Order_Meals_Aggregate = {
  __typename?: 'order_meals_aggregate';
  aggregate?: Maybe<Order_Meals_Aggregate_Fields>;
  nodes: Array<Order_Meals>;
};

export type Order_Meals_Aggregate_Bool_Exp = {
  count?: InputMaybe<Order_Meals_Aggregate_Bool_Exp_Count>;
};

export type Order_Meals_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Order_Meals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Order_Meals_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "order_meals" */
export type Order_Meals_Aggregate_Fields = {
  __typename?: 'order_meals_aggregate_fields';
  avg?: Maybe<Order_Meals_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Order_Meals_Max_Fields>;
  min?: Maybe<Order_Meals_Min_Fields>;
  stddev?: Maybe<Order_Meals_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Meals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Meals_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Meals_Sum_Fields>;
  var_pop?: Maybe<Order_Meals_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Meals_Var_Samp_Fields>;
  variance?: Maybe<Order_Meals_Variance_Fields>;
};


/** aggregate fields of "order_meals" */
export type Order_Meals_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Meals_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "order_meals" */
export type Order_Meals_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Meals_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Meals_Max_Order_By>;
  min?: InputMaybe<Order_Meals_Min_Order_By>;
  stddev?: InputMaybe<Order_Meals_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Meals_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Meals_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Meals_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Meals_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Meals_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Meals_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_meals" */
export type Order_Meals_Arr_Rel_Insert_Input = {
  data: Array<Order_Meals_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Meals_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Meals_Avg_Fields = {
  __typename?: 'order_meals_avg_fields';
  mealId?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "order_meals" */
export type Order_Meals_Avg_Order_By = {
  mealId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_meals". All fields are combined with a logical 'AND'. */
export type Order_Meals_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Meals_Bool_Exp>>;
  _not?: InputMaybe<Order_Meals_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Meals_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  meal?: InputMaybe<Meals_Bool_Exp>;
  mealId?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  orderId?: InputMaybe<Uuid_Comparison_Exp>;
  order_meal?: InputMaybe<Orders_Bool_Exp>;
  order_meal_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_meals" */
export enum Order_Meals_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderMealsPkey = 'order_meals_pkey'
}

/** input type for incrementing numeric columns in table "order_meals" */
export type Order_Meals_Inc_Input = {
  mealId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "order_meals" */
export type Order_Meals_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  meal?: InputMaybe<Meals_Obj_Rel_Insert_Input>;
  mealId?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  orderId?: InputMaybe<Scalars['uuid']['input']>;
  order_meal?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Order_Meals_Max_Fields = {
  __typename?: 'order_meals_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mealId?: Maybe<Scalars['Int']['output']>;
  orderId?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "order_meals" */
export type Order_Meals_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mealId?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Meals_Min_Fields = {
  __typename?: 'order_meals_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mealId?: Maybe<Scalars['Int']['output']>;
  orderId?: Maybe<Scalars['uuid']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "order_meals" */
export type Order_Meals_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mealId?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_meals" */
export type Order_Meals_Mutation_Response = {
  __typename?: 'order_meals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Meals>;
};

/** on_conflict condition type for table "order_meals" */
export type Order_Meals_On_Conflict = {
  constraint: Order_Meals_Constraint;
  update_columns?: Array<Order_Meals_Update_Column>;
  where?: InputMaybe<Order_Meals_Bool_Exp>;
};

/** Ordering options when selecting data from "order_meals". */
export type Order_Meals_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  meal?: InputMaybe<Meals_Order_By>;
  mealId?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  orderId?: InputMaybe<Order_By>;
  order_meal_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_meals */
export type Order_Meals_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "order_meals" */
export enum Order_Meals_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MealId = 'mealId',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "order_meals" */
export type Order_Meals_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mealId?: InputMaybe<Scalars['Int']['input']>;
  orderId?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Order_Meals_Stddev_Fields = {
  __typename?: 'order_meals_stddev_fields';
  mealId?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "order_meals" */
export type Order_Meals_Stddev_Order_By = {
  mealId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Meals_Stddev_Pop_Fields = {
  __typename?: 'order_meals_stddev_pop_fields';
  mealId?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "order_meals" */
export type Order_Meals_Stddev_Pop_Order_By = {
  mealId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Meals_Stddev_Samp_Fields = {
  __typename?: 'order_meals_stddev_samp_fields';
  mealId?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "order_meals" */
export type Order_Meals_Stddev_Samp_Order_By = {
  mealId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "order_meals" */
export type Order_Meals_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Meals_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Meals_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mealId?: InputMaybe<Scalars['Int']['input']>;
  orderId?: InputMaybe<Scalars['uuid']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Order_Meals_Sum_Fields = {
  __typename?: 'order_meals_sum_fields';
  mealId?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "order_meals" */
export type Order_Meals_Sum_Order_By = {
  mealId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "order_meals" */
export enum Order_Meals_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MealId = 'mealId',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Order_Meals_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Meals_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Meals_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Meals_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Meals_Var_Pop_Fields = {
  __typename?: 'order_meals_var_pop_fields';
  mealId?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "order_meals" */
export type Order_Meals_Var_Pop_Order_By = {
  mealId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Meals_Var_Samp_Fields = {
  __typename?: 'order_meals_var_samp_fields';
  mealId?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "order_meals" */
export type Order_Meals_Var_Samp_Order_By = {
  mealId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Meals_Variance_Fields = {
  __typename?: 'order_meals_variance_fields';
  mealId?: Maybe<Scalars['Float']['output']>;
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "order_meals" */
export type Order_Meals_Variance_Order_By = {
  mealId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** Table of orders */
export type Orders = {
  __typename?: 'orders';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  note?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  order_meals: Array<Order_Meals>;
  /** An aggregate relationship */
  order_meals_aggregate: Order_Meals_Aggregate;
  pickupTime: Scalars['timestamptz']['output'];
  shortId: Scalars['bigint']['output'];
  status: Scalars['String']['output'];
  total?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']['output']>;
};


/** Table of orders */
export type OrdersOrder_MealsArgs = {
  distinct_on?: InputMaybe<Array<Order_Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Meals_Order_By>>;
  where?: InputMaybe<Order_Meals_Bool_Exp>;
};


/** Table of orders */
export type OrdersOrder_Meals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Meals_Order_By>>;
  where?: InputMaybe<Order_Meals_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
  stddev?: InputMaybe<Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  shortId?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  shortId?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  note?: InputMaybe<String_Comparison_Exp>;
  order_meals?: InputMaybe<Order_Meals_Bool_Exp>;
  order_meals_aggregate?: InputMaybe<Order_Meals_Aggregate_Bool_Exp>;
  pickupTime?: InputMaybe<Timestamptz_Comparison_Exp>;
  shortId?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  total?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  shortId?: InputMaybe<Scalars['bigint']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  order_meals?: InputMaybe<Order_Meals_Arr_Rel_Insert_Input>;
  pickupTime?: InputMaybe<Scalars['timestamptz']['input']>;
  shortId?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  pickupTime?: Maybe<Scalars['timestamptz']['output']>;
  shortId?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  pickupTime?: InputMaybe<Order_By>;
  shortId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  pickupTime?: Maybe<Scalars['timestamptz']['output']>;
  shortId?: Maybe<Scalars['bigint']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  pickupTime?: InputMaybe<Order_By>;
  shortId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  note?: InputMaybe<Order_By>;
  order_meals_aggregate?: InputMaybe<Order_Meals_Aggregate_Order_By>;
  pickupTime?: InputMaybe<Order_By>;
  shortId?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  PickupTime = 'pickupTime',
  /** column name */
  ShortId = 'shortId',
  /** column name */
  Status = 'status',
  /** column name */
  Total = 'total',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  pickupTime?: InputMaybe<Scalars['timestamptz']['input']>;
  shortId?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  shortId?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  shortId?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  shortId?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  shortId?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  shortId?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  shortId?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  pickupTime?: InputMaybe<Scalars['timestamptz']['input']>;
  shortId?: InputMaybe<Scalars['bigint']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  shortId?: Maybe<Scalars['bigint']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  shortId?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  PickupTime = 'pickupTime',
  /** column name */
  ShortId = 'shortId',
  /** column name */
  Status = 'status',
  /** column name */
  Total = 'total',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

export type Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  shortId?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  shortId?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  shortId?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  shortId?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  shortId?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  shortId?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "global_vars" */
  global_vars: Array<Global_Vars>;
  /** fetch aggregated fields from the table: "global_vars" */
  global_vars_aggregate: Global_Vars_Aggregate;
  /** fetch data from the table: "global_vars" using primary key columns */
  global_vars_by_pk?: Maybe<Global_Vars>;
  /** An array relationship */
  meals: Array<Meals>;
  /** An aggregate relationship */
  meals_aggregate: Meals_Aggregate;
  /** fetch data from the table: "meals" using primary key columns */
  meals_by_pk?: Maybe<Meals>;
  /** An array relationship */
  order_meals: Array<Order_Meals>;
  /** An aggregate relationship */
  order_meals_aggregate: Order_Meals_Aggregate;
  /** fetch data from the table: "order_meals" using primary key columns */
  order_meals_by_pk?: Maybe<Order_Meals>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['Int']['input'];
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


export type Query_RootMealsArgs = {
  distinct_on?: InputMaybe<Array<Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meals_Order_By>>;
  where?: InputMaybe<Meals_Bool_Exp>;
};


export type Query_RootMeals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meals_Order_By>>;
  where?: InputMaybe<Meals_Bool_Exp>;
};


export type Query_RootMeals_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrder_MealsArgs = {
  distinct_on?: InputMaybe<Array<Order_Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Meals_Order_By>>;
  where?: InputMaybe<Order_Meals_Bool_Exp>;
};


export type Query_RootOrder_Meals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Meals_Order_By>>;
  where?: InputMaybe<Order_Meals_Bool_Exp>;
};


export type Query_RootOrder_Meals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
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

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "global_vars" */
  global_vars: Array<Global_Vars>;
  /** fetch aggregated fields from the table: "global_vars" */
  global_vars_aggregate: Global_Vars_Aggregate;
  /** fetch data from the table: "global_vars" using primary key columns */
  global_vars_by_pk?: Maybe<Global_Vars>;
  /** fetch data from the table in a streaming manner: "global_vars" */
  global_vars_stream: Array<Global_Vars>;
  /** An array relationship */
  meals: Array<Meals>;
  /** An aggregate relationship */
  meals_aggregate: Meals_Aggregate;
  /** fetch data from the table: "meals" using primary key columns */
  meals_by_pk?: Maybe<Meals>;
  /** fetch data from the table in a streaming manner: "meals" */
  meals_stream: Array<Meals>;
  /** An array relationship */
  order_meals: Array<Order_Meals>;
  /** An aggregate relationship */
  order_meals_aggregate: Order_Meals_Aggregate;
  /** fetch data from the table: "order_meals" using primary key columns */
  order_meals_by_pk?: Maybe<Order_Meals>;
  /** fetch data from the table in a streaming manner: "order_meals" */
  order_meals_stream: Array<Order_Meals>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
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


export type Subscription_RootMealsArgs = {
  distinct_on?: InputMaybe<Array<Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meals_Order_By>>;
  where?: InputMaybe<Meals_Bool_Exp>;
};


export type Subscription_RootMeals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Meals_Order_By>>;
  where?: InputMaybe<Meals_Bool_Exp>;
};


export type Subscription_RootMeals_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMeals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Meals_Stream_Cursor_Input>>;
  where?: InputMaybe<Meals_Bool_Exp>;
};


export type Subscription_RootOrder_MealsArgs = {
  distinct_on?: InputMaybe<Array<Order_Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Meals_Order_By>>;
  where?: InputMaybe<Order_Meals_Bool_Exp>;
};


export type Subscription_RootOrder_Meals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Meals_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_Meals_Order_By>>;
  where?: InputMaybe<Order_Meals_Bool_Exp>;
};


export type Subscription_RootOrder_Meals_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrder_Meals_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_Meals_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_Meals_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
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
  firstname?: Maybe<Scalars['String']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  isLocked: Scalars['Boolean']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  password: Scalars['String']['output'];
  role: Scalars['String']['output'];
  section?: Maybe<Scalars['String']['output']>;
  strand?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "users" */
export type UsersOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
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
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  section?: InputMaybe<String_Comparison_Exp>;
  strand?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
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
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  password?: InputMaybe<Scalars['String']['input']>;
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
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  password?: InputMaybe<Order_By>;
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

export type CategoryFragmentFragment = { __typename?: 'categories', id: number, name: string };

export type MealFragmentFragment = { __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null };

export type OrderMealFragmentFragment = { __typename?: 'order_meals', created_at: any, id: any, mealId: number, quantity: number, updated_at: any, meal: { __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null } };

export type OrderFragmentFragment = { __typename?: 'orders', created_at: any, id: any, status: string, updated_at: any, userId?: any | null, total?: number | null, shortId: any, pickupTime: any, note?: string | null, order_meals: Array<{ __typename?: 'order_meals', created_at: any, id: any, mealId: number, quantity: number, updated_at: any, meal: { __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null } }>, user?: { __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null } | null };

export type UserFragmentFragment = { __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null };

export type DeleteMealByPkMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteMealByPkMutation = { __typename?: 'mutation_root', delete_meals_by_pk?: { __typename?: 'meals', id: number } | null };

export type UpdateMealMutationVariables = Exact<{
  where: Meals_Bool_Exp;
  set?: InputMaybe<Meals_Set_Input>;
}>;


export type UpdateMealMutation = { __typename?: 'mutation_root', update_meals?: { __typename?: 'meals_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null }> } | null };

export type UpdateOrderStatusMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  status: Scalars['String']['input'];
}>;


export type UpdateOrderStatusMutation = { __typename?: 'mutation_root', update_orders?: { __typename?: 'orders_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'orders', created_at: any, id: any, status: string, updated_at: any, userId?: any | null, total?: number | null, shortId: any, pickupTime: any, note?: string | null, order_meals: Array<{ __typename?: 'order_meals', created_at: any, id: any, mealId: number, quantity: number, updated_at: any, meal: { __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null } }>, user?: { __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null } | null }> } | null };

export type UpdatePasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  id: Scalars['uuid']['input'];
  password: Scalars['String']['input'];
}>;


export type UpdatePasswordMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null }> } | null };

export type UpdateUserMutationVariables = Exact<{
  where: Users_Bool_Exp;
  set?: InputMaybe<Users_Set_Input>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null }> } | null };

export type UpsertMealMutationVariables = Exact<{
  objects: Array<Meals_Insert_Input> | Meals_Insert_Input;
}>;


export type UpsertMealMutation = { __typename?: 'mutation_root', insert_meals?: { __typename?: 'meals_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null }> } | null };

export type UpsertOrderMutationVariables = Exact<{
  objects: Array<Orders_Insert_Input> | Orders_Insert_Input;
}>;


export type UpsertOrderMutation = { __typename?: 'mutation_root', insert_orders?: { __typename?: 'orders_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'orders', created_at: any, id: any, status: string, updated_at: any, userId?: any | null, total?: number | null, shortId: any, pickupTime: any, note?: string | null, order_meals: Array<{ __typename?: 'order_meals', created_at: any, id: any, mealId: number, quantity: number, updated_at: any, meal: { __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null } }>, user?: { __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null } | null }> } | null };

export type UpsertUserMutationVariables = Exact<{
  object: Users_Insert_Input;
}>;


export type UpsertUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: number, name: string }> };

export type GetCategorizedMealQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategorizedMealQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: number, name: string, meals: Array<{ __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null }> }> };

export type GetMealListQueryVariables = Exact<{
  where?: InputMaybe<Meals_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Meals_Order_By> | Meals_Order_By>;
}>;


export type GetMealListQuery = { __typename?: 'query_root', meals: Array<{ __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null }>, meals_aggregate: { __typename?: 'meals_aggregate', aggregate?: { __typename?: 'meals_aggregate_fields', count: number } | null } };

export type GetOrdersQueryVariables = Exact<{
  where?: InputMaybe<Orders_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Orders_Order_By> | Orders_Order_By>;
}>;


export type GetOrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', created_at: any, id: any, status: string, updated_at: any, userId?: any | null, total?: number | null, shortId: any, pickupTime: any, note?: string | null, order_meals: Array<{ __typename?: 'order_meals', created_at: any, id: any, mealId: number, quantity: number, updated_at: any, meal: { __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null } }>, user?: { __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null } | null }>, orders_aggregate: { __typename?: 'orders_aggregate', aggregate?: { __typename?: 'orders_aggregate_fields', count: number } | null } };

export type GetUserQueryVariables = Exact<{
  email?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null }> };

export type GetUserListQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<Users_Order_By> | Users_Order_By>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Users_Bool_Exp>;
}>;


export type GetUserListQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null }>, users_aggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'query_root', global_vars: Array<{ __typename?: 'global_vars', value: any }> };

export type SubOrdersSubscriptionVariables = Exact<{
  where?: InputMaybe<Orders_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Orders_Order_By> | Orders_Order_By>;
}>;


export type SubOrdersSubscription = { __typename?: 'subscription_root', orders: Array<{ __typename?: 'orders', created_at: any, id: any, status: string, updated_at: any, userId?: any | null, total?: number | null, shortId: any, pickupTime: any, note?: string | null, order_meals: Array<{ __typename?: 'order_meals', created_at: any, id: any, mealId: number, quantity: number, updated_at: any, meal: { __typename?: 'meals', category_id?: number | null, created_at: any, description?: string | null, id: number, image: string, isActive: boolean, name: string, price: number, updated_at: any, category?: { __typename?: 'categories', id: number, name: string } | null } }>, user?: { __typename?: 'users', id: any, updated_at: any, firstname?: string | null, lastname?: string | null, email: string, isLocked: boolean, role: string, section?: string | null, strand?: string | null, grade?: string | null, changePass?: boolean | null } | null }> };

export const CategoryFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment CategoryFragment on categories {
  id
  name
}
    `;
export const MealFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment MealFragment on meals {
  category {
    ...CategoryFragment
  }
  category_id
  created_at
  description
  id
  image
  isActive
  name
  price
  updated_at
}
    ${CategoryFragmentFragmentDoc}`;
export const OrderMealFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment OrderMealFragment on order_meals {
  created_at
  id
  meal {
    ...MealFragment
  }
  mealId
  quantity
  updated_at
}
    ${MealFragmentFragmentDoc}`;
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
export const OrderFragmentFragmentDoc = /*#__PURE__*/ gql`
    fragment OrderFragment on orders {
  created_at
  id
  order_meals {
    ...OrderMealFragment
  }
  status
  updated_at
  userId
  user {
    ...UserFragment
  }
  total
  shortId
  pickupTime
  note
}
    ${OrderMealFragmentFragmentDoc}
${UserFragmentFragmentDoc}`;
export const DeleteMealByPkDocument = /*#__PURE__*/ gql`
    mutation deleteMealByPk($id: Int!) {
  delete_meals_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteMealByPkMutationFn = Apollo.MutationFunction<DeleteMealByPkMutation, DeleteMealByPkMutationVariables>;

/**
 * __useDeleteMealByPkMutation__
 *
 * To run a mutation, you first call `useDeleteMealByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMealByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMealByPkMutation, { data, loading, error }] = useDeleteMealByPkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMealByPkMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMealByPkMutation, DeleteMealByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMealByPkMutation, DeleteMealByPkMutationVariables>(DeleteMealByPkDocument, options);
      }
export type DeleteMealByPkMutationHookResult = ReturnType<typeof useDeleteMealByPkMutation>;
export type DeleteMealByPkMutationResult = Apollo.MutationResult<DeleteMealByPkMutation>;
export type DeleteMealByPkMutationOptions = Apollo.BaseMutationOptions<DeleteMealByPkMutation, DeleteMealByPkMutationVariables>;
export const UpdateMealDocument = /*#__PURE__*/ gql`
    mutation updateMeal($where: meals_bool_exp!, $set: meals_set_input) {
  update_meals(where: $where, _set: $set) {
    affected_rows
    returning {
      ...MealFragment
    }
  }
}
    ${MealFragmentFragmentDoc}`;
export type UpdateMealMutationFn = Apollo.MutationFunction<UpdateMealMutation, UpdateMealMutationVariables>;

/**
 * __useUpdateMealMutation__
 *
 * To run a mutation, you first call `useUpdateMealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMealMutation, { data, loading, error }] = useUpdateMealMutation({
 *   variables: {
 *      where: // value for 'where'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateMealMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMealMutation, UpdateMealMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMealMutation, UpdateMealMutationVariables>(UpdateMealDocument, options);
      }
export type UpdateMealMutationHookResult = ReturnType<typeof useUpdateMealMutation>;
export type UpdateMealMutationResult = Apollo.MutationResult<UpdateMealMutation>;
export type UpdateMealMutationOptions = Apollo.BaseMutationOptions<UpdateMealMutation, UpdateMealMutationVariables>;
export const UpdateOrderStatusDocument = /*#__PURE__*/ gql`
    mutation updateOrderStatus($id: uuid!, $status: String!) {
  update_orders(where: {id: {_eq: $id}}, _set: {status: $status}) {
    returning {
      ...OrderFragment
    }
    affected_rows
  }
}
    ${OrderFragmentFragmentDoc}`;
export type UpdateOrderStatusMutationFn = Apollo.MutationFunction<UpdateOrderStatusMutation, UpdateOrderStatusMutationVariables>;

/**
 * __useUpdateOrderStatusMutation__
 *
 * To run a mutation, you first call `useUpdateOrderStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderStatusMutation, { data, loading, error }] = useUpdateOrderStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateOrderStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderStatusMutation, UpdateOrderStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderStatusMutation, UpdateOrderStatusMutationVariables>(UpdateOrderStatusDocument, options);
      }
export type UpdateOrderStatusMutationHookResult = ReturnType<typeof useUpdateOrderStatusMutation>;
export type UpdateOrderStatusMutationResult = Apollo.MutationResult<UpdateOrderStatusMutation>;
export type UpdateOrderStatusMutationOptions = Apollo.BaseMutationOptions<UpdateOrderStatusMutation, UpdateOrderStatusMutationVariables>;
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
export const UpsertMealDocument = /*#__PURE__*/ gql`
    mutation upsertMeal($objects: [meals_insert_input!]!) {
  insert_meals(
    objects: $objects
    on_conflict: {update_columns: [description, image, isActive, name, price, category_id], constraint: meals_pkey}
  ) {
    returning {
      ...MealFragment
    }
    affected_rows
  }
}
    ${MealFragmentFragmentDoc}`;
export type UpsertMealMutationFn = Apollo.MutationFunction<UpsertMealMutation, UpsertMealMutationVariables>;

/**
 * __useUpsertMealMutation__
 *
 * To run a mutation, you first call `useUpsertMealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertMealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertMealMutation, { data, loading, error }] = useUpsertMealMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useUpsertMealMutation(baseOptions?: Apollo.MutationHookOptions<UpsertMealMutation, UpsertMealMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertMealMutation, UpsertMealMutationVariables>(UpsertMealDocument, options);
      }
export type UpsertMealMutationHookResult = ReturnType<typeof useUpsertMealMutation>;
export type UpsertMealMutationResult = Apollo.MutationResult<UpsertMealMutation>;
export type UpsertMealMutationOptions = Apollo.BaseMutationOptions<UpsertMealMutation, UpsertMealMutationVariables>;
export const UpsertOrderDocument = /*#__PURE__*/ gql`
    mutation upsertOrder($objects: [orders_insert_input!]!) {
  insert_orders(
    objects: $objects
    on_conflict: {update_columns: [pickupTime, total, status], constraint: orders_pkey}
  ) {
    affected_rows
    returning {
      ...OrderFragment
    }
  }
}
    ${OrderFragmentFragmentDoc}`;
export type UpsertOrderMutationFn = Apollo.MutationFunction<UpsertOrderMutation, UpsertOrderMutationVariables>;

/**
 * __useUpsertOrderMutation__
 *
 * To run a mutation, you first call `useUpsertOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertOrderMutation, { data, loading, error }] = useUpsertOrderMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useUpsertOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpsertOrderMutation, UpsertOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertOrderMutation, UpsertOrderMutationVariables>(UpsertOrderDocument, options);
      }
export type UpsertOrderMutationHookResult = ReturnType<typeof useUpsertOrderMutation>;
export type UpsertOrderMutationResult = Apollo.MutationResult<UpsertOrderMutation>;
export type UpsertOrderMutationOptions = Apollo.BaseMutationOptions<UpsertOrderMutation, UpsertOrderMutationVariables>;
export const UpsertUserDocument = /*#__PURE__*/ gql`
    mutation upsertUser($object: users_insert_input!) {
  insert_users_one(
    object: $object
    on_conflict: {update_columns: [password, isLocked, role, grade, strand, section, firstname, lastname], constraint: users_email_key}
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
export const GetCategoriesDocument = /*#__PURE__*/ gql`
    query getCategories {
  categories {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export function useGetCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategorizedMealDocument = /*#__PURE__*/ gql`
    query getCategorizedMeal {
  categories(where: {meals: {id: {_is_null: false}, isActive: {_neq: false}}}) {
    id
    name
    meals(where: {isActive: {_eq: true}}) {
      ...MealFragment
    }
  }
}
    ${MealFragmentFragmentDoc}`;

/**
 * __useGetCategorizedMealQuery__
 *
 * To run a query within a React component, call `useGetCategorizedMealQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategorizedMealQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategorizedMealQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategorizedMealQuery(baseOptions?: Apollo.QueryHookOptions<GetCategorizedMealQuery, GetCategorizedMealQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategorizedMealQuery, GetCategorizedMealQueryVariables>(GetCategorizedMealDocument, options);
      }
export function useGetCategorizedMealLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategorizedMealQuery, GetCategorizedMealQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategorizedMealQuery, GetCategorizedMealQueryVariables>(GetCategorizedMealDocument, options);
        }
export function useGetCategorizedMealSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategorizedMealQuery, GetCategorizedMealQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategorizedMealQuery, GetCategorizedMealQueryVariables>(GetCategorizedMealDocument, options);
        }
export type GetCategorizedMealQueryHookResult = ReturnType<typeof useGetCategorizedMealQuery>;
export type GetCategorizedMealLazyQueryHookResult = ReturnType<typeof useGetCategorizedMealLazyQuery>;
export type GetCategorizedMealSuspenseQueryHookResult = ReturnType<typeof useGetCategorizedMealSuspenseQuery>;
export type GetCategorizedMealQueryResult = Apollo.QueryResult<GetCategorizedMealQuery, GetCategorizedMealQueryVariables>;
export const GetMealListDocument = /*#__PURE__*/ gql`
    query getMealList($where: meals_bool_exp, $limit: Int = 10, $offset: Int, $orderBy: [meals_order_by!] = {updated_at: desc}) {
  meals(where: $where, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...MealFragment
  }
  meals_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${MealFragmentFragmentDoc}`;

/**
 * __useGetMealListQuery__
 *
 * To run a query within a React component, call `useGetMealListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMealListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMealListQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetMealListQuery(baseOptions?: Apollo.QueryHookOptions<GetMealListQuery, GetMealListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMealListQuery, GetMealListQueryVariables>(GetMealListDocument, options);
      }
export function useGetMealListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMealListQuery, GetMealListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMealListQuery, GetMealListQueryVariables>(GetMealListDocument, options);
        }
export function useGetMealListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMealListQuery, GetMealListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMealListQuery, GetMealListQueryVariables>(GetMealListDocument, options);
        }
export type GetMealListQueryHookResult = ReturnType<typeof useGetMealListQuery>;
export type GetMealListLazyQueryHookResult = ReturnType<typeof useGetMealListLazyQuery>;
export type GetMealListSuspenseQueryHookResult = ReturnType<typeof useGetMealListSuspenseQuery>;
export type GetMealListQueryResult = Apollo.QueryResult<GetMealListQuery, GetMealListQueryVariables>;
export const GetOrdersDocument = /*#__PURE__*/ gql`
    query getOrders($where: orders_bool_exp, $limit: Int, $offset: Int, $orderBy: [orders_order_by!]) {
  orders(where: $where, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...OrderFragment
  }
  orders_aggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    ${OrderFragmentFragmentDoc}`;

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
      }
export function useGetOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export function useGetOrdersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOrdersQuery, GetOrdersQueryVariables>(GetOrdersDocument, options);
        }
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>;
export type GetOrdersLazyQueryHookResult = ReturnType<typeof useGetOrdersLazyQuery>;
export type GetOrdersSuspenseQueryHookResult = ReturnType<typeof useGetOrdersSuspenseQuery>;
export type GetOrdersQueryResult = Apollo.QueryResult<GetOrdersQuery, GetOrdersQueryVariables>;
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
export const SubOrdersDocument = /*#__PURE__*/ gql`
    subscription subOrders($where: orders_bool_exp, $limit: Int, $offset: Int, $orderBy: [orders_order_by!]) {
  orders(where: $where, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...OrderFragment
  }
}
    ${OrderFragmentFragmentDoc}`;

/**
 * __useSubOrdersSubscription__
 *
 * To run a query within a React component, call `useSubOrdersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubOrdersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubOrdersSubscription({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useSubOrdersSubscription(baseOptions?: Apollo.SubscriptionHookOptions<SubOrdersSubscription, SubOrdersSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<SubOrdersSubscription, SubOrdersSubscriptionVariables>(SubOrdersDocument, options);
      }
export type SubOrdersSubscriptionHookResult = ReturnType<typeof useSubOrdersSubscription>;
export type SubOrdersSubscriptionResult = Apollo.SubscriptionResult<SubOrdersSubscription>;