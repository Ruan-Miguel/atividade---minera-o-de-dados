function carregaDadosRemoto () {
	var isso = 'https://raw.githubusercontent.com/ryganon/linguagens-script/master/projetos/dashboard-lite/tecnologia_uol.xml'
	$.get(isso, function (dados) {
		var dados2 = $.parseXML(dados)
		 $xml = $(dados2)
		 $itens = $xml.find('item')
		 $itens.each(function() {
		 	titulo = $(this).find('title').text()
		 	link = $(this).find('link').text()
		 	descricao = $(this).find('description').text()
		 	up = $(this).find('pubDate').text()
		 	var novoItem = document.createElement('li')
		 	novoItem.innerHTML = titulo
		 	document.getElementById('list').appendChild(novoItem)
		 })
	})
}