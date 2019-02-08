function carregaDadosRemoto () {
	var isso = 'https://raw.githubusercontent.com/ryganon/linguagens-script/master/projetos/dashboard-lite/tecnologia_uol.xml'
	$.get(isso, function (dados) {
		var dados2 = $.parseXML(dados)
		 $xml = $(dados2)
		 $itens = $xml.find('item')
		 $itens.each(function() {
		 	var vet = []
		 	vet[0] = $(this).find('title').text()
		 	//vet[1] = $(this).find('link').text()
		 	vet[1] = $(this).find('description').text()
		 	vet[2] = $(this).find('pubDate').text()
		 	criaTable(vet)
		 })
	})
}

function criaCabecalho(novaTable, conteudo) {
	var novathead = document.createElement('thead')
	var novatr = document.createElement('tr')
	var novath = document.createElement('th')
	novaTable.appendChild(novathead)
	novathead.appendChild(novatr)
	novatr.appendChild(novath)
	novath.innerHTML = conteudo
}

function preencheCorpo(corpo, conteudo){
	var tr = document.createElement('tr')
	var td = document.createElement('td')
	corpo.appendChild(tr)
	tr.appendChild(td)
	td.innerHTML = conteudo
}

function criaTable(vetor) {
	var novoItemDeLista = document.createElement('li')
	novoItemDeLista.className = "white"
	var novaTable = document.createElement('table')
	novaTable.className = 'centered'
	novoItemDeLista.appendChild(novaTable)
	document.getElementById('list').appendChild(novoItemDeLista)
	novoItemDeLista.appendChild(novaTable)
	criaCabecalho(novaTable, vetor[0])
	var corpo = document.createElement('tbody')
	novaTable.appendChild(corpo)
	preencheCorpo(corpo, vetor[1])
	preencheCorpo(corpo, vetor[2])
	//document.getElementById('list').appendChild(document.createElement('br'))
	var espacamento = document.createElement('div')
	espacamento.className = 'row'
	document.getElementById('list').appendChild(espacamento)
}