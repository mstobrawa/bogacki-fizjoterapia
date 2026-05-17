export type Database = {
  public: {
    Tables: {
      services: {
        Row: {
          id: string;
          title: string;
          description: string;
          price: string;
          image_url: string | null;
          storage_path: string | null;
          position: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          price: string;
          image_url?: string | null;
          storage_path?: string | null;
          position?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          description?: string;
          price?: string;
          image_url?: string | null;
          storage_path?: string | null;
          position?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          image_url: string | null;
          excerpt: string | null;
          content: string;
          published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          image_url?: string | null;
          excerpt?: string | null;
          content: string;
          published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string;
          slug?: string;
          image_url?: string | null;
          excerpt?: string | null;
          content?: string;
          published?: boolean;
          updated_at?: string;
        };
        Relationships: [];
      };
      certificates: {
        Row: {
          id: string;
          title: string | null;
          image_url: string;
          storage_path: string | null;
          position: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title?: string | null;
          image_url: string;
          storage_path?: string | null;
          position?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          title?: string | null;
          image_url?: string;
          storage_path?: string | null;
          position?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
