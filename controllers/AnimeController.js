const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    list: async (req, res) => {
        try {
            const datas = await prisma.anime.findMany({
                select: {
                    content: true,
                    title: true,
                    Kategoris: {
                        select: {
                            kategori: true
                        }
                    }
                },
            });

            const result = datas.map((data) => {
                return {
                    ...data,
                    Kategoris: data.Kategoris.map((kategori) => kategori.kategori)
                };
            });

            res.json({
                status: 200,
                message: "Success Retrieve Data",
                data: result
            });

        } catch (error) {
            console.log(error);
            res.send({ error: true, message: error.message });
        }
    },
}