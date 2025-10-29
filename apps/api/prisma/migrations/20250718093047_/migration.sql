-- CreateTable
CREATE TABLE "devices" (
    "device_hash" TEXT NOT NULL,
    "license_key" TEXT,
    "activation_id" TEXT,
    "customer_id" TEXT,
    "trial_started_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "trial_expires_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_checked" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "app_version" TEXT,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("device_hash")
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "device_hash" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "metadata" JSONB,

    CONSTRAINT "activity_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "devices_device_hash_key" ON "devices"("device_hash");

-- CreateIndex
CREATE UNIQUE INDEX "devices_license_key_key" ON "devices"("license_key");

-- CreateIndex
CREATE UNIQUE INDEX "devices_license_key_device_hash_key" ON "devices"("license_key", "device_hash");

-- CreateIndex
CREATE INDEX "activity_logs_device_hash_timestamp_idx" ON "activity_logs"("device_hash", "timestamp");

-- AddForeignKey
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_device_hash_fkey" FOREIGN KEY ("device_hash") REFERENCES "devices"("device_hash") ON DELETE RESTRICT ON UPDATE CASCADE;
