export const handler = async evt => {
    try {
        const { body } = evt;
        const data = JSON.parse(body);
        const name = data.name;
        if (name === "Reen")
        {
            data.message = "hello Reen"
        }
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(err, ['name', 'message']),
        };
    }
};
