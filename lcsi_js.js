if (screen.width < 480) {
	setTimeout(lucas, 0);
}
function lucas () {
	document.getElementById('top_home').innerHTML = '<br>Home';
	document.getElementById('Sobre_qs').innerHTML = 'A LCS é especialista em assistência técnica em informática, manutenção de micro computadores, notebooks e web design. Tem como objetivo respeitar e valorizar os clientes mantendo relação de confiança. Conta com profissional especializado em tecnologia sempre zelando pelo sigilo de informações dados dos clientes.';
	document.getElementById('Sobre_missao').innerHTML = 'Oferecer ao mercado as melhores soluções em serviço e tecnologia, agregando valores, sempre com base o comprometimento ético a nossos clientes.';
	document.getElementById('Sobre_visao').innerHTML = 'Nossa visão e ser reconhecido na área de TI como uma importante parceria de negócio estabelecendo a fidelidade de nossos clientes, para assim nos destacar no mercado de tecnologia.';
	document.getElementById('Sobre_valores').innerHTML = 'Nosso valor e atuar na área de TI sempre com ética nos relacionando, transparência nos negócios com comprometimento profissional, sempre buscando superar as expectativas dos nossos clientes, oferecendo a eles preços justos e atendimento de qualidade.';
}