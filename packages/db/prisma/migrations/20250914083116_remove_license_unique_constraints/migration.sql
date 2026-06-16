-- DropIndex
DROP INDEX "devices_license_key_device_hash_key";

-- DropIndex
DROP INDEX "devices_license_key_key";

-- CreateIndex
CREATE INDEX "devices_license_key_idx" ON "devices"("license_key");
