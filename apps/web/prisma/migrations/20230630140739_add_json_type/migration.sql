-- AlterTable
ALTER TABLE `FeatureFlag` MODIFY `type` ENUM('BOOLEAN', 'STRING', 'NUMBER', 'JSON') NOT NULL DEFAULT 'BOOLEAN';