const axios = require('axios');

async function Api() {
    const response = await axios.get('https://www.dnd5eapi.co/api/');
    return response.data;
}

test('Verifica dados obtidos da API', async ()=> {
    const dados = await Api();
    expect(dados).toBeDefined();

    expect(dados.classes).toEqual("/api/classes");
});

test('Verifica se os dados das classes são obtidos corretamente', async ()=> {
    const dados = await Api();
    const classesData = await axios.get(`https://www.dnd5eapi.co${dados.classes}`);
    
    expect(classesData.status).toBe(200);
    expect(classesData.data).toBeDefined();

    console.log(classesData.data);
});