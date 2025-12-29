CREATE TABLE "users_table" (
	"id" text PRIMARY KEY DEFAULT '2b1dcd4d-00d3-45fb-9c53-8bf0d89b6ddf' NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"image" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
