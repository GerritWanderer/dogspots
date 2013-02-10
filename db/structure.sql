CREATE TABLE "comments" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "spot_id" integer, "user_id" integer, "text" text, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "reported" integer);
CREATE TABLE "ratings" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "spot_id" integer, "user_id" integer, "ground" integer DEFAULT 0, "water" integer DEFAULT 0, "clean" integer DEFAULT 0, "play" integer DEFAULT 0, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
CREATE TABLE "schema_migrations" ("version" varchar(255) NOT NULL);
CREATE TABLE "spot_images" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "spot_id" integer, "user_id" integer, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "image_file_name" varchar(255), "image_content_type" varchar(255), "image_file_size" integer, "image_updated_at" datetime);
CREATE TABLE "spots" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "user_id" integer, "title" varchar(255), "text" text, "street" varchar(255), "zip" integer, "city" varchar(255), "latitude" varchar(255), "longitude" varchar(255), "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
CREATE TABLE "users" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "email" varchar(255) DEFAULT '' NOT NULL, "name" varchar(255) DEFAULT '' NOT NULL, "encrypted_password" varchar(255) DEFAULT '' NOT NULL, "reset_password_token" varchar(255), "reset_password_sent_at" datetime, "remember_created_at" datetime, "sign_in_count" integer DEFAULT 0, "current_sign_in_at" datetime, "last_sign_in_at" datetime, "current_sign_in_ip" varchar(255), "last_sign_in_ip" varchar(255), "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, "authentication_token" varchar(255));
CREATE INDEX "index_comments_on_spot_id" ON "comments" ("spot_id");
CREATE INDEX "index_comments_on_user_id" ON "comments" ("user_id");
CREATE INDEX "index_ratings_on_spot_id" ON "ratings" ("spot_id");
CREATE INDEX "index_ratings_on_user_id" ON "ratings" ("user_id");
CREATE INDEX "index_spot_images_on_spot_id" ON "spot_images" ("spot_id");
CREATE UNIQUE INDEX "index_users_on_authentication_token" ON "users" ("authentication_token");
CREATE UNIQUE INDEX "index_users_on_email" ON "users" ("email");
CREATE UNIQUE INDEX "index_users_on_reset_password_token" ON "users" ("reset_password_token");
CREATE UNIQUE INDEX "unique_schema_migrations" ON "schema_migrations" ("version");
INSERT INTO schema_migrations (version) VALUES ('20120717195652');

INSERT INTO schema_migrations (version) VALUES ('20120718130421');

INSERT INTO schema_migrations (version) VALUES ('20120718130828');

INSERT INTO schema_migrations (version) VALUES ('20120718131638');

INSERT INTO schema_migrations (version) VALUES ('20120718134208');

INSERT INTO schema_migrations (version) VALUES ('20130203192526');

INSERT INTO schema_migrations (version) VALUES ('20130209161042');

INSERT INTO schema_migrations (version) VALUES ('20130209173011');