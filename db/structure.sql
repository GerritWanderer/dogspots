CREATE TABLE "comments" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "spot_id" integer, "user_id" integer, "text" text, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
CREATE TABLE "ratings" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "spot_id" integer, "user_id" integer, "ground" integer DEFAULT 0, "water" integer DEFAULT 0, "clean" integer DEFAULT 0, "play" integer DEFAULT 0, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
CREATE TABLE "schema_migrations" ("version" varchar(255) NOT NULL);
CREATE TABLE "spot_images" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "spot_id" integer, "user_id" integer, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "image_file_name" varchar(255), "image_content_type" varchar(255), "image_file_size" integer, "image_updated_at" datetime);
CREATE TABLE "spots" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "user_id" integer, "title" varchar(255), "text" text, "street" varchar(255), "zip" integer, "city" varchar(255), "latitude" varchar(255), "longitude" varchar(255), "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
CREATE TABLE "users" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(255), "email" varchar(255), "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
CREATE INDEX "index_comments_on_spot_id" ON "comments" ("spot_id");
CREATE INDEX "index_comments_on_user_id" ON "comments" ("user_id");
CREATE INDEX "index_ratings_on_spot_id" ON "ratings" ("spot_id");
CREATE INDEX "index_ratings_on_user_id" ON "ratings" ("user_id");
CREATE INDEX "index_spot_images_on_spot_id" ON "spot_images" ("spot_id");
CREATE UNIQUE INDEX "unique_schema_migrations" ON "schema_migrations" ("version");