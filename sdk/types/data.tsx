export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      api_requests: {
        Row: {
          requests: number
          user: string
        }
        Insert: {
          requests?: number
          user: string
        }
        Update: {
          requests?: number
          user?: string
        }
        Relationships: []
      }
      chains: {
        Row: {
          chain_id: number
          id: string
          image: string
          is_supported: boolean
          name: string
          native_token_id: string | null
          symbol: string
          type: string | null
        }
        Insert: {
          chain_id: number
          id: string
          image: string
          is_supported?: boolean
          name: string
          native_token_id?: string | null
          symbol?: string
          type?: string | null
        }
        Update: {
          chain_id?: number
          id?: string
          image?: string
          is_supported?: boolean
          name?: string
          native_token_id?: string | null
          symbol?: string
          type?: string | null
        }
        Relationships: []
      }
      contracts: {
        Row: {
          abi: Json | null
          address: string
          chain_id: number
          contract_name: string | null
          id: string
          image: string | null
          implementation_id: string | null
          is_whitelisted: boolean
          label: string | null
          proxy_type: string | null
          source: string
          type: string | null
          updated_at: string
        }
        Insert: {
          abi?: Json | null
          address: string
          chain_id: number
          contract_name?: string | null
          id: string
          image?: string | null
          implementation_id?: string | null
          is_whitelisted?: boolean
          label?: string | null
          proxy_type?: string | null
          source?: string
          type?: string | null
          updated_at?: string
        }
        Update: {
          abi?: Json | null
          address?: string
          chain_id?: number
          contract_name?: string | null
          id?: string
          image?: string | null
          implementation_id?: string | null
          is_whitelisted?: boolean
          label?: string | null
          proxy_type?: string | null
          source?: string
          type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      market_userdata: {
        Row: {
          description: string | null
          id: string
          is_verified: boolean
          last_updated: string
          name: string | null
        }
        Insert: {
          description?: string | null
          id: string
          is_verified?: boolean
          last_updated?: string
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          is_verified?: boolean
          last_updated?: string
          name?: string | null
        }
        Relationships: []
      }
      raw_account_balances_recipe: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          block_range: string
          chain_id: number
          frontend_fee_amounts: number[]
          id: string
          incentives_given_amount: number[]
          incentives_given_ids: string[]
          incentives_received_amount: number[]
          incentives_received_ids: string[]
          input_token_id: string
          market_id: string
          market_type: number
          protocol_fee_amounts: number[]
          quantity_given_amount: number
          quantity_received_amount: number
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          block_range: string
          chain_id: number
          frontend_fee_amounts: number[]
          id: string
          incentives_given_amount: number[]
          incentives_given_ids: string[]
          incentives_received_amount: number[]
          incentives_received_ids: string[]
          input_token_id: string
          market_id: string
          market_type: number
          protocol_fee_amounts: number[]
          quantity_given_amount: number
          quantity_received_amount: number
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          account_address?: string
          block_range?: string
          chain_id?: number
          frontend_fee_amounts?: number[]
          id?: string
          incentives_given_amount?: number[]
          incentives_given_ids?: string[]
          incentives_received_amount?: number[]
          incentives_received_ids?: string[]
          input_token_id?: string
          market_id?: string
          market_type?: number
          protocol_fee_amounts?: number[]
          quantity_given_amount?: number
          quantity_received_amount?: number
          vid?: number
        }
        Relationships: []
      }
      raw_account_balances_vault: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          block_range: string
          chain_id: number
          id: string
          incentives_given_amount: number[]
          incentives_given_ids: string[]
          input_token_id: string
          market_id: string
          market_type: number
          quantity_received_amount: number
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          block_range: string
          chain_id: number
          id: string
          incentives_given_amount: number[]
          incentives_given_ids: string[]
          input_token_id: string
          market_id: string
          market_type: number
          quantity_received_amount: number
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          account_address?: string
          block_range?: string
          chain_id?: number
          id?: string
          incentives_given_amount?: number[]
          incentives_given_ids?: string[]
          input_token_id?: string
          market_id?: string
          market_type?: number
          quantity_received_amount?: number
          vid?: number
        }
        Relationships: []
      }
      raw_activities: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          activity_type: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          id: string
          log_index: number
          market_id: string
          market_type: number
          tokens_given_amount: number[]
          tokens_given_ids: string[]
          tokens_received_amount: number[]
          tokens_received_ids: string[]
          transaction_hash: string
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          activity_type: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          id: string
          log_index: number
          market_id: string
          market_type: number
          tokens_given_amount: number[]
          tokens_given_ids: string[]
          tokens_received_amount: number[]
          tokens_received_ids: string[]
          transaction_hash: string
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          account_address?: string
          activity_type?: string
          block_number?: number
          block_range?: string
          block_timestamp?: number
          chain_id?: number
          id?: string
          log_index?: number
          market_id?: string
          market_type?: number
          tokens_given_amount?: number[]
          tokens_given_ids?: string[]
          tokens_received_amount?: number[]
          tokens_received_ids?: string[]
          transaction_hash?: string
          vid?: number
        }
        Relationships: []
      }
      raw_markets: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          creator: string
          end_timestamps: number[]
          frontend_fee: number
          id: string
          incentives_asked_amount: number[]
          incentives_asked_ids: string[]
          incentives_offered_amount: number[]
          incentives_offered_ids: string[]
          incentives_rates: number[]
          input_token_id: string
          lockup_time: number
          log_index: number
          market_id: string
          market_type: number
          owner: string
          quantity_asked: number
          quantity_asked_filled: number
          quantity_offered: number
          quantity_offered_filled: number
          reward_style: number
          start_timestamps: number[]
          transaction_hash: string
          underlying_vault_address: string
          vid: number
          volume_amounts: number[]
          volume_token_ids: string[]
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          creator: string
          end_timestamps: number[]
          frontend_fee: number
          id: string
          incentives_asked_amount: number[]
          incentives_asked_ids: string[]
          incentives_offered_amount: number[]
          incentives_offered_ids: string[]
          incentives_rates: number[]
          input_token_id: string
          lockup_time: number
          log_index: number
          market_id: string
          market_type: number
          owner: string
          quantity_asked: number
          quantity_asked_filled: number
          quantity_offered: number
          quantity_offered_filled: number
          reward_style: number
          start_timestamps: number[]
          transaction_hash: string
          underlying_vault_address: string
          vid: number
          volume_amounts: number[]
          volume_token_ids: string[]
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_number?: number
          block_range?: string
          block_timestamp?: number
          chain_id?: number
          creator?: string
          end_timestamps?: number[]
          frontend_fee?: number
          id?: string
          incentives_asked_amount?: number[]
          incentives_asked_ids?: string[]
          incentives_offered_amount?: number[]
          incentives_offered_ids?: string[]
          incentives_rates?: number[]
          input_token_id?: string
          lockup_time?: number
          log_index?: number
          market_id?: string
          market_type?: number
          owner?: string
          quantity_asked?: number
          quantity_asked_filled?: number
          quantity_offered?: number
          quantity_offered_filled?: number
          reward_style?: number
          start_timestamps?: number[]
          transaction_hash?: string
          underlying_vault_address?: string
          vid?: number
          volume_amounts?: number[]
          volume_token_ids?: string[]
        }
        Relationships: []
      }
      raw_offers: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          creator: string
          expiry: number
          frontend_fee_amounts: number[]
          funding_vault: string
          id: string
          input_token_id: string
          is_cancelled: boolean
          is_valid: boolean | null
          log_index: number
          market_id: string
          market_type: number
          offer_id: string
          offer_side: number
          protocol_fee_amounts: number[]
          quantity: number
          quantity_remaining: number
          token_amounts: number[]
          token_ids: string[]
          transaction_hash: string
          vid: number
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          creator: string
          expiry: number
          frontend_fee_amounts: number[]
          funding_vault: string
          id: string
          input_token_id: string
          is_cancelled: boolean
          is_valid?: boolean | null
          log_index: number
          market_id: string
          market_type: number
          offer_id: string
          offer_side: number
          protocol_fee_amounts: number[]
          quantity: number
          quantity_remaining: number
          token_amounts: number[]
          token_ids: string[]
          transaction_hash: string
          vid: number
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          block_number?: number
          block_range?: string
          block_timestamp?: number
          chain_id?: number
          creator?: string
          expiry?: number
          frontend_fee_amounts?: number[]
          funding_vault?: string
          id?: string
          input_token_id?: string
          is_cancelled?: boolean
          is_valid?: boolean | null
          log_index?: number
          market_id?: string
          market_type?: number
          offer_id?: string
          offer_side?: number
          protocol_fee_amounts?: number[]
          quantity?: number
          quantity_remaining?: number
          token_amounts?: number[]
          token_ids?: string[]
          transaction_hash?: string
          vid?: number
        }
        Relationships: []
      }
      raw_positions_recipe: {
        Row: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          ap: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          frontend_fee_amounts: number[]
          id: string
          input_token_id: string
          ip: string
          is_claimed: boolean[]
          is_forfeited: boolean
          is_withdrawn: boolean
          log_index: number
          market_id: string
          offer_side: number
          protocol_fee_amounts: number[]
          quantity: number
          raw_offer_id: string
          raw_offer_side: number
          reward_style: number
          token_amounts: number[]
          token_ids: string[]
          transaction_hash: string
          unlock_timestamp: number
          vid: number
          weiroll_wallet: string
        }
        Insert: {
          _gs_chain: string
          _gs_gid: string
          account_address: string
          ap: string
          block_number: number
          block_range: string
          block_timestamp: number
          chain_id: number
          frontend_fee_amounts: number[]
          id: string
          input_token_id: string
          ip: string
          is_claimed: boolean[]
          is_forfeited: boolean
          is_withdrawn: boolean
          log_index: number
          market_id: string
          offer_side: number
          protocol_fee_amounts: number[]
          quantity: number
          raw_offer_id: string
          raw_offer_side: number
          reward_style: number
          token_amounts: number[]
          token_ids: string[]
          transaction_hash: string
          unlock_timestamp: number
          vid: number
          weiroll_wallet: string
        }
        Update: {
          _gs_chain?: string
          _gs_gid?: string
          account_address?: string
          ap?: string
          block_number?: number
          block_range?: string
          block_timestamp?: number
          chain_id?: number
          frontend_fee_amounts?: number[]
          id?: string
          input_token_id?: string
          ip?: string
          is_claimed?: boolean[]
          is_forfeited?: boolean
          is_withdrawn?: boolean
          log_index?: number
          market_id?: string
          offer_side?: number
          protocol_fee_amounts?: number[]
          quantity?: number
          raw_offer_id?: string
          raw_offer_side?: number
          reward_style?: number
          token_amounts?: number[]
          token_ids?: string[]
          transaction_hash?: string
          unlock_timestamp?: number
          vid?: number
          weiroll_wallet?: string
        }
        Relationships: []
      }
      request_log: {
        Row: {
          id: number
          ip: unknown
          timestamp: string | null
        }
        Insert: {
          id?: number
          ip: unknown
          timestamp?: string | null
        }
        Update: {
          id?: number
          ip?: unknown
          timestamp?: string | null
        }
        Relationships: []
      }
      token_index: {
        Row: {
          chain_id: number
          contract_address: string
          decimals: number
          is_active: boolean
          last_updated: string
          name: string
          search_id: string
          source: string
          symbol: string
          token_id: string
        }
        Insert: {
          chain_id: number
          contract_address: string
          decimals?: number
          is_active?: boolean
          last_updated: string
          name: string
          search_id: string
          source: string
          symbol: string
          token_id: string
        }
        Update: {
          chain_id?: number
          contract_address?: string
          decimals?: number
          is_active?: boolean
          last_updated?: string
          name?: string
          search_id?: string
          source?: string
          symbol?: string
          token_id?: string
        }
        Relationships: []
      }
      token_quotes_archive: {
        Row: {
          fully_diluted_market_cap: number
          last_updated: string
          market_cap: number
          price: number
          search_id: string
          source: string
          total_supply: number
          volume_24h: number
        }
        Insert: {
          fully_diluted_market_cap: number
          last_updated: string
          market_cap: number
          price: number
          search_id: string
          source: string
          total_supply: number
          volume_24h: number
        }
        Update: {
          fully_diluted_market_cap?: number
          last_updated?: string
          market_cap?: number
          price?: number
          search_id?: string
          source?: string
          total_supply?: number
          volume_24h?: number
        }
        Relationships: []
      }
      token_quotes_historical: {
        Row: {
          fully_diluted_market_cap: number
          last_updated: string
          market_cap: number
          price: number
          search_id: string
          source: string
          total_supply: number
          track_id: string
          volume_24h: number
        }
        Insert: {
          fully_diluted_market_cap: number
          last_updated: string
          market_cap: number
          price: number
          search_id: string
          source: string
          total_supply: number
          track_id?: string
          volume_24h: number
        }
        Update: {
          fully_diluted_market_cap?: number
          last_updated?: string
          market_cap?: number
          price?: number
          search_id?: string
          source?: string
          total_supply?: number
          track_id?: string
          volume_24h?: number
        }
        Relationships: []
      }
      verified_markets: {
        Row: {
          id: string
        }
        Insert: {
          id: string
        }
        Update: {
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      contract_search_index: {
        Row: {
          id: string | null
          search_id: string | null
        }
        Relationships: []
      }
      distinct_assets: {
        Row: {
          ids: string[] | null
          symbol: string | null
        }
        Relationships: []
      }
      distinct_incentives: {
        Row: {
          ids: string[] | null
          symbol: string | null
        }
        Relationships: []
      }
      enriched_markets_stats: {
        Row: {
          description: string | null
          id: string | null
          incentive_amounts: number[] | null
          incentive_ids: string[] | null
          incentive_rates: number[] | null
          locked_quantity: number | null
          name: string | null
          quantity_ap: number | null
          quantity_ip: number | null
        }
        Relationships: []
      }
      market_search_index: {
        Row: {
          id: string | null
          search_id: string | null
        }
        Relationships: []
      }
      search_index_contracts: {
        Row: {
          id: string | null
          search_id: string | null
        }
        Insert: {
          id?: string | null
          search_id?: never
        }
        Update: {
          id?: string | null
          search_id?: never
        }
        Relationships: []
      }
      token_quotes_latest: {
        Row: {
          decimals: number | null
          fdv: number | null
          price: number | null
          token_id: string | null
          total_supply: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_tokens: {
        Args: {
          token: string
        }
        Returns: undefined
      }
      check_rate_limit: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      clean_old_requests: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      clean_up_token_quotes_archive: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      clean_up_token_quotes_historical: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      cleanup_token_quotes_archive_batch: {
        Args: {
          batch_size?: number
        }
        Returns: undefined
      }
      custom_royco_pools: {
        Args: {
          input_table: Json
          search_key: string
          sorting: string
          filters: string
          page_index: number
          page_size: number
        }
        Returns: Database["public"]["CompositeTypes"]["custom_royco_pools_return"]
      }
      custom_royco_pools2: {
        Args: {
          input_table: Json
          search_key: string
          sorting: Json
          filters: string
          page_index: number
          page_size: number
        }
        Returns: Database["public"]["CompositeTypes"]["custom_royco_pools_return"]
      }
      exceeded_rate_limit: {
        Args: {
          ip_in: string
        }
        Returns: boolean
      }
      get_account_balances_test: {
        Args: Record<PropertyKey, never>
        Returns: {
          market_id: string
        }[]
      }
      get_contracts:
        | {
            Args: Record<PropertyKey, never>
            Returns: {
              abi: Json | null
              address: string
              chain_id: number
              contract_name: string | null
              id: string
              image: string | null
              implementation_id: string | null
              is_whitelisted: boolean
              label: string | null
              proxy_type: string | null
              source: string
              type: string | null
              updated_at: string
            }[]
          }
        | {
            Args: {
              _contracts: Json
            }
            Returns: {
              contract_id: string
              chain_id: number
              address: string
              source: string
              contract_name: string
              label: string
              type: string
              image: string
              updated_at: string
              abi: Json
              implementation_id: string
              proxy_type: string
            }[]
          }
      get_enriched_account_balances_recipe_in_market: {
        Args: {
          in_chain_id: number
          in_market_id: string
          in_account_address: string
          custom_token_data?: Json
        }
        Returns: {
          input_token_id: string
          input_token_price: number
          input_token_fdv: number
          input_token_total_supply: number
          quantity_ap: string
          quantity_ip: string
          incentives_ids_ap: string[]
          incentives_price_values_ap: number[]
          incentives_fdv_values_ap: number[]
          incentives_total_supply_values_ap: number[]
          incentives_amount_ap: string[]
          incentives_ids_ip: string[]
          incentives_price_values_ip: number[]
          incentives_fdv_values_ip: number[]
          incentives_total_supply_values_ip: number[]
          incentives_amount_ip: string[]
          protocol_fee_amounts: string[]
          frontend_fee_amounts: string[]
        }[]
      }
      get_enriched_account_balances_vault_in_market: {
        Args: {
          in_chain_id: number
          in_market_id: string
          in_account_address: string
          custom_token_data?: Json
        }
        Returns: {
          input_token_id: string
          input_token_price: number
          input_token_fdv: number
          input_token_total_supply: number
          quantity_ip: string
          incentives_ids_ip: string[]
          incentives_price_values_ip: number[]
          incentives_fdv_values_ip: number[]
          incentives_total_supply_values_ip: number[]
          incentives_amount_ip: string[]
        }[]
      }
      get_enriched_markets: {
        Args: {
          chain_id?: number
          market_type?: number
          market_id?: string
          custom_token_data?: Json
          page_index?: number
          filters?: string
          sorting?: string
          search_key?: string
          is_verified?: boolean
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_markets_return_type"]
      }
      get_enriched_offers: {
        Args: {
          chain_id?: number
          market_type?: number
          market_id?: string
          creator?: string
          can_be_filled?: boolean
          custom_token_data?: Json
          page_index?: number
          filters?: string
          sorting?: string
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_offers_return_type"]
      }
      get_enriched_positions_recipe: {
        Args: {
          account_address: string
          chain_id?: number
          market_id?: string
          custom_token_data?: Json
          page_index?: number
          filters?: string
          sorting?: string
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_positions_recipe_return_type"]
      }
      get_enriched_royco_stats: {
        Args: {
          custom_token_data?: Json
        }
        Returns: Database["public"]["CompositeTypes"]["enriched_royco_stats_data_type"][]
      }
      get_highest_offers_recipe: {
        Args: {
          in_chain_id: number
          in_market_id: string
        }
        Returns: {
          offer_id: string
          offer_side: number
          token_amounts: number[]
          token_ids: string[]
          quantity: number
          quantity_remaining: number
          is_valid: boolean
          block_timestamp: number
          incentive_value_usd: number
          quantity_value_usd: number
          change_ratio: number
          rank: number
        }[]
      }
      get_market_offers: {
        Args: {
          in_chain_id: number
          in_market_type: number
          in_market_id: string
          in_offer_side: number
          in_quantity: string
          custom_token_data?: Json
          in_incentive_ids?: string[]
          in_incentive_amounts?: string[]
        }
        Returns: {
          id: string
          market_id: string
          offer_id: string
          offer_side: number
          expiry: string
          funding_vault: string
          creator: string
          input_token_id: string
          quantity: string
          quantity_remaining: string
          token_ids: string[]
          token_amounts: string[]
          protocol_fee_amounts: string[]
          frontend_fee_amounts: string[]
          is_valid: boolean
          block_timestamp: number
          incentive_value_usd: number
          quantity_value_usd: number
          change_percent: number
          rank: number
          fill_quantity: string
        }[]
      }
      get_market_offers2: {
        Args: {
          in_chain_id: number
          in_market_type: number
          in_market_id: string
          in_offer_side: number
          in_quantity: string
          custom_token_data?: Json
          in_incentive_ids?: string[]
          in_incentive_amounts?: string[]
        }
        Returns: {
          id: string
          market_id: string
          offer_id: string
          offer_side: number
          expiry: string
          funding_vault: string
          creator: string
          input_token_id: string
          quantity: string
          quantity_remaining: string
          token_ids: string[]
          token_amounts: string[]
          protocol_fee_amounts: string[]
          frontend_fee_amounts: string[]
          is_valid: boolean
          block_timestamp: number
          incentive_value_usd: number
          quantity_value_usd: number
          change_percent: number
          rank: number
          fill_quantity: string
        }[]
      }
      get_token_quotes: {
        Args: {
          token_ids: string[]
          custom_token_data?: Json
        }
        Returns: {
          token_id: string
          decimals: number
          price: number
          total_supply: number
          fdv: number
        }[]
      }
      get_top_offers_recipe: {
        Args: {
          in_chain_id: number
          in_market_id: string
        }
        Returns: {
          offer_id: string
          offer_type: number
          tokens_amount: number[]
          tokens_ids: string[]
          quantity: number
          quantity_remaining: number
          is_valid: boolean
          block_timestamp: number
          incentive_value_usd: number
          quantity_value_usd: number
          change_percent: number
          rank: number
        }[]
      }
      get_validation_offers: {
        Args: {
          offer_ids: string[]
        }
        Returns: {
          id: string
          chain_id: number
          market_type: number
          offer_side: number
          creator: string
          funding_vault: string
          input_token_id: string
          quantity_remaining: string
        }[]
      }
      process_update_queue: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      register_request: {
        Args: {
          ip_in: string
        }
        Returns: undefined
      }
      search_contracts: {
        Args: {
          search_key: string
          sorting: string
          filters: string
          page_index: number
          page_size: number
        }
        Returns: Database["public"]["CompositeTypes"]["search_contracts_return"]
      }
      update_raw_markets_by_recipe_key: {
        Args: {
          recipe_key: string
          market_key: string
        }
        Returns: undefined
      }
      update_raw_markets_token_data:
        | {
            Args: {
              recipe_key: string
            }
            Returns: undefined
          }
        | {
            Args: {
              recipe_key: string
              is_cancelled: boolean
            }
            Returns: undefined
          }
        | {
            Args: {
              recipe_key: string
              market_key: string
            }
            Returns: undefined
          }
        | {
            Args: {
              recipe_key: string
              market_key: string
              order_type: number
            }
            Returns: undefined
          }
      update_token_price: {
        Args: Record<PropertyKey, never>
        Returns: {
          token_id: string
          current_price: number
          last_updated: string
        }[]
      }
      update_token_quotes_historical_coinmarketcap: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      custom_royco_pools_return: {
        data: Json | null
        count: number | null
      }
      enriched_market_data_type: {
        id: string | null
        chain_id: number | null
        market_type: number | null
        market_id: string | null
        creator: string | null
        input_token_id: string | null
        lockup_time: string | null
        frontend_fee: string | null
        reward_style: number | null
        transaction_hash: string | null
        block_number: number | null
        block_timestamp: number | null
        log_index: number | null
        underlying_vault_address: string | null
        base_incentive_ids: string[] | null
        base_incentive_amounts: string[] | null
        start_timestamps: string[] | null
        end_timestamps: string[] | null
        name: string | null
        description: string | null
        quantity: string | null
        locked_quantity: string | null
        incentive_ids: string[] | null
        incentive_amounts: string[] | null
        incentive_rates: string[] | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        incentive_token_price_values: number[] | null
        incentive_token_total_supply_values: number[] | null
        incentive_token_fdv_values: number[] | null
        incentive_amounts_usd: number[] | null
        incentive_rates_usd: number[] | null
        quantity_usd: number | null
        locked_quantity_usd: number | null
        total_incentive_amounts_usd: number | null
        annual_change_ratios: number[] | null
        annual_change_ratio: number | null
      }
      enriched_markets_data_type: {
        id: string | null
        chain_id: number | null
        market_type: number | null
        market_id: string | null
        creator: string | null
        owner: string | null
        input_token_id: string | null
        lockup_time: string | null
        frontend_fee: string | null
        reward_style: number | null
        transaction_hash: string | null
        block_number: number | null
        block_timestamp: number | null
        log_index: number | null
        underlying_vault_address: string | null
        base_incentive_ids: string[] | null
        base_incentive_amounts: string[] | null
        base_start_timestamps: string[] | null
        base_end_timestamps: string[] | null
        base_incentive_rates: string[] | null
        name: string | null
        description: string | null
        is_verified: boolean | null
        quantity_ap: string | null
        quantity_ip: string | null
        locked_quantity: string | null
        incentive_ids: string[] | null
        incentive_amounts: string[] | null
        incentive_rates: string[] | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        incentive_token_price_values: number[] | null
        incentive_token_total_supply_values: number[] | null
        incentive_token_fdv_values: number[] | null
        incentive_amounts_usd: number[] | null
        incentive_rates_usd: number[] | null
        quantity_ap_usd: number | null
        quantity_ip_usd: number | null
        locked_quantity_usd: number | null
        total_incentive_amounts_usd: number | null
        annual_change_ratios: number[] | null
        annual_change_ratio: number | null
      }
      enriched_markets_return_type: {
        count: number | null
        data:
          | Database["public"]["CompositeTypes"]["enriched_markets_data_type"][]
          | null
      }
      enriched_offer_data_type: {
        id: string | null
        chain_id: number | null
        market_type: number | null
        offer_side: number | null
        offer_id: string | null
        market_id: string | null
        creator: string | null
        funding_vault: string | null
        input_token_id: string | null
        quantity: string | null
        quantity_remaining: string | null
        expiry: string | null
        token_ids: string[] | null
        token_amounts: string[] | null
        protocol_fee_amounts: string[] | null
        frontend_fee_amounts: string[] | null
        is_cancelled: boolean | null
        transaction_hash: string | null
        block_timestamp: number | null
        can_be_filled: boolean | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        token_price_values: number[] | null
        token_fdv_values: number[] | null
        token_total_supply_values: number[] | null
        quantity_value_usd: number | null
        incentive_value_usd: number | null
        name: string | null
        lockup_time: string | null
        reward_style: number | null
        annual_change_ratios: number[] | null
        annual_change_ratio: number | null
      }
      enriched_offers_return_type: {
        count: number | null
        data:
          | Database["public"]["CompositeTypes"]["enriched_offer_data_type"][]
          | null
      }
      enriched_position_recipe_data_type: {
        id: string | null
        chain_id: number | null
        weiroll_wallet: string | null
        offer_side: number | null
        market_id: string | null
        reward_style: number | null
        raw_offer_side: number | null
        raw_offer_id: number | null
        account_address: string | null
        ap: string | null
        ip: string | null
        input_token_id: string | null
        quantity: number | null
        token_ids: string[] | null
        token_amounts: number[] | null
        protocol_fee_amounts: number[] | null
        frontend_fee_amounts: number[] | null
        is_claimed: boolean[] | null
        is_forfeited: boolean | null
        is_withdrawn: boolean | null
        unlock_timestamp: number | null
        block_number: number | null
        transaction_hash: string | null
        block_timestamp: number | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        token_price_values: number[] | null
        token_fdv_values: number[] | null
        token_total_supply_values: number[] | null
        can_withdraw: boolean | null
        can_claim: boolean | null
        name: string | null
        lockup_time: number | null
      }
      enriched_positions_recipe_data_type: {
        id: string | null
        chain_id: number | null
        weiroll_wallet: string | null
        offer_side: number | null
        market_id: string | null
        reward_style: number | null
        raw_offer_side: number | null
        raw_offer_id: string | null
        account_address: string | null
        ap: string | null
        ip: string | null
        input_token_id: string | null
        quantity: string | null
        token_ids: string[] | null
        token_amounts: string[] | null
        protocol_fee_amounts: string[] | null
        frontend_fee_amounts: string[] | null
        is_claimed: boolean[] | null
        is_forfeited: boolean | null
        is_withdrawn: boolean | null
        unlock_timestamp: string | null
        block_number: number | null
        transaction_hash: string | null
        block_timestamp: number | null
        input_token_price: number | null
        input_token_fdv: number | null
        input_token_total_supply: number | null
        token_price_values: number[] | null
        token_fdv_values: number[] | null
        token_total_supply_values: number[] | null
        can_withdraw: boolean | null
        can_claim: boolean | null
        name: string | null
        lockup_time: string | null
      }
      enriched_positions_recipe_return_type: {
        count: number | null
        data:
          | Database["public"]["CompositeTypes"]["enriched_positions_recipe_data_type"][]
          | null
      }
      enriched_royco_stats_data_type: {
        chain_id: number | null
        total_tvl: number | null
        total_incentives: number | null
        total_volume: number | null
      }
      search_contracts_return: {
        data: Json | null
        count: number | null
      }
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
