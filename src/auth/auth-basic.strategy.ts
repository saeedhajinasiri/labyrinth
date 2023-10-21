import { BasicStrategy as Strategy } from 'passport-http';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from '../users/users.service';
import { comparePassword } from '../utils/password-helper';
import { User } from '../users/entities/user.entity';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(protected usersService: UsersService) {
    super({
      passReqToCallback: true,
    });
  }

  async validate(req: any, username: string, password: string): Promise<User> {
    const user = await this.usersService.findByUsername(username);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (await comparePassword(password, user.password)) {
      return user;
    }

    throw new UnauthorizedException();
  }
}
