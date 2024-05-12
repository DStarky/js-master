-- AlterTable
ALTER TABLE `question` ADD COLUMN `authoredByUserID` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_authoredByUserID_fkey` FOREIGN KEY (`authoredByUserID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
