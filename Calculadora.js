// JavaScript Document
var caixa_resultado = document.getElementById('caixa_resultado');

function clica_botao(obj)
{
	var botao_clicado = obj.innerHTML;
	switch(true)
		{
		/*a linha seguinte verifica se foi clicado o botão = a função eval() converte e calcula uma expressão aritmética e converte de texto para número*/
			case (botao_clicado == '='):
				caixa_resultado.innerHTML = eval(caixa_resultado.innerHTML);
				break;
				
		// se carregar no botão AC, no resultado aparece 0 
			case (botao_clicado == 'AC'):
				caixa_resultado.innerHTML = '0';
				break;
				
		/* se no resultado tiver zero, resultado recebe o texto do botão clicado */
			case (caixa_resultado.innerHTML == '0'):
				caixa_resultado.innerHTML = botao_clicado;
				break;
				
		// Acrescenta o texto do botão clicado ao texto do resultado
			default:
				caixa_resultado.innerHTML = caixa_resultado.innerHTML + botao_clicado;
		} // fim switch-case
} // fim função