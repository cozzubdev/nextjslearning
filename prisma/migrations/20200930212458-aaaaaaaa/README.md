# Migration `20200930212458-aaaaaaaa`

This migration has been generated by mykola at 10/1/2020, 12:24:58 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"firstName" text   NOT NULL ,
"lastName" text   NOT NULL ,
"email" text   NOT NULL ,
"password" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Interest" (
"id" SERIAL,
"authorId" integer   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"title" text   NOT NULL ,
"user_name" text   NOT NULL ,
"viewer_count" integer   NOT NULL ,
"twitchUserID" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

ALTER TABLE "public"."Interest" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200930212458-aaaaaaaa
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,29 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+}
+
+model User {
+  id          Int      @id @default(autoincrement())
+  createdAt   DateTime @default(now())
+  firstName   String
+  lastName    String
+  email       String @unique
+  password    String
+  interests   Interest[]
+}
+
+model Interest {
+  id            Int      @id @default(autoincrement())
+  authorId      Int
+  createdAt     DateTime @default(now())
+  title         String  
+  user_name     String  
+  viewer_count  Int  
+  author        User @relation(fields: [authorId], references:[id])
+  twitchUserID  Int
+}
```


