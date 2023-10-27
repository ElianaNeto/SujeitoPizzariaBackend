import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {

    //Verificaar se ele enviou um email
    if (!email) {
      throw new Error("Email incorrecto")
    }

    //Verifivar se esse email já está cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (userAlreadyExists) {
      throw new Error("User ja existe")
    }
    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    })

    console.log(name);
    return user;
  }
}

export { CreateUserService }