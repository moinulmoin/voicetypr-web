-- AlterTable
ALTER TABLE "devices" ADD COLUMN     "os_type" TEXT,
ADD COLUMN     "os_version" TEXT;

-- CreateTable
CREATE TABLE "licenses" (
    "license_key" TEXT NOT NULL,
    "customer_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "licenses_pkey" PRIMARY KEY ("license_key")
);

-- Data Migration: Populate licenses from existing devices
-- This moves ALL existing license data to the new table
INSERT INTO "licenses" ("license_key", "customer_id", "created_at")
SELECT DISTINCT
    "license_key",
    MAX("customer_id") as "customer_id",  -- Take non-null if exists
    MIN("created_at") as "created_at"      -- Use earliest activation
FROM "devices"
WHERE "license_key" IS NOT NULL
    AND "license_key" != ''
GROUP BY "license_key";

-- AddForeignKey (safe now that all licenses exist)
ALTER TABLE "devices" ADD CONSTRAINT "devices_license_key_fkey" FOREIGN KEY ("license_key") REFERENCES "licenses"("license_key") ON DELETE SET NULL ON UPDATE CASCADE;
