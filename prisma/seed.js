const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice'
        }
    });

    console.log('Customer created', createdCustomer);

    // Add your code here

    const createdContact = await prisma.contact.create({
        data: {
            customerId: createdCustomer.id,
            phone: 'Khateeb',
            email: 'contact@gmail.com',
        }
    })
    
    console.log('Contact Created', createdContact)


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
