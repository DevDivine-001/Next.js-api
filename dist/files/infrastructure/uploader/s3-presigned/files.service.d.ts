import { FileRepository } from '../../persistence/file.repository';
import { FileUploadDto } from './dto/file.dto';
import { ConfigService } from '@nestjs/config';
import { FileType } from '../../../domain/file';
export declare class FilesS3PresignedService {
    private readonly fileRepository;
    private readonly configService;
    private s3;
    constructor(fileRepository: FileRepository, configService: ConfigService);
    create(file: FileUploadDto): Promise<{
        file: FileType;
        uploadSignedUrl: string;
    }>;
}
