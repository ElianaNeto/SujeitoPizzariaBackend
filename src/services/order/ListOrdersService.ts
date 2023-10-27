import prismaClient from "../../prisma"

class ListOrdersService {
  async execute() {

    const findOrder = await prismaClient.order.findMany({
      where: {
        draft: false, //Pedidos que nao estejam em rascunhos, para serem preparados
        status: false,
      },
      orderBy:{
        created_at:'desc'
      }
    })

    return findOrder;

  }
}

export { ListOrdersService }