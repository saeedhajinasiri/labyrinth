import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { passwordHelper } from '../utils/password-helper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Create a user
   * @param createUserDto
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save({
      full_name: createUserDto.full_name,
      username: createUserDto.username,
      password: await passwordHelper(createUserDto.password),
      created_at: new Date().toJSON(),
    });
  }

  /**
   * Find a specific user by id
   * @param id
   */
  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({
      id: id,
    });
  }

  /**
   * Find a specific user by username
   * @param username
   */
  async findByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOneBy({
      username: username,
    });
  }
}
