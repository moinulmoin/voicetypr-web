-- AlterTable: add plan metadata columns to licenses
-- Both nullable for migration safety; populated on next activation/webhook
ALTER TABLE "licenses" ADD COLUMN "plan" TEXT;
ALTER TABLE "licenses" ADD COLUMN "max_devices" INTEGER;
