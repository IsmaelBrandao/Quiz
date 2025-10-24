// BANCO DE QUESTÕES - REGULAMENTAÇÃO DO AERONAUTA - NÍVEL 1
const quizDataAeronautaN1 = [
    { question: "De acordo com a Lei Nº 13.475/2017, quem é considerado aeronauta?", options: ["Apenas pilotos de aeronave e comissários de voo.","Profissionais que trabalham no aeroporto em funções de solo.","Piloto de aeronave, comissário de voo e mecânico de voo.","Qualquer pessoa a bordo de uma aeronave civil nacional."], answer: "Piloto de aeronave, comissário de voo e mecânico de voo." },
    { question: "O que é a 'tripulação mínima'?", options: ["A tripulação necessária para voos internacionais longos.","A determinada na certificação de tipo da aeronave, permitida em voos de instrução, experiência, vistoria e traslado.","A tripulação simples acrescida de um comandante.","Qualquer tripulação com menos de 3 membros."], answer: "A determinada na certificação de tipo da aeronave, permitida em voos de instrução, experiência, vistoria e traslado." },
    { question: "Qual é a composição de uma 'tripulação composta'?", options: ["Tripulação simples + 1 piloto + 50% de comissários.","Tripulação simples + 1 comandante + 1 mecânico de voo (se necessário) + 25% do número de comissários.","Tripulação mínima + 2 comandantes.","Tripulação simples + 1 comissário extra para cada 50 passageiros."], answer: "Tripulação simples + 1 comandante + 1 mecânico de voo (se necessário) + 25% do número de comissários." },
    { question: "A 'tripulação de revezamento' pode ser empregada em quais tipos de voos?", options: ["Apenas em voos domésticos com mais de 12 horas.","Em qualquer voo, desde que autorizado pela ANAC.","Apenas em voos internacionais.","Em voos de táxi aéreo e serviços especializados."], answer: "Apenas em voos internacionais." },
    { question: "O que é definido como 'hora de voo' ou 'tempo de voo'?", options: ["O período desde a decolagem até o pouso da aeronave.","O tempo em que a aeronave está acima de 10.000 pés.","O período 'calço a calço': do início do deslocamento até a imobilização total da aeronave.","A duração total da jornada de trabalho do tripulante."], answer: "O período 'calço a calço': do início do deslocamento até a imobilização total da aeronave." },
    { question: "Qual o limite de horas de voo e pousos para um integrante de tripulação simples em serviço de transporte aéreo público regular (RBAC 121)?", options: ["11 horas de voo e 5 pousos.","9 horas de voo e 6 pousos.","8 horas de voo e 4 pousos.","10 horas de voo e sem limite de pousos."], answer: "8 horas de voo e 4 pousos." },
    { question: "A jornada de trabalho de um tripulante é contada a partir de qual momento?", options: ["Da partida dos motores.","Do fechamento das portas da aeronave.","Da hora da apresentação no local de trabalho.","Do início do briefing de pré-voo."], answer: "Da hora da apresentação no local de trabalho." },
    { question: "Qual o limite máximo de jornada de trabalho para uma tripulação composta em serviços de táxi aéreo (RBAC 135)?", options: ["12 horas.","16 horas.","11 horas.","14 horas."], answer: "14 horas." },
    { question: "O que é 'sobreaviso'?", options: ["Período em que o tripulante permanece no aeroporto à disposição do empregador.","Período em que o tripulante permanece em local de sua escolha, devendo se apresentar em até 90 minutos após ser comunicado.","O tempo de descanso obrigatório entre jornadas.","Um período de trabalho em simulador."], answer: "Período em que o tripulante permanece em local de sua escolha, devendo se apresentar em até 90 minutos após ser comunicado." },
    { question: "Como é remunerada a hora de 'reserva'?", options: ["Com 1/3 do valor da hora de voo.","Não é remunerada, mas conta como jornada.","Na mesma base da hora de voo.","Com 50% do valor da hora de voo."], answer: "Na mesma base da hora de voo." },
    { question: "Qual o tempo mínimo de repouso assegurado a um tripulante após uma jornada de 14 horas?", options: ["12 horas.","24 horas.","16 horas.","20 horas."], answer: "16 horas." },
    { question: "Um tripulante em serviço de transporte aéreo regular (RBAC 121) tem direito a um número mínimo mensal de quantas folgas?", options: ["8 folgas.","12 folgas.","10 folgas.","6 folgas."], answer: "10 folgas." },
    { question: "A função de comissário de voo é auxiliar de quem a bordo?", options: ["Do chefe de cabine.","Do copiloto.","Do comandante, encarregado das normas de segurança e atendimento.","Da equipe de solo."], answer: "Do comandante, encarregado das normas de segurança e atendimento." },
    { question: "De acordo com o RBAC 121, quantos comissários são necessários em um avião com capacidade para 80 passageiros?", options: ["Um comissário.","Dois comissários.","Três comissários.","Quatro comissários."], answer: "Dois comissários." },
    { question: "O que é um 'tripulante extra a serviço'?", options: ["Um tripulante em treinamento.","Um tripulante que se desloca a serviço do empregador, sem exercer função a bordo.","Um mecânico de voo que não faz parte da tripulação mínima.","Um tripulante de outra companhia aérea pegando carona."], answer: "Um tripulante que se desloca a serviço do empregador, sem exercer função a bordo." },
    { question: "A jornada de trabalho de um tripulante é considerada encerrada quantos minutos após a parada final dos motores em voos domésticos?", options: ["15 minutos.","45 minutos.","60 minutos.","30 minutos."], answer: "30 minutos." },
    { question: "Para efeito de jornada, como é computada a hora de trabalho noturno?", options: ["Como 60 minutos.","Como 52 minutos e 30 segundos.","Como 70 minutos.","Não há diferença no cômputo, apenas na remuneração."], answer: "Como 52 minutos e 30 segundos." },
    { question: "Em quais situações o comandante pode ampliar os limites da jornada de trabalho em até 60 minutos?", options: ["Atraso de passageiros ou tráfego aéreo intenso.","Para chegar mais rápido à base contratual.","Inexistência de acomodações, condições meteorológicas desfavoráveis ou por imperiosa necessidade.","A qualquer momento, a seu critério, para otimizar a operação."], answer: "Inexistência de acomodações, condições meteorológicas desfavoráveis ou por imperiosa necessidade." },
    { question: "Qual o limite máximo de madrugadas de trabalho consecutivas para um tripulante?", options: ["Uma madrugada.","Duas madrugadas.","Três madrugadas.","Não há limite."], answer: "Duas madrugadas." },
    { question: "O que é considerado 'madrugada' para fins da lei?", options: ["O período entre 22h e 05h.","O período transcorrido, total ou parcialmente, entre 00h e 06h, no fuso da base contratual.","Qualquer voo que ocorra após a meia-noite local.","O período entre 01h e 05h, no fuso da base contratual."], answer: "O período transcorrido, total ou parcialmente, entre 00h e 06h, no fuso da base contratual." },
    { question: "A duração da 'reserva' para um tripulante de aviação regular (RBAC 121) tem um máximo de:", options: ["4 horas.","10 horas.","8 horas.","6 horas."], answer: "6 horas." },
    { question: "Quando um tripulante cruza 4 fusos horários em uma viagem, seu repouso na base contratual será acrescido de quantas horas?", options: ["4 horas (1 por fuso).","Nenhum acréscimo.","8 horas (2 por fuso).","6 horas."], answer: "8 horas (2 por fuso)." },
    { question: "O que define uma 'transferência permanente'?", options: ["Deslocamento da base por período superior a 30 dias.","Deslocamento da base por período superior a 120 dias, com mudança de domicílio.","Qualquer deslocamento que exija mudança de cidade.","Deslocamento da base por período superior a 180 dias."], answer: "Deslocamento da base por período superior a 120 dias, com mudança de domicílio." },
    { question: "De quem é a responsabilidade pelo custeio do Certificado Médico Aeronáutico (CMA) e da habilitação técnica (CHT) de um tripulante?", options: ["Do próprio tripulante.","Do sindicato da categoria.","É dividido entre o empregador e o tripulante.","Do empregador."], answer: "Do empregador." },
    { question: "As férias anuais de um tripulante são de quantos dias consecutivos?", options: ["20 dias.","25 dias.","30 dias.","Depende do tempo de serviço na empresa."], answer: "30 dias." },
    { question: "Qual a validade de um CMA de 2ª classe para um comissário de voo com 45 anos de idade?", options: ["12 meses.","24 meses.","60 meses.","Não há prazo de validade."], answer: "60 meses." },
    { question: "Segundo o RBAC 117, o que é uma acomodação para descanso 'Classe 1' a bordo?", options: ["Um assento que reclina 40 graus na cabine de passageiros.","Um assento na cabine de comando.","Uma cama ou superfície horizontal, em local separado da cabine de comando e de passageiros, com controle de temperatura, iluminação e som.","Qualquer assento na primeira classe."], answer: "Uma cama ou superfície horizontal, em local separado da cabine de comando e de passageiros, com controle de temperatura, iluminação e som." },
    { question: "Empresas brasileiras em serviço aéreo internacional podem utilizar comissários estrangeiros, desde que o número não exceda:", options: ["1/2 (metade) dos comissários a bordo.","1/3 (um terço) dos comissários a bordo.","1/4 (um quarto) dos comissários a bordo.","Não há permissão para comissários estrangeiros."], answer: "1/3 (um terço) dos comissários a bordo." },
    { question: "O que é o CHT (Certificado de Habilitação Técnica)?", options: ["Um certificado de conclusão do curso de comissário.","O Certificado Médico Aeronáutico.","Um documento emitido pela ANAC que comprova a habilitação do profissional para exercer sua profissão.","Uma permissão para voos internacionais."], answer: "Um documento emitido pela ANAC que comprova a habilitação do profissional para exercer sua profissão." },
    { question: "Qual o limite de horas de voo anuais para um tripulante em aviões a jato?", options: ["1000 horas.","850 horas.","800 horas.","960 horas."], answer: "800 horas." },
    { question: "Por quanto tempo, no mínimo, um tripulante deve permanecer em sua base após cada transferência provisória?", options: ["30 dias.","90 dias.","120 dias.","180 dias."], answer: "180 dias." },
    { question: "Em voos no período noturno (22h às 06h), uma refeição deve ser servida se a duração do voo for igual ou superior a:", options: ["1 hora.","2 horas.","3 horas.","4 horas."], answer: "3 horas." },
    { question: "Qual a duração mínima e máxima do intervalo para alimentação do tripulante quando em terra?", options: ["Mínimo 30 min e máximo 45 min.","Mínimo 45 min e máximo 60 min.","Mínimo 60 min e máximo 90 min.","A duração não é especificada."], answer: "Mínimo 45 min e máximo 60 min." },
    { question: "O que o empregador deve assegurar ao tripulante em serviço fora da base contratual em casos de urgência médica?", options: ["Apenas o contato de um hospital local.","Reembolso parcial das despesas.","Assistência médica e remoção por via aérea para retorno à base ou tratamento.","Uma licença remunerada para tratamento."], answer: "Assistência médica e remoção por via aérea para retorno à base ou tratamento." },
    { question: "As peças de uniforme e equipamentos exigidos para o exercício da profissão são custeadas por quem?", options: ["Pelo tripulante, com reembolso de 50%.","Pelo sindicato da categoria.","Pela empresa (empregador), gratuitamente.","Pela ANAC."], answer: "Pela empresa (empregador), gratuitamente." },
    { question: "Com qual antecedência mínima o empregador deve notificar o tripulante sobre uma transferência permanente?", options: ["15 dias.","30 dias.","60 dias.","90 dias."], answer: "60 dias." },
    { question: "O pagamento da remuneração das férias do tripulante deve ser realizado até quantos dias antes do seu início?", options: ["No primeiro dia das férias.","Até 2 dias antes.","Até 5 dias antes.","No quinto dia útil do mês das férias."], answer: "Até 2 dias antes." },
    { question: "Qual o período máximo de trabalho consecutivo permitido a um tripulante de táxi aéreo, contado da saída ao regresso à sua base?", options: ["15 dias.","21 dias.","30 dias.","Não há limite especificado."], answer: "21 dias." },
    { question: "Quando um tripulante pode cumprir uma combinação de voos passando por sua base contratual sem ser dispensado do serviço?", options: ["Apenas em situações de emergência.","A qualquer momento, a critério do comandante.","Nunca, o tripulante deve ser dispensado ao passar pela base.","Desde que a programação obedeça à escala previamente publicada."], answer: "Desde que a programação obedeça à escala previamente publicada." },
    { question: "O que acontece se não houver transporte disponível para a tripulação ao término da jornada fora da base contratual?", options: ["A jornada é estendida até o transporte chegar.","A tripulação deve providenciar seu próprio transporte.","O período de repouso será computado a partir da colocação de transporte à disposição.","A empresa paga uma multa para cada tripulante."], answer: "O período de repouso será computado a partir da colocação de transporte à disposição." },
    { question: "Qual o limite máximo, em horas, que um tipo de tripulação pode ser transformado (ex: simples para composta) na origem do voo?", options: ["1 hora, a partir da apresentação.","2 horas, a partir da apresentação.","3 horas, a partir da apresentação.","Pode ser transformado a qualquer momento antes da decolagem."], answer: "3 horas, a partir da apresentação." },
    { question: "O que a lei define como 'base contratual' de um tripulante?", options: ["O aeroporto onde o tripulante mais opera.","A cidade onde o tripulante reside.","A matriz ou filial onde o contrato de trabalho do tripulante está registrado.","O principal hub de operações da companhia aérea."], answer: "A matriz ou filial onde o contrato de trabalho do tripulante está registrado." },
    { question: "A autoridade do comandante sobre a tripulação é exercida durante qual período?", options: ["Apenas durante o voo, do 'calço a calço'.","Desde o momento em que se apresenta para o voo até a entrega da aeronave.","Durante toda a jornada de trabalho, mesmo em solo.","Apenas em situações de emergência a bordo."], answer: "Desde o momento em que se apresenta para o voo até a entrega da aeronave." },
    { question: "Em que situação um instrutor de voo estrangeiro pode ser admitido por uma empresa brasileira?", options: ["A qualquer momento, se tiver mais experiência.","Apenas em voos internacionais.","Na falta de tripulantes de voo brasileiros, em caráter provisório e restrito ao período de instrução.","A lei não permite a contratação de instrutores estrangeiros."], answer: "Na falta de tripulantes de voo brasileiros, em caráter provisório e restrito ao período de instrução." },
    { question: "O tempo de deslocamento para um aeroporto de partida a mais de 50km da base contratual é computado na jornada de trabalho?", options: ["Sim, e é remunerado como hora de voo.","Sim, é computado na jornada, mas não é remunerado.","Não, o tempo de deslocamento não faz parte da jornada.","Apenas 50% do tempo de deslocamento é computado."], answer: "Sim, é computado na jornada, mas não é remunerado." },
    { question: "A escala de serviço mensal para tripulantes da aviação regular (RBAC 121) deve ser divulgada com qual antecedência mínima?", options: ["2 dias.","5 dias.","7 dias.","10 dias."], answer: "5 dias." },
    { question: "Um tripulante pode exercer, simultaneamente, mais de uma função a bordo, mesmo que seja titular das licenças correspondentes?", options: ["Sim, se o comandante autorizar.","Sim, em voos com menos de 1 hora de duração.","Não, em nenhuma hipótese.","Apenas se for mecânico de voo e copiloto."], answer: "Não, em nenhuma hipótese." },
    { question: "Para uma transferência provisória, qual é o período mínimo e máximo de deslocamento da base?", options: ["Mínimo 15 dias e máximo 60 dias.","Mínimo 30 dias e máximo 90 dias.","Mínimo 30 dias e máximo 120 dias.","Mínimo 60 dias e máximo 180 dias."], answer: "Mínimo 30 dias e máximo 120 dias." },
    { question: "Na transferência permanente, a ajuda de custo para despesas de instalação não pode ser inferior a:", options: ["2 vezes o valor do salário mensal.","3 vezes o valor do salário mensal.","4 vezes o valor do salário mensal.","5 vezes o valor do salário mensal."], answer: "4 vezes o valor do salário mensal." },
    { question: "A quem se aplica a Lei nº 13.475/2017 no caso de aeronautas brasileiros trabalhando em aeronaves estrangeiras?", options: ["A lei brasileira não se aplica nesses casos.","Aplica-se apenas se a aeronave estiver em território brasileiro.","Aplica-se aos que exercem suas funções em virtude de contrato de trabalho regido pela legislação brasileira.","Aplica-se a todos os aeronautas brasileiros, independentemente do contrato."], answer: "Aplica-se aos que exercem suas funções em virtude de contrato de trabalho regido pela legislação brasileira." }
];

// BANCO DE QUESTÕES - REGULAMENTAÇÃO DO AERONAUTA - NÍVEL 2
const quizDataAeronautaN2 = [
    { question: "Como é remunerada a hora de sobreaviso?", options: ["Na mesma base da hora de voo.", "À base de 1/3 (um terço) do valor da hora de voo.", "À base de 1/2 (metade) do valor da hora de voo.", "Não é remunerada, apenas o tempo de deslocamento."], answer: "À base de 1/3 (um terço) do valor da hora de voo." },
    { question: "Qual a porcentagem mínima de comissários de voo que deve ser acrescida a uma tripulação simples para formar uma tripulação de revezamento?", options: ["25%","33%","50%","100%"], answer: "50%" },
    { question: "Além de atrasos por condições meteorológicas, em que outra situação uma tripulação composta pode ser usada em voo doméstico na aviação regular?", options: ["Quando há excesso de passageiros.","Para atender a trabalhos de manutenção não programados.","Em feriados nacionais de grande movimento.","A critério exclusivo do comandante da aeronave."], answer: "Para atender a trabalhos de manutenção não programados." },
    { question: "Qual o prazo máximo, em minutos, para apresentação de um tripulante de sobreaviso em um município com dois ou mais aeroportos, caso seja designado para um diferente de sua base?", options: ["60 minutos.","90 minutos.","120 minutos.","150 minutos."], answer: "150 minutos." },
    { question: "A duração do sobreaviso de um tripulante não pode ser inferior a 3 horas nem exceder a:", options: ["8 horas.","10 horas.","12 horas.","14 horas."], answer: "12 horas." },
    { question: "A reserva de um tripulante empregado em táxi aéreo (RBAC 135) terá duração máxima de:", options: ["6 horas.","8 horas.","10 horas.","12 horas."], answer: "10 horas." },
    { question: "O trabalho realizado como 'tripulante extra a serviço' é computado para qual limite?", options: ["Apenas para os limites de horas de voo mensais e anuais.","Apenas para o limite de pousos da jornada.","Para os limites da jornada de trabalho, mas não para os limites de horas de voo.","Não é computado para nenhum limite, apenas remunerado."], answer: "Para os limites da jornada de trabalho, mas não para os limites de horas de voo." },
    { question: "Qual acréscimo de repouso é concedido a um tripulante caso o empregador opte por aumentar o limite de pousos de 4 para 5 em uma jornada de tripulação simples?", options: ["Nenhum, apenas a remuneração é maior.","1 hora de repouso adicional.","2 horas de repouso adicional.","A jornada é reduzida em 1 hora."], answer: "2 horas de repouso adicional." },
    { question: "A jornada de trabalho é considerada encerrada 45 minutos após a parada final dos motores em que tipo de voo?", options: ["Voos domésticos.","Voos internacionais.","Voos de carga.","Todos os tipos de voo."], answer: "Voos internacionais." },
    { question: "A jornada de trabalho semanal não excederá a 44 horas, e a mensal não excederá a:", options: ["160 horas.","176 horas.","180 horas.","200 horas."], answer: "176 horas." },
    { question: "Para tripulantes em serviços de táxi aéreo (RBAC 135), qual o período máximo de trabalho consecutivo no local de operação, fora da base contratual?", options: ["15 dias.","17 dias.","21 dias.","30 dias."], answer: "17 dias." },
    { question: "Um tripulante pode ser escalado para uma terceira madrugada consecutiva de trabalho?", options: ["Não, em nenhuma hipótese.","Sim, se receber remuneração dobrada.","Sim, desde que como tripulante extra em voo de retorno à base.","Sim, a critério do comandante da aeronave."], answer: "Sim, desde que como tripulante extra em voo de retorno à base." },
    { question: "O que a lei define como 'acomodação adequada' para repouso do tripulante fora da base contratual?", options: ["Quarto compartilhado com banheiro privativo.","Quarto individual em hotel com no mínimo 3 estrelas.","Quarto individual com banheiro privativo e condições adequadas de higiene, segurança, ruído e controle de temperatura/luminosidade.","Qualquer local de descanso disponibilizado pela empresa."], answer: "Quarto individual com banheiro privativo e condições adequadas de higiene, segurança, ruído e controle de temperatura/luminosidade." },
    { question: "Uma folga só pode ter início após a conclusão do:", options: ["Briefing pós-voo.","Período de sobreaviso.","Repouso da jornada.","Ciclo de 7 dias de trabalho."], answer: "Repouso da jornada." },
    { question: "Quando um tripulante faz um curso de 30 dias fora da base, ele tem direito a uma licença remunerada no regresso. Quantos dias de licença ele receberá?", options: ["1 dia.","2 dias.","3 dias.","Nenhum, pois o curso é considerado trabalho."], answer: "2 dias." },
    { question: "Para voos internacionais de longo curso, o limite de 6 períodos de 24h para o início da folga pode ser ampliado em 36 horas. Qual a contrapartida da empresa?", options: ["Pagar um bônus ao tripulante.","Conceder 2 períodos de folga a mais no mesmo mês.","Aumentar o período de férias em 2 dias.","Nenhuma, a ampliação já é prevista em lei."], answer: "Conceder 2 períodos de folga a mais no mesmo mês." },
    { question: "Diárias de hospedagem e alimentação pagas pela empresa integram a remuneração do tripulante para cálculo de férias e 13º salário?", options: ["Sim, integram totalmente.","Apenas 50% do valor.","Não, são consideradas ajudas de custo e não integram a remuneração.","Apenas se o valor exceder 50% do salário base."], answer: "Não, são consideradas ajudas de custo e não integram a remuneração." },
    { question: "A parcela variável da remuneração do tripulante é obrigatoriamente calculada com base nas horas de voo, exceto para qual modalidade de serviço aéreo?", options: ["Transporte aéreo público regular.","Aviação agrícola, onde pode ser baseada na área produzida.","Voos internacionais de longo curso.","Voos de instrução em escolas de aviação."], answer: "Aviação agrícola, onde pode ser baseada na área produzida." },
    { question: "Qual o intervalo máximo em que a alimentação deve ser servida ao tripulante durante um voo?", options: ["2 horas.","3 horas.","4 horas.","Não há intervalo máximo definido."], answer: "4 horas." },
    { question: "Para tripulantes de helicópteros, o período de alimentação de 60 minutos é computado na jornada de trabalho?", options: ["Sim, integralmente.","Apenas 30 minutos são computados.","Não, o período não é computado na jornada.","Apenas se a alimentação ocorrer a bordo de unidades marítimas."], answer: "Não, o período não é computado na jornada." },
    { question: "O empregador deve controlar a validade do CMA e CHT de seus tripulantes. De quem é a responsabilidade de manter o CMA em dia?", options: ["Exclusivamente do empregador.","Do sindicato da categoria.","Do tripulante, com o empregador controlando a validade.","Exclusivamente do tripulante."], answer: "Do tripulante, com o empregador controlando a validade." },
    { question: "Em que meses as empresas devem manter rodízio na concessão de férias entre tripulantes do mesmo equipamento?", options: ["Março, Abril, Setembro e Outubro.","Junho, Julho, Novembro e Dezembro.","Janeiro, Fevereiro, Julho e Dezembro.","A lei não especifica meses para rodízio."], answer: "Janeiro, Fevereiro, Julho e Dezembro." },
    { question: "Qual o interstício (intervalo) mínimo entre duas transferências permanentes para um mesmo tripulante?", options: ["6 meses.","1 ano.","180 dias.","2 anos."], answer: "2 anos." },
    { question: "Na transferência provisória, o tripulante tem direito a uma licença remunerada no regresso. Se a transferência durar 40 dias, quantos dias de licença ele terá?", options: ["2 dias.","3 dias.","4 dias.","5 dias."], answer: "3 dias." },
    { question: "Na transferência permanente, a ajuda de custo não pode ser inferior a 4 vezes o salário mensal. Além disso, o tripulante tem direito a dispensa do trabalho por quantos dias?", options: ["5 dias.","8 dias.","10 dias.","15 dias."], answer: "8 dias." },
    { question: "Qual a função do copiloto em uma tripulação composta ou de revezamento?", options: ["Ele é o substituto eventual do comandante.","Ele não é considerado substituto eventual do comandante nesses tipos de tripulação.","Ele assume o comando na segunda metade do voo.","Ele é responsável pela comunicação com o controle de tráfego aéreo."], answer: "Ele não é considerado substituto eventual do comandante nesses tipos de tripulação." },
    { question: "A guarda de valores pelos comissários de voo é condicionada a quê?", options: ["À autorização prévia do comandante.","À presença de um segurança a bordo.","À existência de local apropriado e seguro na aeronave, atestado pelo empregador.","A voos com duração superior a 4 horas."], answer: "À existência de local apropriado e seguro na aeronave, atestado pelo empregador." },
    { question: "A autoridade de aviação civil (ANAC) pode determinar a modificação da composição de uma tripulação baseando-se em quais critérios?", options: ["Apenas no custo da operação.","Apenas na antiguidade dos tripulantes escalados.","No interesse da segurança operacional, características da rota e do voo.","Apenas na solicitação da empresa aérea."], answer: "No interesse da segurança operacional, características da rota e do voo." },
    { question: "Qual o limite mensal de sobreavisos para um tripulante da aviação regular (RBAC 121)?", options: ["6 sobreavisos.","8 sobreavisos.","10 sobreavisos.","Não há limite."], answer: "8 sobreavisos." },
    { question: "Caso um tripulante não seja acionado durante o sobreaviso, o que deve ser respeitado antes do início de uma nova tarefa?", options: ["Um período de folga de 24 horas.","Um repouso mínimo de 8 horas.","Ele pode iniciar uma nova tarefa imediatamente.","Um intervalo de 2 horas."], answer: "Um repouso mínimo de 8 horas." },
    { question: "Para tripulantes de aeronaves convencionais e turboélice em serviço regular, o limite de pousos pode ser aumentado em até quantos pousos?", options: ["1 pouso.","2 pousos.","3 pousos.","Não pode ser aumentado."], answer: "2 pousos." },
    { question: "Em caso de desvio para um aeroporto de alternativa, quantos pousos podem ser acrescidos aos limites normais da jornada?", options: ["Nenhum, o limite deve ser respeitado.","Apenas 1 pouso.","2 pousos.","Sem limite de pousos, em caso de alternativa."], answer: "Apenas 1 pouso." },
    { question: "Se um tripulante opera diferentes tipos de aeronaves (ex: jato e turboélice), qual limite de horas de voo mensal e anual deve ser respeitado?", options: ["O limite superior.","Uma média entre os dois limites.","O limite inferior.","O tripulante escolhe qual limite seguir."], answer: "O limite inferior." },
    { question: "Qual o período de tempo de voo considerado noturno para fins de jornada de trabalho (baseado no fuso da base contratual)?", options: ["Das 18h de um dia às 6h do dia seguinte.","Das 21h de um dia às 5h do dia seguinte.","Das 22h de um dia às 6h do dia seguinte.","Das 0h às 6h."], answer: "Das 18h de um dia às 6h do dia seguinte." },
    { question: "O Sistema de Gerenciamento de Risco de Fadiga Humana pode alterar limites de jornada e repouso, mas para superar 12h de jornada ou diminuir 12h de repouso em tripulação simples, é necessário:", options: ["Apenas autorização da ANAC.","Apenas autorização do comandante.","Convenção ou acordo coletivo de trabalho.","Relatório de fadiga assinado pelo tripulante."], answer: "Convenção ou acordo coletivo de trabalho." },
    { question: "Um tripulante de voo ou de cabine pode prestar serviço remunerado para um operador ao qual não tem vínculo por mais de uma vez ao ano?", options: ["Sim, até 3 vezes ao ano.","Sim, quantas vezes forem necessárias.","Não, a prestação desse serviço não pode ocorrer por mais de uma vez ao ano.","Sim, se o serviço for inferior a 15 dias."], answer: "Não, a prestação desse serviço não pode ocorrer por mais de uma vez ao ano." },
    { question: "A escala semanal para tripulantes de táxi aéreo (RBAC 135) deve ser divulgada com qual antecedência mínima?", options: ["1 dia (24 horas).","2 dias (48 horas).","5 dias.","7 dias."], answer: "2 dias (48 horas)." },
    { question: "Para voos exclusivamente cargueiros (RBAC 121), a empresa pode divulgar escala semanal com antecedência de 2 dias para a primeira semana e de quantos dias para as semanas seguintes?", options: ["2 dias.","5 dias.","7 dias.","10 dias."], answer: "7 dias." },
    { question: "Em voos com tripulação composta, será assegurado um número de acomodações para descanso a bordo igual ao número de:", options: ["Tripulantes da tripulação mínima.","Tripulantes somados à tripulação simples.","Metade do total de tripulantes.","Comissários de voo."], answer: "Tripulantes somados à tripulação simples." },
    { question: "Em voos com tripulação de revezamento, o número de acomodações para descanso a bordo deve ser igual a:", options: ["Um terço do total de tripulantes.","Metade do total de tripulantes.","O número total de tripulantes.","O número de tripulantes da tripulação simples."], answer: "Metade do total de tripulantes." },
    { question: "Quando o empregador é um órgão da administração pública, as regras sobre a obrigatoriedade de contrato de trabalho direto se aplicam?", options: ["Sim, aplicam-se as mesmas regras do setor privado.","Não, as regras não se aplicam no exercício de missões institucionais ou de poder de polícia.","Sim, mas com flexibilização de prazos.","A lei não aborda essa situação."], answer: "Não, as regras não se aplicam no exercício de missões institucionais ou de poder de polícia." },
    { question: "Quando o operador da aeronave poderá utilizar instrutores que não estejam a ele vinculados por contrato de trabalho?", options: ["A qualquer momento para reduzir custos.","Apenas em voos internacionais.","Quando em seu quadro não existirem instrutores habilitados para o equipamento específico.","A lei proíbe essa prática."], answer: "Quando em seu quadro não existirem instrutores habilitados para o equipamento específico." },
    { question: "A folga de um tripulante em serviço regular (RBAC 121) deve ter no mínimo 24 horas consecutivas e deve incluir, pelo menos duas vezes ao mês:", options: ["Uma sexta-feira e um sábado.","Um sábado e um domingo consecutivos.","Um domingo e uma segunda-feira.","Dois dias úteis consecutivos."], answer: "Um sábado e um domingo consecutivos." },
    { question: "Se um tripulante em situação de reserva for acionado para um voo, o tempo remunerado como reserva será contabilizado como?", options: ["Apenas a primeira hora de reserva.","Apenas as horas que excederem a franquia mínima.","O período entre o início da reserva e o início do voo.","O tempo de reserva não é remunerado se o tripulante voar."], answer: "O período entre o início da reserva e o início do voo." },
    { question: "As frações de hora de voo são computadas para efeito de remuneração?", options: ["Não, apenas horas inteiras são computadas.","Sim, são computadas.","Apenas frações acima de 30 minutos.","Depende de acordo coletivo."], answer: "Sim, são computadas." },
    { question: "É permitido converter férias em abono pecuniário (vender as férias)?", options: ["Sim, até 1/3 das férias.","Sim, integralmente, se o tripulante concordar.","Não, ressalvados os casos de rescisão de contrato.","Apenas com autorização do sindicato."], answer: "Não, ressalvados os casos de rescisão de contrato." },
    { question: "Se um voo terminar em um aeroporto a mais de 50km da base e diferente dela, o repouso mínimo será acrescido de no mínimo:", options: ["30 minutos.","1 hora.","2 horas.","4 horas."], answer: "2 horas." },
    { question: "Qual o limite de horas de voo em uma mesma jornada para um integrante de tripulação de helicópteros?", options: ["7 horas.","8 horas.","9 horas e 30 minutos.","11 horas."], answer: "8 horas." },
    { question: "A implementação do Sistema de Gerenciamento de Risco de Fadiga Humana deve ser acompanhada por quem?", options: ["Apenas pela diretoria da empresa.","Apenas pela ANAC.","Pelo sindicato da categoria profissional.","Por uma consultoria internacional."], answer: "Pelo sindicato da categoria profissional." }
];

// BANCO DE QUESTÕES - ASPECTOS FISIOLÓGICOS - NÍVEL 1
const quizDataFisiologiaN1 = [
    { question: "Qual é a principal função do sistema circulatório?", options: ["Produzir hormônios para o corpo.", "Transportar nutrientes, gases e excretas.", "Realizar a digestão dos alimentos.", "Proteger o corpo contra impactos físicos."], answer: "Transportar nutrientes, gases e excretas." },
    { question: "Quais são os três componentes principais do sistema circulatório?", options: ["Cérebro, pulmões e rins.", "Sangue, vasos sanguíneos e coração.", "Músculos, ossos e pele.", "Estômago, intestino e fígado."], answer: "Sangue, vasos sanguíneos e coração." },
    { question: "O que caracteriza o sangue arterial?", options: ["É rico em gás carbônico e pobre em oxigênio.", "É rico em oxigênio e pobre em gás carbônico.", "Não possui células sanguíneas.", "É transportado apenas por veias."], answer: "É rico em oxigênio e pobre em gás carbônico." },
    { question: "Qual tipo de vaso sanguíneo é responsável por levar o sangue DO coração PARA os tecidos do corpo?", options: ["Veias", "Capilares", "Artérias", "Vênulas"], answer: "Artérias" },
    { question: "Qual tipo de vaso sanguíneo possui válvulas para impedir o refluxo do sangue?", options: ["Artérias", "Capilares", "Arteríolas", "Veias"], answer: "Veias" },
    { question: "Onde ocorrem as trocas de gases e nutrientes entre o sangue e os tecidos?", options: ["Nas artérias de grosso calibre.", "No interior do coração.", "Nos capilares sanguíneos.", "Nas veias profundas."], answer: "Nos capilares sanguíneos." },
    { question: "O coração humano é dividido em quantas cavidades?", options: ["Duas: um átrio e um ventrículo.", "Três: dois átrios e um ventrículo.", "Quatro: dois átrios e dois ventrículos.", "Cinco, incluindo a aorta."], answer: "Quatro: dois átrios e dois ventrículos." },
    { question: "A pequena circulação (ou circulação pulmonar) descreve qual trajeto do sangue?", options: ["Coração -> Corpo -> Coração", "Coração -> Pulmões -> Coração", "Cérebro -> Coração -> Cérebro", "Fígado -> Coração -> Fígado"], answer: "Coração -> Pulmões -> Coração" },
    { question: "A grande circulação (ou circulação sistêmica) é responsável por:", options: ["Levar sangue venoso aos pulmões.", "Oxigenar o sangue.", "Levar sangue arterial para todos os tecidos do corpo.", "Apenas irrigar o próprio coração."], answer: "Levar sangue arterial para todos os tecidos do corpo." },
    { question: "Qual a causa mais comum do Infarto Agudo do Miocárdio (IAM)?", options: ["Estresse emocional súbito.", "Oclusão de uma artéria coronária por um trombo.", "Uma infecção viral no coração.", "Exercício físico exagerado."], answer: "Oclusão de uma artéria coronária por um trombo." },
    { question: "O que é aterosclerose, no contexto do IAM?", options: ["O enfraquecimento do músculo cardíaco.", "Uma arritmia cardíaca.", "A formação de placas de gordura nas artérias.", "A dilatação de uma veia."], answer: "A formação de placas de gordura nas artérias." },
    { question: "Qual dos seguintes é um fator de risco MODIFICÁVEL para o IAM?", options: ["Idade avançada.", "História familiar de doença cardíaca.", "Sexo masculino.", "Tabagismo."], answer: "Tabagismo." },
    { question: "Qual é o sintoma mais clássico do infarto?", options: ["Dor de cabeça intensa na nuca.", "Dor no peito tipo aperto, peso ou pressão.", "Cãibras nas pernas.", "Tosse seca e persistente."], answer: "Dor no peito tipo aperto, peso ou pressão." },
    { question: "A dor do infarto, ao contrário da angina estável, geralmente:", options: ["Melhora com o repouso.", "Dura apenas alguns segundos.", "Não alivia com o repouso e dura vários minutos.", "É aliviada com um copo de água."], answer: "Não alivia com o repouso e dura vários minutos." },
    { question: "Além da dor no peito, quais outros sintomas podem acompanhar um infarto?", options: ["Aumento de apetite e euforia.", "Suores, falta de ar e náuseas.", "Visão turva e zumbido no ouvido.", "Coceira e manchas na pele."], answer: "Suores, falta de ar e náuseas." },
    { question: "Qual camada da atmosfera concentra cerca de 80% dos gases e onde ocorre a maioria dos fenômenos meteorológicos?", options: ["Estratosfera", "Mesosfera", "Termosfera", "Troposfera"], answer: "Troposfera" },
    { question: "Qual o principal gás que compõe a atmosfera terrestre, com aproximadamente 78%?", options: ["Oxigênio", "Dióxido de Carbono", "Argônio", "Nitrogênio"], answer: "Nitrogênio" },
    { question: "Como a pressão atmosférica se comporta com o aumento da altitude?", options: ["Aumenta.", "Diminui.", "Permanece constante.", "Aumenta até 10.000 pés e depois diminui."], answer: "Diminui." },
    { question: "O que é hipóxia?", options: ["Excesso de oxigênio nos tecidos.", "Deficiência de oxigênio nos tecidos.", "Excesso de gás carbônico no sangue.", "Formação de bolhas de nitrogênio no sangue."], answer: "Deficiência de oxigênio nos tecidos." },
    { question: "Qual lei dos gases explica a expansão de gases nas cavidades do corpo com o aumento da altitude?", options: ["Lei de Dalton", "Lei de Henry", "Lei de Boyle-Mariotte", "Lei de Charles"], answer: "Lei de Boyle-Mariotte" },
    { question: "A formação de bolhas de nitrogênio no sangue devido a uma descompressão rápida é explicada pela:", options: ["Lei de Boyle-Mariotte", "Lei de Henry", "Lei de Dalton", "Lei da Gravidade"], answer: "Lei de Henry" },
    { question: "O que é Disbarismo ou Aerodilatação?", options: ["É a falta de oxigênio em altitude.", "É a desorientação espacial durante o voo.", "É a expansão de gases presos nas cavidades do corpo.", "É a fadiga causada por longos períodos de voo."], answer: "É a expansão de gases presos nas cavidades do corpo." },
    { question: "Qual dos seguintes é um exemplo de disbarismo?", options: ["Hipóxia", "Fadiga", "Barotite (dor de ouvido)", "Jet lag"], answer: "Barotite (dor de ouvido)" },
    { question: "O que significa 'Tempo Útil de Consciência' (TUC)?", options: ["O tempo total de um voo.", "O tempo que a tripulação tem para descansar.", "O tempo disponível para tomar ações corretivas após uma despressurização.", "O tempo que a aeronave leva para atingir a altitude de cruzeiro."], answer: "O tempo disponível para tomar ações corretivas após uma despressurização." },
    { question: "O que é fadiga em aviação?", options: ["Um estado de euforia causado pela altitude.", "O tédio durante um voo longo.", "Um estado de reduzida capacidade de desempenho mental ou físico.", "Apenas o cansaço muscular após um voo."], answer: "Um estado de reduzida capacidade de desempenho mental ou físico." },
    { question: "Qual a principal função do sistema linfático?", options: ["Bombear sangue para o corpo.", "Drenar o excesso de líquido dos tecidos e atuar na defesa do organismo.", "Produzir adrenalina.", "Regular a temperatura corporal."], answer: "Drenar o excesso de líquido dos tecidos e atuar na defesa do organismo." },
    { question: "O que é a linfa?", options: ["O mesmo que sangue venoso.", "Um fluido derivado do sangue, composto por plasma e células de defesa.", "O líquido que preenche as articulações.", "Um hormônio produzido pelo pâncreas."], answer: "Um fluido derivado do sangue, composto por plasma e células de defesa." },
    { question: "O que são linfonodos (ou gânglios linfáticos)?", options: ["Glândulas que produzem saliva.", "Pequenas estruturas que filtram a linfa e atuam na defesa.", "Células que transportam oxigênio.", "Vasos que conectam o coração ao pulmão."], answer: "Pequenas estruturas que filtram a linfa e atuam na defesa." },
    { question: "Qual é a principal causa do surgimento de varizes nas pernas?", options: ["Excesso de artérias.", "Mal funcionamento das válvulas venosas.", "Obstrução dos capilares.", "Pressão arterial muito baixa."], answer: "Mal funcionamento das válvulas venosas." },
    { question: "Qual o nome do movimento de contração do coração?", options: ["Diástole", "Sístole", "Hematose", "Fagocitose"], answer: "Sístole" },
    { question: "O relaxamento do músculo cardíaco é chamado de:", options: ["Sístole", "Diástole", "Apneia", "Isquemia"], answer: "Diástole" },
    { question: "O que é o 'sopro cardíaco'?", options: ["Um sinal normal do funcionamento do coração.", "Um ruído causado pela disfunção de uma válvula cardíaca.", "O som da respiração ouvido no peito.", "Um sintoma de pressão alta."], answer: "Um ruído causado pela disfunção de uma válvula cardíaca." },
    { question: "Qual estrutura é considerada o 'marcapasso natural' do coração, controlando os batimentos?", options: ["Válvula Mitral", "Feixe de His", "Nódulo Sinoatrial", "Ventrículo Esquerdo"], answer: "Nódulo Sinoatrial" },
    { question: "Qual a principal diferença entre a constituição das paredes de artérias e veias?", options: ["Veias não possuem tecido muscular.", "Artérias possuem paredes mais finas e menos elásticas.", "Artérias possuem paredes mais espessas e elásticas para suportar alta pressão.", "Artérias possuem válvulas e veias não."], answer: "Artérias possuem paredes mais espessas e elásticas para suportar alta pressão." },
    { question: "O que é hematose?", options: ["A coagulação do sangue.", "A produção de células sanguíneas.", "A troca gasosa que ocorre nos pulmões, onde o sangue se torna arterial.", "O processo de filtragem do sangue pelos rins."], answer: "A troca gasosa que ocorre nos pulmões, onde o sangue se torna arterial." },
    { question: "Qual dos seguintes alimentos é mais propenso a causar gases (aerodilatação) em altitude?", options: ["Água", "Peito de frango grelhado", "Refrigerantes", "Arroz branco"], answer: "Refrigerantes" },
    { question: "Qual fator de risco para IAM NÃO pode ser controlado ou mudado?", options: ["Sedentarismo", "Hipertensão arterial", "História familiar", "Colesterol alto"], answer: "História familiar" },
    { question: "A dor do infarto pode irradiar para quais partes do corpo?", options: ["Apenas para o braço direito.", "Para o braço esquerdo, mandíbula e/ou costas.", "Apenas para as pernas.", "A dor do infarto nunca irradia."], answer: "Para o braço esquerdo, mandíbula e/ou costas." },
    { question: "Um dos primeiros exames realizados na suspeita de IAM, que pode fechar o diagnóstico em até 50% dos casos, é o:", options: ["Raio-X de tórax", "Exame de urina", "Eletrocardiograma (ECG)", "Tomografia computadorizada"], answer: "Eletrocardiograma (ECG)" },
    { question: "A deficiência de oxigênio em altitude, explicada pela Lei de Dalton, ocorre porque:", options: ["A porcentagem de oxigênio no ar diminui.", "A pressão parcial do oxigênio diminui, dificultando sua absorção.", "O ar fica mais denso e pesado.", "A temperatura mais baixa congela as moléculas de oxigênio."], answer: "A pressão parcial do oxigênio diminui, dificultando sua absorção." },
    { question: "O que é o plasma sanguíneo?", options: ["A parte celular do sangue, contendo hemácias.", "A parte líquida do sangue, composta principalmente por água e proteínas.", "São as plaquetas responsáveis pela coagulação.", "É um tipo de glóbulo branco."], answer: "A parte líquida do sangue, composta principalmente por água e proteínas." },
    { question: "O que é recomendado para a alimentação da tripulação em voo para evitar desconfortos?", options: ["Alimentos ricos em gordura para dar mais energia.", "Muitas bebidas gasificadas para hidratação.", "Alimentos ricos em hidratos de carbono e evitar gases.", "Proteínas de digestão lenta para manter a saciedade."], answer: "Alimentos ricos em hidratos de carbono e evitar gases." },
    { question: "O que é o ciclo circadiano, frequentemente afetado em voos longos?", options: ["O ciclo menstrual feminino.", "O ciclo de vida de uma célula.", "O ritmo biológico de aproximadamente 24 horas do corpo.", "O ciclo de manutenção da aeronave."], answer: "O ritmo biológico de aproximadamente 24 horas do corpo." },
    { question: "Qual a principal causa da formação de edema (inchaço) nos membros inferiores?", options: ["Excesso de vasos sanguíneos.", "Disfunção do sistema de drenagem linfática.", "Pressão arterial elevada.", "Falta de vitaminas."], answer: "Disfunção do sistema de drenagem linfática." },
    { question: "Em um transplante cardíaco, o que é a principal causa de rejeição do órgão?", options: ["O tamanho do coração ser diferente.", "Incompatibilidade do sistema imunológico (ABO e HLA).", "A idade do doador.", "O tempo da cirurgia ser muito longo."], answer: "Incompatibilidade do sistema imunológico (ABO e HLA)." },
    { question: "Ruídos e vibrações na cabine podem causar quais efeitos nos tripulantes?", options: ["Melhora da concentração.", "Sonolência e relaxamento.", "Diminuição da acuidade visual e auditiva.", "Aumento da força muscular."], answer: "Diminuição da acuidade visual e auditiva." },
    { question: "Qual o nome da válvula que separa o átrio esquerdo do ventrículo esquerdo?", options: ["Válvula Aórtica", "Válvula Tricúspide", "Válvula Pulmonar", "Válvula Bicúspide (Mitral)"], answer: "Válvula Bicúspide (Mitral)" },
    { question: "O sangue venoso, vindo do corpo, entra no coração por qual câmara?", options: ["Átrio Esquerdo", "Ventrículo Esquerdo", "Átrio Direito", "Ventrículo Direito"], answer: "Átrio Direito" },
    { question: "O que são 'elementos figurados' do sangue?", options: ["Apenas o plasma e a água.", "As proteínas e sais minerais.", "As células sanguíneas (hemácias, leucócitos) e as plaquetas.", "Apenas as hemácias."], answer: "As células sanguíneas (hemácias, leucócitos) e as plaquetas." },
    { question: "Qual a recomendação principal para prevenir um IAM?", options: ["Tomar aspirina diariamente sem prescrição.", "Evitar qualquer tipo de exercício físico.", "Manter uma dieta balanceada e praticar atividades físicas.", "Consumir bebidas alcoólicas moderadamente."], answer: "Manter uma dieta balanceada e praticar atividades físicas." }
];

// BANCO DE QUESTÕES - ASPECTOS FISIOLÓGICOS - NÍVEL 2
const quizDataFisiologiaN2 = [
    { question: "A Lei de Dalton, aplicada à aviação, explica a hipóxia porque com a altitude, a pressão total diminui, e consequentemente...", options: ["A porcentagem de oxigênio no ar diminui.", "A pressão parcial do oxigênio diminui.", "O nitrogênio se torna tóxico.", "A temperatura do ar aumenta."], answer: "A pressão parcial do oxigênio diminui." },
    { question: "Segundo a Lei de Boyle-Mariotte, se a pressão atmosférica cai pela metade (a 18.000 pés), o que acontece com o volume de um gás preso em uma cavidade corporal?", options: ["Diminui pela metade.", "Permanece o mesmo.", "Dobra de volume.", "Triplica de volume."], answer: "Dobra de volume." },
    { question: "A doença da descompressão, com formação de bolhas de Nitrogênio no sangue, é um exemplo prático de qual lei dos gases?", options: ["Lei de Dalton", "Lei de Boyle-Mariotte", "Lei de Henry", "Lei de Gay-Lussac"], answer: "Lei de Henry" },
    { question: "Qual é a pressão atmosférica padrão ao nível do mar em milímetros de mercúrio (mmHg)?", options: ["1013 mmHg", "760 mmHg", "560 mmHg", "380 mmHg"], answer: "760 mmHg" },
    { question: "Na fase 'Compensatória' da hipóxia (entre 6.000 e 12.000 pés), a saturação de oxigênio (SPO2) do sangue cai para aproximadamente:", options: ["98%", "93%", "83%", "70%"], answer: "83%" },
    { question: "Na fase 'Crítica' da hipóxia (acima de 20.000 pés), a saturação de oxigênio (SPO2) pode atingir níveis perigosamente baixos, em torno de:", options: ["80%", "75%", "60%", "50%"], answer: "60%" },
    { question: "A uma altitude de 35.000 pés, qual é o Tempo Útil de Consciência (TUC) aproximado para um indivíduo em repouso?", options: ["120 segundos", "60 segundos", "30 segundos", "15 segundos"], answer: "30 segundos" },
    { question: "Se um tripulante estiver em atividade física durante uma despressurização a 28.000 pés, seu TUC será de aproximadamente:", options: ["60 segundos", "45 segundos", "30 segundos", "15 segundos"], answer: "30 segundos" },
    { question: "Qual dos seguintes marcadores de necrose miocárdica é mais específico para o diagnóstico de Infarto Agudo do Miocárdio?", options: ["Mioglobina", "Lactato-desidrogenase (LDH)", "Troponinas (T ou I)", "Aspartato-aminotransferase (AST)"], answer: "Troponinas (T ou I)" },
    { question: "A dor do IAM é frequentemente desencadeada por esforço físico, estresse ou após uma refeição exagerada. Qual o termo médico para essa dor no peito?", options: ["Dispepsia", "Cefaleia", "Angina pectoris", "Parestesia"], answer: "Angina pectoris" },
    { question: "Qual fator de risco para IAM é considerado 'não modificável'?", options: ["Sobrepeso e obesidade.", "Diabetes Mellitus.", "Idade acima de 45 anos para homens.", "Sedentarismo."], answer: "Idade acima de 45 anos para homens." },
    { question: "O risco de doença arterial coronariana aumenta se o pai ou irmão de um indivíduo foi diagnosticado com a doença antes de qual idade?", options: ["45 anos", "55 anos", "65 anos", "70 anos"], answer: "55 anos" },
    { question: "Qual dos seguintes quadros clínicos NÃO cardíacos pode mimetizar os sintomas de dor no peito de um IAM?", options: ["Fratura de fêmur", "Refluxo gastroesofágico", "Conjutivite", "Cistite"], answer: "Refluxo gastroesofágico" },
    { question: "A sístole e a diástole correspondem, respectivamente, a quais pressões arteriais em uma medição normal?", options: ["80 mmHg e 120 mmHg", "120 mmHg e 80 mmHg", "100 mmHg e 60 mmHg", "140 mmHg e 90 mmHg"], answer: "120 mmHg e 80 mmHg" },
    { question: "Qual neurotransmissor, liberado em situações de estresse, aumenta a frequência cardíaca?", options: ["Acetilcolina", "Serotonina", "Dopamina", "Adrenalina"], answer: "Adrenalina" },
    { question: "Qual neurotransmissor, associado ao sistema parassimpático, diminui a frequência cardíaca?", options: ["Adrenalina", "Noradrenalina", "Acetilcolina", "GABA"], answer: "Acetilcolina" },
    { question: "Qual a constituição dos capilares sanguíneos, que permite a eficiência nas trocas gasosas?", options: ["Tecido conjuntivo, muscular e endotélio.", "Apenas tecido muscular liso.", "Apenas uma camada de células endoteliais.", "Tecido conjuntivo e endotélio."], answer: "Apenas uma camada de células endoteliais." },
    { question: "O sangue venoso, pobre em oxigênio, é bombeado do Ventrículo Direito para qual vaso sanguíneo?", options: ["Artéria Aorta", "Veias Cavas", "Artéria Pulmonar", "Veias Pulmonares"], answer: "Artéria Pulmonar" },
    { question: "O sangue arterial, vindo dos pulmões, entra no coração através das Veias Pulmonares e chega em qual câmara?", options: ["Átrio Direito", "Ventrículo Direito", "Átrio Esquerdo", "Ventrículo Esquerdo"], answer: "Átrio Esquerdo" },
    { question: "O processo de hematose ocorre por qual mecanismo de transporte através da membrana celular?", options: ["Transporte ativo com gasto de energia.", "Osmose.", "Difusão simples, sem gasto de energia.", "Endocitose."], answer: "Difusão simples, sem gasto de energia." },
    { question: "Qual o tempo máximo que um coração para transplante pode ser armazenado em solução salina fria até a cirurgia?", options: ["1 hora", "2 horas", "4 horas", "8 horas"], answer: "4 horas" },
    { question: "No procedimento de transplante, qual substância anticoagulante é injetada antes da secção dos vasos cardíacos?", options: ["Aspirina", "Varfarina", "Heparina", "Clopidogrel"], answer: "Heparina" },
    { question: "Além da compatibilidade do sistema ABO, qual outro sistema de antígenos é crucial para evitar a rejeição em transplantes cardíacos?", options: ["Sistema Rh", "Sistema MNS", "Sistema HLA (Antígenos Leucocitários Humanos)", "Sistema Duffy"], answer: "Sistema HLA (Antígenos Leucocitários Humanos)" },
    { question: "A disfunção das válvulas cardíacas que causa refluxo de sangue é chamada de:", options: ["Aterosclerose", "Valvopatia", "Miocardite", "Endocardite"], answer: "Valvopatia" },
    { question: "Por que a linfa, ao contrário do sangue, é incolor ou ligeiramente rosada?", options: ["Porque não possui plaquetas.", "Porque não possui leucócitos.", "Porque não possui hemácias.", "Porque não possui plasma."], answer: "Porque não possui hemácias." },
    { question: "O que são 'ínguas' que aparecem durante uma infecção?", options: ["Acúmulo de gordura sob a pele.", "Veias varicosas inflamadas.", "Linfonodos que aumentam de tamanho ao amadurecer células de defesa.", "Pequenos coágulos sanguíneos."], answer: "Linfonodos que aumentam de tamanho ao amadurecer células de defesa." },
    { question: "Qual é a variação aproximada da temperatura a cada 1000 pés de altitude na troposfera?", options: ["Aumenta 2°C", "Diminui 1°C", "Diminui 2°C", "Permanece constante"], answer: "Diminui 2°C" },
    { question: "A 'maré barométrica' se refere a uma variação diária da pressão atmosférica. Em quais horários a pressão atinge seus valores máximos?", options: ["04:00 e 16:00", "10:00 e 22:00", "08:00 e 20:00", "Meio-dia e Meia-noite"], answer: "10:00 e 22:00" },
    { question: "Forças de aceleração linear, como as sentidas na decolagem, podem aumentar o risco de quais complicações em indivíduos predispostos?", options: ["Crise de asma e bronquite.", "AVC Hemorrágico e Insuficiência Cardíaca Congestiva.", "Gastrite e úlcera gástrica.", "Cálculos renais e infecção urinária."], answer: "AVC Hemorrágico e Insuficiência Cardíaca Congestiva." },
    { question: "Qual a porcentagem aproximada de Oxigênio na composição do ar atmosférico?", options: ["78%", "21%", "1%", "0,03%"], answer: "21%" },
    { question: "A aerodontia é um tipo de disbarismo que se manifesta como:", options: ["Dor de ouvido.", "Dor nos seios da face.", "Dor de dente.", "Distensão abdominal."], answer: "Dor de dente." },
    { question: "Qual o principal motivo para recomendar uma dieta mais rica em hidratos de carbono do que em proteínas para a tripulação?", options: ["Hidratos de carbono são mais saborosos.", "A digestão de proteínas requer mais oxigênio.", "Proteínas causam mais sono.", "Hidratos de carbono previnem a desidratação."], answer: "A digestão de proteínas requer mais oxigênio." },
    { question: "O que é isquemia do miocárdio?", options: ["É a inflamação do músculo cardíaco.", "É a morte (necrose) do tecido cardíaco.", "É a redução do fluxo sanguíneo e da oferta de oxigênio para o músculo cardíaco.", "É o aumento anormal do tamanho do coração."], answer: "É a redução do fluxo sanguíneo e da oferta de oxigênio para o músculo cardíaco." },
    { question: "Após a ruptura de uma placa de aterosclerose, qual componente do sangue se adere à lesão para formar um coágulo?", options: ["Hemácias", "Leucócitos", "Plasma", "Plaquetas"], answer: "Plaquetas" },
    { question: "Na fisiopatologia do IAM, a falta de ATP (energia) e a queda do pH dentro da célula cardíaca levam à liberação de qual íon que pode causar arritmias?", options: ["Sódio (Na+)", "Cálcio (Ca++)", "Potássio (K+)", "Magnésio (Mg++)"], answer: "Potássio (K+)" },
    { question: "Qual o nome da camada mais externa do coração?", options: ["Endocárdio", "Miocárdio", "Pericárdio", "Epicárdio"], answer: "Epicárdio" },
    { question: "O que são as artérias coronárias?", options: ["Artérias que levam sangue para o cérebro.", "Artérias que irrigam a parede do próprio coração (miocárdio).", "As principais artérias dos braços.", "Artérias que se conectam diretamente aos pulmões."], answer: "Artérias que irrigam a parede do próprio coração (miocárdio)." },
    { question: "O que é 'insuficiência cardíaca', a principal indicação para um transplante?", options: ["Quando o coração bate rápido demais.", "Quando o coração não consegue bombear sangue suficiente para o corpo.", "Quando as artérias do coração estão entupidas.", "Quando o paciente tem pressão alta."], answer: "Quando o coração não consegue bombear sangue suficiente para o corpo." },
    { question: "Por que pacientes transplantados precisam tomar medicamentos imunossupressores?", options: ["Para fortalecer o novo coração.", "Para prevenir a formação de coágulos.", "Para diminuir a resposta imune do corpo e evitar a rejeição do órgão.", "Para controlar a pressão arterial."], answer: "Para diminuir a resposta imune do corpo e evitar a rejeição do órgão." },
    { question: "A exposição prolongada a vibrações em voo pode causar repercussões sobre quais sentidos?", options: ["Olfato e paladar.", "Tato e equilíbrio.", "Audição e visão.", "Apenas o equilíbrio."], answer: "Audição e visão." },
    { question: "O estresse é definido como uma reação que tende a perturbar qual estado do organismo?", options: ["Estado de alerta.", "Equilíbrio homeostático.", "Metabolismo basal.", "Ciclo de sono."], answer: "Equilíbrio homeostático." },
    { question: "Onde os leucócitos (células de defesa) podem ser encontrados, além do sangue?", options: ["Apenas dentro dos ossos.", "Eles nunca saem dos vasos sanguíneos.", "Apenas no cérebro.", "Podem migrar do sangue para os tecidos e para a linfa."], answer: "Podem migrar do sangue para os tecidos e para a linfa." },
    { question: "A frequência cardíaca normal em um adulto em repouso é de aproximadamente:", options: ["40-50 bpm", "50-60 bpm", "70-80 bpm", "90-100 bpm"], answer: "70-80 bpm" },
    { question: "Qual dos seguintes fatores NÃO influencia a pressão atmosférica?", options: ["Altitude", "Temperatura", "Longitude", "Umidade do ar"], answer: "Longitude" },
    { question: "A aerogastria e aerocolia são manifestações de disbarismo em qual parte do corpo?", options: ["Ouvidos e seios da face.", "Dentes.", "Trato gastrointestinal (estômago e intestinos).", "Pulmões."], answer: "Trato gastrointestinal (estômago e intestinos)." },
    { question: "Se um estetoscópio é usado para medir a pressão arterial, os sons são audíveis quando a pressão na bolsa de ar está:", options: ["Acima da pressão sistólica.", "Abaixo da pressão diastólica.", "Entre a pressão sistólica e a diastólica.", "Os sons nunca são audíveis."], answer: "Entre a pressão sistólica e a diastólica." },
    { question: "Qual o nome da válvula que fica entre o átrio direito e o ventrículo direito?", options: ["Válvula Mitral (Bicúspide)", "Válvula Aórtica", "Válvula Tricúspide", "Válvula Pulmonar"], answer: "Válvula Tricúspide" },
    { question: "O sangue sai do ventrículo esquerdo e vai para o corpo através de qual grande vaso sanguíneo?", options: ["Artéria Pulmonar", "Veia Cava Superior", "Artéria Aorta", "Veias Pulmonares"], answer: "Artéria Aorta" },
    { question: "O que é 'necrose celular', consequência final de um IAM não tratado?", options: ["A multiplicação descontrolada das células.", "A inflamação do tecido.", "A morte do tecido por falta de oxigênio e nutrientes.", "A cicatrização do músculo cardíaco."], answer: "A morte do tecido por falta de oxigênio e nutrientes." },
    { question: "A principal medida para minimizar os efeitos de ruídos na cabine?", options: ["Falar mais alto.", "Ouvir música com fones de ouvido.", "Utilizar protetores auriculares.", "Manter as janelas fechadas."], answer: "Utilizar protetores auriculares." }
];

// NOVO BANCO DE QUESTÕES - PREPARATÓRIO PARA PROVA RPA
const quizDataProvaRPA = [
    { question: "A duração do trabalho do aeronauta, contada entre a hora da apresentação e a hora em que o mesmo é encerrado, denomina-se:", options: ["Tempo de Voo", "Jornada de Trabalho", "Repouso", "Folga"], answer: "Jornada de Trabalho" },
    { question: "Qual o limite (número) mínimo de folgas mensais para um aeronauta empregado na aviação regular (RBAC 121)?", options: ["8 folgas", "10 folgas", "12 folgas", "Depende do mês"], answer: "10 folgas" },
    { question: "O período de tempo não inferior a 24 horas consecutivas, em que o aeronauta, em sua base contratual e sem prejuízo da remuneração, está desobrigado de qualquer atividade, denomina-se:", options: ["Repouso", "Reserva", "Sobreaviso", "Folga"], answer: "Folga" },
    { question: "Em um voo internacional do Brasil para a Europa, a tripulação será, no mínimo, de qual tipo?", options: ["Simples", "Mínima", "Composta ou de Revezamento", "Depende do número de passageiros apenas"], answer: "Composta ou de Revezamento" },
    { question: "Conforme o RBAC 63, qual documento emitido pela ANAC formaliza a certificação de uma pessoa para atuar em operações aéreas?", options: ["Contrato de Trabalho", "Certificado de Habilitação Técnica (CHT)", "Certificado Médico Aeronáutico (CMA)", "Licença"], answer: "Licença" },
    { question: "Para qual classe de CMA (Certificado Médico Aeronáutico) um Comissário de Voo deve se candidatar?", options: ["1ª Classe", "2ª Classe", "3ª Classe", "4ª Classe"], answer: "2ª Classe" },
    { question: "Segundo o RBAC 121, uma operação de transporte aéreo público regular se aplica a aviões com configuração máxima certificada de assentos para mais de:", options: ["9 assentos", "19 assentos", "30 assentos", "50 assentos"], answer: "19 assentos" },
    { question: "Qual o limite máximo de horas que um contrato de trabalho por prazo determinado pode durar, antes de se tornar indeterminado?", options: ["1 ano", "2 anos", "3 anos", "Não há limite"], answer: "2 anos" },
    { question: "O limite de trabalho na aviação é de 44h por semana e quantas horas por mês?", options: ["160 horas", "176 horas", "180 horas", "200 horas"], answer: "176 horas" },
    { question: "O que significa CLT?", options: ["Comissão de Leis Trabalhistas", "Consolidação das Leis do Trabalho", "Contrato Livre de Trabalho", "Central de Logística e Transporte"], answer: "Consolidação das Leis do Trabalho" },
    { question: "Quando um comissário pode receber hora extra, segundo suas anotações?", options: ["Apenas em voos internacionais.", "Nunca, pois o salário é fixo.", "Quando não há hora extra, no chão, pode sim.", "Apenas com autorização do sindicato."], answer: "Quando não há hora extra, no chão, pode sim." },
    { question: "O que é um contrato de trabalho 'oneroso'?", options: ["Um contrato com muitas obrigações.", "Um contrato em que o trabalho é eventual.", "Um contrato que é remunerado.", "Um contrato que não pode ser substituído."], answer: "Um contrato que é remunerado." },
    { question: "Um trabalho 'contínuo' significa que ele:", options: ["Não é eventual, o trabalho prestado se opõe ao ocasional.", "Deve ser executado sem pausas para descanso.", "É um contrato sem data para terminar.", "Pode ser feito de casa."], answer: "Não é eventual, o trabalho prestado se opõe ao ocasional." },
    { question: "O que é 'Abono pecuniário' de férias?", options: ["O direito de tirar 30 dias de férias.", "A possibilidade de dividir as férias em dois períodos.", "Solicitar a conversão de 1/3 das férias em dinheiro.", "O adiantamento do salário das férias."], answer: "Solicitar a conversão de 1/3 das férias em dinheiro." },
    { question: "Com quantas faltas injustificadas o empregado perde totalmente o direito a férias?", options: ["Até 5 faltas", "De 15 a 23 faltas", "De 24 a 32 faltas", "Acima de 32 faltas"], answer: "Acima de 32 faltas" },
    { question: "A licença-maternidade de uma aeronauta é de:", options: ["90 dias", "120 dias", "150 dias", "180 dias"], answer: "180 dias" },
    { question: "A empregada gestante tem direito a licença-maternidade de 120 dias a partir de qual momento?", options: ["A partir do 1º mês de gestação.", "A partir do 6º mês de gestação.", "A partir do 28º dia antes do parto.", "Apenas após o nascimento."], answer: "A partir do 28º dia antes do parto." },
    { question: "O que é um 'Ato Inseguro'?", options: ["Uma falha mecânica na aeronave.", "Condições meteorológicas adversas.", "Imprudência, negligência ou imperícia do trabalhador.", "Má iluminação no local de trabalho."], answer: "Imprudência, negligência ou imperícia do trabalhador." },
    { question: "O que é uma 'Condição Insegura'?", options: ["Um erro cometido pelo empregado.", "Uma falha no ambiente de trabalho, como um piso escorregadio.", "Um ato de sabotagem de terceiros.", "Um acidente ocorrido no trajeto."], answer: "Uma falha no ambiente de trabalho, como um piso escorregadio." },
    { question: "Qual das seguintes opções NÃO é considerada uma doença do trabalho?", options: ["Doenças degenerativas.", "Doença profissional, adquirida pelo exercício de determinada atividade.", "Doença inerente a grupo etário.", "Doença que não produz incapacidade laborativa."], answer: "Doenças degenerativas." },
    { question: "A CIPA (Comissão Interna de Prevenção de Acidentes) é obrigatória para empresas com mais de quantos empregados?", options: ["10 empregados", "20 empregados", "50 empregados", "100 empregados"], answer: "20 empregados" },
    { question: "Quem indica os representantes do empregador para a CIPA?", options: ["Os próprios empregados, por votação.", "O sindicato da categoria.", "O próprio empregador.", "O Ministério do Trabalho."], answer: "O próprio empregador." },
    { question: "Qual é a função do comissário como auxiliar direto do comandante?", options: ["Pilotar a aeronave na ausência do copiloto.", "Realizar a manutenção preventiva dos motores.", "Zelar pela segurança, conforto e tranquilidade dos passageiros.", "Fazer o plano de voo."], answer: "Zelar pela segurança, conforto e tranquilidade dos passageiros." },
    { question: "O que é 'Despedida Indireta'?", options: ["Quando o empregado pede demissão.", "O término do contrato de experiência.", "A dispensa por justa causa provocada pelo empregador devido a uma falta grave.", "Um acordo de demissão entre as partes."], answer: "A dispensa por justa causa provocada pelo empregador devido a uma falta grave." },
    { question: "Qual das seguintes opções é uma justa causa para a rescisão do contrato pelo empregador?", options: ["Faltar um dia sem justificativa.", "Ato de improbidade, como roubo ou fraude.", "Chegar atrasado esporadicamente.", "Ter uma opinião diferente do chefe."], answer: "Ato de improbidade, como roubo ou fraude." },
    { question: "Qual o prazo para pagamento da remuneração das férias?", options: ["Até o 5º dia útil do mês das férias.", "Junto com o salário do mês seguinte.", "Até 2 dias antes do início das férias.", "No último dia das férias."], answer: "Até 2 dias antes do início das férias." },
    { question: "A jornada de trabalho para o aeronauta em turnos ininterruptos de revezamento é, em regra, de:", options: ["6 horas", "8 horas", "10 horas", "12 horas"], answer: "6 horas" },
    { question: "Em uma jornada de trabalho que ultrapassa 6 horas, qual é o intervalo obrigatório para repouso e alimentação?", options: ["No mínimo 30 minutos.", "No mínimo 1 hora.", "No máximo 1 hora.", "Não há intervalo obrigatório."], answer: "No mínimo 1 hora." },
    { question: "Quando o empregador pode descontar um dano causado pelo empregado?", options: ["A qualquer momento que um dano ocorrer.", "Apenas se essa possibilidade for acordada no contrato ou se houver dolo (intenção).", "Apenas com autorização judicial.", "Nunca, o risco é do empregador."], answer: "Apenas se essa possibilidade for acordada no contrato ou se houver dolo (intenção)." },
    { question: "A licença paternidade é de quantos dias?", options: ["1 dia", "2 dias", "5 dias", "7 dias"], answer: "5 dias" },
    { question: "O que significa 'Jornada de Trabalho Subordinado'?", options: ["O empregado trabalha sem supervisão.", "O empregado está submetido ao comando e direção do empregador.", "O trabalho é realizado de forma autônoma.", "O trabalho é voluntário."], answer: "O empregado está submetido ao comando e direção do empregador." },
    { question: "O que é o 'Dever de Fidelidade' do empregado?", options: ["Ser amigo pessoal do empregador.", "Não revelar os segredos da empresa.", "Trabalhar apenas para um empregador durante toda a vida.", "Concordar com todas as decisões da empresa."], answer: "Não revelar os segredos da empresa." },
    { question: "O que significa dizer que o contrato de trabalho é 'pessoal'?", options: ["Que pode ser feito verbalmente.", "Que o trabalho deve ser prestado pelo próprio empregado, não podendo ser substituído.", "Que o contrato é confidencial.", "Que o empregado pode escolher seus horários."], answer: "Que o trabalho deve ser prestado pelo próprio empregado, não podendo ser substituído." },
    { question: "Qual a função do 'abono de emergência'?", options: ["É um adiantamento de salário em caso de necessidade.", "É uma indenização paga ao empregado demitido.", "É um valor pago para cobrir despesas médicas.", "Não há menção a este abono nos materiais."], answer: "Não há menção a este abono nos materiais." }, // Nota: Verifiquei e não encontrei este termo.
    { question: "O que é considerado um acidente sofrido fora do local e horário de trabalho?", options: ["Nunca é considerado acidente de trabalho.", "Quando o empregado está executando ordem espontânea para a empresa.", "Apenas se o empregado estiver de sobreaviso.", "Apenas durante o trajeto de ida e volta da residência."], answer: "Quando o empregado está executando ordem espontânea para a empresa." },
    { question: "Qual o nome da comissão que tem como objetivo observar e relatar condições de risco nos ambientes de trabalho?", options: ["Comissão de Ética", "CIPA", "Conselho Fiscal", "Diretoria Executiva"], answer: "CIPA" },
    { question: "Quando o comandante pode impedir o embarque de um passageiro alcoolizado?", options: ["Apenas se o passageiro se recusar a pagar a passagem.", "A qualquer momento, se julgar que há risco para a segurança do voo.", "Apenas em voos internacionais.", "Nunca, o passageiro tem o direito de embarcar."], answer: "A qualquer momento, se julgar que há risco para a segurança do voo." },
    { question: "Qual o primeiro dever do comissário ao auxiliar o comandante?", options: ["Servir o café.", "Documentar as informações do voo.", "Zelar pela segurança dos passageiros.", "Realizar o check-in."], answer: "Zelar pela segurança dos passageiros." },
    { question: "O que são 'falhas mecânicas'?", options: ["Erros de pilotagem.", "Condições meteorológicas.", "Material defeituoso.", "Atos de sabotagem."], answer: "Material defeituoso." },
    { question: "O que é um 'caso fortuito'?", options: ["Negligência do operador.", "Um evento previsível e evitável.", "Um evento imprevisível, como condições meteorológicas extremas.", "Um erro de manutenção."], answer: "Um evento imprevisível, como condições meteorológicas extremas." },
    { question: "Qual o direito do trabalhador em caso de despedida sem justa causa?", options: ["Receber apenas o saldo de salário.", "Não tem direito a nenhuma verba rescisória.", "Receber todas as verbas, incluindo multa de 40% do FGTS.", "Apenas o aviso prévio."], answer: "Receber todas as verbas, incluindo multa de 40% do FGTS." },
    { question: "Qual o nome do documento que comprova o Contrato Individual de Trabalho?", options: ["CPF", "RG", "CTPS (Carteira de Trabalho e Previdência Social)", "Passaporte"], answer: "CTPS (Carteira de Trabalho e Previdência Social)" },
    { question: "O período noturno no chão, para fins de jornada, é considerado entre:", options: ["18h e 06h", "21h e 04h", "22h e 05h", "00h e 06h"], answer: "22h e 05h" },
    { question: "O que significa DTP, conforme suas anotações?", options: ["Direito Total do Passageiro", "Dispensa do Trabalho Profissional", "Não há menção clara do significado.", "Direito do Trabalho e Previdenciário"], answer: "Direito do Trabalho e Previdenciário" },
    { question: "Qual o principal dever do empregado em relação à sujeição?", options: ["Apenas obedecer ordens legais.", "Submeter-se ao poder de comando do empregador.", "Aceitar qualquer tarefa designada.", "Trabalhar horas extras sempre que solicitado."], answer: "Submeter-se ao poder de comando do empregador." },
    { question: "A aposentadoria por invalidez é devida ao segurado considerado...", options: ["Com mais de 65 anos.", "Incapaz para o trabalho, sem condições de reabilitação.", "Afastado por mais de 15 dias.", "Desempregado."], answer: "Incapaz para o trabalho, sem condições de reabilitação." },
    { question: "O que é 'Ato de improbidade'?", options: ["Uma falta disciplinar leve.", "Desonestidade, fraude, roubo.", "Chegar atrasado.", "Desobedecer a uma ordem."], answer: "Desonestidade, fraude, roubo." },
    { question: "O que é 'Incontinência de conduta ou mau procedimento'?", options: ["Falar em voz alta no trabalho.", "Ser desorganizado.", "Comportamento imoral, desrespeitoso ou ofensivo.", "Não usar o uniforme corretamente."], answer: "Comportamento imoral, desrespeitoso ou ofensivo." },
    { question: "Qual o prazo para o empregador anotar a admissão na CTPS do empregado?", options: ["24 horas", "48 horas", "72 horas", "Uma semana"], answer: "48 horas" },
    { question: "O que a Constituição Federal proíbe em relação à discriminação no trabalho?", options: ["Diferença de salário para o mesmo cargo.", "Contratação baseada em experiência.", "Exigência de uniforme.", "Proibição de qualquer tipo de discriminação, seja por sexo, idade, cor, etc."], answer: "Proibição de qualquer tipo de discriminação, seja por sexo, idade, cor, etc." }
];

// NOVO BANCO DE QUESTÕES - EMERGÊNCIA A BORDO
const quizDataEmergenciaN1 = [
    { question: "Qual o nome dado ao corredor único em uma aeronave?", options: ["Widebody", "Narrowbody", "Single Deck", "Main Deck"], answer: "Narrowbody" },
    { question: "Qual o nome do equipamento utilizado para embarcar Pessoas com Deficiência ou mobilidade reduzida?", options: ["Finger", "Escada de Rampa", "Ambulift", "Cadeira Robótica"], answer: "Ambulift" },
    { question: "O local onde as refeições e bebidas são armazenadas e preparadas na aeronave é chamado de:", options: ["Cockpit", "Galley", "Bin", "Lavatory"], answer: "Galley" },
    { question: "Por segurança, qual procedimento deve ser realizado com os trolleys e caixas Atlas na galley antes da decolagem e pouso?", options: ["Devem ser mantidos abertos.", "Devem ser colocados no corredor.", "Devem ser travados em seus compartimentos.", "Devem ser esvaziados."], answer: "Devem ser travados em seus compartimentos." },
    { question: "Qual o nome da cabine de comando da aeronave?", options: ["Galley", "Cockpit", "Crew Desk", "Jump Seat"], answer: "Cockpit" },
    { question: "O que é uma 'emergência' a bordo?", options: ["Qualquer situação que cause desconforto aos passageiros.", "Toda situação anormal que põe em risco a segurança da aeronave e seus ocupantes.", "Atrasos superiores a 1 hora.", "A falta de um item do serviço de bordo."], answer: "Toda situação anormal que põe em risco a segurança da aeronave e seus ocupantes." },
    { question: "Uma ocorrência que causa óbito ou ferimentos graves e estragos consideráveis à aeronave é classificada como:", options: ["Incidente", "Anormalidade", "Acidente", "Falha técnica"], answer: "Acidente" },
    { question: "Uma ocorrência que põe em risco a segurança, mas causa apenas ferimentos leves, é classificada como:", options: ["Acidente", "Incidente", "Emergência Prevista", "Alerta"], answer: "Incidente" },
    { question: "Qual dos seguintes é considerado um fator 'casual' que pode ocasionar um acidente?", options: ["Erro de pilotagem.", "Avaria mecânica.", "Pássaros na turbina (Bird Strike).", "Carregamento irregular."], answer: "Pássaros na turbina (Bird Strike)." },
    { question: "O teste de evacuação total de uma aeronave para homologação deve ser realizado em no máximo:", options: ["60 segundos", "90 segundos", "120 segundos", "3 minutos"], answer: "90 segundos" },
    { question: "A estação de comissário é equipada com um assento retrátil chamado:", options: ["Poltrona Executiva", "Jump Seat", "Assento Crítico", "Cadeira de Evacuação"], answer: "Jump Seat" },
    { question: "O cinto de segurança dos tripulantes, por ser mais seguro, abrange qual região?", options: ["Apenas abdominal.", "Apenas peitoral.", "Tóraco-abdominal.", "Apenas os ombros."], answer: "Tóraco-abdominal." },
    { question: "Voos transoceânicos (além de 370 km da costa) exigem qual equipamento de flutuação individual?", options: ["Assentos flutuantes", "Boias circulares", "Coletes salva-vidas", "A própria asa da aeronave"], answer: "Coletes salva-vidas" },
    { question: "A luz sinalizadora de um colete salva-vidas, ativada em contato com a água, tem duração de aproximadamente:", options: ["1 hora", "4 horas", "8 horas", "24 horas"], answer: "8 horas" },
    { question: "Qual é o procedimento correto para inflar o colete salva-vidas?", options: ["Inflar assim que vestir, dentro da cabine.", "Inflar apenas quando estiver na soleira da porta ou sobre a asa.", "Inflar somente após já estar na água.", "Apenas o comandante pode autorizar a inflação."], answer: "Inflar apenas quando estiver na soleira da porta ou sobre a asa." },
    { question: "As saídas TIPO I (primárias) são portas equipadas com:", options: ["Escada embutida", "Corda de escape", "Escape slide (escorregadeira) de pista simples", "Escape slide (escorregadeira) de pista dupla"], answer: "Escape slide (escorregadeira) de pista simples" },
    { question: "Qual é o coeficiente de evacuação de uma saída TIPO A (porta com escorregadeira de pista dupla)?", options: ["30 a 40 passageiros em 90s", "50 a 55 passageiros em 90s", "90 a 100 passageiros em 90s", "110 passageiros em 90s"], answer: "90 a 100 passageiros em 90s" },
    { question: "A janela de emergência da cabine de comando é classificada como qual tipo de saída?", options: ["Tipo I", "Tipo II", "Tipo III", "Tipo IV"], answer: "Tipo IV" },
    { question: "As escorregadeiras são fabricadas com qual material?", options: ["Lona de caminhão", "Plástico reforçado", "Borracha-neoprene", "Fibra de carbono"], answer: "Borracha-neoprene" },
    { question: "O cilindro de ar comprimido é responsável por qual porcentagem da inflação da escorregadeira?", options: ["100%", "80%", "60%", "40%"], answer: "40%" },
    { question: "O que é uma 'escorregadeira-barco' ou 'slide-bote'?", options: ["Uma escorregadeira que só pode ser usada em terra.", "Uma escorregadeira de pista dupla que pode ser usada como bote em pousos na água.", "Um bote inflável guardado separadamente da escorregadeira.", "Uma escorregadeira que se transforma em uma barraca."], answer: "Uma escorregadeira de pista dupla que pode ser usada como bote em pousos na água." },
    { question: "O que deve ser feito com a escorregadeira antes de abrir a porta da aeronave no pátio (em situação normal)?", options: ["Ela deve ser armada.", "Ela deve ser inflada para teste.", "Ela deve ser desarmada.", "Ela deve ser removida da porta."], answer: "Ela deve ser desarmada." },
    { question: "Em uma amerrissagem, para que serve a corda de escape rápido localizada nas janelas sobre as asas?", options: ["Para amarrar bagagens.", "Para ser presa na argola no extradorso da asa, servindo de apoio e equilíbrio.", "Para medir a profundidade da água.", "Para puxar o bote salva-vidas."], answer: "Para ser presa na argola no extradorso da asa, servindo de apoio e equilíbrio." },
    { question: "O que é um megafone e quando ele deve ser utilizado?", options: ["Para comunicação entre os tripulantes.", "Para tocar música ambiente.", "Sempre que houver perda do sistema de comunicação com os passageiros (PA).", "Apenas em evacuações em terra."], answer: "Sempre que houver perda do sistema de comunicação com os passageiros (PA)." },
    { question: "O Transmissor Localizador de Emergência (ELT) transmite o sinal de socorro em quais frequências (civil e militar)?", options: ["121.5 MHz (civil) e 243 MHz (militar)", "131.5 MHz (civil) e 253 MHz (militar)", "111.0 MHz (civil) e 222.0 MHz (militar)", "150.0 MHz (civil) e 300.0 MHz (militar)"], answer: "121.5 MHz (civil) e 243 MHz (militar)" },
    { question: "Qual o nome do rádio ELT de sobrevivência que é ativado por água?", options: ["Rádio-baliza", "Rádio de emergência", "Rádio-bóia", "Não existe esse equipamento."], answer: "Rádio-bóia" },
    { question: "O que o sinal de 'EVACUATION' adverte à tripulação?", options: ["Que o voo está atrasado.", "Que uma evacuação é iminente.", "Que há um passageiro indisciplinado.", "Que a aeronave está sendo reabastecida."], answer: "Que uma evacuação é iminente." },
    { question: "O extintor de Halon (gás) é eficaz por qual ação sobre o fogo?", options: ["Resfriamento", "Abafamento", "Isolamento", "Quebra da reação em cadeia"], answer: "Quebra da reação em cadeia" },
    { question: "Por que não se deve segurar no tubo difusor (corneta) de um extintor de CO2?", options: ["Porque ele pode explodir.", "Porque ele congela a temperaturas extremamente baixas (-70°C).", "Porque ele fica muito quente.", "Porque ele dá choque elétrico."], answer: "Porque ele congela a temperaturas extremamente baixas (-70°C)." },
    { question: "O que indica o 'placar indicativo de temperatura' do extintor fixo do lavatório?", options: ["A temperatura da cabine.", "Se o extintor está vencido.", "Que a temperatura no compartimento está subindo, escurecendo os pontos.", "A pressão interna do extintor."], answer: "Que a temperatura no compartimento está subindo, escurecendo os pontos." },
    { question: "O 'Detector de Fumaça' do lavatório pode disparar com qual substância além da fumaça?", options: ["Vapor de água", "Perfume", "Aerossóis como desodorante ou inseticida", "Poeira"], answer: "Aerossóis como desodorante ou inseticida" },
    { question: "Para que servem as 'Luvas de Amianto'?", options: ["Para proteger contra choques elétricos.", "Para proteger as mãos do frio em grandes altitudes.", "Para proteger as mãos e antebraços do calor no combate a incêndios.", "Para manusear alimentos quentes na galley."], answer: "Para proteger as mãos e antebraços do calor no combate a incêndios." },
    { question: "Qual a duração do fluxo de oxigênio do Capuz Anti-Fumaça (PBE)?", options: ["5 minutos", "10 minutos", "15 minutos", "30 minutos"], answer: "15 minutos" },
    { question: "A garrafa de oxigênio portátil (cilindro) fornece oxigênio a uma vazão de 4 litros/min na posição HI. Qual a sua autonomia?", options: ["Cerca de 30 minutos", "Cerca de 77 minutos", "Cerca de 2 horas", "Cerca de 3 horas"], answer: "Cerca de 77 minutos" },
    { question: "O Kit Médico (Doctor's Kit) pode ser utilizado por quem?", options: ["Qualquer comissário treinado.", "Apenas pelo chefe de cabine.", "Apenas por um médico com CRM válido que esteja a bordo.", "Qualquer passageiro que se voluntarie."], answer: "Apenas por um médico com CRM válido que esteja a bordo." },
    { question: "Qualquer anúncio feito da cabine de comando (cockpit) tem qual prioridade sobre os anúncios da cabine de passageiros?", options: ["Não tem prioridade.", "Tem a mesma prioridade.", "É prioritário e sobrepõe-se a qualquer outro.", "Depende da fase do voo."], answer: "É prioritário e sobrepõe-se a qualquer outro." },
    { question: "Qual a função da chave seletora de luzes de emergência no painel do comissário?", options: ["Ligar e desligar as luzes de leitura.", "Controlar a iluminação da galley.", "Ligar o sistema (ON) ou deixá-lo em modo automático (NORMAL/ARMED).", "Apenas testar as lâmpadas."], answer: "Ligar o sistema (ON) ou deixá-lo em modo automático (NORMAL/ARMED)." },
    { question: "De onde vem o ar utilizado para pressurizar e climatizar a cabine?", options: ["De tanques de oxigênio puro.", "Do ar externo capturado por turbinas especiais.", "Do ar 'sangrado' dos compressores dos motores ou da APU.", "De um sistema de ar condicionado elétrico."], answer: "Do ar 'sangrado' dos compressores dos motores ou da APU." },
    { question: "O que são as 'válvulas out-flow'?", options: ["Válvulas que injetam ar na cabine.", "Válvulas que regulam a saída do ar para controlar a pressão interna.", "Válvulas de emergência para liberar fumaça.", "Válvulas do sistema de combustível."], answer: "Válvulas que regulam a saída do ar para controlar a pressão interna." },
    { question: "A partir de qual altitude de cabine as máscaras de oxigênio caem automaticamente?", options: ["8.000 pés", "10.000 pés", "12.000 pés", "14.000 pés"], answer: "14.000 pés" },
    { question: "Qual a diferença entre uma despressurização 'Explosiva' e uma 'Rápida'?", options: ["A explosiva faz mais barulho.", "A rápida é mais perigosa.", "O tempo: explosiva ocorre em menos de 1 segundo, e a rápida em até 10 segundos.", "Não há diferença."], answer: "O tempo: explosiva ocorre em menos de 1 segundo, e a rápida em até 10 segundos." },
    { question: "Uma vez acionado, o gerador químico de oxigênio (PSU) pode ser interrompido?", options: ["Sim, pressionando um botão no painel.", "Sim, se a máscara for recolocada no compartimento.", "Não, ele fornecerá um fluxo contínuo e ininterrupto por cerca de 15 minutos.", "Sim, apenas o piloto pode desligá-lo."], answer: "Não, ele fornecerá um fluxo contínuo e ininterrupto por cerca de 15 minutos." },
    { question: "Em uma evacuação imprevista, qual é a primeira ação do comissário até a parada total da aeronave?", options: ["Abrir a porta.", "Gritar 'POSIÇÃO DE IMPACTO!'", "Gritar 'SENTA!'", "Checar o exterior da aeronave."], answer: "Gritar 'SENTA!'" },
    { question: "Se, ao verificar o visor da porta numa evacuação, o comissário notar fogo do lado de fora, o que ele deve fazer?", options: ["Abrir a porta mesmo assim.", "Permanecer junto à porta, gritar 'FOGO!' e reorientar os passageiros para outras saídas.", "Tentar apagar o fogo com o extintor.", "Aguardar ordens do comandante."], answer: "Permanecer junto à porta, gritar 'FOGO!' e reorientar os passageiros para outras saídas." },
    { question: "Durante o reabastecimento com passageiros a bordo, qual é a principal proibição?", options: ["Usar o banheiro.", "Circular pela cabine.", "Fumar ou manusear qualquer objeto que produza faísca.", "Dormir."], answer: "Fumar ou manusear qualquer objeto que produza faísca." },
    { question: "Qual o procedimento caso um passageiro entre em pânico?", options: ["Oferecer uma bebida alcoólica para acalmá-lo.", "Ignorá-lo para não chamar atenção.", "Conter o passageiro, se necessário com força, e avisar o comandante.", "Mudar o passageiro de assento."], answer: "Conter o passageiro, se necessário com força, e avisar o comandante." },
    { question: "Em caso de fumaça densa na cabine, qual a orientação correta?", options: ["Ficar em pé para respirar o ar mais limpo no teto.", "Abaixar-se e deslocar-se junto ao piso, cobrindo o nariz e a boca.", "Abrir as janelas de emergência imediatamente.", "Ligar os ventiladores individuais (gasper fan)."], answer: "Abaixar-se e deslocar-se junto ao piso, cobrindo o nariz e a boca." },
    { question: "O que é 'rescaldo'?", options: ["O relatório do acidente.", "A limpeza da cabine após o voo.", "O procedimento de verificar se não há reignição do fogo após usar um extintor.", "A contagem de passageiros."], answer: "O procedimento de verificar se não há reignição do fogo após usar um extintor." },
    { question: "Qual a principal medida de segurança com os equipamentos na galley antes da decolagem e pouso?", options: ["Ligar todos os fornos para pré-aquecer.", "Deixar os carrinhos (trolleys) no corredor para facilitar o serviço.", "Verificar se todos os trolleys e caixas estão devidamente travados.", "Esvaziar todos os tanques de água."], answer: "Verificar se todos os trolleys e caixas estão devidamente travados." },
    { question: "Na preparação da cabine para um pouso de emergência, qual é a instrução dada para a 'posição de impacto'?", options: ["Segurar o assento da frente com força.", "Inclinar-se para trás e relaxar.", "Cruzar os braços sobre o encosto da frente e apoiar a testa sobre eles.", "Colocar a cabeça entre os joelhos."], answer: "Cruzar os braços sobre o encosto da frente e apoiar a testa sobre eles." }
];

// NOVO BANCO DE QUESTÕES - EMERGÊNCIA A BORDO - NÍVEL 2
const quizDataEmergenciaN2 = [
    { question: "Qual a definição de 'Acidente Aeronáutico' segundo as normas?", options: ["Qualquer ocorrência que cause danos leves à aeronave.", "Ocorrência com intenção de causar danos, em que há morte, lesão grave ou a aeronave sofre dano substancial.", "Qualquer evento que atrase o voo em mais de 3 horas.", "Uma ocorrência onde apenas a tripulação sofre ferimentos."], answer: "Ocorrência com intenção de causar danos, em que há morte, lesão grave ou a aeronave sofre dano substancial." },
    { question: "Qual dos seguintes é um fator 'Técnico ou Material' que pode ocasionar um acidente?", options: ["Controle de tráfego aéreo ineficiente.", "Carregamento irregular da carga.", "Avarias mecânicas.", "Condições meteorológicas severas."], answer: "Avarias mecânicas." },
    { question: "O que a sigla ICAO (em português OACI) significa?", options: ["Organização de Aviação Civil Internacional.", "Instituto de Controle Aeronáutico Operacional.", "Agência Internacional de Companhias Aéreas.", "Organização de Acordos de Céus Internacionais."], answer: "Organização de Aviação Civil Internacional." },
    { question: "O prefixo de uma aeronave de nacionalidade brasileira sempre começa com quais duas letras?", options: ["BR ou BZ", "PT, PR, PP, PS, PU ou PH", "ANAC", "BRZ"], answer: "PT, PR, PP, PS, PU ou PH" },
    { question: "Em um pouso na água (amerrissagem), qual o procedimento correto com as escorregadeiras simples?", options: ["Devem ser infladas dentro da aeronave.", "Serão utilizadas como bote para até 10 pessoas.", "Serão utilizadas somente como apoio para flutuação.", "Não devem ser utilizadas de forma alguma."], answer: "Serão utilizadas somente como apoio para flutuação." },
    { question: "A luz sinalizadora de um colete salva-vidas é ativada por uma bateria em contato com:", options: ["Ar", "Pressão", "Qualquer líquido, incluindo álcool", "Água (doce ou salgada)"], answer: "Água (doce ou salgada)" },
    { question: "Em uma evacuação, qual a condição essencial para que uma saída seja considerada 'operativa'?", options: ["A porta deve abrir apenas parcialmente.", "Deve haver um comissário posicionado nela.", "A área externa deve estar livre de perigos, a porta abrir normalmente e o equipamento auxiliar funcionar.", "O motor daquele lado deve estar funcionando."], answer: "A área externa deve estar livre de perigos, a porta abrir normalmente e o equipamento auxiliar funcionar." },
    { question: "Para que serve o comando 'for ditching only' em uma escorregadeira-barco?", options: ["Para inflar a escorregadeira manualmente.", "Para liberar rapidamente a escorregadeira da aeronave em caso de pouso na água.", "Para acionar as luzes de emergência.", "Para murchar a escorregadeira."], answer: "Para liberar rapidamente a escorregadeira da aeronave em caso de pouso na água." },
    { question: "O que é 'extradorso da asa'?", options: ["A parte de baixo da asa.", "A ponta da asa (winglet).", "A parte de cima (costas) da asa.", "A parte da frente da asa (bordo de ataque)."], answer: "A parte de cima (costas) da asa." },
    { question: "Onde se localiza a faca para cortar a corda que liga a escorregadeira-barco à aeronave?", options: ["Na cabine de comando.", "No kit de primeiros socorros.", "No próprio bote/escorregadeira.", "Junto ao assento do comissário."], answer: "No próprio bote/escorregadeira." },
    { question: "O sistema de luzes de emergência é alimentado por:", options: ["Geradores dos motores.", "APU (Auxiliary Power Unit).", "Fonte externa (GPU).", "Baterias próprias, independentes do sistema normal."], answer: "Baterias próprias, independentes do sistema normal." },
    { question: "Qual a posição correta da chave seletora das luzes de emergência no painel do comissário APÓS o cheque pré-voo?", options: ["ON", "OFF", "ARMED", "NORMAL"], answer: "NORMAL" },
    { question: "O que são as 'válvulas bleeds'?", options: ["Válvulas de saída de ar da cabine.", "Válvulas que drenam o ar dos compressores dos motores para a pressurização e ar condicionado.", "Válvulas do sistema de combustível.", "Válvulas do sistema hidráulico."], answer: "Válvulas que drenam o ar dos compressores dos motores para a pressurização e ar condicionado." },
    { question: "O que mantém a 'altitude de cabine' artificialmente em 8.000 pés?", options: ["A velocidade da aeronave.", "O sistema de oxigênio de emergência.", "O controle da entrada e saída de ar através das válvulas bleeds e out-flow.", "A estrutura hermeticamente fechada da fuselagem."], answer: "O controle da entrada e saída de ar através das válvulas bleeds e out-flow." },
    { question: "Uma despressurização lenta é considerada perigosa por quê?", options: ["Causa mais danos estruturais à aeronave.", "É mais difícil de ser percebida pelos tripulantes.", "Gera mais fumaça na cabine.", "Sempre leva a uma despressurização explosiva."], answer: "É mais difícil de ser percebida pelos tripulantes." },
    { question: "No sistema fixo de oxigênio da cabine de passageiros, por que o gerador químico exala um cheiro característico ao ser acionado?", options: ["É um sinal de mau funcionamento.", "É o cheiro do ozônio sendo liberado.", "É uma característica normal da reação química que produz o oxigênio.", "É um aditivo para acalmar os passageiros."], answer: "É uma característica normal da reação química que produz o oxigênio." },
    { question: "Qual o objetivo de diminuir a intensidade das luzes da cabine para pousos e decolagens noturnas?", options: ["Para economizar energia.", "Para permitir que os passageiros durmam.", "Para adaptar a visão dos ocupantes ao ambiente externo em caso de evacuação.", "Para não ofuscar a visão dos pilotos."], answer: "Para adaptar a visão dos ocupantes ao ambiente externo em caso de evacuação." },
    { question: "O que é 'double catering'?", options: ["Servir duas refeições no mesmo voo.", "Abastecer a aeronave com o serviço de bordo para o voo de ida e de volta.", "Um tipo especial de trolley para bebidas.", "Um acordo entre duas empresas de catering."], answer: "Abastecer a aeronave com o serviço de bordo para o voo de ida e de volta." },
    { question: "Qual o procedimento de segurança quando se embarca com um motor acionado?", options: ["O embarque é proibido.", "Os passageiros devem usar protetores auriculares.", "O embarque deve ser feito pela porta do lado oposto ao motor em funcionamento.", "Todos os comissários devem ficar na porta de embarque."], answer: "O embarque deve ser feito pela porta do lado oposto ao motor em funcionamento." },
    { question: "O que é 'alijamento de combustível'?", options: ["Reabastecimento em voo.", "O ato de despejar combustível em voo para reduzir o peso da aeronave para um pouso de emergência.", "A verificação do nível de combustível antes da decolagem.", "Um vazamento de combustível na asa."], answer: "O ato de despejar combustível em voo para reduzir o peso da aeronave para um pouso de emergência." },
    { question: "Qual a principal função do FDR (Flight Data Recorder)?", options: ["Gravar as conversas na cabine de comando.", "Armazenar dados e parâmetros do voo, como altitude e velocidade.", "Transmitir a localização da aeronave em tempo real.", "Controlar o piloto automático."], answer: "Armazenar dados e parâmetros do voo, como altitude e velocidade." },
    { question: "No cheque pré-voo do manômetro da escorregadeira, o ponteiro deve estar em qual faixa?", options: ["Na faixa vermelha (EMPTY)", "Em qualquer posição, desde que não esteja no zero.", "Na faixa amarela (CAUTION)", "Na faixa verde (FULL / 2000-3000 PSI)"], answer: "Na faixa verde (FULL / 2000-3000 PSI)" },
    { question: "O que significa o termo 'cockpit estéril'?", options: ["Uma cabine de comando totalmente limpa e desinfetada.", "O período do voo (geralmente abaixo de 10.000 pés) em que conversas não essenciais são proibidas.", "Um cockpit com sistema de filtragem de ar avançado.", "A proibição de passageiros na cabine de comando."], answer: "O período do voo (geralmente abaixo de 10.000 pés) em que conversas não essenciais são proibidas." },
    { question: "Em uma preparação de cabine para emergência prevista, qual o sinal convencional para os passageiros assumirem a posição de impacto?", options: ["O comandante piscará as luzes da cabine.", "Um anúncio sonoro de 'BRACE, BRACE, BRACE'.", "Os comissários farão um sinal com as mãos.", "O aviso de atar cintos soará três vezes."], answer: "Um anúncio sonoro de 'BRACE, BRACE, BRACE'." },
    { question: "Qual a sequência de autorização para iniciar uma evacuação?", options: ["Comissário -> Copiloto -> Comandante.", "Qualquer tripulante pode iniciar a qualquer momento.", "Comandante -> Qualquer tripulante técnico -> Comissário (se a situação for evidente).", "Apenas o Chefe de Cabine pode autorizar."], answer: "Comandante -> Qualquer tripulante técnico -> Comissário (se a situação for evidente)." },
    { question: "Qual das seguintes situações é considerada uma 'evacuação evidente', onde o comissário pode iniciar o procedimento sem ordem direta?", options: ["Turbulência severa.", "Um passageiro passando mal.", "Fogo incontrolável na cabine ou torção de fuselagem.", "Atraso no desembarque."], answer: "Fogo incontrolável na cabine ou torção de fuselagem." },
    { question: "Qual a principal diferença entre os cintos de segurança dos passageiros e dos tripulantes?", options: ["O dos tripulantes é mais largo.", "O dos passageiros é de 4 pontas.", "O dos tripulantes possui cinto de inércia para o tórax (tóraco-abdominal).", "Não há diferença, são idênticos."], answer: "O dos tripulantes possui cinto de inércia para o tórax (tóraco-abdominal)." },
    { question: "O que é um 'assento flutuante', equipamento exigido para voos costeiros?", options: ["Um tipo de colete salva-vidas embutido no assento.", "O próprio assento da poltrona, que pode ser removido para flutuação.", "Um bote inflável localizado abaixo do assento.", "Uma boia que é distribuída aos passageiros."], answer: "O próprio assento da poltrona, que pode ser removido para flutuação." },
    { question: "Qual o procedimento correto para usar um assento flutuante?", options: ["Vestir o assento como um colete.", "Inflá-lo antes de sair da aeronave.", "Abraçar o assento contra o peito, segurando as alças.", "Sentar-se sobre ele na água."], answer: "Abraçar o assento contra o peito, segurando as alças." },
    { question: "Qual a sequência correta de ações ao usar o extintor de Água Pressurizada (AP)?", options: ["Pressionar o gatilho e depois girar o punho.", "Manter na horizontal e mirar no topo das chamas.", "Girar o punho, manter na vertical, pressionar o gatilho e dirigir o jato para a base do fogo.", "Sacudir o extintor antes de usar."], answer: "Girar o punho, manter na vertical, pressionar o gatilho e dirigir o jato para a base do fogo." },
    { question: "O gás Halon é eficaz, mas qual é o principal risco associado ao seu uso em ambientes fechados?", options: ["Pode causar queimaduras de frio.", "Desloca o oxigênio, podendo causar asfixia.", "É altamente corrosivo para os equipamentos.", "Deixa um resíduo de pó difícil de limpar."], answer: "Desloca o oxigênio, podendo causar asfixia." },
    { question: "Qual é o cheque pré-voo do Capuz Anti-Fumaça (PBE/CAPE)?", options: ["Verificar se está na cor correta.", "Pesar o equipamento para ver se está cheio.", "Verificar presença, validade e se o visor de status está na cor correta (azul).", "Testar o fluxo de oxigênio por 1 segundo."], answer: "Verificar presença, validade e se o visor de status está na cor correta (azul)." },
    { question: "Quantas máscaras de oxigênio existem em um módulo de PSU acima de uma fileira de 3 assentos?", options: ["Exatamente 3 máscaras.", "Duas máscaras.", "Uma máscara a mais que o número de assentos (4 máscaras).", "Depende da companhia aérea."], answer: "Uma máscara a mais que o número de assentos (4 máscaras)." },
    { question: "Em uma despressurização, por que é crucial que cada pessoa puxe apenas UMA máscara para si?", options: ["Para não rasgar as outras.", "Porque puxar uma máscara aciona o gerador de oxigênio daquele módulo.", "Para economizar oxigênio para os outros.", "As outras máscaras são de tamanhos diferentes."], answer: "Porque puxar uma máscara aciona o gerador de oxigênio daquele módulo." },
    { question: "Qual o procedimento dos comissários imediatamente após a queda das máscaras de oxigênio?", options: ["Correr para ajudar os passageiros.", "Sentar-se, colocar a máscara mais próxima e só depois ajudar os outros.", "Fazer um anúncio no PA.", "Ir para a galley e preparar água."], answer: "Sentar-se, colocar a máscara mais próxima e só depois ajudar os outros." },
    { question: "O que é 'pushback'?", options: ["O taxiamento da aeronave para a pista.", "O procedimento de empurrar a aeronave para trás, para longe do portão de embarque.", "A decolagem da aeronave.", "A inspeção externa da aeronave."], answer: "O procedimento de empurrar a aeronave para trás, para longe do portão de embarque." },
    { question: "Por que existem cinzeiros nos lavatórios, mesmo sendo proibido fumar?", options: ["É um requisito antigo que não foi removido.", "Para que, caso alguém desobedeça a regra, apague o cigarro em um local seguro em vez de jogá-lo na lixeira.", "Para descarte de chicletes.", "São cinzeiros decorativos."], answer: "Para que, caso alguém desobedeça a regra, apague o cigarro em um local seguro em vez de jogá-lo na lixeira." },
    { question: "Qual a nacionalidade de uma aeronave com o prefixo 'G-BVYC'?", options: ["Brasileira", "Americana", "Francesa", "Britânica (Reino Unido)"], answer: "Britânica (Reino Unido)" },
    { question: "A alocução de segurança pré-voo deve informar os passageiros sobre, no mínimo:", options: ["O cardápio do serviço de bordo.", "O nome de todos os tripulantes.", "Cintos de segurança, saídas de emergência, máscaras de oxigênio e coletes salva-vidas.", "O tempo de voo e a temperatura no destino."], answer: "Cintos de segurança, saídas de emergência, máscaras de oxigênio e coletes salva-vidas." },
    { question: "Por que se deve evitar o uso de aparelhos eletrônicos com rádio transmissor durante o voo?", options: ["Para economizar a bateria do aparelho.", "Porque podem interferir nos sistemas de navegação e comunicação da aeronave.", "Para não incomodar os outros passageiros.", "É apenas uma regra da companhia, sem base técnica."], answer: "Porque podem interferir nos sistemas de navegação e comunicação da aeronave." },
    { question: "No cheque de cabine antes da decolagem, qual o status correto dos encostos das poltronas?", options: ["Totalmente reclinados para conforto.", "Na posição vertical.", "Cada passageiro pode escolher.", "Reclinados pela metade."], answer: "Na posição vertical." },
    { question: "Em uma emergência preparada, qual o procedimento com bagagens de mão?", options: ["Devem ser levadas pelos passageiros.", "Devem ser colocadas nos corredores da aeronave.", "Devem ser guardadas nos gavetões ou sob o assento da frente.", "Devem ser jogadas para fora da aeronave."], answer: "Devem ser colocadas nos corredores da aeronave." },
    { question: "O que deve ser feito com sapatos de salto alto em uma evacuação?", options: ["Devem ser mantidos para proteger os pés.", "Devem ser retirados para não furar a escorregadeira.", "Devem ser guardados na bolsa de mão.", "Apenas saltos acima de 10 cm precisam ser retirados."], answer: "Devem ser retirados para não furar a escorregadeira." },
    { question: "Qual o primeiro passo ao encontrar um incêndio em uma lixeira de lavatório?", options: ["Jogar água imediatamente.", "Usar o extintor de Halon na base do fogo, através de qualquer fresta.", "Abrir a porta da lixeira para ver o tamanho do fogo.", "Evacuar o lavatório e trancar a porta."], answer: "Usar o extintor de Halon na base do fogo, através de qualquer fresta." },
    { question: "Após uma evacuação, qual é o ponto de encontro dos sobreviventes?", options: ["O mais próximo possível da aeronave.", "A uma distância segura, a favor do vento.", "A uma distância segura, contra o vento, para evitar fumaça.", "Não há um ponto de encontro definido."], answer: "A uma distância segura, contra o vento, para evitar fumaça." },
    { question: "O que é o 'briefing silencioso' ou '30-second review' que o comissário faz antes do pouso e decolagem?", options: ["Uma oração silenciosa pela segurança do voo.", "Uma revisão mental dos procedimentos de emergência da sua estação.", "Um momento de relaxamento para controlar o estresse.", "Uma checagem visual da cabine."], answer: "Uma revisão mental dos procedimentos de emergência da sua estação." },
    { question: "Qual a função do 'Gasper Fan'?", options: ["É o ventilador principal da cabine.", "É a saída de ar condicionado individual acima do assento do passageiro.", "É um exaustor de fumaça na galley.", "É o sistema de refrigeração do cockpit."], answer: "É a saída de ar condicionado individual acima do assento do passageiro." },
    { question: "O que é o 'cheque de abandono'?", options: ["Verificar se o pagamento do seguro foi feito.", "Um documento a ser preenchido após a evacuação.", "Verificar se não há nenhum passageiro esquecido antes de evacuar.", "Checar se o trem de pouso está travado."], answer: "Verificar se não há nenhum passageiro esquecido antes de evacuar." },
    { question: "Por que a refeição do Comandante deve ser diferente da do Copiloto?", options: ["Para evitar que ambos tenham uma intoxicação alimentar ao mesmo tempo.", "Porque o comandante tem preferência na escolha.", "É apenas uma tradição da aviação.", "Para testar diferentes fornecedores de catering."], answer: "Para evitar que ambos tenham uma intoxicação alimentar ao mesmo tempo." },
    { question: "Qual a finalidade do 'Briefing' realizado pelo comandante com a tripulação antes de um voo?", options: ["Apenas definir as posições a bordo.", "Discutir a escala de folgas.", "Passar informações essenciais sobre o voo, como meteorologia e procedimentos de emergência.", "Realizar um teste surpresa de conhecimentos."], answer: "Passar informações essenciais sobre o voo, como meteorologia e procedimentos de emergência." }
];

// NOVO BANCO DE QUESTÕES - METEOROLOGIA - NÍVEL 1
const quizDataMeteorologiaN1 = [
    { question: "Qual camada da atmosfera concentra aproximadamente 80% dos gases e onde ocorrem os fenômenos meteorológicos?", options: ["Estratosfera", "Mesosfera", "Termosfera", "Troposfera"], answer: "Troposfera" },
    { question: "Como a pressão atmosférica se comporta com o aumento da altitude?", options: ["Aumenta", "Diminui", "Permanece constante", "Aumenta até a tropopausa e depois diminui"], answer: "Diminui" },
    { question: "Qual instrumento é utilizado para medir a pressão atmosférica?", options: ["Termômetro", "Anemômetro", "Barômetro", "Higrômetro"], answer: "Barômetro" },
    { question: "O que são linhas isóbaras em uma carta meteorológica?", options: ["Linhas que unem pontos de igual temperatura.", "Linhas que unem pontos de igual pressão atmosférica.", "Linhas que indicam a direção do vento.", "Linhas que mostram a altitude das nuvens."], answer: "Linhas que unem pontos de igual pressão atmosférica." },
    { question: "Um sistema de alta pressão é geralmente associado a:", options: ["Tempo bom, com céu claro.", "Tempo ruim, com chuvas e tempestades.", "Ventos muito fortes.", "Nevoeiro denso."], answer: "Tempo bom, com céu claro." },
    { question: "O que é a Tropopausa?", options: ["A camada mais alta da atmosfera.", "A camada limite entre a Troposfera e a Estratosfera.", "A camada onde se formam as auroras boreais.", "A camada mais próxima do solo."], answer: "A camada limite entre a Troposfera e a Estratosfera." },
    { question: "Qual a principal característica da Estratosfera?", options: ["Concentração de vapor d'água.", "Ocorrência de trovoadas.", "Presença da camada de ozônio.", "Queda constante da temperatura com a altitude."], answer: "Presença da camada de ozônio." },
    { question: "O que é insolação?", options: ["A quantidade de chuva em um local.", "A energia solar que atinge a superfície da Terra.", "O processo de formação de nuvens.", "A temperatura do ar."], answer: "A energia solar que atinge a superfície da Terra." },
    { question: "O que é o efeito estufa?", options: ["O resfriamento da Terra durante a noite.", "O aquecimento da atmosfera pela absorção de radiação infravermelha.", "A destruição da camada de ozônio.", "A formação de chuva ácida."], answer: "O aquecimento da atmosfera pela absorção de radiação infravermelha." },
    { question: "A temperatura do ar, em condições normais na troposfera, diminui com a altitude a uma taxa aproximada de:", options: ["1°C a cada 1000m", "6.5°C a cada 1000m", "10°C a cada 1000m", "A temperatura aumenta com a altitude."], answer: "6.5°C a cada 1000m" },
    { question: "O que é uma 'inversão térmica'?", options: ["Uma queda brusca na temperatura.", "Uma camada de ar onde a temperatura aumenta com a altitude.", "O ponto de congelamento da água.", "A temperatura média de um dia."], answer: "Uma camada de ar onde a temperatura aumenta com a altitude." },
    { question: "Qual instrumento mede a temperatura do ar?", options: ["Barômetro", "Termômetro", "Anemômetro", "Pluviômetro"], answer: "Termômetro" },
    { question: "O que é umidade relativa do ar?", options: ["A quantidade total de água na atmosfera.", "A relação entre a quantidade de vapor d'água existente no ar e a quantidade máxima que poderia haver na mesma temperatura.", "A temperatura em que o vapor d'água se condensa.", "A pressão exercida pelo vapor d'água."], answer: "A relação entre a quantidade de vapor d'água existente no ar e a quantidade máxima que poderia haver na mesma temperatura." },
    { question: "O ponto de orvalho é a temperatura na qual:", options: ["A água ferve.", "O ar se torna saturado e o vapor d'água começa a se condensar.", "O gelo derrete.", "Ocorre a evaporação máxima."], answer: "O ar se torna saturado e o vapor d'água começa a se condensar." },
    { question: "O vento é gerado principalmente pela:", options: ["Rotação da Terra.", "Atração da Lua.", "Diferença de pressão atmosférica entre dois locais.", "Atividade vulcânica."], answer: "Diferença de pressão atmosférica entre dois locais." },
    { question: "O que mede um anemômetro?", options: ["A direção do vento.", "A velocidade ou intensidade do vento.", "A umidade do ar.", "A pressão atmosférica."], answer: "A velocidade ou intensidade do vento." },
    { question: "Qual é o nome dado ao processo de mudança do estado gasoso (vapor) para o líquido?", options: ["Evaporação", "Sublimação", "Condensação", "Fusão"], answer: "Condensação" },
    { question: "As nuvens são formadas por:", options: ["Gases leves como hélio.", "Fumaça e poluição.", "Gotículas de água ou cristais de gelo em suspensão.", "Apenas oxigênio puro."], answer: "Gotículas de água ou cristais de gelo em suspensão." },
    { question: "Nuvens do tipo 'Cirrus' são caracterizadas por:", options: ["Serem densas, escuras e causarem chuva forte.", "Terem aparência de flocos de algodão com base reta.", "Serem finas, fibrosas e de aparência delicada, compostas de cristais de gelo.", "Formarem camadas uniformes e acinzentadas."], answer: "Serem finas, fibrosas e de aparência delicada, compostas de cristais de gelo." },
    { question: "Qual gênero de nuvem está associado a trovoadas, chuvas fortes, granizo e ventos intensos?", options: ["Cirrus", "Stratus", "Cumulus", "Cumulonimbus"], answer: "Cumulonimbus" },
    { question: "Nuvens do estágio baixo são encontradas até qual altitude?", options: ["Até 2 km", "Entre 2 km e 7 km", "Acima de 7 km", "Acima de 13 km"], answer: "Até 2 km" },
    { question: "Qual tipo de nuvem é conhecido como 'nuvem de bom tempo'?", options: ["Nimbostratus", "Cumulonimbus", "Cumulus humilis", "Altostratus"], answer: "Cumulus humilis" },
    { question: "O que é 'nevoeiro'?", options: ["Uma nuvem Cirrus no solo.", "Chuva muito fina.", "Uma nuvem Stratus cuja base está junto à superfície.", "Fumaça de queimadas."], answer: "Uma nuvem Stratus cuja base está junto à superfície." },
    { question: "A visibilidade é definida como:", options: ["A distância máxima que se pode ver de noite.", "A maior distância horizontal em que um objeto pode ser visto e reconhecido.", "A altura da base das nuvens.", "A intensidade da luz solar."], answer: "A maior distância horizontal em que um objeto pode ser visto e reconhecido." },
    { question: "O que é o 'vento geostrófico'?", options: ["O vento medido na superfície.", "Um vento teórico que sopra paralelo às isóbaras em altas altitudes.", "A brisa marítima.", "Um vento que sopra das montanhas para o vale."], answer: "Um vento teórico que sopra paralelo às isóbaras em altas altitudes." },
    { question: "Qual é a força que desvia o movimento do ar para a direita no Hemisfério Norte e para a esquerda no Hemisfério Sul?", options: ["Força da Gravidade", "Força Centrífuga", "Força de Coriolis", "Força de Atrito"], answer: "Força de Coriolis" },
    { question: "O que é 'convecção' na atmosfera?", options: ["O movimento horizontal do ar.", "O movimento vertical do ar, onde o ar quente sobe e o ar frio desce.", "A mudança de estado da água.", "A formação de gelo nas nuvens."], answer: "O movimento vertical do ar, onde o ar quente sobe e o ar frio desce." },
    { question: "A 'brisa marítima' sopra do mar para a terra durante o dia porque:", options: ["A terra se aquece mais rápido que o mar.", "O mar se aquece mais rápido que a terra.", "A pressão é maior sobre o mar.", "A lua atrai a água."], answer: "A terra se aquece mais rápido que o mar." },
    { question: "O que é 'advecção'?", options: ["O transporte de calor por movimento vertical do ar.", "A formação de orvalho.", "O transporte de calor, umidade ou outras propriedades por movimento horizontal do ar.", "A precipitação de granizo."], answer: "O transporte de calor, umidade ou outras propriedades por movimento horizontal do ar." },
    { question: "Qual o nome do instrumento que mede a umidade relativa do ar?", options: ["Anemômetro", "Barômetro", "Pluviômetro", "Higrômetro ou Psicrômetro"], answer: "Higrômetro ou Psicrômetro" },
    { question: "O que é estabilidade atmosférica?", options: ["Quando a temperatura do ar não muda.", "A tendência do ar de resistir ao movimento vertical.", "A ausência de ventos.", "Céu completamente sem nuvens."], answer: "A tendência do ar de resistir ao movimento vertical." },
    { question: "Uma atmosfera 'instável' favorece a formação de qual tipo de nuvem?", options: ["Nuvens estratiformes", "Nuvens com grande desenvolvimento vertical, como Cumulonimbus.", "Nevoeiro", "Nuvens Cirrus"], answer: "Nuvens com grande desenvolvimento vertical, como Cumulonimbus." },
    { question: "O que é 'precipitação'?", options: ["A formação de nuvens.", "Qualquer forma de água, líquida ou sólida, que cai das nuvens para a superfície.", "A evaporação da água dos rios.", "O vento forte."], answer: "Qualquer forma de água, líquida ou sólida, que cai das nuvens para a superfície." },
    { question: "Qual a principal diferença entre 'chuva' e 'chuvisco'?", options: ["A chuva é mais fria.", "O chuvisco molha mais.", "O tamanho das gotas; no chuvisco, são muito pequenas (menores que 0,5 mm).", "A chuva só ocorre de dia."], answer: "O tamanho das gotas; no chuvisco, são muito pequenas (menores que 0,5 mm)." },
    { question: "O que é 'granizo'?", options: ["Neve que derreteu e congelou novamente.", "Gotas de chuva congeladas.", "Precipitação de pedras de gelo formadas dentro de nuvens Cumulonimbus.", "Pequenos cristais de gelo."], answer: "Precipitação de pedras de gelo formadas dentro de nuvens Cumulonimbus." },
    { question: "Qual a sigla para 'Aeródromo'?", options: ["AD", "AE", "ARO", "ADRM"], answer: "AD" },
    { question: "O que é o 'vento de superfície'?", options: ["O vento medido a 10 metros de altura.", "O vento medido no topo das montanhas.", "O vento na altitude de cruzeiro.", "O vento previsto para as próximas horas."], answer: "O vento medido a 10 metros de altura." },
    { question: "Como se chama o vento que sopra do vale para a montanha durante o dia?", options: ["Vento Anabático", "Vento Catabático", "Brisa Terrestre", "Vento de Leste"], answer: "Vento Anabático" },
    { question: "O que é 'calor latente'?", options: ["O calor que podemos medir com um termômetro.", "A energia liberada ou absorvida durante uma mudança de estado da matéria (ex: condensação).", "O calor gerado pelo atrito.", "O calor que vem do interior da Terra."], answer: "A energia liberada ou absorvida durante uma mudança de estado da matéria (ex: condensação)." },
    { question: "Qual o processo responsável pelo ressecamento de uma roupa no varal?", options: ["Condensação", "Sublimação", "Precipitação", "Evaporação"], answer: "Evaporação" },
    { question: "Nuvens do tipo 'Stratus' são conhecidas por:", options: ["Causarem trovoadas.", "Terem grande desenvolvimento vertical.", "Formarem uma camada cinzenta e uniforme, associada a chuvisco.", "Serem as nuvens mais altas da atmosfera."], answer: "Formarem uma camada cinzenta e uniforme, associada a chuvisco." },
    { question: "O que é 'teto' em meteorologia aeronáutica?", options: ["A altitude máxima que a aeronave pode voar.", "A altura da base da camada mais baixa de nuvens.", "O topo da Troposfera.", "A visibilidade vertical."], answer: "A altura da base da camada mais baixa de nuvens." },
    { question: "A formação de geada ocorre quando:", options: ["Chove e a temperatura está abaixo de 0°C.", "O vapor d'água congela diretamente sobre uma superfície fria.", "A neve derrete e congela novamente.", "O granizo se acumula no chão."], answer: "O vapor d'água congela diretamente sobre uma superfície fria." },
    { question: "Qual fenômeno restringe mais severamente a visibilidade horizontal?", options: ["Chuva leve", "Névoa Úmida", "Nevoeiro", "Poeira"], answer: "Nevoeiro" },
    { question: "O que é a 'radiação terrestre'?", options: ["A luz do Sol.", "A energia emitida pela superfície da Terra, que aquece a atmosfera por baixo.", "Ondas de rádio usadas na comunicação.", "A radiação da camada de ozônio."], answer: "A energia emitida pela superfície da Terra, que aquece a atmosfera por baixo." },
    { question: "Qual a unidade de medida da velocidade do vento usada na aviação?", options: ["Quilômetros por hora (km/h)", "Milhas por hora (mph)", "Metros por segundo (m/s)", "Nós (knots - kt)"], answer: "Nós (knots - kt)" },
    { question: "Em um centro de baixa pressão no Hemisfério Sul, os ventos giram em que sentido?", options: ["Sentido horário, convergindo para o centro.", "Sentido anti-horário, divergindo do centro.", "Sentido anti-horário, convergindo para o centro.", "Não há um padrão de giro."], answer: "Sentido horário, convergindo para o centro." },
    { question: "O que é a 'Albedo'?", options: ["A pressão atmosférica.", "A umidade do ar.", "A capacidade de uma superfície de refletir a radiação solar.", "A temperatura do solo."], answer: "A capacidade de uma superfície de refletir a radiação solar." },
    { question: "Qual a principal função do ozônio (O3) na estratosfera?", options: ["Aquecer a Terra.", "Gerar oxigênio para a respiração.", "Filtrar a radiação ultravioleta (UV) do Sol.", "Causar o efeito estufa."], answer: "Filtrar a radiação ultravioleta (UV) do Sol." },
    { question: "O que é a 'Atmosfera Padrão ISA'?", options: ["As condições reais da atmosfera em um dado momento.", "Um modelo atmosférico hipotético usado como referência para a aviação.", "A previsão do tempo para as próximas 24 horas.", "A camada mais alta da atmosfera."], answer: "Um modelo atmosférico hipotético usado como referência para a aviação." }
];

// BANCO DE QUESTÕES - METEOROLOGIA - NÍVEL 2
const quizDataMeteorologiaN2 = [
    { question: "Uma massa de ar classificada como 'mTc' é:", options: ["Marítima Tropical quente", "Marítima Temperada fria", "Continental Tropical quente", "Continental Temperada fria"], answer: "Marítima Tropical quente" },
    { question: "O que é uma 'frente fria'?", options: ["É a borda de uma massa de ar quente em movimento.", "É a zona de transição onde uma massa de ar frio avança e substitui uma massa de ar quente.", "É uma área de alta pressão atmosférica.", "É uma linha de nuvens Cirrus."], answer: "É a zona de transição onde uma massa de ar frio avança e substitui uma massa de ar quente." },
    { question: "Qual tipo de nuvem é tipicamente associado à passagem de uma frente fria?", options: ["Nuvens estratiformes (Stratus)", "Nuvens cirriformes (Cirrus)", "Nuvens cumuliformes e Cumulonimbus (Cb).", "Nevoeiro."], answer: "Nuvens cumuliformes e Cumulonimbus (Cb)." },
    { question: "O que é uma 'frente oclusa'?", options: ["Quando uma frente fria e uma frente quente se encontram e param.", "Quando uma frente fria alcança uma frente quente, forçando todo o ar quente a subir.", "Uma frente que se forma sobre o oceano.", "Uma frente que ocorre apenas em altas latitudes."], answer: "Quando uma frente fria alcança uma frente quente, forçando todo o ar quente a subir." },
    { question: "O que é 'turbulência de céu claro' (CAT - Clear Air Turbulence)?", options: ["Turbulência causada por montanhas.", "Turbulência dentro de uma nuvem Cumulonimbus.", "Turbulência que ocorre em regiões sem nuvens, geralmente associada a correntes de jato.", "A turbulência gerada pela própria aeronave."], answer: "Turbulência que ocorre em regiões sem nuvens, geralmente associada a correntes de jato." },
    { question: "Qual tipo de gelo é considerado o mais perigoso para a aviação por ser transparente e alterar o formato do aerofólio?", options: ["Geada", "Gelo Escarcha", "Gelo Opaco", "Gelo Claro ou Cristal"], answer: "Gelo Claro ou Cristal" },
    { question: "A formação de gelo 'escarcha' ocorre em qual faixa de temperatura?", options: ["Entre 0°C e -10°C", "Abaixo de -40°C", "Entre -10°C e -20°C", "Acima de 0°C"], answer: "Entre -10°C e -20°C" },
    { question: "Quais são os três estágios de uma trovoada?", options: ["Início, Meio e Fim", "Formação, Saturação e Precipitação", "Cumulus, Maturidade e Dissipação", "Leve, Moderada e Severa"], answer: "Cumulus, Maturidade e Dissipação" },
    { question: "Em qual estágio da trovoada ocorrem as correntes ascendentes e descendentes mais intensas, além de granizo e raios?", options: ["Estágio Cumulus", "Estágio de Dissipação", "Estágio de Maturidade", "Estágio de Oclusão"], answer: "Estágio de Maturidade" },
    { question: "O que é 'Wind Shear' (Tesoura de Vento)?", options: ["Uma mudança repentina na direção e/ou velocidade do vento em uma curta distância.", "Um vento constante soprando de uma única direção.", "A ausência de vento.", "Um redemoinho de poeira."], answer: "Uma mudança repentina na direção e/ou velocidade do vento em uma curta distância." },
    { question: "Qual código METAR indica 'trovoada nas proximidades'?", options: ["TS", "VCTS", "SQ", "FC"], answer: "VCTS" },
    { question: "Em um TAF, a sigla 'BECMG 1315' significa:", options: ["Vento se tornando 130 graus com 15 nós.", "Mudança gradual de condições ocorrendo entre 13:00Z e 15:00Z.", "Visibilidade se tornando 1.500 metros.", "Nuvens se tornando esparsas a 1500 pés."], answer: "Mudança gradual de condições ocorrendo entre 13:00Z e 15:00Z." },
    { question: "Na carta SIG WX, uma linha com triângulos aponta na direção do movimento de qual fenômeno?", options: ["Frente Quente", "Frente Fria", "Corrente de Jato", "Linha de Instabilidade"], answer: "Frente Fria" },
    { question: "O que representa a sigla 'CB' em uma carta meteorológica ou METAR?", options: ["Céu Claro (Clear Below)", "Nuvem Cumulonimbus", "Base das Nuvens (Cloud Base)", "Corrente de Brisa"], answer: "Nuvem Cumulonimbus" },
    { question: "O que é 'Onda de Montanha'?", options: ["Um tipo de nuvem lenticular.", "Uma turbulência severa formada pelo fluxo de ar sobre uma cadeia de montanhas.", "Uma frente fria estacionária.", "O eco do radar em terreno montanhoso."], answer: "Uma turbulência severa formada pelo fluxo de ar sobre uma cadeia de montanhas." },
    { question: "A formação de 'névoa de radiação' ocorre tipicamente em:", options: ["Tardes quentes e úmidas com vento forte.", "Manhãs frias de inverno sobre o mar.", "Noites de céu claro, com pouco vento e alta umidade.", "Qualquer momento durante a passagem de uma frente fria."], answer: "Noites de céu claro, com pouco vento e alta umidade." },
    { question: "Qual é a principal característica de uma 'Corrente de Jato' (Jet Stream)?", options: ["São ventos fracos de baixa altitude.", "São correntes de ar muito fortes e estreitas encontradas na alta troposfera.", "São ventos que sopram do mar para a terra.", "São as correntes descendentes de uma trovoada."], answer: "São correntes de ar muito fortes e estreitas encontradas na alta troposfera." },
    { question: "O que significa o código 'CAVOK' em um METAR?", options: ["Teto e visibilidade estão ótimos (Ceiling and Visibility OK).", "Cuidado, aeronave em voo (Caution, Aircraft in Vicinity OK).", "Visibilidade restrita por névoa.", "Condições meteorológicas adversas."], answer: "Teto e visibilidade estão ótimos (Ceiling and Visibility OK)." },
    { question: "Qual tipo de nevoeiro se forma quando ar quente e úmido se move sobre uma superfície fria?", options: ["Nevoeiro de Radiação", "Nevoeiro de Advecção", "Nevoeiro Orográfico", "Nevoeiro de Vapor"], answer: "Nevoeiro de Advecção" },
    { question: "Nuvens com o prefixo 'Alto' (ex: Altostratus, Altocumulus) são encontradas em qual estágio?", options: ["Estágio Baixo (até 2 km)", "Estágio Médio (2 a 7 km)", "Estágio Alto (acima de 7 km)", "Apenas na Estratosfera."], answer: "Estágio Médio (2 a 7 km)" },
    { question: "O que é uma 'Linha de Instabilidade'?", options: ["Uma frente quente muito longa.", "Uma área de tempo bom e estável.", "Uma linha de trovoadas que pode se formar à frente de uma frente fria.", "Uma área de baixa pressão."], answer: "Uma linha de trovoadas que pode se formar à frente de uma frente fria." },
    { question: "O que a sigla 'RVR' em um METAR representa?", options: ["Alcance Visual na Pista (Runway Visual Range)", "Relatório de Vento Real", "Rota de Voo Registrada", "Região de Voo Restrita"], answer: "Alcance Visual na Pista (Runway Visual Range)" },
    { question: "O que é 'virga'?", options: ["Um tipo de nuvem de gelo.", "Precipitação que evapora antes de atingir o solo.", "Um redemoinho de vento.", "O nome científico do granizo."], answer: "Precipitação que evapora antes de atingir o solo." },
    { question: "Uma massa de ar 'cPk' é:", options: ["Continental Polar quente", "Continental Polar fria, mais fria que a superfície", "Marítima Polar quente", "Marítima Polar fria, mais fria que a superfície"], answer: "Continental Polar fria, mais fria que a superfície" },
    { question: "Qual a principal diferença visual entre uma nuvem 'Stratus' e uma 'Cumulus'?", options: ["Stratus são escuras, Cumulus são claras.", "Stratus formam camadas, Cumulus têm aspecto de 'flocos de algodão'.", "Stratus são altas, Cumulus são baixas.", "Stratus produzem neve, Cumulus produzem chuva."], answer: "Stratus formam camadas, Cumulus têm aspecto de 'flocos de algodão'." },
    { question: "O que é 'turbulência mecânica'?", options: ["A turbulência gerada pelo motor da aeronave.", "Turbulência causada pelo atrito do vento com a superfície terrestre e obstáculos.", "Turbulência associada a frentes.", "Turbulência de céu claro."], answer: "Turbulência causada pelo atrito do vento com a superfície terrestre e obstáculos." },
    { question: "Uma 'corrente descendente' (downdraft) é mais perigosa em qual fase do voo?", options: ["No voo de cruzeiro.", "Durante a subida.", "Durante a aproximação para o pouso.", "No pátio do aeroporto."], answer: "Durante a aproximação para o pouso." },
    { question: "O que é uma 'microexplosão' (microburst)?", options: ["Uma pequena trovoada.", "Uma corrente descendente extremamente forte, localizada e de curta duração.", "O som de um raio.", "Uma rajada de vento lateral."], answer: "Uma corrente descendente extremamente forte, localizada e de curta duração." },
    { question: "Em uma carta de ventos em altitude, o que indicam as 'penas' na haste do vento?", options: ["A temperatura do ar.", "A direção do vento.", "A velocidade do vento.", "A pressão atmosférica."], answer: "A velocidade do vento." },
    { question: "O que significa 'SCT030' em um METAR?", options: ["Nuvens esparsas a 300 pés.", "Nuvens esparsas a 3.000 pés.", "Visibilidade de 3000 metros.", "Temperatura de 30 graus Celsius."], answer: "Nuvens esparsas a 3.000 pés." },
    { question: "Qual o principal perigo associado à 'cinza vulcânica' para a aviação?", options: ["Redução da visibilidade.", "Pode causar danos severos aos motores, fuselagem e sistemas da aeronave.", "O cheiro forte na cabine.", "Aumento do peso da aeronave."], answer: "Pode causar danos severos aos motores, fuselagem e sistemas da aeronave." },
    { question: "O que significa a sigla 'SIGMET'?", options: ["Informação Meteorológica Significativa para aeronaves em rota.", "Previsão de Terminal de Aeródromo.", "Relatório Meteorológico de Aeródromo.", "Carta de Ventos e Temperaturas em Altitude."], answer: "Informação Meteorológica Significativa para aeronaves em rota." },
    { question: "Qual a diferença entre 'geada' e 'gelo claro'?", options: ["Geada se forma em voo, gelo claro no solo.", "Geada é a sublimação de vapor em superfície; gelo claro é o congelamento de gotas super-resfriadas.", "Geada é mais perigosa que gelo claro.", "Não há diferença."], answer: "Geada é a sublimação de vapor em superfície; gelo claro é o congelamento de gotas super-resfriadas." },
    { question: "Em qual estágio da trovoada predominam as correntes descendentes?", options: ["Cumulus", "Maturidade", "Dissipação", "Em todos os estágios."], answer: "Dissipação" },
    { question: "O que são 'isótacas'?", options: ["Linhas que unem pontos de igual pressão.", "Linhas que unem pontos de igual temperatura.", "Linhas que unem pontos de igual velocidade do vento.", "Linhas que unem pontos de igual umidade."], answer: "Linhas que unem pontos de igual velocidade do vento." },
    { question: "O que é 'aragem'?", options: ["Vento com velocidade de 1 a 3 nós.", "Chuva muito fraca.", "Nevoeiro muito denso.", "Uma nuvem baixa."], answer: "Vento com velocidade de 1 a 3 nós." },
    { question: "Qual a principal causa da 'turbulência convectiva'?", options: ["A passagem do avião.", "O atrito do vento com o solo.", "O aquecimento desigual da superfície, que gera correntes ascendentes e descendentes.", "A presença de uma corrente de jato."], answer: "O aquecimento desigual da superfície, que gera correntes ascendentes e descendentes." },
    { question: "O que significa 'BKN' em um código METAR?", options: ["Céu limpo.", "Poucas nuvens (Few).", "Nuvens esparsas (Scattered).", "Céu nublado (Broken)."], answer: "Céu nublado (Broken)." },
    { question: "Qual tipo de frente é representada em uma carta meteorológica por uma linha com semicírculos?", options: ["Frente Fria", "Frente Quente", "Frente Oclusa", "Frente Estacionária"], answer: "Frente Quente" },
    { question: "A 'névoa seca' é formada por:", options: ["Gotículas de água.", "Poeira, fumaça ou outras partículas em suspensão.", "Cristais de gelo.", "Vapor de água condensado."], answer: "Poeira, fumaça ou outras partículas em suspensão." },
    { question: "O que é o 'gradiente de pressão'?", options: ["A variação da temperatura com a altitude.", "A variação da pressão atmosférica com a distância horizontal.", "A mudança da direção do vento.", "A velocidade com que a pressão muda."], answer: "A variação da pressão atmosférica com a distância horizontal." },
    { question: "Um vento de '27015KT' significa:", options: ["Vento de 15 graus com 270 nós.", "Vento de 270 graus com 15 nós.", "Vento de 27 graus com 150 nós.", "Vento de 270 nós com 15 rajadas."], answer: "Vento de 270 graus com 15 nós." },
    { question: "O que é uma 'massa de ar estável'?", options: ["Uma massa de ar que não se move.", "Uma massa de ar que favorece o bom tempo e a formação de nuvens estratiformes.", "Uma massa de ar que causa trovoadas.", "Uma massa de ar muito quente e seca."], answer: "Uma massa de ar que favorece o bom tempo e a formação de nuvens estratiformes." },
    { question: "Qual a principal condição para a formação de uma trovoada?", options: ["Vento fraco.", "Ar seco.", "Ar úmido e instável e um mecanismo de levantamento.", "Temperaturas abaixo de zero."], answer: "Ar úmido e instável e um mecanismo de levantamento." },
    { question: "O que é o 'QNH'?", options: ["A pressão na pista.", "A pressão ao nível do mar calculada a partir da pressão da estação.", "A altitude da aeronave.", "A temperatura do ar."], answer: "A pressão ao nível do mar calculada a partir da pressão da estação." },
    { question: "Em qual parte de uma nuvem Cumulonimbus a turbulência é geralmente mais severa?", options: ["Na base da nuvem.", "No topo da nuvem (bigorna).", "No centro da nuvem, entre as correntes ascendentes e descendentes.", "Fora da nuvem, na direção do vento."], answer: "No centro da nuvem, entre as correntes ascendentes e descendentes." },
    { question: "A formação de nevoeiro por 'vapor' (ou evaporação) ocorre quando:", options: ["Ar frio e estável se move sobre uma superfície líquida mais quente.", "Ar quente e úmido se move sobre uma superfície fria.", "O solo resfria durante a noite.", "O ar sobe uma encosta de montanha."], answer: "Ar frio e estável se move sobre uma superfície líquida mais quente." },
    { question: "O que significa a sigla 'VOLMET'?", options: ["Volume meteorológico.", "Informação meteorológica para aeronaves em voo.", "Boletim meteorológico de aeródromo.", "Previsão de tempo para uma área."], answer: "Informação meteorológica para aeronaves em voo." },
    { question: "Uma linha de instabilidade pré-frontal se forma:", options: ["Atrás de uma frente fria.", "À frente de uma frente fria.", "Atrás de uma frente quente.", "Em áreas de alta pressão."], answer: "À frente de uma frente fria." },
    { question: "Em uma carta SIG WX, o que uma linha com semicírculos e triângulos alternados e em lados opostos representa?", options: ["Frente Fria", "Frente Quente", "Frente Oclusa", "Frente Estacionária"], answer: "Frente Estacionária" }
];

// BANCO DE QUESTÕES - COMBATE A INCÊNDIO - NÍVEL 1
const quizDataCombateFogo = [
    { question: "Quais são os quatro componentes do Tetraedro do Fogo?", options: ["Calor, Oxigênio, Água e Fumaça", "Combustível, Comburente, Calor e Reação em Cadeia", "Combustível, Nitrogênio, Faísca e Abafamento", "Madeira, Gás, Eletricidade e Metal"], answer: "Combustível, Comburente, Calor e Reação em Cadeia" },
    { question: "No contexto do fogo, o que é o 'combustível'?", options: ["O oxigênio do ar", "A chama visível", "O material que queima (sólido, líquido ou gasoso)", "A energia de ativação"], answer: "O material que queima (sólido, líquido ou gasoso)" },
    { question: "Qual é o comburente mais comum presente na atmosfera?", options: ["Nitrogênio", "Hidrogênio", "Gás Carbônico", "Oxigênio"], answer: "Oxigênio" },
    { question: "O que é 'Calor' ou 'Energia de Ativação'?", options: ["A fumaça gerada pelo fogo.", "O elemento que inicia a combustão.", "O resíduo que sobra após a queima.", "A luz emitida pela chama."], answer: "O elemento que inicia a combustão." },
    { question: "Incêndios de Classe A envolvem qual tipo de material?", options: ["Líquidos inflamáveis como gasolina e óleo.", "Equipamentos elétricos energizados.", "Materiais sólidos que queimam em superfície e profundidade, deixando resíduos (cinzas).", "Metais combustíveis como magnésio."], answer: "Materiais sólidos que queimam em superfície e profundidade, deixando resíduos (cinzas)." },
    { question: "Um incêndio em uma lixeira com papéis é classificado como:", options: ["Classe A", "Classe B", "Classe C", "Classe D"], answer: "Classe A" },
    { question: "Incêndios de Classe B envolvem qual tipo de material?", options: ["Madeira, papel e tecido.", "Líquidos e gases inflamáveis que queimam apenas na superfície.", "Painéis elétricos e fiação.", "Pó de alumínio e sódio metálico."], answer: "Líquidos e gases inflamáveis que queimam apenas na superfície." },
    { question: "Um incêndio causado por álcool ou querosene é classificado como:", options: ["Classe A", "Classe B", "Classe C", "Classe D"], answer: "Classe B" },
    { question: "Incêndios de Classe C envolvem qual tipo de material?", options: ["Materiais sólidos comuns.", "Líquidos inflamáveis.", "Equipamentos elétricos energizados.", "Metais pirofóricos."], answer: "Equipamentos elétricos energizados." },
    { question: "Um curto-circuito em um forno da galley que inicia um incêndio é classificado como:", options: ["Classe A", "Classe B", "Classe C", "Classe K"], answer: "Classe C" },
    { question: "Incêndios de Classe D envolvem qual tipo de material?", options: ["Papel e plástico.", "Gases de cozinha.", "Fiação elétrica.", "Metais combustíveis (pirofóricos) como magnésio, titânio e sódio."], answer: "Metais combustíveis (pirofóricos) como magnésio, titânio e sódio." },
    { question: "Incêndios de Classe K ocorrem em:", options: ["Equipamentos de escritório.", "Óleos e gorduras de cozinha.", "Estofamento de aeronaves.", "Baterias de lítio."], answer: "Óleos e gorduras de cozinha." },
    { question: "O método de extinção por 'Resfriamento' visa remover qual elemento do tetraedro do fogo?", options: ["Combustível", "Comburente (Oxigênio)", "Calor", "Reação em Cadeia"], answer: "Calor" },
    { question: "Qual é o agente extintor mais comum que age por resfriamento?", options: ["Pó Químico Seco", "Espuma", "Água", "Gás Carbônico (CO2)"], answer: "Água" },
    { question: "O método de extinção por 'Abafamento' visa remover qual elemento do tetraedro do fogo?", options: ["Combustível", "Comburente (Oxigênio)", "Calor", "Reação em Cadeia"], answer: "Comburente (Oxigênio)" },
    { question: "Qual agente extintor é um excelente exemplo de ação por abafamento?", options: ["Água em jato sólido.", "Espuma mecânica.", "Pó Químico BC.", "Halon."], answer: "Espuma mecânica." },
    { question: "O método de extinção por 'Isolamento' visa remover qual elemento do tetraedro do fogo?", options: ["Combustível", "Comburente (Oxigênio)", "Calor", "Reação em Cadeia"], answer: "Combustível" },
    { question: "Fechar a válvula de um botijão de gás em chamas é um exemplo de qual método de extinção?", options: ["Resfriamento", "Abafamento", "Isolamento", "Extinção Química"], answer: "Isolamento" },
    { question: "O método de 'Extinção Química' visa interromper qual elemento do tetraedro do fogo?", options: ["Combustível", "Comburente (Oxigênio)", "Calor", "Reação em Cadeia"], answer: "Reação em Cadeia" },
    { question: "Qual agente extintor age principalmente por extinção química?", options: ["Água", "Espuma", "Gás Halon", "Areia"], answer: "Gás Halon" },
    { question: "O extintor de Água Pressurizada (AP) é indicado para qual classe de fogo?", options: ["Classe A", "Classe B", "Classe C", "Classes A, B e C"], answer: "Classe A" },
    { question: "Por que o extintor de Água (AP) NUNCA deve ser usado em fogo de Classe C?", options: ["Porque a água evapora.", "Porque a água pode conduzir eletricidade e causar choque elétrico.", "Porque a água reage com o plástico.", "Porque a água não apaga fogo em equipamentos."], answer: "Porque a água pode conduzir eletricidade e causar choque elétrico." },
    { question: "O extintor de Gás Carbônico (CO2) apaga o fogo por qual método principal?", options: ["Resfriamento", "Abafamento", "Isolamento", "Extinção Química"], answer: "Abafamento" },
    { question: "O extintor de CO2 é indicado para quais classes de fogo?", options: ["Apenas Classe A", "Apenas Classe B", "Classes B e C", "Classes A, B e C"], answer: "Classes B e C" },
    { question: "Qual é o principal cuidado ao manusear um extintor de CO2?", options: ["Agitá-lo antes de usar.", "Usá-lo de cabeça para baixo.", "Não segurar no difusor (corneta), pois pode causar queimaduras por frio.", "Aplicar a uma longa distância."], answer: "Não segurar no difusor (corneta), pois pode causar queimaduras por frio." },
    { question: "O extintor de Pó Químico Seco (PQS) do tipo BC é eficaz contra quais classes de fogo?", options: ["Apenas Classe A", "Classes A e B", "Classes B e C", "Classes A, B e C"], answer: "Classes B e C" },
    { question: "Qual a principal desvantagem do uso do extintor de Pó Químico Seco (PQS)?", options: ["É tóxico para o ser humano.", "Deixa um resíduo corrosivo que pode danificar equipamentos eletrônicos.", "Não apaga fogo de líquidos.", "Pode causar explosões."], answer: "Deixa um resíduo corrosivo que pode danificar equipamentos eletrônicos." },
    { question: "O extintor de Halon é o mais utilizado na aviação por ser eficaz em quais classes de fogo e por qual motivo?", options: ["Apenas Classe A, por ser limpo.", "Classes A, B e C, e por não deixar resíduo.", "Apenas Classe C, por não conduzir eletricidade.", "Apenas Classe B, por ser um gás."], answer: "Classes A, B e C, e por não deixar resíduo." },
    { question: "Qual o principal risco do Halon em ambientes fechados?", options: ["É inflamável.", "É corrosivo.", "Desloca o oxigênio, apresentando risco de asfixia.", "É visível e suja o ambiente."], answer: "Desloca o oxigênio, apresentando risco de asfixia." },
    { question: "Para que servem as Luvas de Amianto/Aramida a bordo?", options: ["Para proteger do frio extremo.", "Para manusear alimentos quentes.", "Para proteger as mãos e antebraços do calor durante o combate a um incêndio.", "Para reparos elétricos."], answer: "Para proteger as mãos e antebraços do calor durante o combate a um incêndio." },
    { question: "Qual a função do Machado em uma emergência de fogo a bordo?", options: ["Para arrombar a porta do cockpit.", "Para cortar fios energizados e remover painéis para acessar focos de incêndio.", "Para quebrar janelas e criar uma saída de emergência.", "Para defesa contra passageiros indisciplinados."], answer: "Para cortar fios energizados e remover painéis para acessar focos de incêndio." },
    { question: "O que é 'smoldering'?", options: ["Uma combustão muito rápida com chamas altas.", "A combustão lenta, sem chamas e com pouca fumaça, típica de estofados.", "O som de um alarme de incêndio.", "A ignição espontânea de um material."], answer: "A combustão lenta, sem chamas e com pouca fumaça, típica de estofados." },
    { question: "Qual a primeira ação de um comissário ao detectar um incêndio a bordo?", options: ["Correr para pegar um extintor.", "Avisar imediatamente a cabine de comando.", "Iniciar a evacuação dos passageiros.", "Tentar apagar com água."], answer: "Avisar imediatamente a cabine de comando." },
    { question: "Por que é importante fazer o 'rescaldo' após apagar um fogo?", options: ["Para limpar a sujeira do extintor.", "Para garantir que não haja reignição do fogo e resfriar a área.", "Para preencher o relatório de ocorrência.", "Para ventilar o ambiente."], answer: "Para garantir que não haja reignição do fogo e resfriar a área." },
    { question: "Onde estão localizados os extintores fixos de acionamento automático?", options: ["No compartimento de carga.", "Nos lavatórios, dentro do compartimento da lixeira.", "Na galley, acima dos fornos.", "No cockpit, embaixo dos assentos."], answer: "Nos lavatórios, dentro do compartimento da lixeira." },
    { question: "O que significa o termo 'combustão espontânea'?", options: ["Um incêndio causado por um raio.", "Quando um material atinge sua temperatura de ignição sem uma fonte externa de calor.", "A queima de um combustível líquido.", "Um fogo que se apaga sozinho."], answer: "Quando um material atinge sua temperatura de ignição sem uma fonte externa de calor." },
    { question: "Qual a diferença entre Ponto de Fulgor e Ponto de Combustão?", options: ["Não há diferença.", "Fulgor é quando pega fogo, Combustão é quando explode.", "Ponto de Fulgor os gases inflamam mas a chama não se mantém; Ponto de Combustão a chama se mantém.", "Ponto de Combustão é para sólidos, Ponto de Fulgor é para líquidos."], answer: "Ponto de Fulgor os gases inflamam mas a chama não se mantém; Ponto de Combustão a chama se mantém." },
    { question: "Qual a cor padrão do extintor de Água Pressurizada (AP)?", options: ["Vermelho", "Prata (Inox)", "Amarelo", "Verde"], answer: "Prata (Inox)" },
    { question: "O extintor de Gás Carbônico (CO2) é facilmente identificado por qual característica?", options: ["Seu tamanho reduzido.", "A cor amarela.", "O grande difusor em formato de cone (corneta).", "O manômetro de pressão."], answer: "O grande difusor em formato de cone (corneta)." },
    { question: "Em um fogo de Classe B (líquido inflamável), por que não se deve usar água em jato direto?", options: ["Porque a água não apaga fogo.", "Porque pode espalhar o líquido em chamas.", "Porque a água reage quimicamente com o líquido.", "Porque o resfriamento não é eficaz."], answer: "Porque pode espalhar o líquido em chamas." },
    { question: "O que deve ser feito com um equipamento elétrico (Classe C) antes de usar um extintor de água?", options: ["Nada, a água pode ser usada diretamente.", "Apenas avisar o comandante.", "Desligar a fonte de energia para descaracterizar o fogo para Classe A.", "Cobrir o equipamento com um cobertor."], answer: "Desligar a fonte de energia para descaracterizar o fogo para Classe A." },
    { question: "Qual o procedimento correto ao usar um extintor de incêndio?", options: ["Mirar no topo das chamas.", "Aplicar em jatos curtos e intermitentes.", "Mirar na base do fogo com movimentos de varredura.", "Chegar o mais perto possível do fogo antes de acionar."], answer: "Mirar na base do fogo com movimentos de varredura." },
    { question: "Qual o cheque pré-voo para um extintor de Halon ou PQS?", options: ["Verificar se está cheio de água.", "Pesar o cilindro.", "Verificar presença, lacre, validade e se o manômetro está na faixa verde.", "Testar o gatilho rapidamente."], answer: "Verificar presença, lacre, validade e se o manômetro está na faixa verde." },
    { question: "Em caso de fogo em baterias de lítio (laptop, celular), qual o procedimento recomendado?", options: ["Usar extintor de Pó Químico.", "Jogar água ou outro líquido não inflamável para resfriar e submergir o aparelho.", "Abafar com um cobertor.", "Não fazer nada e avisar o comandante."], answer: "Jogar água ou outro líquido não inflamável para resfriar e submergir o aparelho." },
    { question: "Por que o punho do machado de emergência é revestido com material isolante?", options: ["Para melhor aderência.", "Para permitir o corte de fios elétricos energizados com segurança.", "Para flutuar na água.", "É apenas estético."], answer: "Para permitir o corte de fios elétricos energizados com segurança." },
    { question: "Qual a função do pino de segurança em um extintor?", options: ["Ativar o extintor.", "Indicar a validade.", "Impedir o acionamento acidental.", "Medir a pressão interna."], answer: "Impedir o acionamento acidental." },
    { question: "O que é 'propagação de calor por convecção'?", options: ["Através de ondas de calor.", "Através do contato direto entre objetos.", "Através de massas de ar aquecido que sobem.", "Através de faíscas."], answer: "Através de massas de ar aquecido que sobem." },
    { question: "Qual o método de extinção mais eficaz para fogo Classe D (metais combustíveis)?", options: ["Água", "CO2", "Agentes extintores especiais, como pó de grafite ou cloreto de sódio.", "Halon"], answer: "Agentes extintores especiais, como pó de grafite ou cloreto de sódio." },
    { question: "O que deve ser feito se um disjuntor (circuit breaker) desarmar durante o voo?", options: ["Rearmá-lo imediatamente.", "Tentar rearmá-lo apenas uma vez, após um período de resfriamento.", "Nunca rearmar um disjuntor em voo.", "Avisar a torre de controle."], answer: "Tentar rearmá-lo apenas uma vez, após um período de resfriamento." },
    { question: "Em um incêndio na galley, qual a primeira medida a ser tomada?", options: ["Pegar o extintor mais próximo.", "Desligar toda a energia elétrica da galley (Galley Master Switch).", "Evacuar os passageiros da área.", "Fazer um anúncio no sistema de PA."], answer: "Desligar toda a energia elétrica da galley (Galley Master Switch)." }
];

// NOVO BANCO DE QUESTÕES - PROCEDIMENTOS DE EMERGÊNCIA DETALHADOS
const quizDataEmergenciaDetalhada = [
    { question: "Em voos costeiros (até 370km da costa), qual equipamento de flutuação individual é exigido?", options: ["Coletes salva-vidas para todos", "Botes infláveis", "Assentos flutuantes", "Escorregadeiras-barco"], answer: "Assentos flutuantes" },
    { question: "Para voos transoceânicos, que operam além de 370km da costa, qual equipamento de flutuação individual é obrigatório?", options: ["Assentos flutuantes", "Coletes salva-vidas", "Botes individuais", "Cangas de flutuação"], answer: "Coletes salva-vidas" },
    { question: "Qual a duração aproximada da luz sinalizadora de um colete salva-vidas, ativada em contato com a água?", options: ["1 hora", "4 horas", "8 horas", "24 horas"], answer: "8 horas" },
    { question: "Qual o procedimento correto para vestir o colete salva-vidas?", options: ["Passar pelos braços e amarrar na frente", "Passar a abertura pela cabeça e ajustar as tiras na cintura", "Vestir como uma jaqueta e fechar o zíper", "Amarrar apenas no pescoço"], answer: "Passar a abertura pela cabeça e ajustar as tiras na cintura" },
    { question: "Uma escorregadeira de 'pista dupla' permite a evacuação de:", options: ["Apenas uma fileira de pessoas", "Duas fileiras de pessoas simultaneamente", "Apenas crianças", "Apenas a tripulação"], answer: "Duas fileiras de pessoas simultaneamente" },
    { question: "Uma saída de emergência do TIPO I (porta primária) tem um coeficiente de evacuação de:", options: ["30 a 40 passageiros em 90s", "50 a 55 passageiros em 90s", "90 a 100 passageiros em 90s", "110 passageiros em 90s"], answer: "50 a 55 passageiros em 90s" },
    { question: "A janela de emergência sobre a asa (TIPO III) possui qual coeficiente de evacuação?", options: ["15 a 20 passageiros em 90s", "20 a 30 passageiros em 90s", "30 a 40 passageiros em 90s", "50 a 55 passageiros em 90s"], answer: "20 a 30 passageiros em 90s" },
    { question: "Qual é a frequência de rádio de emergência CIVIL transmitida pelo ELT?", options: ["121.5 MHz", "243.0 MHz", "406.0 MHz", "150.0 MHz"], answer: "121.5 MHz" },
    { question: "O extintor de Halon possui uma duração média de disparo de aproximadamente:", options: ["30 segundos", "25 segundos", "15 segundos", "8 segundos"], answer: "8 segundos" },
    { question: "O que é o PBE (Protective Breathing Equipment) ou CAPE (Capuz Anti-Fumaça)?", options: ["Um extintor de fumaça.", "Um equipamento para proteger a tripulação da fumaça e gases tóxicos durante um incêndio.", "Uma máscara de oxigênio para passageiros.", "Um detector de fumaça."], answer: "Um equipamento para proteger a tripulação da fumaça e gases tóxicos durante um incêndio." },
    { question: "Como funciona o sistema de pressurização da cabine?", options: ["Injetando oxigênio puro na cabine.", "Controlando a entrada de ar 'sangrado' dos motores e a saída pelas válvulas out-flow.", "Aquecendo o ar externo antes de injetá-lo.", "Utilizando grandes ventiladores para circular o ar."], answer: "Controlando a entrada de ar 'sangrado' dos motores e a saída pelas válvulas out-flow." },
    { question: "Uma despressurização 'lenta' é perigosa principalmente por quê?", options: ["Causa mais danos à aeronave.", "É mais difícil de ser percebida, podendo levar à hipóxia sem que a tripulação note.", "Sempre causa uma explosão.", "Faz as máscaras caírem imediatamente."], answer: "É mais difícil de ser percebida, podendo levar à hipóxia sem que a tripulação note." },
    { question: "Qual a duração aproximada do fluxo de oxigênio de um gerador químico (PSU) após ser ativado?", options: ["5 minutos", "10 minutos", "15 minutos", "30 minutos"], answer: "15 minutos" },
    { question: "Qual a capacidade em litros do cilindro de oxigênio portátil?", options: ["150 litros", "280 litros", "311 litros", "500 litros"], answer: "311 litros" },
    { question: "Qual é o procedimento imediato dos comissários em caso de turbulência severa inesperada?", options: ["Continuar o serviço de bordo com cuidado.", "Correr para a galley e travar tudo.", "Interromper o serviço, sentar-se no assento mais próximo e afivelar o cinto.", "Fazer um anúncio tranquilizando os passageiros."], answer: "Interromper o serviço, sentar-se no assento mais próximo e afivelar o cinto." },
    { question: "Qual é a 'posição de impacto' para um passageiro que NÃO tem um assento à sua frente?", options: ["Deitar no chão do corredor.", "Inclinar o corpo para frente, abraçando os joelhos.", "Cruzar os braços sobre o peito e inclinar a cabeça para trás.", "Permanecer sentado com as mãos na cabeça."], answer: "Inclinar o corpo para frente, abraçando os joelhos." },
    { question: "Qual a função das válvulas de Venturi na escorregadeira inflável?", options: ["Liberar o ar comprimido do cilindro.", "Sugar o ar do ambiente para completar a inflação (cerca de 60%).", "Manter a escorregadeira presa à aeronave.", "Acionar as luzes da escorregadeira."], answer: "Sugar o ar do ambiente para completar a inflação (cerca de 60%)." },
    { question: "O que o comissário deve verificar no manômetro da escorregadeira durante o cheque pré-voo?", options: ["Se o ponteiro está no zero.", "Se o ponteiro está na faixa vermelha.", "Se o ponteiro está na faixa verde (entre 2000 e 3000 PSI).", "Se o vidro do visor não está trincado."], answer: "Se o ponteiro está na faixa verde (entre 2000 e 3000 PSI)." },
    { question: "Qual o tempo aproximado de inflação de uma escorregadeira de emergência?", options: ["1 a 2 segundos", "5 a 10 segundos", "30 segundos", "1 minuto"], answer: "5 a 10 segundos" },
    { question: "Qual é o equipamento de flutuação COLETIVO usado em voos transoceânicos?", options: ["Assentos flutuantes", "Coletes salva-vidas", "Botes ou escorregadeiras-barco", "As asas da aeronave"], answer: "Botes ou escorregadeiras-barco" },
    { question: "Qual o procedimento correto para vestir o colete salva-vidas em uma criança de colo?", options: ["Usar um colete de adulto bem apertado.", "Passar a abertura pela cabeça e ajustar as tiras, incluindo a que passa entre as pernas.", "A criança não precisa de colete.", "Usar dois coletes de adulto."], answer: "Passar a abertura pela cabeça e ajustar as tiras, incluindo a que passa entre as pernas." },
    { question: "Uma saída TIPO IV (janela do cockpit) tem um coeficiente de evacuação de:", options: ["50 a 55 passageiros em 90s", "30 a 40 passageiros em 90s", "20 a 30 passageiros em 90s", "15 a 20 passageiros em 90s"], answer: "15 a 20 passageiros em 90s" },
    { question: "Qual a frequência de rádio de emergência MILITAR transmitida pelo ELT?", options: ["121.5 MHz", "243.0 MHz", "406.0 MHz", "131.5 MHz"], answer: "243.0 MHz" },
    { question: "Qual a duração média de disparo de um extintor de Pó Químico (PQS)?", options: ["8 segundos", "15 segundos", "25 segundos", "45 segundos"], answer: "25 segundos" },
    { question: "O Capuz Anti-Fumaça (PBE/CAPE) é um equipamento para uso:", options: ["Exclusivo de passageiros.", "Apenas do comandante.", "De qualquer tripulante em situações de fogo ou fumaça.", "Apenas em evacuações na água."], answer: "De qualquer tripulante em situações de fogo ou fumaça." },
    { question: "O ar 'sangrado' dos motores (bleed air) é usado para:", options: ["Apenas para o ar condicionado.", "Apenas para a pressurização.", "Para ar condicionado, pressurização e sistemas anti-gelo.", "Apenas para os motores."], answer: "Para ar condicionado, pressurização e sistemas anti-gelo." },
    { question: "O que acontece com os compartimentos de máscaras de oxigênio a 14.000 pés de altitude de cabine?", options: ["Eles emitem um alarme sonoro.", "Eles se abrem automaticamente.", "Eles precisam ser abertos manualmente pelos comissários.", "As luzes da cabine piscam."], answer: "Eles se abrem automaticamente." },
    { question: "Na posição de impacto, por que os passageiros são instruídos a proteger a cabeça?", options: ["Para evitar ruídos altos.", "Para minimizar o risco de ferimentos por objetos soltos ou impacto secundário.", "Para facilitar a respiração.", "É apenas para manter a calma."], answer: "Para minimizar o risco de ferimentos por objetos soltos ou impacto secundário." },
    { question: "O que significa 'armar a escorregadeira'?", options: ["Inflar a escorregadeira para teste.", "Conectar a barra de engate da escorregadeira à estrutura da aeronave.", "Remover a escorregadeira da porta.", "Verificar a validade da escorregadeira."], answer: "Conectar a barra de engate da escorregadeira à estrutura da aeronave." },
    { question: "O que o cheque pré-voo de um extintor de água deve incluir?", options: ["A pressão no manômetro.", "Se o fio de segurança e o lacre estão intactos.", "A temperatura da água.", "O peso do extintor."], answer: "Se o fio de segurança e o lacre estão intactos." },
    { question: "Uma aeronave voando a 39.000 pés tem sua cabine pressurizada para qual altitude aproximada?", options: ["Nível do mar", "5.000 pés", "8.000 pés", "14.000 pés"], answer: "8.000 pés" },
    { question: "O oxigênio da cabine de comando é de que tipo?", options: ["Gerador químico", "Oxigênio gasoso (cilindro)", "Oxigênio líquido", "Mistura de ar enriquecido"], answer: "Oxigênio gasoso (cilindro)" },
    { question: "O que é 'Jet Blast'?", options: ["O som do motor a jato.", "A forte corrente de ar expelida pela parte traseira dos motores a jato.", "Uma falha no motor.", "O rastro de condensação deixado pela aeronave."], answer: "A forte corrente de ar expelida pela parte traseira dos motores a jato." },
    { question: "O que o cheque pré-voo de um megafone deve incluir?", options: ["Verificar a cor.", "Verificar a presença e o funcionamento.", "Pesar o equipamento.", "Verificar a validade da bateria."], answer: "Verificar a presença e o funcionamento." },
    { question: "Em uma evacuação imprevista, qual é a primeira ação do comissário até a parada total da aeronave?", options: ["Abrir a porta.", "Gritar 'POSIÇÃO DE IMPACTO!'", "Gritar 'SENTA!'", "Checar o exterior da aeronave."], answer: "Gritar 'SENTA!'" },
    { question: "Qual a principal preocupação ao reabastecer a aeronave com passageiros a bordo?", options: ["O barulho dos caminhões.", "O cheiro de combustível.", "O risco de incêndio e a necessidade de manter rotas de evacuação desobstruídas.", "O atraso que isso pode causar."], answer: "O risco de incêndio e a necessidade de manter rotas de evacuação desobstruídas." },
    { question: "O que o comissário deve fazer com as cortinas da galley antes do pouso e decolagem?", options: ["Fechá-las para privacidade.", "Removê-las.", "Deixá-las soltas.", "Prendê-las abertas nas presilhas."], answer: "Prendê-las abertas nas presilhas." },
    { question: "Qual a principal função do 'Chefe de Cabine'?", options: ["Pilotar a aeronave se necessário.", "Gerenciar a cabine e responder por todos os comissários.", "Servir apenas a primeira classe.", "Realizar a manutenção da aeronave."], answer: "Gerenciar a cabine e responder por todos os comissários." },
    { question: "O que significa 'desarmar a escorregadeira'?", options: ["Destruir a escorregadeira.", "Desconectar a barra de engate da estrutura da aeronave para permitir uma abertura normal da porta.", "Guardar a escorregadeira no bagageiro.", "Inflar a escorregadeira para manutenção."], answer: "Desconectar a barra de engate da estrutura da aeronave para permitir uma abertura normal da porta." },
    { question: "Em uma evacuação na água, quem deve desembarcar por último?", options: ["Passageiros idosos.", "Crianças desacompanhadas.", "Os comissários, após confirmarem que todos saíram.", "Não há ordem definida."], answer: "Os comissários, após confirmarem que todos saíram." },
    { question: "Qual o procedimento para um fogo em um forno da galley?", options: ["Jogar água dentro do forno.", "Abrir o forno para ver o que está queimando.", "Desligar a energia da galley, manter a porta do forno fechada e usar o extintor de Halon pelo orifício, se houver.", "Evacuar a aeronave imediatamente."], answer: "Desligar a energia da galley, manter a porta do forno fechada e usar o extintor de Halon pelo orifício, se houver." },
    { question: "O que é 'turbulência de solo'?", options: ["Não existe esse tipo de turbulência.", "A trepidação da aeronave durante o taxiamento.", "Turbulência gerada pela esteira de outra aeronave durante pouso ou decolagem.", "Ventos fortes no pátio do aeroporto."], answer: "Turbulência gerada pela esteira de outra aeronave durante pouso ou decolagem." },
    { question: "O que o comissário deve verificar nos lavatórios durante o cheque de cabine?", options: ["Se há papel higiênico suficiente.", "Se estão desocupados e se o detector de fumaça não está obstruído.", "A temperatura da água.", "Se o espelho está limpo."], answer: "Se estão desocupados e se o detector de fumaça não está obstruído." },
    { question: "Qual a finalidade do 'briefing silencioso' (30-second review) que o comissário faz antes do pouso e decolagem?", options: ["Uma oração silenciosa pela segurança do voo.", "Uma revisão mental dos procedimentos de emergência da sua estação.", "Um momento de relaxamento para controlar o estresse.", "Uma checagem visual da cabine."], answer: "Uma revisão mental dos procedimentos de emergência da sua estação." },
    { question: "Qual a função do 'Gasper Fan'?", options: ["É o ventilador principal da cabine.", "É a saída de ar condicionado individual acima do assento do passageiro.", "É um exaustor de fumaça na galley.", "É o sistema de refrigeração do cockpit."], answer: "É a saída de ar condicionado individual acima do assento do passageiro." },
    { question: "O que é o 'cheque de abandono'?", options: ["Verificar se o pagamento do seguro foi feito.", "Um documento a ser preenchido após a evacuação.", "Verificar se não há nenhum passageiro esquecido antes de evacuar.", "Checar se o trem de pouso está travado."], answer: "Verificar se não há nenhum passageiro esquecido antes de evacuar." },
    { question: "Por que a refeição do Comandante deve ser diferente da do Copiloto?", options: ["Para evitar que ambos tenham uma intoxicação alimentar ao mesmo tempo.", "Porque o comandante tem preferência na escolha.", "É apenas uma tradição da aviação.", "Para testar diferentes fornecedores de catering."], answer: "Para evitar que ambos tenham uma intoxicação alimentar ao mesmo tempo." },
    { question: "Em uma amerrissagem, qual o procedimento para crianças de colo?", options: ["Devem ser colocadas em um bote separado.", "Devem permanecer no colo da mãe ou responsável, com colete apropriado.", "Devem ser as primeiras a evacuar.", "Devem ser seguradas pelos comissários."], answer: "Devem permanecer no colo da mãe ou responsável, com colete apropriado." },
    { question: "Qual a primeira ação ao usar uma escorregadeira em uma evacuação em terra?", options: ["Pular com os dois pés juntos.", "Sentar e escorregar.", "Verificar se a área externa está livre e a escorregadeira totalmente inflada.", "Desconectar a escorregadeira da aeronave."], answer: "Verificar se a área externa está livre e a escorregadeira totalmente inflada." },
    { question: "Qual o tempo máximo que um contrato de trabalho por prazo determinado pode ser prorrogado?", options: ["Pode ser prorrogado indefinidamente.", "Pode ser prorrogado por mais 2 anos.", "Pode ser prorrogado apenas uma vez, dentro do limite total de 2 anos.", "Não pode ser prorrogado."], answer: "Pode ser prorrogado apenas uma vez, dentro do limite total de 2 anos." }
];

// NOVO BANCO DE QUESTÕES - ANIMAIS PEÇONHENTOS
const quizDataAnimaisPeconhentos = [
    // Serpentes (Cobras) - 20 Questões
    { question: "Qual é a classificação da dentição de serpentes que possuem presas pequenas e fixas na parte anterior da boca, como a Coral-verdadeira?", options: ["Solenóglifa", "Áglifa", "Opistóglifa", "Proteróglifa"], answer: "Proteróglifa" },
    { question: "A fosseta loreal, um orifício localizado entre o olho e a narina de algumas serpentes, tem a função de detectar:", options: ["Sons de baixa frequência", "Vibrações no solo", "Odores a longa distância", "Variações de calor (infravermelho)"], answer: "Variações de calor (infravermelho)" },
    { question: "O veneno da cobra Cascavel (Crotalus durissus) possui como principal característica a ação:", options: ["Coagulante e proteolítica", "Neurotóxica e miotóxica", "Apenas hemorrágica", "Apenas cardiotóxica"], answer: "Neurotóxica e miotóxica" },
    { question: "Em um acidente ofídico, a vítima apresenta dor e edema local, bolhas e sangramento no local da picada e gengivas. Esse quadro é característico do veneno de qual serpente?", options: ["Coral-verdadeira", "Jararaca (Bothrops)", "Cascavel", "Sucuri"], answer: "Jararaca (Bothrops)" },
    { question: "Qual é o procedimento de primeiros socorros terminantemente PROIBIDO em caso de picada de cobra?", options: ["Manter o acidentado em repouso", "Lavar o local da picada com água e sabão", "Realizar torniquete ou garrote no membro atingido", "Transportar a vítima ao hospital"], answer: "Realizar torniquete ou garrote no membro atingido" },
    { question: "A principal característica para diferenciar uma Jararaca de uma Surucucu-pico-de-jaca é:", options: ["A presença de guizo na cauda da Jararaca", "A presença de uma escama eriçada na ponta da cauda da Surucucu", "O formato triangular da cabeça da Surucucu", "A pupila em fenda vertical da Jararaca"], answer: "A presença de uma escama eriçada na ponta da cauda da Surucucu" },
    { question: "Serpentes como Jiboias e Sucuris, que não possuem presas especializadas para inocular veneno, são classificadas como:", options: ["Solenóglifas", "Áglifas", "Proteróglifas", "Peçonhentas"], answer: "Áglifas" },
    { question: "Um dos sinais clássicos do envenenamento por Cascavel é a urina de cor escura ('cor de Coca-Cola'). Isso ocorre devido a:", options: ["Lesão direta nos rins pelo veneno", "Liberação de mioglobina na urina devido a lesões musculares", "Hemorragia interna nos rins", "Desidratação severa"], answer: "Liberação de mioglobina na urina devido a lesões musculares" },
    { question: "O tratamento para envenenamento por Lachesis (Surucucu) exige a aplicação de soro:", options: ["Apenas antibotrópico", "Apenas anticrotálico", "Antilaquético (antibotrópico e anticrotálico)", "Apenas antielapídico"], answer: "Antilaquético (antibotrópico e anticrotálico)" },
    { question: "Como é chamado o estudo dos acidentes causados por serpentes?", options: ["Aracnidismo", "Lepidopterismo", "Ictismo", "Ofidismo"], answer: "Ofidismo" },
    { question: "Qual característica morfológica NÃO pertence ao grupo das serpentes peçonhentas como jararacas e cascavéis?", options: ["Cabeça com formato triangular", "Pupilas em fenda vertical", "Presença de fosseta loreal", "Cauda que afina suavemente sem guizo ou escama eriçada"], answer: "Cauda que afina suavemente sem guizo ou escama eriçada" },
    { question: "O veneno da Coral-Verdadeira (Micrurus) possui ação predominantemente:", options: ["Proteolítica", "Hemorrágica", "Neurotóxica", "Coagulante"], answer: "Neurotóxica" },
    { question: "Por que não se deve fazer incisões (cortes) ou sugar o local da picada de cobra?", options: ["Porque aumenta a circulação sanguínea no local", "Porque aprofunda o veneno nos tecidos e aumenta o risco de infecção e hemorragia", "Porque anula o efeito do soro antiofídico", "Porque o veneno é inativado pelo ar"], answer: "Porque aprofunda o veneno nos tecidos e aumenta o risco de infecção e hemorragia" },
    { question: "Dentição com grandes presas inoculadoras móveis e retráteis, localizadas na parte anterior do maxilar superior, é classificada como:", options: ["Proteróglifa", "Solenóglifa", "Opistóglifa", "Áglifa"], answer: "Solenóglifa" },
    { question: "Um sintoma comum no envenenamento elapídico (Coral) é a 'fácies neurotóxica', que se caracteriza por:", options: ["Inchaço e necrose da face", "Paralisia dos músculos da face, com pálpebras caídas", "Sangramento abundante pela boca e nariz", "Espasmos musculares faciais"], answer: "Paralisia dos músculos da face, com pálpebras caídas" },
    { question: "O que significa dizer que as serpentes são animais ectotérmicos ('pecilotérmicos')?", options: ["Possuem a capacidade de gerar calor interno", "Sua temperatura corporal varia de acordo com a do ambiente", "São imunes a variações de temperatura", "Hibernam durante o inverno obrigatoriamente"], answer: "Sua temperatura corporal varia de acordo com a do ambiente" },
    { question: "O veneno da Jararaca (Bothrops) possui quatro ações principais. Quais são elas?", options: ["Neurotóxica, miotóxica, hemolítica e cardiotóxica", "Proteolítica, coagulante, hemorrágica e inflamatória", "Apenas neurotóxica e hemorrágica", "Apenas coagulante e inflamatória"], answer: "Proteolítica, coagulante, hemorrágica e inflamatória" },
    { question: "Qual família de serpentes peçonhentas NÃO possui fosseta loreal?", options: ["Viperidae (Jararacas, Cascavéis)", "Crotalidae (Cascavéis)", "Elapidae (Corais-verdadeiras)", "Todas possuem fosseta loreal"], answer: "Elapidae (Corais-verdadeiras)" },
    { question: "O soro utilizado no tratamento de acidentes ofídicos é produzido a partir de qual fonte?", options: ["Extratos de plantas medicinais", "Sangue de cavalos imunizados com o veneno", "Compostos sintéticos criados em laboratório", "Sangue de sobreviventes humanos"], answer: "Sangue de cavalos imunizados com o veneno" },
    { question: "Ao se deparar com uma cobra, qual é a atitude mais segura a ser tomada?", options: ["Tentar capturá-la para identificação", "Fazer movimentos bruscos para assustá-la", "Afastar-se lentamente sem dar as costas ao animal", "Atirar objetos para forçá-la a sair do caminho"], answer: "Afastar-se lentamente sem dar as costas ao animal" },
    
    // Aracnídeos (Aranhas e Escorpiões) - 15 Questões
    { question: "A picada da Aranha-Marrom (Loxosceles) é famosa por causar uma lesão característica chamada de:", options: ["Placa urticante", "Edema de glote", "Placa marmórea (necrose cutânea)", "Paralisia flácida"], answer: "Placa marmórea (necrose cutânea)" },
    { question: "Qual aranha, ao se sentir ameaçada, assume uma posição de defesa erguendo as patas dianteiras, sendo conhecida pela agressividade e pela dor intensa e imediata de sua picada?", options: ["Viúva-Negra", "Aranha-Marrom", "Armadeira (Phoneutria)", "Caranguejeira"], answer: "Armadeira (Phoneutria)" },
    { question: "O escorpião Tityus serrulatus (escorpião-amarelo) é considerado o mais perigoso da América do Sul, principalmente por sua reprodução por:", options: ["Acasalamento polígamo", "Oviparidade", "Partenogênese", "Hermafroditismo"], answer: "Partenogênese" },
    { question: "O priapismo, uma ereção peniana prolongada e dolorosa, é um sintoma característico do envenenamento por qual animal?", options: ["Escorpião-amarelo", "Aranha-Armadeira", "Jararaca", "Lagarta Lonomia"], answer: "Aranha-Armadeira" },
    { question: "O veneno dos escorpiões do gênero Tityus possui ação predominantemente:", options: ["Proteolítica", "Hemorrágica", "Neurotóxica", "Coagulante"], answer: "Neurotóxica" },
    { question: "Qual o principal sintoma do acidente com a Aranha-Marrom nas primeiras horas, o que muitas vezes retarda a busca por socorro?", options: ["Dor excruciante imediata", "Febre alta e convulsões", "Pouca ou nenhuma dor inicial", "Paralisia do membro atingido"], answer: "Pouca ou nenhuma dor inicial" },
    { question: "O tratamento para acidentes com a Viúva-Negra (Latrodectus) envolve, em casos graves, a aplicação de soro:", options: ["Antiloxoscélico", "Antifoneûtrico", "Antilatrodéctico", "Antiescorpiônico"], answer: "Antilatrodéctico" },
    { question: "Qual aracnídeo não é considerado de importância médica para humanos, apesar do tamanho e aparência assustadora, causando no máximo reações alérgicas?", options: ["Aranha-Armadeira", "Aranha-Marrom", "Caranguejeira (Tarântula)", "Viúva-Negra"], answer: "Caranguejeira (Tarântula)" },
    { question: "O veneno do escorpião-amarelo é especialmente perigoso para:", options: ["Adultos do sexo masculino", "Adolescentes", "Crianças e idosos", "Pessoas com tipo sanguíneo O+"], answer: "Crianças e idosos" },
    { question: "O conjunto de acidentes provocados por aranhas é denominado:", options: ["Ofidismo", "Aracnidismo", "Escorpionismo", "Loxoscelismo"], answer: "Aracnidismo" },
    { question: "Qual a principal diferença entre o veneno da Aranha-Marrom e o da Armadeira?", options: ["O da Marrom é neurotóxico, e o da Armadeira é proteolítico", "O da Marrom causa necrose, e o da Armadeira causa dor intensa e imediata", "O da Marrom é inofensivo, e o da Armadeira é sempre fatal", "Não há diferença significativa"], answer: "O da Marrom causa necrose, e o da Armadeira causa dor intensa e imediata" },
    { question: "Onde as aranhas do gênero Loxosceles (Marrom) costumam se abrigar, aumentando o risco de acidentes dentro de casa?", options: ["Em locais abertos e ensolarados do jardim", "Em teias grandes e visíveis no teto", "Atrás de móveis, em roupas guardadas e sapatos", "Em plantas e flores"], answer: "Atrás de móveis, em roupas guardadas e sapatos" },
    { question: "Em caso de picada de escorpião, qual medida pode aliviar a dor local até a chegada do socorro médico?", options: ["Aplicar um torniquete", "Fazer compressas de gelo ou água fria", "Aplicar álcool ou querosene", "Fazer um corte e sugar o local"], answer: "Fazer compressas de gelo ou água fria" },
    { question: "A Aranha Viúva-Negra fêmea é a responsável pelos acidentes. Uma característica marcante em seu abdômen é:", options: ["Um desenho em formato de violino", "Uma mancha vermelha em formato de ampulheta", "Listras amarelas e pretas", "Pelos longos e avermelhados"], answer: "Uma mancha vermelha em formato de ampulheta" },
    { question: "O Tityus bahiensis é popularmente conhecido como:", options: ["Escorpião-amarelo", "Escorpião-vinagre", "Escorpião-preto", "Lacraia"], answer: "Escorpião-preto" },

    // Outros Animais e Condições - 15 Questões
    { question: "O 'Lepidopterismo' refere-se a acidentes causados por:", options: ["Abelhas e vespas", "Besouros venenosos", "Contato com cerdas de lagartas (taturanas)", "Picadas de mosquitos"], answer: "Contato com cerdas de lagartas (taturanas)" },
    { question: "A lagarta do gênero Lonomia é extremamente perigosa por seu veneno ter ação:", options: ["Urticante e que causa bolhas", "Neurotóxica, causando paralisia", "Hemorrágica e fibrinolítica, alterando a coagulação do sangue", "Alérgica, causando choque anafilático"], answer: "Hemorrágica e fibrinolítica, alterando a coagulação do sangue" },
    { question: "Em um acidente com múltiplas picadas de abelhas, qual é o procedimento correto para remover os ferrões?", options: ["Espremer cada um para retirar todo o veneno", "Puxá-los um a um com uma pinça", "Raspar o local com uma lâmina ou cartão, sem espremer as glândulas de veneno", "Deixá-los no local para que saiam sozinhos"], answer: "Raspar o local com uma lâmina ou cartão, sem espremer as glândulas de veneno" },
    { question: "O 'Cnidarismo' é a condição resultante do contato com:", options: ["Anfíbios, como sapos", "Ouríços-do-mar e estrelas-do-mar", "Cnidários, como águas-vivas e caravelas", "Peixes elétricos"], answer: "Cnidários, como águas-vivas e caravelas" },
    { question: "O veneno de peixes como o Niquim ou a Arraia é geralmente 'termolábil'. O que isso significa para os primeiros socorros?", options: ["Que o veneno é neutralizado por pressão", "Que o veneno é neutralizado pela aplicação de calor (água quente)", "Que o veneno é neutralizado por substâncias ácidas como vinagre", "Que o veneno não tem antídoto"], answer: "Que o veneno é neutralizado pela aplicação de calor (água quente)" },
    { question: "O envenenamento por contato com as glândulas de veneno de sapos (gênero Bufo) é chamado de:", options: ["Batracotoxismo", "Ictismo", "Ofidismo", "Frinrinismo"], answer: "Frinrinismo" },
    { question: "O choque anafilático, uma reação alérgica grave e potencialmente fatal, é um risco principal em acidentes com:", options: ["Jararacas", "Taturanas Lonomia", "Himenópteros (abelhas, vespas, formigas)", "Aranhas-marrons"], answer: "Himenópteros (abelhas, vespas, formigas)" },
    { question: "Para neutralizar a ação urticante das toxinas de caravelas e águas-vivas, qual substância de uso comum é recomendada para lavar o local?", options: ["Água doce corrente", "Urina", "Álcool", "Vinagre"], answer: "Vinagre" },
    { question: "Qual a recomendação principal ao se deparar com um cardume de tubarões em alto mar?", options: ["Fazer muito barulho para afugentá-los", "Nadar rapidamente para longe do cardume", "Permanecer em grupo, em silêncio e com movimentos mínimos", "Jogar objetos na água para distraí-los"], answer: "Permanecer em grupo, em silêncio e com movimentos mínimos" },
    { question: "O Brasil é o único país do mundo que produz o soro para o envenenamento por lagartas Lonomia. Qual o nome desse soro?", options: ["Antiloxoscélico", "Antilonômico", "Antielapídico", "Antilepidóptero"], answer: "Antilonômico" },
    { question: "O 'Ictismo' é a denominação para acidentes causados por:", options: ["Insetos em geral", "Peixes peçonhentos ou venenosos", "Moluscos marinhos", "Crustáceos"], answer: "Peixes peçonhentos ou venenosos" },
    { question: "A moreia é um peixe perigoso em ambientes marinhos principalmente por causa de:", options: ["Sua carne venenosa", "Sua picada com ferrão na cauda", "Sua mordida forte e potencialmente infecciosa", "Sua capacidade de gerar choques elétricos"], answer: "Sua mordida forte e potencialmente infecciosa" },
    { question: "O que NÃO se deve fazer em caso de contato com a taturana Lonomia?", options: ["Lavar o local com água fria e sabão", "Procurar atendimento médico imediatamente", "Aplicar pomadas, folhas ou pó de café sobre a lesão", "Tentar levar o animal para identificação"], answer: "Aplicar pomadas, folhas ou pó de café sobre a lesão" },
    { question: "As arraias fluviais são temidas por causarem acidentes dolorosos. Onde se localiza seu ferrão?", options: ["Na boca", "Nas nadadeiras dorsais", "Na extremidade da cauda", "Nas brânquias"], answer: "Na extremidade da cauda" },
    { question: "Ao encontrar um baiacu (pufferfish), qual o principal perigo que ele oferece?", options: ["Sua mordida poderosa", "Seus espinhos venenosos na pele", "A toxicidade de sua carne e órgãos (tetrodotoxina) se ingerido", "Sua velocidade de ataque"], answer: "A toxicidade de sua carne e órgãos (tetrodotoxina) se ingerido" }
]

// NOVO BANCO DE QUESTÕES - SOBREVIVÊNCIA NO MAR
const quizDataSobrevivenciaMar = [
    // Botes e Equipamentos - 20 Questões
    { question: "Qual é a principal função da âncora flutuante (biruta d'água) de um bote salva-vidas?", options: ["Manter o bote parado em um só lugar", "Reduzir a deriva e manter a proa do bote virada para o vento e as ondas", "Servir como coletor de água da chuva", "Sinalizar a posição do bote para aeronaves"], answer: "Reduzir a deriva e manter a proa do bote virada para o vento e as ondas" },
    { question: "O tubo de um bote salva-vidas é inflado por qual gás?", options: ["Oxigênio puro (O2)", "Ar comprimido", "Dióxido de carbono (CO2) não tóxico", "Nitrogênio (N2)"], answer: "Dióxido de carbono (CO2) não tóxico" },
    { question: "Em um bote com capacidade para 25 pessoas, qual é a dotação mínima de água potável em sachês?", options: ["1,5 litros por pessoa", "1 litro por pessoa", "0,5 litro por pessoa", "0,333 litro por pessoa"], answer: "0,5 litro por pessoa" },
    { question: "Caso um bote salva-vidas infle emborcado (de cabeça para baixo) na água, qual o procedimento correto?", options: ["Abandonar o bote, pois está inutilizado", "Esperar que as ondas o desvirem naturalmente", "Subir na parte de baixo e usar a fita de correção para virá-lo", "Furar um dos flutuadores para que ele perca o equilíbrio e vire"], answer: "Subir na parte de baixo e usar a fita de correção para virá-lo" },
    { question: "O lado externo e superior do toldo de um bote salva-vidas tem a cor laranja ou vermelha com a finalidade de:", options: ["Absorver calor e aquecer os sobreviventes", "Ser discreto e evitar predadores", "Facilitar a localização visual pelas equipes de resgate", "Coletar água da chuva"], answer: "Facilitar a localização visual pelas equipes de resgate" },
    { question: "O que deve ser feito para aliviar a pressão excessiva nos tubos de flutuação de um bote em dias de sol forte?", options: ["Jogar água do mar constantemente sobre os tubos", "Esvaziar um pouco de ar utilizando a válvula de escape manual", "Cobrir o bote com roupas e tecidos", "Inflar os tubos ao máximo para que resistam à expansão"], answer: "Esvaziar um pouco de ar utilizando a válvula de escape manual" },
    { question: "Qual item do kit de sobrevivência é projetado para fazer reparos em pequenos furos no bote?", options: ["Estojo de primeiros socorros", "Apito e espelho", "Kit de reparos (tampões e vedantes)", "Faca de lâmina flutuante"], answer: "Kit de reparos (tampões e vedantes)" },
    { question: "A quantidade de ração sólida de emergência contida nos kits de sobrevivência é medida em:", options: ["Calorias por quilo", "Gramas por pessoa", "Quilojoules (KJ) por pessoa", "Unidades de barra"], answer: "Quilojoules (KJ) por pessoa" },
    { question: "Qual é a função do lado azul do toldo reversível de um bote salva-vidas?", options: ["Sinalização noturna", "Camuflagem em águas abertas", "Coleta de água da chuva", "Sinalização diurna"], answer: "Coleta de água da chuva" },
    { question: "A 'válvula de alívio de pressão' em um bote salva-vidas serve para:", options: ["Inflar o bote manualmente", "Impedir que o bote infle excessivamente e se rompa durante a inflação inicial", "Esvaziar o bote rapidamente para guardá-lo", "Conectar a bomba manual"], answer: "Impedir que o bote infle excessivamente e se rompa durante a inflação inicial" },
    { question: "Qual o procedimento correto para embarcar em um bote salva-vidas a partir da água?", options: ["Tentar pular por cima da lateral em qualquer ponto", "Usar a escada de embarque ou ser auxiliado por quem já está a bordo", "Impulsionar-se usando o fundo do bote", "Esvaziar um pouco o bote para facilitar a entrada"], answer: "Usar a escada de embarque ou ser auxiliado por quem já está a bordo" },
    { question: "O que é a ' retinida' em um bote salva-vidas?", options: ["A corda que prende o bote à aeronave e aciona o sistema de inflação", "A corda que circunda o bote para os sobreviventes se agarrarem", "A corda usada para amarrar os botes uns aos outros", "A corda da âncora flutuante"], answer: "A corda que prende o bote à aeronave e aciona o sistema de inflação" },
    { question: "O kit de pesca presente em alguns kits de sobrevivência no mar deve ser usado preferencialmente:", options: ["Assim que o abandono ocorrer, para garantir comida", "Apenas quando as rações de emergência tiverem acabado", "Apenas durante a noite", "Quando houver fartura de água potável, pois a digestão do peixe consome água do corpo"], answer: "Quando houver fartura de água potável, pois a digestão do peixe consome água do corpo" },
    { question: "A bomba de inflação manual serve para:", options: ["Inflar o bote completamente a partir do zero", "Completar a inflação dos tubos ou manter a pressão correta", "Testar as válvulas de segurança", "Inflar os coletes salva-vidas"], answer: "Completar a inflação dos tubos ou manter a pressão correta" },
    { question: "O que deve ser feito com o primeiro peixe pescado em uma situação de sobrevivência?", options: ["Consumi-lo imediatamente para repor as energias", "Usá-lo como isca para pescar peixes maiores", "Dividi-lo em porções para todos os sobreviventes", "Guardá-lo para quando a fome for extrema"], answer: "Usá-lo como isca para pescar peixes maiores" },
    { question: "A faca presente no kit do bote salva-vidas normalmente possui ponta romba e lâmina flutuante para:", options: ["Ser mais segura e evitar perfurações acidentais no bote", "Facilitar o corte de peixes", "Ser usada como arma de defesa", "Cortar a retinida com mais facilidade"], answer: "Ser mais segura e evitar perfurações acidentais no bote" },
    { question: "Qual a função do estojo de primeiros socorros a bordo de uma balsa?", options: ["Prover tratamento definitivo para lesões graves", "Conter apenas analgésicos e bandagens", "Prover cuidados básicos para lesões comuns no mar, como enjoo, queimaduras e ferimentos leves", "Ser usado apenas pelo líder do grupo"], answer: "Prover cuidados básicos para lesões comuns no mar, como enjoo, queimaduras e ferimentos leves" },
    { question: "A capacidade máxima de um bote salva-vidas é determinada:", options: ["Pelo peso total dos sobreviventes", "Pelo espaço físico disponível para sentar", "Pelo volume de flutuação dos tubos e pela área útil", "Pela quantidade de suprimentos a bordo"], answer: "Pelo volume de flutuação dos tubos e pela área útil" },
    { question: "A água da chuva deve ser coletada:", options: ["Diretamente no fundo do bote, misturada com a água salgada", "No toldo, após ter chovido o suficiente para lavar o sal acumulado", "Apenas nos primeiros minutos de chuva", "Em recipientes que não foram lavados"], answer: "No toldo, após ter chovido o suficiente para lavar o sal acumulado" },
    { question: "Após o abandono da aeronave, a retinida deve ser cortada:", options: ["Imediatamente após a inflação do bote", "Apenas quando a aeronave estiver afundando e houver risco de o bote ser levado junto", "Assim que todos os sobreviventes estiverem a bordo", "Nunca, pois ela mantém o bote próximo ao local do acidente"], answer: "Apenas quando a aeronave estiver afundando e houver risco de o bote ser levado junto" },

    // Procedimentos, Perigos e Fisiologia - 20 Questões
    { question: "Qual o momento correto para inflar o colete salva-vidas ao abandonar uma aeronave na água?", options: ["Ainda sentado em sua poltrona, antes do impacto", "No corredor da aeronave, antes de chegar à saída", "Somente ao estar na porta de saída, sobre a asa ou já fora da aeronave", "Dentro do bote salva-vidas"], answer: "Somente ao estar na porta de saída, sobre a asa ou já fora da aeronave" },
    { question: "A principal causa de morte em acidentes aéreos no mar, especialmente em águas frias, é:", options: ["Ataques de tubarão", "Afogamento por exaustão", "Hipotermia", "Desidratação"], answer: "Hipotermia" },
    { question: "A ingestão de água do mar para matar a sede é extremamente perigosa porque:", options: ["Aumenta a sensação de fome", "Causa um efeito paradoxal, levando a uma desidratação ainda mais severa", "Contém microrganismos que causam infecções imediatas", "Causa hipotermia"], answer: "Causa um efeito paradoxal, levando a uma desidratação ainda mais severa" },
    { question: "Para conservar o calor corporal na água (posição HELP - Heat Escape Lessening Posture), um indivíduo deve:", options: ["Nadar vigorosamente para se aquecer", "Boiarem de costas com os braços e pernas abertos", "Encolher os joelhos contra o peito e cruzar os braços sobre eles", "Bater os pés e as mãos constantemente"], answer: "Encolher os joelhos contra o peito e cruzar os braços sobre eles" },
    { question: "Em um grupo de sobreviventes na água, qual formação eles devem adotar para conservar calor e aumentar a visibilidade?", options: ["Formar uma fila única", "Manter-se afastados uns dos outros", "Formar um círculo compacto, com os mais vulneráveis no centro", "Nadar em direções opostas para procurar ajuda"], answer: "Formar um círculo compacto, com os mais vulneráveis no centro" },
    { question: "O primeiro racionamento de água para os sobreviventes a bordo de um bote deve começar:", options: ["Imediatamente após o embarque, com fartura", "Apenas após as primeiras 24 horas, para permitir que o corpo se adapte", "Apenas para as pessoas feridas", "Somente após 48 horas sem perspectiva de resgate"], answer: "Apenas após as primeiras 24 horas, para permitir que o corpo se adapte" },
    { question: "Qual é a atitude mais segura ao avistar um tubarão enquanto se está no bote salva-vidas?", options: ["Fazer barulho e jogar objetos na água para assustá-lo", "Permanecer em silêncio, evitar movimentos bruscos e não jogar nada na água", "Tentar pescar o tubarão para obter comida", "Pular na água em grupo para intimidá-lo"], answer: "Permanecer em silêncio, evitar movimentos bruscos e não jogar nada na água" },
    { question: "As 'úlceras de água salgada' são feridas na pele causadas por:", options: ["Contato com águas-vivas", "Exposição prolongada e atrito da pele com roupas molhadas de água do mar", "Bactérias presentes na água do mar", "Alergia ao sal"], answer: "Exposição prolongada e atrito da pele com roupas molhadas de água do mar" },
    { question: "A 'cegueira da neve' (oftalmia) pode ocorrer no mar devido a:", options: ["Falta de vitamina A", "Contato direto dos olhos com a água salgada", "Intensa reflexão da luz solar na superfície da água", "Hipotermia"], answer: "Intensa reflexão da luz solar na superfície da água" },
    { question: "Por que é importante manter o corpo e as roupas o mais seco possível dentro do bote?", options: ["Para evitar o mau cheiro", "Para reduzir a perda de calor corporal por evaporação e prevenir a hipotermia", "Para evitar que o bote fique pesado demais", "Para não danificar os equipamentos eletrônicos"], answer: "Para reduzir a perda de calor corporal por evaporação e prevenir a hipotermia" },
    { question: "Qual é a prioridade número um para o líder de um grupo de sobreviventes no mar?", options: ["Encontrar terra firme o mais rápido possível", "Manter o moral e a disciplina do grupo", "Racionar a comida de forma igualitária", "Pescar o tempo todo"], answer: "Manter o moral e a disciplina do grupo" },
    { question: "Se houver múltiplos botes salva-vidas, o que se deve fazer?", options: ["Cada bote segue uma direção para aumentar as chances de encontrar terra", "Amarrar todos os botes uns aos outros para formar um alvo maior e facilitar a ajuda mútua", "O bote com mais pessoas deve ficar com todos os suprimentos", "Competir para ver qual bote é resgatado primeiro"], answer: "Amarrar todos os botes uns aos outros para formar um alvo maior e facilitar a ajuda mútua" },
    { question: "Beber urina em uma situação de desidratação extrema é:", options: ["Recomendado, pois é uma fonte estéril de líquidos", "Contraindicado, pois os resíduos tóxicos sobrecarregam os rins e pioram a desidratação", "Permitido apenas se for misturada com água do mar", "Recomendado apenas para limpar feridas"], answer: "Contraindicado, pois os resíduos tóxicos sobrecarregam os rins e pioram a desidratação" },
    { question: "O enjoo (cinetose) a bordo do bote deve ser combatido porque:", options: ["É contagioso e pode afetar a todos", "Causa vômitos que levam à perda de líquidos preciosos e à desidratação", "Atrai tubarões", "É um sinal de doença grave"], answer: "Causa vômitos que levam à perda de líquidos preciosos e à desidratação" },
    { question: "Ao ver um navio no horizonte, qual ação tem prioridade?", options: ["Começar a remar em sua direção", "Usar imediatamente os sinalizadores de curto alcance, como o apito", "Guardar os sinalizadores para quando ele estiver mais perto", "Usar os sinalizadores de longo alcance, como o heliógrafo ou foguete pirotécnico"], answer: "Usar os sinalizadores de longo alcance, como o heliógrafo ou foguete pirotécnico" },
    { question: "Qual a melhor maneira de se proteger do sol e do calor excessivo dentro do bote?", options: ["Permanecer sem roupas e molhando o corpo constantemente", "Montar o toldo, manter as roupas (mesmo que finas) e improvisar proteção para a cabeça", "Ficar no lado do bote que recebe mais sol para se bronzear", "Dormir durante o dia para evitar o calor"], answer: "Montar o toldo, manter as roupas (mesmo que finas) e improvisar proteção para a cabeça" },
    { question: "O que deve ser estabelecido assim que a situação se estabilizar no bote?", options: ["Um sistema de racionamento de comida", "Um plano de navegação para a terra mais próxima", "Turnos de vigia para avistar resgate, navios ou terra", "Uma votação para eleger o líder"], answer: "Turnos de vigia para avistar resgate, navios ou terra" },
    { question: "A exposição prolongada ao frio, mesmo sem imersão, pode levar à hipotermia. Qual é um dos primeiros sinais?", options: ["Suor excessivo", "Sensação de calor intenso", "Calafrios incontroláveis", "Sede extrema"], answer: "Calafrios incontroláveis" },
    { question: "Se um sobrevivente for picado por uma água-viva, o tratamento inicial inclui:", options: ["Lavar o local com água doce e esfregar com areia", "Aplicar urina ou álcool", "Remover os tentáculos com cuidado e lavar com água do mar e vinagre, se disponível", "Fazer um torniquete acima da lesão"], answer: "Remover os tentáculos com cuidado e lavar com água do mar e vinagre, se disponível" },
    { question: "O que a 'miragem' pode causar aos sobreviventes no mar?", options: ["Pode criar falsas esperanças, fazendo-os avistar terra ou navios que não existem", "Pode ajudar na orientação, mostrando a direção correta", "Causa cegueira temporária", "Pode prever a chegada de tempestades"], answer: "Pode criar falsas esperanças, fazendo-os avistar terra ou navios que não existem" },

    // Sinalização - 10 Questões
    { question: "O heliógrafo (espelho de sinalização) é mais eficaz quando:", options: ["Durante a noite, refletindo a luz da lua", "Em dias nublados ou com neblina", "Em dias ensolarados, para direcionar o reflexo do sol a um alvo", "Apenas para comunicação entre botes próximos"], answer: "Em dias ensolarados, para direcionar o reflexo do sol a um alvo" },
    { question: "Qual sinalizador pirotécnico é projetado para uso diurno e produz uma fumaça densa e colorida?", options: ["Foguete com paraquedas e estrela vermelha", "Facho manual de luz vermelha", "Sinalizador fumígeno flutuante (fumaça laranja)", "Estrela de sinalização"], answer: "Sinalizador fumígeno flutuante (fumaça laranja)" },
    { question: "O foguete com paraquedas e estrela vermelha é um sinalizador de:", options: ["Curto alcance para uso diurno", "Longo alcance para uso noturno e diurno", "Uso exclusivo para indicar a posição exata para helicópteros", "Uso submarino"], answer: "Longo alcance para uso noturno e diurno" },
    { question: "O 'corante de marcação' (sea dye marker) é um recurso de sinalização que:", options: ["Cria uma grande mancha colorida e fluorescente na água, visível do alto", "Atrai peixes para facilitar a pesca", "Repele tubarões", "Muda a cor do bote para aumentar a visibilidade"], answer: "Cria uma grande mancha colorida e fluorescente na água, visível do alto" },
    { question: "Para qual finalidade o apito é o sinalizador mais adequado?", options: ["Atrair a atenção de um navio a 5 km de distância", "Sinalizar para uma aeronave em voo de cruzeiro", "Chamar a atenção de um barco próximo ou da equipe de resgate em condições de baixa visibilidade", "Comunicar-se em código Morse a longa distância"], answer: "Chamar a atenção de um barco próximo ou da equipe de resgate em condições de baixa visibilidade" },
    { question: "O facho manual de luz vermelha (hand flare) é um sinalizador de:", options: ["Longo alcance, para ser visto além do horizonte", "Uso exclusivo durante o dia", "Curto alcance, usado para mostrar a posição exata a um resgate que se aproxima", "Sinalização subaquática"], answer: "Curto alcance, usado para mostrar a posição exata a um resgate que se aproxima" },
    { question: "A sigla EPIRB significa:", options: ["Emergency Position Indicating Radio Beacon", "Electronic Pilot Information Radio Buoy", "Emergency Piracy Incident Response Beacon", "External Power Indicating Radio Buoy"], answer: "Emergency Position Indicating Radio Beacon" },
    { question: "Qual a principal vantagem de um EPIRB ou ELT?", options: ["Fornece luz e calor", "Pode ser usado para comunicação por voz", "Transmite um sinal de socorro com a localização GPS para satélites automaticamente", "Repele a vida marinha"], answer: "Transmite um sinal de socorro com a localização GPS para satélites automaticamente" },
    { question: "Ao utilizar um sinalizador pirotécnico, deve-se sempre:", options: ["Apontá-lo para dentro do bote para não se perder", "Usá-lo na direção contrária ao vento para se proteger da fumaça e faíscas", "Mergulhá-lo na água imediatamente após o uso", "Guardá-lo para usar novamente mais tarde"], answer: "Usá-lo na direção contrária ao vento para se proteger da fumaça e faíscas" },
    { question: "Qual o erro mais comum no uso de sinalizadores em uma situação de sobrevivência?", options: ["Usá-los todos de uma vez logo no início", "Guardá-los e nunca usá-los com medo de desperdiçar", "Usá-los apenas durante o dia", "Não ler as instruções antes de usar"], answer: "Usá-los todos de uma vez logo no início" }
]

// NOVO BANCO DE QUESTÕES - SOBREVIVÊNCIA NA TERRA
const quizDataSobrevivenciaTerra = [
    // Água - 17 Questões
    { question: "Qual é a prioridade fisiológica mais imediata para um sobrevivente em um ambiente terrestre, após os primeiros socorros?", options: ["Abrigo", "Fogo", "Alimento", "Água"], answer: "Água" },
    { question: "A 'Regra dos Três' da sobrevivência estipula que um ser humano pode sobreviver, em média, até:", options: ["3 minutos sem água", "3 horas sem água", "3 dias sem água", "3 semanas sem água"], answer: "3 dias sem água" },
    { question: "Qual é o método mais seguro e universalmente recomendado para purificar água de fontes desconhecidas?", options: ["Filtragem através de um tecido", "Adição de gotas de limão", "Fervura contínua por pelo menos um minuto", "Deixá-la decantar por uma hora"], answer: "Fervura contínua por pelo menos um minuto" },
    { question: "Na ausência de um recipiente para ferver água, qual método de purificação química é comumente encontrado em kits de sobrevivência?", options: ["Duas gotas de iodo (tintura a 2%) por litro de água", "Uma colher de sal por litro de água", "Dez gotas de vinagre por litro de água", "Uma pitada de areia para filtrar"], answer: "Duas gotas de iodo (tintura a 2%) por litro de água" },
    { question: "Em uma região de selva, qual planta é uma fonte notável de água potável, que pode ser extraída cortando-se um pedaço de seu caule?", options: ["Samambaia", "Coqueiro", "Cipó de casca grossa", "Bambu"], answer: "Cipó de casca grossa" },
    { question: "A presença da palmeira Buriti em uma área é um forte indicativo de:", options: ["Solo rochoso e seco", "Animais peçonhentos", "Proximidade de água (terreno brejoso ou úmido)", "Frutos venenosos"], answer: "Proximidade de água (terreno brejoso ou úmido)" },
    { question: "O que é um 'destilador solar' e para que serve?", options: ["Um dispositivo para cozinhar alimentos usando o sol", "Um buraco cavado no solo, coberto com um plástico, para coletar água por condensação", "Uma lente para iniciar fogo", "Um tipo de filtro de água feito com areia e carvão"], answer: "Um buraco cavado no solo, coberto com um plástico, para coletar água por condensação" },
    { question: "Ao cavar em busca de água no leito seco de um rio, onde é mais provável encontrá-la?", options: ["No ponto mais largo do leito", "Na parte externa e mais baixa de uma curva", "Exatamente no meio do leito", "Em qualquer lugar, a probabilidade é a mesma"], answer: "Na parte externa e mais baixa de uma curva" },
    { question: "A água coletada do orvalho pela manhã é considerada:", options: ["Imprópria para consumo, pois contém muitos microrganismos", "Potável e segura para consumo imediato, sem necessidade de purificação", "Muito salgada para ser consumida", "Ácida e corrosiva"], answer: "Potável e segura para consumo imediato, sem necessidade de purificação" },
    { question: "Qual o principal risco de beber água de fontes paradas (poças, lagos sem afluentes) sem tratamento adequado?", options: ["Alto teor de sal", "Presença de parasitas e bactérias que causam doenças gastrointestinais", "Baixa oxigenação", "Temperatura muito elevada"], answer: "Presença de parasitas e bactérias que causam doenças gastrointestinais" },
    { question: "Plantas como bromélias acumulam água em seu interior. Essa água é segura para beber?", options: ["Sim, sempre é potável e pode ser bebida diretamente", "Não, nunca deve ser consumida", "É uma fonte viável, mas deve ser filtrada para remover insetos e detritos antes de purificar", "Sim, mas apenas se a planta estiver no sol"], answer: "É uma fonte viável, mas deve ser filtrada para remover insetos e detritos antes de purificar" },
    { question: "Um filtro improvisado com camadas de areia, cascalho e carvão é eficaz para:", options: ["Matar vírus e bactérias", "Remover o sal da água do mar", "Remover partículas em suspensão e melhorar o sabor e odor (clarificação)", "Tornar qualquer água 100% potável"], answer: "Remover partículas em suspensão e melhorar o sabor e odor (clarificação)" },
    { question: "Os primeiros sintomas de desidratação severa incluem:", options: ["Suor excessivo e euforia", "Fome intensa e palidez", "Boca seca, urina escura, tontura e fraqueza", "Calafrios e tremores"], answer: "Boca seca, urina escura, tontura e fraqueza" },
    { question: "Por que não se deve comer neve diretamente para saciar a sede?", options: ["Porque a neve não hidrata o corpo", "Porque o corpo gasta mais energia e calor para derretê-la do que a água que ela fornece, podendo levar à hipotermia", "Porque a neve sempre contém amônia", "Porque causa queimaduras na garganta"], answer: "Porque o corpo gasta mais energia e calor para derretê-la do que a água que ela fornece, podendo levar à hipotermia" },
    { question: "Em regiões costeiras, é possível encontrar água doce cavando-se:", options: ["Na areia da praia, próximo à linha da maré alta", "Entre as dunas, longe da rebentação do mar", "Em rochas a beira-mar", "Apenas durante a maré baixa"], answer: "Entre as dunas, longe da rebentação do mar" },
    { question: "A água do interior de um coco verde é uma excelente fonte de:", options: ["Proteínas e gorduras", "Líquidos e eletrólitos, sendo segura para beber", "Sal e sódio em excesso", "Calorias, mas não hidrata"], answer: "Líquidos e eletrólitos, sendo segura para beber" },
    { question: "A coleta de água da chuva usando um poncho ou lona deve ser feita:", options: ["Apenas nos primeiros 5 minutos de chuva", "Após alguns minutos de chuva para que a lona seja lavada de impurezas", "Apenas durante a noite", "Apenas em chuvas de granizo"], answer: "Após alguns minutos de chuva para que a lona seja lavada de impurezas" },

    // Fogo - 17 Questões
    { question: "Quais são os três componentes do 'triângulo do fogo'?", options: ["Faísca, madeira e vento", "Calor, oxigênio e combustível", "Atrito, pressão e isca", "Fumaça, chama e brasa"], answer: "Calor, oxigênio e combustível" },
    { question: "No processo de iniciar uma fogueira, qual é a função da 'isca'?", options: ["Manter o fogo aceso por longos períodos", "Ser o primeiro material a pegar fogo a partir de uma faísca ou brasa", "Gerar fumaça para sinalização", "Servir como combustível principal"], answer: "Ser o primeiro material a pegar fogo a partir de uma faísca ou brasa" },
    { question: "Qual dos seguintes materiais é um excelente exemplo de isca para iniciar fogo?", options: ["Galhos grossos e úmidos", "Lascas de madeira verde", "Algodão, paina de plantas, pó de madeira seca ou capim muito fino e seco", "Folhas verdes e largas"], answer: "Algodão, paina de plantas, pó de madeira seca ou capim muito fino e seco" },
    { question: "O método de iniciar fogo focando a luz do sol através de uma lente (de óculos, binóculo, câmera) é chamado de:", options: ["Método de fricção", "Método de concussão", "Método de conversão", "Método de concentração"], answer: "Método de concentração" },
    { question: "Ao se preparar para acender uma fogueira, a organização correta dos combustíveis é:", options: ["Empilhar toda a lenha e tentar acender a base", "Acender a isca e então adicionar gravetos finos, seguidos de gravetos mais grossos e, por fim, a lenha", "Usar apenas lenha grossa para um fogo mais duradouro", "Misturar isca, gravetos e lenha todos juntos"], answer: "Acender a isca e então adicionar gravetos finos, seguidos de gravetos mais grossos e, por fim, a lenha" },
    { question: "A pederneira (firesteel) produz fogo ao ser atritada com uma lâmina de aço, gerando:", options: ["Uma chama direta e constante", "Calor intenso que inflama a madeira", "Faíscas de alta temperatura que incendeiam a isca", "Fumaça quente"], answer: "Faíscas de alta temperatura que incendeiam a isca" },
    { question: "Para que serve uma 'parede refletora' construída atrás de uma fogueira?", options: ["Para esconder a luz da fogueira", "Para bloquear o vento e direcionar a fumaça para cima", "Para irradiar o calor de volta para o abrigo ou para os sobreviventes", "Para secar lenha mais rapidamente"], answer: "Para irradiar o calor de volta para o abrigo ou para os sobreviventes" },
    { question: "Por que se deve evitar acender fogueiras diretamente sob árvores com galhos baixos e secos?", options: ["Porque a fumaça pode matar a árvore", "Pelo alto risco de o fogo se espalhar e causar um incêndio florestal", "Porque a fuligem pode contaminar fontes de água próximas", "Porque a luz atrai predadores noturnos"], answer: "Pelo alto risco de o fogo se espalhar e causar um incêndio florestal" },
    { question: "Madeiras resinosas, como o pinho, são excelentes para:", options: ["Cozinhar lentamente, pois queimam devagar", "Fazer uma cama de brasas duradouras", "Iniciar o fogo e como lenha, pois queimam rápido e com calor intenso", "Construir o abrigo, pois são resistentes ao fogo"], answer: "Iniciar o fogo e como lenha, pois queimam rápido e com calor intenso" },
    { question: "Qual o principal benefício de se cozinhar os alimentos em uma situação de sobrevivência?", options: ["Melhora o sabor dos alimentos", "Mata parasitas e bactérias, tornando o alimento mais seguro, e facilita a digestão", "Aumenta o teor de vitaminas dos alimentos", "Sempre remove qualquer toxina ou veneno"], answer: "Mata parasitas e bactérias, tornando o alimento mais seguro, e facilita a digestão" },
    { question: "O que é um 'fogo de trincheira'?", options: ["Uma fogueira elevada sobre uma plataforma de madeira", "Uma fogueira feita em um buraco ou vala para proteger do vento e ocultar a luz", "Um tipo de tocha para iluminação", "Uma fogueira que queima de cima para baixo"], answer: "Uma fogueira feita em um buraco ou vala para proteger do vento e ocultar a luz" },
    { question: "Qual o risco de jogar gasolina ou outro combustível líquido sobre uma fogueira já acesa?", options: ["O fogo pode se apagar", "A gasolina não vai queimar", "Ocorrer uma combustão explosiva (flashback) que pode causar graves queimaduras", "A fumaça se tornará tóxica"], answer: "Ocorrer uma combustão explosiva (flashback) que pode causar graves queimaduras" },
    { question: "O carvão vegetal, encontrado em árvores queimadas por raios, é um bom recurso porque:", options: ["É difícil de acender", "Queima com muita fumaça, sendo bom para sinalizar", "É mais leve que a madeira", "Acende facilmente e queima com calor constante e pouca fumaça"], answer: "Acende facilmente e queima com calor constante e pouca fumaça" },
    { question: "Na ausência de equipamentos, o 'método do arado de fogo' é uma técnica de:", options: ["Cozimento", "Fricção para gerar uma brasa", "Construção de abrigos", "Purificação de água"], answer: "Fricção para gerar uma brasa" },
    { question: "Por que é crucial limpar a área ao redor de onde a fogueira será feita?", options: ["Para criar um espaço para sentar", "Para evitar que o fogo se espalhe para a vegetação seca ao redor", "Para encontrar pedras adequadas para a fogueira", "Para nivelar o terreno"], answer: "Para evitar que o fogo se espalhe para a vegetação seca ao redor" },
    { question: "Um fogo que produz muita fumaça é ideal para ________, enquanto um fogo com muita brasa é ideal para ________.", options: ["sinalização / cozinhar", "cozinhar / aquecimento", "aquecimento / sinalização", "sinalização / iluminação"], answer: "sinalização / cozinhar" },
    { question: "Qual a melhor forma de apagar completamente uma fogueira?", options: ["Apenas cobrir com terra", "Deixar que ela se apague sozinha", "Jogar água até que pare de chiar, remexer as brasas e verificar se estão frias ao toque", "Apenas separar a lenha"], answer: "Jogar água até que pare de chiar, remexer as brasas e verificar se estão frias ao toque" },

    // Abrigo - 16 Questões
    { question: "Qual é a principal função de um abrigo em uma situação de sobrevivência?", options: ["Servir como local de armazenamento de alimentos", "Proteger o sobrevivente dos elementos climáticos (sol, chuva, vento, frio)", "Esconder-se de animais selvagens", "Ser um ponto de referência para o resgate"], answer: "Proteger o sobrevivente dos elementos climáticos (sol, chuva, vento, frio)" },
    { question: "Ao escolher um local para construir um abrigo, qual fator é o MAIS importante a ser evitado?", options: ["Áreas muito abertas", "Proximidade de água corrente", "Perigos naturais como risco de enchentes, avalanches ou queda de galhos", "Locais com muita vegetação"], answer: "Perigos naturais como risco de enchentes, avalanches ou queda de galhos" },
    { question: "A sigla A.P.I.T.O. é um mnemônico para a escolha do local do abrigo. O que significa o 'P'?", options: ["Perto de Perigos", "Pequeno", "Proteção", "Plano"], answer: "Proteção" },
    { question: "Um 'abrigo de detritos' (debris hut) é extremamente eficaz em climas frios porque:", options: ["É muito grande e arejado", "Sua espessa camada de folhas e galhos cria um excelente isolamento térmico", "É construído no subsolo", "Sempre é à prova d'água"], answer: "Sua espessa camada de folhas e galhos cria um excelente isolamento térmico" },
    { question: "O abrigo do tipo 'Rabo de Jacu' ou 'Telheiro' (lean-to) é basicamente:", options: ["Uma estrutura em formato de cone, como uma tenda indígena", "Uma parede única inclinada, apoiada em uma estrutura ou árvore", "Uma cabana de duas águas (A-frame)", "Um buraco cavado na neve"], answer: "Uma parede única inclinada, apoiada em uma estrutura ou árvore" },
    { question: "Ao construir um abrigo, a entrada deve ser posicionada, idealmente:", options: ["Virada para a direção de onde o vento vem (a barlavento)", "Oposta à direção predominante do vento (a sotavento)", "Virada para o norte geográfico", "Virada para a fonte de água"], answer: "Oposta à direção predominante do vento (a sotavento)" },
    { question: "Qual é a importância de se construir uma cama ou plataforma elevada dentro do abrigo?", options: ["Para ficar mais perto do teto", "Para evitar a perda de calor corporal para o solo frio e úmido (condução)", "Para facilitar a entrada e saída do abrigo", "Para se proteger de cobras e aranhas"], answer: "Para evitar a perda de calor corporal para o solo frio e úmido (condução)" },
    { question: "Na construção de um abrigo à prova d'água, as camadas de folhas ou galhos devem ser sobrepostas como:", options: ["As telhas de um telhado, de baixo para cima", "De cima para baixo, aleatoriamente", "Na horizontal, para criar uma superfície plana", "Apenas folhas grandes na vertical"], answer: "As telhas de um telhado, de baixo para cima" },
    { question: "Utilizar a fuselagem da aeronave acidentada como abrigo é uma boa opção porque:", options: ["É quente e confortável", "Oferece proteção robusta contra os elementos e é um alvo visual grande para o resgate", "É fácil de mover para um local mais seguro", "Sempre contém suprimentos de emergência intactos"], answer: "Oferece proteção robusta contra os elementos e é um alvo visual grande para o resgate" },
    { question: "Em um ambiente de neve, o tipo de abrigo mais eficaz e que utiliza as propriedades isolantes da própria neve é:", options: ["Uma cabana de madeira", "Uma tenda de folhas", "Uma caverna de neve ou um iglu", "Um abrigo de detritos"], answer: "Uma caverna de neve ou um iglu" },
    { question: "Qual é o erro mais comum ao construir um abrigo de sobrevivência?", options: ["Construí-lo pequeno demais para reter calor", "Construí-lo grande demais, o que dificulta o aquecimento com o calor corporal", "Usar materiais naturais", "Construí-lo perto de uma fonte de água"], answer: "Construí-lo grande demais, o que dificulta o aquecimento com o calor corporal" },
    { question: "O que significa o termo 'isolamento' em um abrigo?", options: ["A distância do abrigo para o local do acidente", "A capacidade do abrigo de impedir a passagem de som", "A capacidade do abrigo de resistir à perda de calor", "A impermeabilidade do abrigo"], answer: "A capacidade do abrigo de resistir à perda de calor" },
    { question: "Uma caverna pode parecer um abrigo ideal, mas qual perigo deve ser verificado antes de ocupá-la?", options: ["A acústica do local", "Se ela já é habitada por outros animais (ursos, morcegos, etc.)", "A direção da entrada", "A cor das rochas"], answer: "Se ela já é habitada por outros animais (ursos, morcegos, etc.)" },
    { question: "Para melhorar a impermeabilização de um abrigo de folhas, o que se pode fazer?", options: ["Compactar as folhas com força", "Adicionar uma camada de terra ou barro entre as folhas", "Aumentar a inclinação do telhado e a espessura da camada de folhas", "Molhar as folhas para que se assentem"], answer: "Aumentar a inclinação do telhado e a espessura da camada de folhas" },
    { question: "O abrigo em 'A' (A-frame) é mais vantajoso que o 'Rabo de Jacu' em qual situação?", options: ["Quando há ventos fortes vindos de múltiplas direções", "Quando se tem muito pouco material de construção", "Para uma única pessoa em clima ameno", "Quando o tempo de construção é extremamente limitado"], answer: "Quando há ventos fortes vindos de múltiplas direções" },
    { question: "Uma trincheira cavada ao redor do perímetro de um abrigo serve para:", options: ["Marcar o território", "Coletar água da chuva", "Impedir que a água da chuva escorra para dentro do abrigo", "Servir como armadilha para pequenos animais"], answer: "Impedir que a água da chuva escorra para dentro do abrigo" }
]

// NOVO BANCO DE QUESTÕES - SINALIZAÇÃO E ORIENTAÇÃO
const quizDataSinalizacaoOrientacao = [
    // Sinalização - 30 Questões
    { question: "Qual é o significado do sinal terra-ar 'X' feito por sobreviventes?", options: ["Preciso de um médico", "Preciso de ajuda", "Sim / Afirmativo", "Não / Negativo"], answer: "Preciso de um médico" },
    { question: "O heliógrafo, ou espelho de sinalização, é um equipamento extremamente eficaz para sinalização diurna. Sua eficácia depende de qual fator?", options: ["Vento forte para levar o reflexo", "Presença de luz solar direta", "Baixa umidade do ar", "Temperatura elevada"], answer: "Presença de luz solar direta" },
    { question: "O foguete com paraquedas e estrela vermelha é um sinalizador pirotécnico de longo alcance. Qual é a recomendação para seu uso?", options: ["Deve ser usado apenas durante o dia", "Deve ser disparado assim que se avista um resgate, mesmo que distante", "Deve ser usado para iluminar o acampamento à noite", "Deve ser apontado para o chão para criar um sinal de fogo"], answer: "Deve ser disparado assim que se avista um resgate, mesmo que distante" },
    { question: "Qual a cor da fumaça produzida pelo sinalizador fumígeno flutuante e para qual período do dia ele é indicado?", options: ["Fumaça branca, para uso noturno", "Fumaça preta, para uso em dias nublados", "Fumaça laranja, para uso diurno", "Fumaça verde, para indicar que está tudo bem"], answer: "Fumaça laranja, para uso diurno" },
    { question: "O Transmissor Localizador de Emergência (ELT), quando ativado, transmite um sinal de socorro em qual frequência primária (analógica)?", options: ["101.5 MHz", "121.5 MHz", "243.0 MHz", "406.0 MHz"], answer: "121.5 MHz" },
    { question: "Uma aeronave de resgate balança as asas de um lado para o outro ao sobrevoar os sobreviventes. O que isso significa?", options: ["'Não entendemos seu sinal'", "'Aguardem, voltaremos'", "'Pousem aqui'", "'Mensagem recebida e entendida'"], answer: "'Mensagem recebida e entendida'" },
    { question: "O facho manual de luz vermelha (hand flare) é um sinalizador de curto alcance. Ele deve ser usado para:", options: ["Chamar a atenção de um resgate que está muito distante, no horizonte", "Iluminar uma grande área para busca de outros sobreviventes", "Indicar a posição exata para uma equipe de resgate que já está próxima", "Aquecer as mãos em noites frias"], answer: "Indicar a posição exata para uma equipe de resgate que já está próxima" },
    { question: "Na ausência de sinalizadores, qual é a melhor maneira de produzir fumaça de sinalização branca e densa?", options: ["Queimar madeira seca e resina", "Queimar borracha e plástico", "Colocar folhas verdes, musgo ou um pouco de água sobre as brasas de uma fogueira", "Queimar apenas gravetos finos"], answer: "Colocar folhas verdes, musgo ou um pouco de água sobre as brasas de uma fogueira" },
    { question: "Em qual situação a fumaça preta (produzida pela queima de óleo, borracha, etc.) é mais eficaz que a fumaça branca?", options: ["Em dias de sol com céu limpo", "Contra um fundo de céu nublado ou vegetação escura", "Durante a noite", "Em dias de chuva"], answer: "Contra um fundo de céu nublado ou vegetação escura" },
    { question: "O código internacional de socorro sonoro consiste em:", options: ["Dois sinais em rápida sucessão", "Três sinais em rápida sucessão", "Um sinal longo e contínuo", "Quatro sinais curtos"], answer: "Três sinais em rápida sucessão" },
    { question: "Qual é o sinal terra-ar para indicar 'Necessito de ajuda' (equivalente ao 'SOS')?", options: ["Y", "N", "V", "X"], answer: "V" },
    { question: "O corante marcador de água (sea dye marker) é utilizado para:", options: ["Repelir tubarões", "Criar uma grande mancha colorida na água, altamente visível do ar", "Purificar a água do mar para consumo", "Indicar a profundidade da água"], answer: "Criar uma grande mancha colorida na água, altamente visível do ar" },
    { question: "Ao utilizar um sinalizador pirotécnico, qual o principal cuidado em relação ao vento?", options: ["Utilizá-lo a favor do vento para que a fumaça vá para longe", "Utilizá-lo contra o vento para que as faíscas e a fumaça sejam sopradas para longe do operador", "Utilizá-lo apenas na ausência total de vento", "Não há cuidados especiais com o vento"], answer: "Utilizá-lo contra o vento para que as faíscas e a fumaça sejam sopradas para longe do operador" },
    { question: "O que significa o sinal terra-ar em forma de seta (↑)?", options: ["'Pouse aqui'", "'Estou me dirigindo nesta direção'", "'Encontrei outros sobreviventes'", "'Perigo, não se aproxime'"], answer: "'Estou me dirigindo nesta direção'" },
    { question: "Uma aeronave de resgate faz uma passagem baixa e balança o leme de direção (cauda). O que isso significa?", options: ["'Sim, afirmativo'", "'Pouso impossível neste local'", "'Mensagem não recebida ou não entendida'", "'Aguardem socorro'"], answer: "'Mensagem não recebida ou não entendida'" },
    { question: "Para que um sinal feito no solo (com pedras, troncos, etc.) seja eficaz, ele deve:", options: ["Ser pequeno e detalhado", "Ser grande, simples e apresentar alto contraste com o terreno ao redor", "Ser feito com materiais da mesma cor do terreno", "Ser feito apenas em formato de círculo"], answer: "Ser grande, simples e apresentar alto contraste com o terreno ao redor" },
    { question: "O uso do apito é mais eficaz em qual situação?", options: ["Para sinalizar para uma aeronave a 10.000 pés", "Em mata fechada ou à noite para sinalizar a posição para outros membros do grupo ou resgate próximo", "Em mar aberto para sinalizar para um navio no horizonte", "Para espantar grandes predadores"], answer: "Em mata fechada ou à noite para sinalizar a posição para outros membros do grupo ou resgate próximo" },
    { question: "Os ELTs de nova geração transmitem em 406 MHz. Qual a vantagem desta frequência sobre a de 121.5 MHz?", options: ["O sinal é mais fraco, mas tem maior alcance", "Permite a transmissão de dados digitais, como a identificação da aeronave e a localização GPS", "Funciona melhor debaixo d'água", "É uma frequência de voz para comunicação direta"], answer: "Permite a transmissão de dados digitais, como a identificação da aeronave e a localização GPS" },
    { question: "Qual o tamanho mínimo recomendado para as letras de um sinal terra-ar?", options: ["1 metro de altura", "3 metros de altura", "6 metros de altura", "10 metros de altura"], answer: "6 metros de altura" },
    { question: "O princípio de funcionamento do heliógrafo baseia-se na:", options: ["Refração da luz", "Difração da luz", "Reflexão da luz", "Absorção da luz"], answer: "Reflexão da luz" },
    { question: "Três fogueiras dispostas em linha reta ou em triângulo são um sinal internacional de:", options: ["'Tudo bem'", "'Acampamento estabelecido'", "'Socorro / Perigo'", "'Necessito de água'"], answer: "'Socorro / Perigo'" },
    { question: "Qual o sinal terra-ar para indicar 'Sim' ou 'Afirmativo'?", options: ["X", "V", "N", "Y"], answer: "Y" },
    { question: "A lanterna estroboscópica de um colete salva-vidas serve para:", options: ["Iluminar o interior do bote", "Facilitar a localização de uma pessoa na água durante a noite", "Aquecer o sobrevivente", "Repelir a vida marinha"], answer: "Facilitar a localização de uma pessoa na água durante a noite" },
    { question: "Por que não se deve usar todos os sinalizadores de uma vez?", options: ["Porque a luz intensa pode ofuscar os pilotos", "Porque eles podem superaquecer e explodir", "Para economizar recursos, usando-os apenas quando houver chance real de serem vistos", "Porque é contra as regras da aviação civil"], answer: "Para economizar recursos, usando-os apenas quando houver chance real de serem vistos" },
    { question: "Um avião de resgate lança um paraquedas com uma mensagem. Se o conteúdo for vermelho, significa:", options: ["Mensagem de importância vital", "Mensagem de rotina", "Suprimentos médicos", "Suprimentos alimentares"], answer: "Mensagem de importância vital" },
    { question: "Qual o procedimento correto ao tentar sinalizar para uma aeronave com um espelho?", options: ["Mover o reflexo aleatoriamente pelo céu", "Manter o reflexo fixo em um ponto do céu azul", "Tentar 'piscar' o reflexo sobre a cabine da aeronave para chamar a atenção do piloto", "Apontar o reflexo para o chão para não ofuscar o piloto"], answer: "Tentar 'piscar' o reflexo sobre a cabine da aeronave para chamar a atenção do piloto" },
    { question: "Qual o sinal terra-ar para 'Não' ou 'Negativo'?", options: ["Y", "N", "V", "X"], answer: "N" },
    { question: "A sigla COSPAS-SARSAT refere-se a:", options: ["Um tipo de sinalizador pirotécnico", "Um sistema de satélites que detecta os sinais de ELTs e EPIRBs", "Uma organização de equipes de resgate voluntário", "Um código de comunicação terra-ar"], answer: "Um sistema de satélites que detecta os sinais de ELTs e EPIRBs" },
    { question: "Em um abandono em terra, o rádio da aeronave pode ser uma ferramenta de sinalização. Qual componente deve ser verificado primeiro?", options: ["O microfone", "A antena", "A condição da bateria", "O alto-falante"], answer: "A condição da bateria" },
    { question: "A principal desvantagem dos sinais sonoros (apito, gritos) é:", options: ["Seu curto alcance e a dificuldade de determinar a direção da fonte", "A necessidade de equipamentos eletrônicos", "O fato de não funcionarem à noite", "O gasto excessivo de energia"], answer: "Seu curto alcance e a dificuldade de determinar a direção da fonte" },

    // Orientação - 20 Questões
    { question: "No Hemisfério Sul, o Cruzeiro do Sul pode ser usado para encontrar o Sul geográfico. Qual o procedimento?", options: ["O Sul está na direção da estrela mais brilhante da constelação", "Prolonga-se o braço maior da cruz aproximadamente 4,5 vezes e projeta-se uma linha para o horizonte", "Desenha-se uma linha entre as duas estrelas 'guardas' e o Sul está no meio", "A ponta do braço menor da cruz aponta diretamente para o Sul"], answer: "Prolonga-se o braço maior da cruz aproximadamente 4,5 vezes e projeta-se uma linha para o horizonte" },
    { question: "O método do gnômon (vareta fincada no solo) é usado para determinar:", options: ["A altitude do local", "A velocidade do vento", "A linha Leste-Oeste e, consequentemente, os pontos cardeais", "A umidade relativa do ar"], answer: "A linha Leste-Oeste e, consequentemente, os pontos cardeais" },
    { question: "Em qualquer lugar do mundo (exceto nos polos), o sol nasce aproximadamente no ________ e se põe aproximadamente no ________.", options: ["Norte / Sul", "Leste / Oeste", "Oeste / Leste", "Sul / Norte"], answer: "Leste / Oeste" },
    { question: "O musgo que cresce em árvores e rochas é frequentemente citado como um indicador de direção. No Hemisfério Sul, ele tenderia a crescer no lado:", options: ["Norte, que recebe menos luz solar direta", "Sul, que recebe menos luz solar direta e é mais úmido", "Leste, devido aos ventos predominantes", "Oeste, por ser mais protegido da chuva"], answer: "Sul, que recebe menos luz solar direta e é mais úmido" },
    { question: "Usando um relógio de ponteiros no Hemisfério Sul, como se pode encontrar o Norte?", options: ["Aponte o ponteiro das horas para o sol; o Norte estará na bissetriz entre o ponteiro das horas e o número 12", "Aponte o número 12 para o sol; o Norte estará na bissetriz entre o número 12 e o ponteiro das horas", "Aponte o ponteiro dos minutos para o sol; o Norte estará oposto ao ponteiro das horas", "Aponte o número 6 para o sol; o Norte estará na direção do ponteiro das horas"], answer: "Aponte o número 12 para o sol; o Norte estará na bissetriz entre o número 12 e o ponteiro das horas" },
    { question: "Em geral, para onde correm os rios?", options: ["Para o Norte", "Para as áreas mais elevadas do terreno", "Para as áreas mais baixas do terreno, geralmente em direção ao mar", "Em direção ao Equador"], answer: "Para as áreas mais baixas do terreno, geralmente em direção ao mar" },
    { question: "Por que a orientação por métodos naturais (musgo, galhos de árvores) é considerada menos confiável?", options: ["Porque só funcionam no Hemisfério Norte", "Porque são mitos e não têm base científica", "Porque podem ser influenciados por fatores microclimáticos locais, como vento e sombra", "Porque exigem equipamentos complexos"], answer: "Porque podem ser influenciados por fatores microclimáticos locais, como vento e sombra" },
    { question: "Ao meio-dia solar verdadeiro, as sombras são:", options: ["As mais longas do dia", "Inexistentes na linha do Equador", "As mais curtas do dia e apontam para os polos (Sul no Hemisfério Sul)", "Apontam para o Leste"], answer: "As mais curtas do dia e apontam para os polos (Sul no Hemisfério Sul)" },
    { question: "Na ausência de bússola, qual é a principal referência para navegação noturna no Hemisfério Norte?", options: ["A constelação de Órion", "A Lua Cheia", "A Estrela Polar (Polaris)", "A Via Láctea"], answer: "A Estrela Polar (Polaris)" },
    { question: "Qual é o maior perigo de tentar se deslocar sem um plano ou método de orientação claro?", options: ["Gastar energia desnecessariamente e andar em círculos", "Encontrar predadores", "Afastar-se de fontes de água", "Perder os suprimentos"], answer: "Gastar energia desnecessariamente e andar em círculos" },
    { question: "A Lua crescente tem suas 'pontas' voltadas para:", options: ["O Leste", "O Oeste", "O Norte", "O Sul"], answer: "O Leste" },
    { question: "Se você estiver perdido, a regra mais importante, a menos que haja um motivo imperativo para se mover, é:", options: ["Andar sempre rio abaixo", "Subir no ponto mais alto para ter uma visão geral", "Permanecer no local do acidente (ou em um local seguro próximo)", "Seguir rastros de animais"], answer: "Permanecer no local do acidente (ou em um local seguro próximo)" },
    { question: "As 'estrelas guardiãs' (Alfa e Beta do Centauro) são usadas como referência para localizar qual constelação?", options: ["Órion", "Escorpião", "O Cruzeiro do Sul", "Ursa Maior"], answer: "O Cruzeiro do Sul" },
    { question: "O que é 'declinação magnética'?", options: ["A tendência da bússola de apontar para baixo", "A diferença angular entre o Norte magnético e o Norte geográfico (verdadeiro)", "Um erro de fabricação da agulha da bússola", "A influência da lua sobre o campo magnético"], answer: "A diferença angular entre o Norte magnético e o Norte geográfico (verdadeiro)" },
    { question: "Para se manter em uma linha reta em terreno sem visibilidade, o que um sobrevivente pode fazer?", options: ["Confiar apenas em sua intuição", "Usar o método de 'visada em avanço', focando em dois pontos distantes alinhados e avançando até o primeiro", "Andar com os olhos fechados por curtos períodos", "Seguir a direção do vento"], answer: "Usar o método de 'visada em avanço', focando em dois pontos distantes alinhados e avançando até o primeiro" },
    { question: "A Via Láctea, em noites sem lua, tem uma orientação geral que pode ser usada como referência. Qual é essa orientação?", options: ["Leste-Oeste", "Norte-Sul", "Noroeste-Sudeste", "Nordeste-Sudoeste"], answer: "Noroeste-Sudeste" },
    { question: "Qual a principal dificuldade de se orientar em uma floresta densa durante o dia?", options: ["A falta de pontos de referência distantes e a cobertura do céu", "O excesso de ruídos", "A presença de animais", "O terreno irregular"], answer: "A falta de pontos de referência distantes e a cobertura do céu" },
    { question: "O sol do meio-dia no Hemisfério Sul estará localizado em qual direção?", options: ["Exatamente acima (no zênite)", "Ao Sul", "Ao Norte", "Ao Leste"], answer: "Ao Norte" },
    { question: "Se uma bússola não estiver disponível, o que pode ser improvisado para encontrar o norte magnético?", options: ["Uma folha boiando na água", "Uma agulha magnetizada (atritada em seda ou cabelo) colocada sobre uma folha em um recipiente com água", "Um pedaço de madeira magnetizado", "Observando o voo dos pássaros"], answer: "Uma agulha magnetizada (atritada em seda ou cabelo) colocada sobre uma folha em um recipiente com água" },
    { question: "O que é um 'ponto de referência' em navegação terrestre?", options: ["Qualquer local com água potável", "Um local seguro para acampar", "Uma característica proeminente e identificável na paisagem (morro, rio, árvore grande) usada para manter a direção", "O local do acidente"], answer: "Uma característica proeminente e identificável na paisagem (morro, rio, árvore grande) usada para manter a direção" }
]

// NOVO BANCO DE QUESTÕES - PRIMEIROS SOCORROS
const quizDataPrimeirosSocorros = [
    // Avaliação e Princípios Básicos - 10 Questões
    { question: "Qual é a primeira e mais crucial etapa ao se deparar com uma vítima inconsciente em um local seguro?", options: ["Verificar se há fraturas", "Abrir as vias aéreas e verificar a respiração", "Tentar conter hemorragias", "Imobilizar a coluna cervical"], answer: "Abrir as vias aéreas e verificar a respiração" },
    { question: "Na avaliação primária de uma vítima (ABCDE), o que a letra 'C' representa e qual ação está associada a ela?", options: ["'Consciência', verificar se a vítima responde", "'Coluna', imobilizar o pescoço", "'Circulação', verificar pulso e conter hemorragias graves", "'Calor', aquecer a vítima"], answer: "'Circulação', verificar pulso e conter hemorragias graves" },
    { question: "O principal objetivo dos primeiros socorros é:", options: ["Substituir o atendimento médico profissional", "Diagnosticar a doença exata da vítima", "Preservar a vida, prevenir o agravamento das lesões e promover a recuperação", "Administrar medicamentos complexos"], answer: "Preservar a vida, prevenir o agravamento das lesões e promover a recuperação" },
    { question: "Ao verificar o pulso de uma vítima adulta inconsciente, qual artéria é a mais indicada?", options: ["Radial (no pulso)", "Femoral (na virilha)", "Carótida (no pescoço)", "Pediosa (no pé)"], answer: "Carótida (no pescoço)" },
    { question: "O que é o estado de choque (hipovolêmico)?", options: ["Uma reação de pânico extremo", "Uma falha do sistema circulatório em fornecer sangue oxigenado aos tecidos, geralmente por perda de líquidos", "Uma descarga elétrica acidental", "Uma condição de hipotermia severa"], answer: "Uma falha do sistema circulatório em fornecer sangue oxigenado aos tecidos, geralmente por perda de líquidos" },
    { question: "Qual é o procedimento imediato para uma vítima em estado de choque?", options: ["Sentá-la e dar água para beber", "Deitá-la de costas, elevar suas pernas e mantê-la aquecida", "Fazê-la caminhar para estimular a circulação", "Jogar água fria em seu rosto para reanimá-la"], answer: "Deitá-la de costas, elevar suas pernas e mantê-la aquecida" },
    { question: "Qual a frequência respiratória normal para um adulto em repouso?", options: ["5 a 10 movimentos por minuto", "12 a 20 movimentos por minuto", "25 a 30 movimentos por minuto", "30 a 40 movimentos por minuto"], answer: "12 a 20 movimentos por minuto" },
    { question: "A sigla 'PCR' em primeiros socorros refere-se a:", options: ["Procedimento Cirúrgico Rápido", "Parada Cardiorrespiratória", "Pressão Craniana Reduzida", "Primeiros Cuidados em Resgate"], answer: "Parada Cardiorrespiratória" },
    { question: "Em uma situação com múltiplos feridos, o princípio da triagem preconiza que o atendimento deve ser priorizado para:", options: ["As vítimas que gritam mais alto", "As vítimas com ferimentos mais visíveis", "As vítimas com maior chance de sobrevivência que necessitam de cuidados imediatos", "As vítimas com ferimentos leves, para liberá-las para ajudar"], answer: "As vítimas com maior chance de sobrevivência que necessitam de cuidados imediatos" },
    { question: "Ao mover uma vítima com suspeita de lesão na coluna, o cuidado mais importante é:", options: ["Mover a cabeça e o corpo separadamente", "Manter a cabeça, o pescoço e o tronco alinhados como um bloco único", "Transportá-la sentado para maior conforto", "Mover a vítima o mais rápido possível, sem se preocupar com o alinhamento"], answer: "Manter a cabeça, o pescoço e o tronco alinhados como um bloco único" },

    // Hemorragias, Ferimentos e Queimaduras - 15 Questões
    { question: "Qual é o método mais eficaz e o primeiro a ser aplicado para controlar uma hemorragia externa severa?", options: ["Aplicação de um torniquete", "Elevação do membro ferido", "Pressão direta sobre o ferimento com um pano limpo", "Compressão de um ponto arterial"], answer: "Pressão direta sobre o ferimento com um pano limpo" },
    { question: "Uma hemorragia arterial é caracterizada por:", options: ["Sangue que escorre lentamente e de cor escura", "Sangue que jorra em jatos pulsantes e de cor vermelho vivo", "Sangue que flui de forma contínua, mas lenta", "Sangramento apenas sob a pele (hematoma)"], answer: "Sangue que jorra em jatos pulsantes e de cor vermelho vivo" },
    { question: "O torniquete é uma medida extrema para controlar hemorragias. Ele deve ser aplicado:", options: ["Em qualquer corte, para estancar o sangue rapidamente", "frouxamente, apenas para reduzir o fluxo sanguíneo", "Como último recurso, quando a pressão direta e a elevação não funcionam, e deve ser anotado o horário de aplicação", "Sobre uma articulação, como o joelho ou o cotovelo"], answer: "Como último recurso, quando a pressão direta e a elevação não funcionam, e deve ser anotado o horário de aplicação" },
    { question: "Qual o procedimento correto para um objeto encravado em um ferimento (como uma faca ou um grande estilhaço)?", options: ["Retirar o objeto imediatamente para limpar a ferida", "Movimentar o objeto para avaliar a profundidade do ferimento", "Não remover o objeto, mas imobilizá-lo e controlar o sangramento ao redor", "Cobrir o objeto com um curativo apertado"], answer: "Não remover o objeto, mas imobilizá-lo e controlar o sangramento ao redor" },
    { question: "Uma queimadura de 2º grau é caracterizada principalmente por:", options: ["Apenas vermelhidão e dor local", "Formação de bolhas, vermelhidão e dor intensa", "Destruição de todas as camadas da pele, com aspecto carbonizado ou esbranquiçado", "Ausência total de dor"], answer: "Formação de bolhas, vermelhidão e dor intensa" },
    { question: "O primeiro cuidado para uma queimadura térmica (causada por fogo ou calor) é:", options: ["Aplicar manteiga, óleo ou pasta de dente", "Estourar as bolhas para aliviar a pressão", "Resfriar a área afetada com água corrente fria por vários minutos", "Cobrir imediatamente com um tecido grosso"], answer: "Resfriar a área afetada com água corrente fria por vários minutos" },
    { question: "Por que não se deve estourar as bolhas de uma queimadura?", options: ["Porque o líquido dentro delas hidrata a pele", "Porque a pele que forma a bolha atua como um curativo biológico, protegendo contra infecções", "Porque a dor aumenta exponencialmente", "Porque causa cicatrizes permanentes"], answer: "Porque a pele que forma a bolha atua como um curativo biológico, protegendo contra infecções" },
    { question: "Em caso de amputação traumática de um membro, o que deve ser feito com a parte amputada?", options: ["Descartá-la, pois não pode ser reimplantada", "Lavá-la em água corrente e entregá-la à vítima", "Envolvê-la em um pano limpo, colocar em um saco plástico e, se possível, manter o saco em um recipiente com água e gelo", "Colocá-la diretamente em contato com o gelo"], answer: "Envolvê-la em um pano limpo, colocar em um saco plástico e, se possível, manter o saco em um recipiente com água e gelo" },
    { question: "Qual o principal objetivo da limpeza de um ferimento leve com água e sabão?", options: ["Aliviar a dor", "Reduzir o inchaço", "Remover sujeira e microrganismos para prevenir infecções", "Acelerar a cicatrização"], answer: "Remover sujeira e microrganismos para prevenir infecções" },
    { question: "Uma hemorragia venosa se caracteriza por:", options: ["Sangue que jorra em pulsos", "Sangue de cor vermelho vivo e fluxo rápido", "Sangue de cor escura que flui de forma contínua e lenta", "Pequenas gotas de sangue"], answer: "Sangue de cor escura que flui de forma contínua e lenta" },
    { question: "Após controlar uma hemorragia, o curativo que foi colocado sobre a ferida:", options: ["Deve ser trocado a cada 10 minutos", "Deve ser removido para verificar se a ferida parou de sangrar", "Não deve ser removido; caso o sangue o encharque, deve-se adicionar mais gazes por cima", "Deve ser apertado ao máximo para funcionar como torniquete"], answer: "Não deve ser removido; caso o sangue o encharque, deve-se adicionar mais gazes por cima" },
    { question: "Qual o procedimento para uma queimadura química nos olhos?", options: ["Esfregar os olhos vigorosamente", "Pingar um colírio qualquer", "Lavar os olhos com água corrente em abundância por pelo menos 15 minutos", "Fechar os olhos e esperar a dor passar"], answer: "Lavar os olhos com água corrente em abundância por pelo menos 15 minutos" },
    { question: "Uma queimadura de 3º grau é uma lesão grave que muitas vezes não dói na área central. Por quê?", options: ["Porque o cérebro bloqueia a sensação de dor", "Porque as terminações nervosas na pele foram destruídas", "Porque a carbonização age como anestésico", "Porque a dor só aparece horas depois"], answer: "Porque as terminações nervosas na pele foram destruídas" },
    { question: "O que é um curativo oclusivo de três pontas, usado em ferimentos no tórax?", options: ["Um curativo que fecha totalmente a ferida para impedir a entrada de ar", "Um curativo que veda três lados, deixando um lado aberto para o ar sair, mas não entrar", "Um tipo de torniquete para o peito", "Um curativo para queimaduras"], answer: "Um curativo que veda três lados, deixando um lado aberto para o ar sair, mas não entrar" },
    { question: "Em um ferimento na cabeça que não para de sangrar, o socorrista deve:", options: ["Aplicar pressão direta, a menos que suspeite de fratura de crânio", "Ignorar o sangramento e focar na respiração", "Virar a vítima de cabeça para baixo", "Aplicar um torniquete no pescoço"], answer: "Aplicar pressão direta, a menos que suspeite de fratura de crânio" },

    // Fraturas, Lesões e Condições Ambientais - 15 Questões
    { question: "Qual é o princípio fundamental da imobilização de uma fratura?", options: ["Tentar alinhar o osso quebrado", "Imobilizar a articulação acima e a articulação abaixo da fratura", "Usar uma tala flexível para permitir algum movimento", "Remover o calçado em caso de fratura no tornozelo"], answer: "Imobilizar a articulação acima e a articulação abaixo da fratura" },
    { question: "Uma fratura exposta (ou aberta) é aquela em que:", options: ["O osso quebrado não pode ser visto", "Há apenas um grande hematoma no local", "O osso quebrado perfura a pele, ficando exposto", "A fratura ocorre em mais de um lugar"], answer: "O osso quebrado perfura a pele, ficando exposto" },
    { question: "O que deve ser feito em caso de fratura exposta?", options: ["Empurrar o osso de volta para dentro e imobilizar", "Limpar o osso com um pano e aplicar uma tala apertada", "Controlar a hemorragia, cobrir o ferimento com um pano limpo e imobilizar na posição encontrada", "Ignorar o ferimento e apenas imobilizar o membro"], answer: "Controlar a hemorragia, cobrir o ferimento com um pano limpo e imobilizar na posição encontrada" },
    { question: "Calafrios intensos, pele pálida e fria, confusão mental e pulso fraco são sinais de:", options: ["Insolação", "Hipotermia", "Desidratação", "Estado de choque"], answer: "Hipotermia" },
    { question: "Qual é o tratamento correto para uma vítima com hipotermia severa?", options: ["Dar bebidas alcoólicas para aquecer", "Fazer massagens vigorosas nos membros", "Remover as roupas molhadas, isolar a vítima do frio e reaquecê-la de forma gradual", "Colocá-la em um banho de água quente imediatamente"], answer: "Remover as roupas molhadas, isolar a vítima do frio e reaquecê-la de forma gradual" },
    { question: "Pele quente, seca e avermelhada, pulso rápido e forte, e perda de consciência são sinais clássicos de:", options: ["Congelamento", "Hipotermia", "Insolação (Hipertermia)", "Ataque cardíaco"], answer: "Insolação (Hipertermia)" },
    { question: "O primeiro socorro para uma vítima de insolação é:", options: ["Mantê-la aquecida com cobertores", "Dar bebidas quentes", "Removê-la para um local fresco e sombreado e resfriar seu corpo ativamente", "Fazê-la caminhar"], answer: "Removê-la para um local fresco e sombreado e resfriar seu corpo ativamente" },
    { question: "O congelamento (frostbite) afeta mais comumente quais partes do corpo?", options: ["Tronco e abdômen", "Coxas e braços", "Extremidades como dedos, nariz e orelhas", "Costas e ombros"], answer: "Extremidades como dedos, nariz e orelhas" },
    { question: "Qual é a ação correta ao socorrer uma pessoa com uma parte do corpo congelada?", options: ["Esfregar a área afetada com neve ou um pano áspero", "Reaquecer a área rapidamente em frente a uma fogueira", "Reaquecer a área gradualmente em água morna (não quente) e protegê-la de um novo congelamento", "Amputar a parte congelada"], answer: "Reaquecer a área gradualmente em água morna (não quente) e protegê-la de um novo congelamento" },
    { question: "A Manobra de Heimlich é um procedimento para:", options: ["Ressuscitação cardiopulmonar", "Desobstruir as vias aéreas de uma vítima de engasgamento", "Imobilizar uma fratura", "Controlar uma crise de pânico"], answer: "Desobstruir as vias aéreas de uma vítima de engasgamento" },
    { question: "Em uma entorse de tornozelo, o tratamento inicial recomendado é:", options: ["Aplicar calor e massagear o local", "Continuar andando para não 'endurecer' a articulação", "Aplicar gelo ou compressas frias, elevar o membro e mantê-lo em repouso", "Imobilizar com uma tala apertada"], answer: "Aplicar gelo ou compressas frias, elevar o membro e mantê-lo em repouso" },
    { question: "O que é hipóxia?", options: ["Baixa temperatura corporal", "Baixo nível de açúcar no sangue", "Fornecimento insuficiente de oxigênio para os tecidos do corpo", "Pressão arterial elevada"], answer: "Fornecimento insuficiente de oxigênio para os tecidos do corpo" },
    { question: "Ao improvisar uma tala para uma fratura de antebraço, ela deve se estender:", options: ["Apenas sobre o local exato da fratura", "Do cotovelo até o ombro", "Do meio do braço até o meio do antebraço", "Da mão até o cotovelo, imobilizando punho e cotovelo"], answer: "Da mão até o cotovelo, imobilizando punho e cotovelo" },
    { question: "A 'doença da descompressão', que pode afetar tripulantes após uma despressurização explosiva, é causada por:", options: ["Bolhas de nitrogênio se formando no sangue e nos tecidos", "Falta de oxigênio no cérebro", "Excesso de dióxido de carbono", "Lesões causadas pela força da despressurização"], answer: "Bolhas de nitrogênio se formando no sangue e nos tecidos" },
    { question: "O cuidado principal ao transportar um ferido em uma maca improvisada em terreno irregular é:", options: ["Transportá-lo com os pés para a frente em subidas e com a cabeça para a frente em descidas", "Correr para chegar mais rápido ao destino", "Manter a vítima sempre com a cabeça mais elevada que os pés", "Parar a cada 5 minutos, independentemente das condições"], answer: "Transportá-lo com os pés para a frente em subidas e com a cabeça para a frente em descidas" },

    // Kit de Primeiros Socorros e Outros - 10 Questões
    { question: "As luvas de procedimento, presentes em qualquer kit de primeiros socorros, têm como principal finalidade:", options: ["Manter as mãos da vítima aquecidas", "Proteger o socorrista e a vítima de contaminação e infecção (biossegurança)", "Ajudar a segurar os curativos no lugar", "Serem usadas como recipiente para água"], answer: "Proteger o socorrista e a vítima de contaminação e infecção (biossegurança)" },
    { question: "O que é uma 'atadura de crepe'?", options: ["Um tipo de curativo adesivo pequeno", "Uma bandagem elástica usada para enfaixamentos e imobilizações leves", "Uma gaze esterilizada para cobrir feridas", "Um tipo de fita cirúrgica"], answer: "Uma bandagem elástica usada para enfaixamentos e imobilizações leves" },
    { question: "Para que serve um antisséptico (como a clorexidina ou iodopovidona) em um kit de primeiros socorros?", options: ["Para aliviar a dor", "Para reduzir o inchaço", "Para limpar ferimentos e prevenir infecções", "Para induzir o vômito em caso de envenenamento"], answer: "Para limpar ferimentos e prevenir infecções" },
    { question: "Uma 'manta aluminizada' (cobertor de emergência) é eficaz para combater a hipotermia porque:", options: ["Gera calor quimicamente", "É um tecido grosso que isola do frio", "Reflete o calor irradiado pelo próprio corpo da vítima de volta para ela", "É à prova d'água e de vento"], answer: "Reflete o calor irradiado pelo próprio corpo da vítima de volta para ela" },
    { question: "A tesoura de ponta romba, presente no kit, é projetada para:", options: ["Cortar ossos em amputações", "Cortar as roupas da vítima sem risco de perfurar sua pele", "Fazer pequenas cirurgias", "Cortar arames e metais"], answer: "Cortar as roupas da vítima sem risco de perfurar sua pele" },
    { question: "O que significa o termo 'asséptico'?", options: ["Livre de dor", "Livre de microrganismos causadores de infecção", "Que promove a coagulação", "Que causa alergia"], answer: "Livre de microrganismos causadores de infecção" },
    { question: "As pastilhas de cloro (purificadores de água) que podem estar no kit são consideradas um item de:", options: ["Primeiros socorros para envenenamento", "Medicação para febre", "Prevenção de doenças, garantindo água potável", "Tratamento de queimaduras"], answer: "Prevenção de doenças, garantindo água potável" },
    { question: "Para que serve uma bandagem triangular em um kit de primeiros socorros?", options: ["Apenas para limpar ferimentos", "Pode ser usada como tipóia, para enfaixar ou para cobrir grandes áreas", "Para fazer suturas", "Para medir a temperatura"], answer: "Pode ser usada como tipóia, para enfaixar ou para cobrir grandes áreas" },
    { question: "Em uma situação de sobrevivência, um absorvente feminino higiênico pode ser um item versátil no kit, servindo como:", options: ["Isca para fogo", "Filtro de água improvisado", "Curativo estéril e de alta absorção para ferimentos", "Todas as alternativas estão corretas"], answer: "Todas as alternativas estão corretas" },
    { question: "Qual a atitude correta se você não tem certeza sobre qual procedimento de primeiros socorros aplicar?", options: ["Tentar qualquer procedimento que pareça lógico", "Não fazer nada para não piorar a situação", "Priorizar a segurança (sua e da vítima), acionar ajuda se possível e não causar mais danos", "Procurar por tutoriais na internet"], answer: "Priorizar a segurança (sua e da vítima), acionar ajuda se possível e não causar mais danos" }
]

// NOVO BANCO DE QUESTÕES - PRINCÍPIOS DE PSICOLOGIA DA SOBREVIVÊNCIA
const quizDataPrincipiosPsicologia = [
    // Psicologia da Sobrevivência - 25 Questões
    { question: "Qual é considerado o fator isolado mais importante para a sobrevivência em qualquer situação adversa?", options: ["A quantidade de equipamento disponível", "A força física do indivíduo", "A vontade de viver", "O conhecimento técnico sobre a selva"], answer: "A vontade de viver" },
    { question: "Em uma situação de desastre, a 'reação de negação' é caracterizada por:", options: ["Comportamento agressivo e hostil com outros sobreviventes", "Incapacidade ou recusa em aceitar a gravidade da situação", "Atividade excessiva e desorganizada", "Tristeza profunda e isolamento"], answer: "Incapacidade ou recusa em aceitar a gravidade da situação" },
    { question: "Qual a principal diferença entre medo e pânico?", options: ["Medo é uma reação a um perigo imaginário, pânico a um perigo real", "Medo é uma resposta racional que aumenta a percepção, enquanto o pânico é uma reação irracional e descontrolada", "Medo paralisa, enquanto o pânico leva à ação", "Não há diferença, são sinônimos"], answer: "Medo é uma resposta racional que aumenta a percepção, enquanto o pânico é uma reação irracional e descontrolada" },
    { question: "A apatia, um estado de indiferença e falta de iniciativa, é perigosa em um grupo de sobreviventes porque:", options: ["Pode levar a um gasto excessivo de energia", "É contagiosa e pode minar o moral e a vontade de viver do grupo", "Causa conflitos diretos entre os membros", "Leva o indivíduo a tomar decisões arriscadas"], answer: "É contagiosa e pode minar o moral e a vontade de viver do grupo" },
    { question: "Qual é a função mais importante de um líder em um grupo de sobreviventes?", options: ["Realizar todas as tarefas mais difíceis sozinho", "Manter o moral elevado, a disciplina, organizar tarefas e tomar decisões lógicas", "Racionar os suprimentos para benefício próprio", "Encontrar um culpado pela situação"], answer: "Manter o moral elevado, a disciplina, organizar tarefas e tomar decisões lógicas" },
    { question: "A 'euforia' inicial que pode ocorrer após sobreviver a um acidente é perigosa porque:", options: ["Causa depressão logo em seguida", "Pode levar a uma subestimação dos perigos reais e à tomada de decisões imprudentes", "Gasta todo o estoque de adrenalina do corpo", "Irrita os outros sobreviventes"], answer: "Pode levar a uma subestimação dos perigos reais e à tomada de decisões imprudentes" },
    { question: "Para combater o tédio e a ansiedade em um acampamento de sobrevivência, a melhor estratégia é:", options: ["Dormir o máximo de tempo possível", "Manter-se ocupado com tarefas úteis e rotinas diárias", "Contar histórias de terror para passar o tempo", "Ficar em silêncio para economizar energia"], answer: "Manter-se ocupado com tarefas úteis e rotinas diárias" },
    { question: "Qual das seguintes NÃO é uma característica desejável em um líder de sobrevivência?", options: ["Capacidade de tomar decisões sob pressão", "Conhecimento técnico e bom senso", "Comunicação clara e honesta", "Autoritarismo e recusa em ouvir outras opiniões"], answer: "Autoritarismo e recusa em ouvir outras opiniões" },
    { question: "O estresse prolongado em uma situação de sobrevivência afeta o corpo principalmente por:", options: ["Aumentar a força física e a resistência", "Melhorar a capacidade de raciocínio lógico", "Esgotar as reservas de energia e enfraquecer o sistema imunológico", "Tornar o sono mais profundo e reparador"], answer: "Esgotar as reservas de energia e enfraquecer o sistema imunológico" },
    { question: "Um líder eficaz deve lidar com um sobrevivente em pânico da seguinte forma:", options: ["Ignorá-lo para que ele se acalme sozinho", "Gritar com ele para que recupere o controle", "Separar a pessoa do grupo e dar-lhe tarefas simples e firmes para desviar sua atenção", "Concordar com suas ideias irracionais para não criar conflito"], answer: "Separar a pessoa do grupo e dar-lhe tarefas simples e firmes para desviar sua atenção" },
    { question: "A dependência excessiva de um líder ('reação de dependência') é prejudicial porque:", options: ["O líder pode se tornar arrogante", "Sobrecarrega o líder e anula a iniciativa e a capacidade dos outros membros do grupo", "Cria um ambiente competitivo", "Leva à desobediência"], answer: "Sobrecarrega o líder e anula a iniciativa e a capacidade dos outros membros do grupo" },
    { question: "Por que é importante manter um diário ou registro de eventos durante a sobrevivência?", options: ["Para ter o que publicar após o resgate", "Ajuda a manter a noção do tempo, registra informações úteis e serve como uma ferramenta terapêutica", "Para registrar a culpa de cada membro", "É uma tarefa inútil que desperdiça recursos"], answer: "Ajuda a manter a noção do tempo, registra informações úteis e serve como uma ferramenta terapêutica" },
    { question: "A irritabilidade e os conflitos interpessoais em um grupo de sobreviventes são frequentemente causados por:", options: ["Excesso de comida e conforto", "Estresse, desconforto físico (fome, frio), medo e incerteza", "Excesso de organização e disciplina", "Falta de um inimigo comum"], answer: "Estresse, desconforto físico (fome, frio), medo e incerteza" },
    { question: "O que significa ter uma 'atitude mental positiva' em sobrevivência?", options: ["Ignorar os perigos e acreditar que nada de ruim vai acontecer", "Focar naquilo que pode ser controlado, acreditar na possibilidade de resgate e trabalhar ativamente para isso", "Reclamar constantemente para extravasar a negatividade", "Aceitar o destino passivamente"], answer: "Focar naquilo que pode ser controlado, acreditar na possibilidade de resgate e trabalhar ativamente para isso" },
    { question: "A 'síndrome do terceiro dia' em sobrevivência refere-se a um período em que:", options: ["O resgate é mais provável de acontecer", "Os sobreviventes sentem uma onda de energia e otimismo", "Ocorre uma queda significativa no moral e na esperança, sendo um ponto crítico para a depressão", "Os suprimentos de água geralmente acabam"], answer: "Ocorre uma queda significativa no moral e na esperança, sendo um ponto crítico para a depressão" },
    { question: "Qual o benefício de estabelecer uma rotina diária (ex: hora de buscar lenha, verificar armadilhas, etc.)?", options: ["Nenhum, a improvisação é sempre melhor", "Cria um senso de normalidade, propósito e controle, combatendo a apatia", "Aumenta o estresse por criar obrigações", "É útil apenas em situações de curto prazo"], answer: "Cria um senso de normalidade, propósito e controle, combatendo a apatia" },
    { question: "Qual a maneira correta de comunicar más notícias (ex: morte de um membro) ao grupo?", options: ["Esconder a verdade para não abalar o moral", "Comunicar de forma direta, honesta e compassiva, permitindo que o grupo processe o luto", "Criar uma história fictícia sobre o ocorrido", "Comunicar de forma fria e distante"], answer: "Comunicar de forma direta, honesta e compassiva, permitindo que o grupo processe o luto" },
    { question: "A sensação de culpa ('culpa do sobrevivente') é um sentimento que pode surgir:", options: ["Apenas em quem causou o acidente", "Apenas durante a situação de sobrevivência", "Após o resgate, por ter sobrevivido enquanto outros não", "Apenas em líderes de grupo"], answer: "Após o resgate, por ter sobrevivido enquanto outros não" },
    { question: "O humor e o riso em uma situação de sobrevivência são:", options: ["Sinais de negação e falta de seriedade", "Ferramentas poderosas para aliviar a tensão, fortalecer laços e manter o moral", "Desperdício de energia", "Irrelevantes para a sobrevivência"], answer: "Ferramentas poderosas para aliviar a tensão, fortalecer laços e manter o moral" },
    { question: "A necessidade humana de pertencimento em um grupo de sobrevivência se manifesta como:", options: ["A necessidade de competir por recursos", "A tendência ao isolamento", "A importância da cooperação, comunicação e apoio mútuo", "O desejo de se rebelar contra o líder"], answer: "A importância da cooperação, comunicação e apoio mútuo" },
    { question: "O que a expressão 'a esperança não é um plano' significa no contexto da sobrevivência?", options: ["Que não se deve ter esperança de ser resgatado", "Que a esperança deve ser acompanhada de ações práticas e planejamento ativo", "Que a esperança é uma fraqueza", "Que o planejamento é mais importante que a esperança"], answer: "Que a esperança deve ser acompanhada de ações práticas e planejamento ativo" },
    { question: "A tomada de decisão em grupo, embora possa ser demorada, tem a vantagem de:", options: ["Sempre levar à decisão correta", "Aumentar o comprometimento do grupo com a decisão tomada", "Diminuir a autoridade do líder", "Ser mais rápida que a decisão individual"], answer: "Aumentar o comprometimento do grupo com a decisão tomada" },
    { question: "O que é 'visão de túnel' (tunnel vision) em uma crise?", options: ["Uma condição oftalmológica causada pela desidratação", "A incapacidade de ver o quadro geral, focando excessivamente em um único problema ou solução", "A capacidade de enxergar bem no escuro", "Um sintoma de hipotermia"], answer: "A incapacidade de ver o quadro geral, focando excessivamente em um único problema ou solução" },
    { question: "Manter a higiene pessoal em uma situação de longo prazo é importante principalmente para:", options: ["Manter a aparência para o resgate", "Prevenir doenças e infecções, além de elevar o moral", "Economizar água", "Passar o tempo"], answer: "Prevenir doenças e infecções, além de elevar o moral" },
    { question: "O altruísmo em uma situação de sobrevivência:", options: ["É sempre um sinal de fraqueza e deve ser evitado", "Pode fortalecer a coesão do grupo e o moral, sendo um poderoso motivador", "Não existe, pois o instinto de autopreservação sempre prevalece", "É útil apenas se houver recursos em abundância"], answer: "Pode fortalecer a coesão do grupo e o moral, sendo um poderoso motivador" },

    // Princípios e Estratégias - 25 Questões
    { question: "Qual é a regra geral e mais segura sobre a decisão de permanecer no local do acidente ou abandoná-lo?", options: ["Abandonar o local imediatamente para buscar ajuda", "Permanecer junto à aeronave, que é um alvo maior e mais fácil de localizar", "Seguir o curso de um rio, pois ele sempre leva à civilização", "Dividir o grupo: metade fica e metade vai procurar ajuda"], answer: "Permanecer junto à aeronave, que é um alvo maior e mais fácil de localizar" },
    { question: "O mnemônico E.S.A.D.O.N. é uma sequência de ações recomendada. O que significa a letra 'O'?", options: ["Observar", "Organizar", "Otimizar", "Orientar-se"], answer: "Orientar-se" },
    { question: "De acordo com a pirâmide de prioridades da sobrevivência, qual necessidade deve ser atendida antes da busca por alimentos?", options: ["Comunicação com o mundo exterior", "Construção de ferramentas complexas", "Obtenção de água potável", "Exploração da área"], answer: "Obtenção de água potável" },
    { question: "O que significa o princípio do 'improviso' em sobrevivência?", options: ["Agir sem pensar e sem planejamento", "Usar objetos e recursos de maneiras criativas e não convencionais para suprir necessidades", "Seguir estritamente as regras dos manuais", "Construir apenas abrigos permanentes"], answer: "Usar objetos e recursos de maneiras criativas e não convencionais para suprir necessidades" },
    { question: "A melhor maneira de gerenciar os recursos (água, comida) em um grupo é:", options: ["Consumir tudo rapidamente para manter a força", "Guardar tudo para o final", "Racionar de forma justa e controlada, com o líder gerenciando o estoque", "Permitir que cada um gerencie sua própria porção"], answer: "Racionar de forma justa e controlada, com o líder gerenciando o estoque" },
    { question: "O princípio da 'conservação de energia' implica que:", options: ["Deve-se evitar qualquer tipo de trabalho ou esforço", "As tarefas devem ser realizadas de forma eficiente, evitando esforços desnecessários e garantindo períodos de descanso", "Deve-se dormir pelo menos 16 horas por dia", "Apenas a pessoa mais forte do grupo deve trabalhar"], answer: "As tarefas devem ser realizadas de forma eficiente, evitando esforços desnecessários e garantindo períodos de descanso" },
    { question: "O mnemônico S.T.O.P., recomendado quando se sente perdido, significa:", options: ["Siga, Tente, Otimize, Planeje", "Sente, Pense, Observe, Planeje", "Socorro, Terrestre, Observação, Posição", "Sinalize, Tente, Organize, Prossiga"], answer: "Sente, Pense, Observe, Planeje" },
    { question: "Uma das vantagens de permanecer junto à aeronave, além da visibilidade, é:", options: ["A garantia de encontrar comida", "O acesso a materiais que podem ser usados para abrigo, ferramentas e sinalização", "A presença de sinal de celular", "A segurança contra qualquer tipo de perigo"], answer: "O acesso a materiais que podem ser usados para abrigo, ferramentas e sinalização" },
    { question: "Em qual das seguintes situações seria justificável abandonar o local do acidente?", options: ["Quando se está com tédio e quer explorar a área", "Quando há um perigo imediato e contínuo no local (incêndio, risco de explosão)", "Quando se tem certeza absoluta da localização de ajuda próxima e da capacidade de alcançá-la", "As duas últimas opções estão corretas"], answer: "As duas últimas opções estão corretas" },
    { question: "Qual é a importância de prestar atenção ao 'briefing' de segurança antes de um voo?", options: ["É apenas uma formalidade sem importância prática", "Permite memorizar a localização das saídas de emergência e equipamentos de segurança, preparando a mente para uma possível contingência", "Serve para conhecer os comissários de bordo", "Ajuda a passar o tempo antes da decolagem"], answer: "Permite memorizar a localização das saídas de emergência e equipamentos de segurança, preparando a mente para uma possível contingência" },
    { question: "O que é um 'kit de sobrevivência pessoal'?", options: ["O grande kit que fica no bote salva-vidas", "Um pequeno conjunto de itens essenciais que um indivíduo carrega consigo", "O mesmo que o kit de primeiros socorros da aeronave", "Um conjunto de ferramentas pesadas para construção"], answer: "Um pequeno conjunto de itens essenciais que um indivíduo carrega consigo" },
    { question: "A 'preparação mental' para a sobrevivência consiste em:", options: ["Pensar em todos os cenários de desastre possíveis o tempo todo", "Aceitar que uma emergência pode acontecer e pensar previamente sobre as ações corretas a tomar", "Ignorar os riscos para não atrair azar", "Acreditar que você é invencível"], answer: "Aceitar que uma emergência pode acontecer e pensar previamente sobre as ações corretas a tomar" },
    { question: "O princípio de 'manter-se aquecido e seco' é uma prioridade porque:", options: ["O conforto é o mais importante para o moral", "A hipotermia é uma das maiores e mais rápidas ameaças à vida em muitos ambientes", "Roupas molhadas são pesadas e dificultam o movimento", "É mais fácil fazer fogo quando se está seco"], answer: "A hipotermia é uma das maiores e mais rápidas ameaças à vida em muitos ambientes" },
    { question: "O que o 'P' da sigla P.A.S.S. (usada em algumas doutrinas) significa?", options: ["Pânico", "Primeiros Socorros", "Proteção", "Plano"], answer: "Proteção" },
    { question: "Ao decidir se deslocar, o grupo deve levar em conta principalmente:", options: ["A direção que parece mais fácil de andar", "A condição física do membro mais fraco do grupo", "A quantidade de comida disponível", "A hora do dia"], answer: "A condição física do membro mais fraco do grupo" },
    { question: "O inventário de recursos (comida, água, equipamentos) deve ser feito:", options: ["Apenas pelo líder, em segredo", "Quando os recursos estiverem quase acabando", "O mais cedo possível, de forma organizada e com o conhecimento do grupo", "Apenas se o resgate demorar mais de uma semana"], answer: "O mais cedo possível, de forma organizada e com o conhecimento do grupo" },
    { question: "A regra de 'três' para sinalização sonora (três apitos, três tiros) é importante porque:", options: ["É um número fácil de lembrar", "Três é um padrão universalmente reconhecido como um sinal de socorro, distinto de sons naturais ou acidentais", "É o número máximo de vezes que se pode repetir um sinal", "Assusta mais os animais"], answer: "Três é um padrão universalmente reconhecido como um sinal de socorro, distinto de sons naturais ou acidentais" },
    { question: "Por que o cuidado com os pés é um princípio estratégico em uma jornada de sobrevivência?", options: ["Porque pés bem cuidados melhoram a aparência", "Porque os pés são o principal meio de locomoção, e bolhas ou infecções podem incapacitar um sobrevivente", "Porque sapatos são difíceis de substituir", "É apenas uma preocupação secundária"], answer: "Porque os pés são o principal meio de locomoção, e bolhas ou infecções podem incapacitar um sobrevivente" },
    { question: "A observação do ambiente é um princípio fundamental. O que um sobrevivente deve observar?", options: ["Apenas a direção do vento", "Sinais de perigo, fontes de recursos (água, comida, abrigo) e possíveis rotas", "Apenas o comportamento dos outros sobreviventes", "Apenas as formações de nuvens"], answer: "Sinais de perigo, fontes de recursos (água, comida, abrigo) e possíveis rotas" },
    { question: "O que significa 'vestir-se em camadas' como princípio de proteção?", options: ["Usar uma única peça de roupa muito grossa", "Usar várias camadas de roupa que podem ser adicionadas ou removidas para regular a temperatura corporal", "Vestir apenas roupas de algodão", "Vestir roupas largas e folgadas"], answer: "Usar várias camadas de roupa que podem ser adicionadas ou removidas para regular a temperatura corporal" },
    { question: "O conceito de 'zona de conforto' em sobrevivência se refere a:", options: ["Um estado mental perigoso de complacência que impede a preparação para futuras dificuldades", "O abrigo construído pelo sobrevivente", "A temperatura ideal para o corpo humano", "O grupo de pessoas com quem se tem mais afinidade"], answer: "Um estado mental perigoso de complacência que impede a preparação para futuras dificuldades" },
    { question: "A decisão de racionar a transpiração (evitando esforço nas horas mais quentes) é um exemplo de qual princípio?", options: ["Princípio da sinalização", "Princípio da conservação de água", "Princípio da alimentação", "Princípio da proteção"], answer: "Princípio da conservação de água" },
    { question: "A ordem correta das prioridades pode mudar dependendo do ambiente. Em um deserto, durante o dia, a prioridade imediata após o acidente seria:", options: ["Fazer uma fogueira para se aquecer", "Encontrar abrigo para se proteger do sol e do calor", "Procurar por comida", "Imobilizar todos os ferimentos"], answer: "Encontrar abrigo para se proteger do sol e do calor" },
    { question: "A 'disciplina de água' refere-se a:", options: ["Beber toda a água encontrada de uma vez", "Beber apenas à noite", "Gerenciar o consumo de água de forma consciente e controlada, bebendo em pequenos goles", "Usar a água apenas para cozinhar"], answer: "Gerenciar o consumo de água de forma consciente e controlada, bebendo em pequenos goles" },
    { question: "O planejamento de cada dia em uma situação de sobrevivência deve sempre incluir:", options: ["Apenas a busca por alimentos", "Tarefas para melhorar o abrigo, coletar água e lenha, e sinalizar", "Exploração de longas distâncias", "Descanso total para todos os membros"], answer: "Tarefas para melhorar o abrigo, coletar água e lenha, e sinalizar" }
]

// BANCO DE QUESTÕES [1/2] - ASPECTOS FISIOLÓGICOS (50 QUESTÕES)
const quizDataAspectosFisiologicosN1 = [
  // --- Hipóxia ---
  {
    question: "A diminuição da pressão parcial de oxigênio nos alvéolos pulmonares, causada pela subida para grandes altitudes, caracteriza qual tipo de hipóxia?",
    options: [
      "Hipóxia hipêmica (ou anêmica)",
      "Hipóxia hipóxica (ou hipobárica)",
      "Hipóxia isquêmica (ou estagnante)",
      "Hipóxia histotóxica"
    ],
    answer: "Hipóxia hipóxica (ou hipobárica)"
  },
  {
    question: "Um indivíduo com anemia ou que sofreu intoxicação por monóxido de carbono (CO) terá sua capacidade de transporte de oxigênio no sangue reduzida. Este quadro caracteriza qual tipo de hipóxia?",
    options: [
      "Hipóxia histotóxica",
      "Hipóxia hipêmica",
      "Hipóxia isquêmica",
      "Hipóxia hipóxica"
    ],
    answer: "Hipóxia hipêmica"
  },
  {
    question: "O consumo de álcool ou certos venenos (como cianeto) impede que as células do corpo utilizem o oxigênio disponível no sangue. Este tipo de hipóxia é classificado como:",
    options: [
      "Hipóxia histotóxica",
      "Hipóxia hipêmica",
      "Hipóxia isquêmica",
      "Hipóxia hipobárica"
    ],
    answer: "Hipóxia histotóxica"
  },
  {
    question: "A exposição a altas Forças G positivas (+Gz), que dificulta o bombeamento de sangue para o cérebro, pode levar a qual tipo de hipóxia?",
    options: [
      "Hipóxia hipóxica",
      "Hipóxia anêmica",
      "Hipóxia isquêmica (ou estagnante)",
      "Hipóxia histotóxica"
    ],
    answer: "Hipóxia isquêmica (ou estagnante)"
  },
  {
    question: "Qual é o 'Tempo Útil de Consciência' (TUC) aproximado a 40.000 pés (FL400) após uma despressurização explosiva?",
    options: [
      "1 a 2 minutos",
      "5 a 10 minutos",
      "15 a 30 segundos",
      "45 a 60 segundos"
    ],
    answer: "15 a 30 segundos"
  },
  {
    question: "O primeiro sintoma perceptível da hipóxia em aeronavegantes é frequentemente:",
    options: [
      "Perda de consciência",
      "Euforia e diminuição do senso crítico",
      "Dor no peito",
      "Cianose (lábios e unhas azulados)"
    ],
    answer: "Euforia e diminuição do senso crítico"
  },
  {
    question: "A zona fisiológica de voo onde o ser humano pode respirar o ar ambiente sem necessidade de oxigênio suplementar é considerada até:",
    options: [
      "10.000 pés",
      "18.000 pés",
      "25.000 pés",
      "8.000 pés"
    ],
    answer: "10.000 pés"
  },
  {
    question: "O aumento da frequência e profundidade respiratória, geralmente por ansiedade, que leva a uma redução excessiva de CO2 no sangue, é chamado de:",
    options: [
      "Hipóxia",
      "Hiperventilação",
      "Disbarismo",
      "Aerotite"
    ],
    answer: "Hiperventilação"
  },
  {
    question: "Sintomas como formigamento nas extremidades (mãos e pés), tontura e espasmos musculares (tetania) são característicos de qual condição?",
    options: [
      "Hipóxia hipóxica",
      "Doença da descompressão",
      "Hiperventilação",
      "Hipóxia histotóxica"
    ],
    answer: "Hiperventilação"
  },
  {
    question: "Qual o procedimento imediato para corrigir um quadro de hiperventilação em voo?",
    options: [
      "Respirar oxigênio a 100%",
      "Controlar a respiração, respirando mais devagar ou dentro de um saco (se disponível)",
      "Iniciar uma descida de emergência",
      "Beber água"
    ],
    answer: "Controlar a respiração, respirando mais devagar ou dentro de um saco (se disponível)"
  },
  // --- Disbarismos (Barotraumas) ---
  {
    question: "A dor de dente causada pela expansão de gases presos na polpa dentária ou em obturações malfeitas durante a subida é chamada de:",
    options: [
      "Aerotite",
      "Aerosinusite",
      "Aerodontalgia",
      "Mal da descompressão"
    ],
    answer: "Aerodontalgia"
  },
  {
    question: "A dificuldade em equalizar a pressão do ouvido médio durante a descida, causando dor aguda, é conhecida como:",
    options: [
      "Barotite ou Aerotite Média",
      "Aerosinusite",
      "Labirintite",
      "Aerodontalgia"
    ],
    answer: "Barotite ou Aerotite Média"
  },
  {
    question: "Qual manobra é recomendada para facilitar a abertura da Trompa de Eustáquio e equalizar a pressão do ouvido médio durante a descida?",
    options: [
      "Manobra de Valsalva (expirar com nariz e boca fechados)",
      "Prender a respiração",
      "Respirar rapidamente",
      "Tossir vigorosamente"
    ],
    answer: "Manobra de Valsalva (expirar com nariz e boca fechados)"
  },
  {
    question: "A inflamação dolorosa dos seios paranasais (seios da face) devido à dificuldade de equalização da pressão durante variações de altitude é chamada de:",
    options: [
      "Aerotite",
      "Aerodontalgia",
      "Aerosinusite (ou Barosinusite)",
      "Rinite alérgica"
    ],
    answer: "Aerosinusite (ou Barosinusite)"
  },
  {
    question: "Voar logo após um mergulho autônomo (scuba) aumenta significativamente o risco de qual condição fisiológica?",
    options: [
      "Hipóxia hipêmica",
      "Hiperventilação",
      "Doença da Descompressão (Disbarismo Gasoso)",
      "Aerotite"
    ],
    answer: "Doença da Descompressão (Disbarismo Gasoso)"
  },
  {
    question: "A Doença da Descompressão é causada pela formação de bolhas de qual gás nos tecidos e na corrente sanguínea?",
    options: [
      "Oxigênio (O2)",
      "Dióxido de Carbono (CO2)",
      "Nitrogênio (N2)",
      "Hélio (He)"
    ],
    answer: "Nitrogênio (N2)"
  },
  {
    question: "A manifestação da doença descompressiva que causa dores articulares ('bends') é classificada como:",
    options: [
      "Tipo I (Cutânea ou Musculoesquelética)",
      "Tipo II (Neurológica)",
      "Tipo III (Pulmonar - 'chokes')",
      "Tipo IV (Cerebral)"
    ],
    answer: "Tipo I (Cutânea ou Musculoesquelética)"
  },
  {
    question: "Manifestações neurológicas, como paralisia, vertigem ou problemas respiratórios ('chokes'), na doença descompressiva são classificadas como:",
    options: [
      "Tipo I",
      "Tipo II",
      "Leve",
      "Inexistente"
    ],
    answer: "Tipo II"
  },
  {
    question: "O tratamento definitivo para a doença da descompressão grave é:",
    options: [
      "Administração de analgésicos",
      "Repouso e hidratação",
      "Oxigenoterapia hiperbárica (Câmara Hiperbárica)",
      "Descer para o nível do mar imediatamente"
    ],
    answer: "Oxigenoterapia hiperbárica (Câmara Hiperbárica)"
  },
  {
    question: "A expansão de gases no trato gastrointestinal durante a subida, causando desconforto e dor abdominal, é conhecida como:",
    options: [
      "Aerogastria",
      "Aerosinusite",
      "Meteorismo (ou Flatulência de Altitude)",
      "Aerofagia"
    ],
    answer: "Meteorismo (ou Flatulência de Altitude)"
  },
  // --- Forças G ---
  {
    question: "A 'visão de túnel' (perda da visão periférica) e a 'visão cinza' (greyout) são sintomas iniciais da exposição a:",
    options: [
      "Força G negativa (-Gz)",
      "Força G positiva (+Gz)",
      "Hipóxia",
      "Desorientação espacial"
    ],
    answer: "Força G positiva (+Gz)"
  },
  {
    question: "A perda total de visão, mas com manutenção da consciência, sob efeito de Força G positiva é conhecida como:",
    options: [
      "Greyout",
      "Blackout",
      "Redout",
      "G-LOC"
    ],
    answer: "Blackout"
  },
  {
    question: "A perda de consciência induzida por Força G é abreviada como:",
    options: [
      "Blackout",
      "Redout",
      "G-LOC (G-induced Loss of Consciousness)",
      "TUC"
    ],
    answer: "G-LOC (G-induced Loss of Consciousness)"
  },
  {
    question: "A sensação de 'olhos saltando das órbitas' e a visão vermelha ('redout') são associadas à exposição a qual tipo de aceleração?",
    options: [
      "Força G positiva (+Gz)",
      "Força G negativa (-Gz)",
      "Força G transversal (+Gx)",
      "Força de Coriolis"
    ],
    answer: "Força G negativa (-Gz)"
  },
  {
    question: "Qual manobra o piloto pode executar para aumentar sua tolerância à Força G positiva, contraindo a musculatura e controlando a respiração?",
    options: [
      "Manobra de Valsalva",
      "Manobra Anti-G (AGSM ou L-1)",
      "Manobra de Heimlich",
      "Relaxamento muscular"
    ],
    answer: "Manobra Anti-G (AGSM ou L-1)"
  },
  // --- Desorientação Espacial ---
  {
    question: "A ilusão sensorial mais comum em voo, onde o piloto sente que a aeronave está nivelada quando na verdade está em uma curva prolongada, é chamada de:",
    options: [
      "Inclinação ('The Leans')",
      "Coriolis",
      "Vertigem do 'virar de cabeça'",
      "Elevador (Somatogravic)"
    ],
    answer: "Inclinação ('The Leans')"
  },
  {
    question: "A ilusão extremamente forte de rotação, causada por um movimento da cabeça em um plano diferente enquanto a aeronave está em uma curva, é a:",
    options: [
      "Ilusão Somatogravic",
      "Ilusão Autocinética",
      "Ilusão de Coriolis",
      "Inclinação ('The Leans')"
    ],
    answer: "Ilusão de Coriolis"
  },
  {
    question: "Durante uma aceleração linear rápida (como na decolagem), o piloto pode sentir que o nariz da aeronave está subindo excessivamente. Esta é a ilusão:",
    options: [
      "Somatogravic (Elevador)",
      "Somatogiral",
      "Autocinética",
      "Coriolis"
    ],
    answer: "Somatogravic (Elevador)"
  },
  {
    question: "O sistema sensorial que informa o cérebro sobre a posição do corpo em relação à gravidade e acelerações lineares e angulares é o:",
    options: [
      "Sistema Visual",
      "Sistema Vestibular (Ouvido Interno)",
      "Sistema Somatossensorial (Proprioceptivo)",
      "Sistema Olfativo"
    ],
    answer: "Sistema Vestibular (Ouvido Interno)"
  },
  {
    question: "Os canais semicirculares, localizados no ouvido interno, são responsáveis por detectar principalmente qual tipo de movimento?",
    options: [
      "Acelerações lineares",
      "Acelerações angulares (rotação)",
      "Gravidade",
      "Vibração"
    ],
    answer: "Acelerações angulares (rotação)"
  },
  {
    question: "Os órgãos otolíticos (utrículo e sáculo), no ouvido interno, detectam principalmente:",
    options: [
      "Acelerações lineares e gravidade",
      "Acelerações angulares",
      "Sons de alta frequência",
      "Variações de pressão"
    ],
    answer: "Acelerações lineares e gravidade"
  },
  {
    question: "Em condições de voo por instrumentos (IMC), qual sistema deve ter prioridade absoluta para o piloto manter a orientação espacial?",
    options: [
      "Sistema Vestibular (sensações do corpo)",
      "Sistema Visual (Instrumentos de voo)",
      "Sistema Somatossensorial (propriocepção)",
      "Instinto do piloto"
    ],
    answer: "Sistema Visual (Instrumentos de voo)"
  },
  {
    question: "A ilusão onde um ponto de luz estático no escuro parece se mover (como uma estrela) é chamada de:",
    options: [
      "Ilusão Autocinética",
      "Ilusão de Coriolis",
      "Falso horizonte",
      "Ilusão Somatogravic"
    ],
    answer: "Ilusão Autocinética"
  },
  {
    question: "Confundir luzes no solo (como as de uma cidade ou estrada) com estrelas, levando o piloto a uma atitude anormal, é a ilusão de:",
    options: [
      "Falso Horizonte",
      "Visão de Túnel",
      "Autocinese",
      "Redout"
    ],
    answer: "Falso Horizonte"
  },
  {
    question: "A incapacidade de perceber mudanças graduais na atitude da aeronave, abaixo do limiar de percepção do sistema vestibular, é conhecida como:",
    options: [
      "Limiar Sensorial",
      "Ilusão de Coriolis",
      "G-LOC",
      "Blackout"
    ],
    answer: "Limiar Sensorial"
  },
  // --- Fadiga, Ritmo Circadiano, Álcool e Drogas ---
  {
    question: "A fadiga que se acumula ao longo de vários dias ou semanas de voo com descanso inadequado, exigindo um período de recuperação mais longo, é classificada como:",
    options: [
      "Fadiga aguda",
      "Fadiga crônica",
      "Fadiga de combate",
      "Fadiga transitória"
    ],
    answer: "Fadiga crônica"
  },
  {
    question: "A fadiga resultante de um único dia de trabalho intenso ou privação de sono, geralmente recuperada com uma boa noite de sono, é a:",
    options: [
      "Fadiga crônica",
      "Fadiga aguda",
      "Fadiga cumulativa",
      "Fadiga de estresse"
    ],
    answer: "Fadiga aguda"
  },
  {
    question: "O relógio biológico interno que regula os ciclos de sono-vigília ao longo de aproximadamente 24 horas é chamado de:",
    options: [
      "Ritmo Ultrassônico",
      "Ritmo Circadiano",
      "Ciclo REM",
      "Homeostase"
    ],
    answer: "Ritmo Circadiano"
  },
  {
    question: "A dessincronização do ritmo circadiano causada pela travessia rápida de múltiplos fusos horários é conhecida como:",
    options: [
      "Fadiga crônica",
      "Jet Lag",
      "Hipóxia",
      "Desorientação"
    ],
    answer: "Jet Lag"
  },
  {
    question: "Voos no sentido Leste-Oeste (Westbound) geralmente causam menos Jet Lag do que voos no sentido Oeste-Leste (Eastbound) porque:",
    options: [
      "O dia é encurtado, facilitando a adaptação",
      "O dia é prolongado, o que é mais fácil para o corpo ajustar",
      "A Força G é menor",
      "A pressurização da cabine é melhor"
    ],
    answer: "O dia é prolongado, o que é mais fácil para o corpo ajustar"
  },
  {
    question: "Qual o período mínimo recomendado, segundo a regulamentação brasileira (RBAC 121), de abstinência de álcool antes de assumir uma função a bordo?",
    options: [
      "4 horas",
      "8 horas",
      "12 horas",
      "24 horas"
    ],
    answer: "8 horas"
  },
  {
    question: "O principal perigo do consumo de álcool, mesmo em pequenas quantidades, para um piloto é:",
    options: [
      "Aumento da tolerância à Força G",
      "Melhora da visão noturna",
      "Redução da capacidade de julgamento e aumento do tempo de reação",
      "Aumento da resistência à hipóxia"
    ],
    answer: "Redução da capacidade de julgamento e aumento do tempo de reação"
  },
  {
    question: "O álcool interfere no uso de oxigênio pelo corpo, potencializando os efeitos da hipóxia. Este efeito é similar ao da hipóxia:",
    options: [
      "Hipóxica",
      "Hipêmica",
      "Isquêmica",
      "Histotóxica"
    ],
    answer: "Histotóxica"
  },
  {
    question: "A prática de voar sob efeito de medicamentos sem autorização médica (automedicação) é perigosa principalmente porque:",
    options: [
      "Os medicamentos podem ter efeitos colaterais inesperados em altitude",
      "São caros",
      "Podem curar a doença rapidamente",
      "Aumentam a tolerância ao álcool"
    ],
    answer: "Os medicamentos podem ter efeitos colaterais inesperados em altitude"
  },
  {
    question: "O monóxido de carbono (CO) presente na fumaça do cigarro tem alta afinidade com a hemoglobina, causando qual tipo de hipóxia?",
    options: [
      "Hipóxia hipêmica",
      "Hipóxia histotóxica",
      "Hipóxia isquêmica",
      "Hipóxia hipóxica"
    ],
    answer: "Hipóxia hipêmica"
  },
  // --- Visão e Outros ---
  {
    question: "A altitude fisiológica do fumante (o quanto sua tolerância à altitude já está comprometida ao nível do mar) é, em média, de:",
    options: [
      "1.000 a 2.000 pés",
      "5.000 a 8.000 pés",
      "10.000 a 12.000 pés",
      "Não há efeito"
    ],
    answer: "5.000 a 8.000 pés"
  },
  {
    question: "A visão noturna depende primariamente de quais células da retina?",
    options: [
      "Cones",
      "Bastonetes",
      "Mácula",
      "Nervo óptico"
    ],
    answer: "Bastonetes"
  },
  {
    question: "Os bastonetes, responsáveis pela visão noturna, são menos eficazes em qual parte do campo visual?",
    options: [
      "Visão periférica",
      "Visão central (Fóvea)",
      "Visão superior",
      "Visão inferior"
    ],
    answer: "Visão central (Fóvea)"
  },
  {
    question: "Para detectar objetos à noite, um piloto deve utilizar a técnica de:",
    options: [
      "Olhar diretamente para o objeto (visão central)",
      "Piscar rapidamente",
      "Usar a visão periférica (olhar ligeiramente ao lado do objeto)",
      "Fechar um olho"
    ],
    answer: "Usar a visão periférica (olhar ligeiramente ao lado do objeto)"
  },
  {
    question: "O tempo necessário para adaptação total da visão ao escuro pode levar de:",
    options: [
      "1 a 2 minutos",
      "5 a 10 minutos",
      "20 a 30 minutos",
      "1 hora"
    ],
    answer: "20 a 30 minutos"
  }
];

// BANCO DE QUESTÕES [2/2] - PRIMEIROS SOCORROS (50 QUESTÕES)
const quizDataPrimeirosSocorrosN2 = [
  // --- RCP e DEA ---
  {
    question: "Qual é o primeiro passo ao encontrar uma vítima que aparenta estar inconsciente?",
    options: [
      "Iniciar compressões torácicas",
      "Verificar a segurança do local",
      "Checar a responsividade e chamar por ajuda",
      "Abrir as vias aéreas"
    ],
    answer: "Verificar a segurança do local"
  },
  {
    question: "Após verificar a segurança do local e constatar que a vítima não responde, qual o próximo passo imediato?",
    options: [
      "Chamar por ajuda (inclusive o DEA/DAE) e checar respiração e pulso simultaneamente",
      "Iniciar 30 compressões",
      "Aplicar 2 ventilações",
      "Colocar a vítima em posição lateral de segurança"
    ],
    answer: "Chamar por ajuda (inclusive o DEA/DAE) e checar respiração e pulso simultaneamente"
  },
  {
    question: "Durante a Reanimação Cardiopulmonar (RCP) em um adulto, qual a frequência (taxa) correta de compressões torácicas por minuto?",
    options: [
      "60 a 80",
      "80 a 100",
      "100 a 120",
      "120 a 140"
    ],
    answer: "100 a 120"
  },
  {
    question: "Qual a profundidade correta das compressões torácicas em um adulto durante a RCP?",
    options: [
      "2 a 3 cm",
      "3 a 4 cm",
      "5 a 6 cm",
      "7 a 8 cm"
    ],
    answer: "5 a 6 cm"
  },
  {
    question: "Qual é a relação correta de compressões e ventilações (ciclo) em um adulto na RCP realizada por um único socorrista?",
    options: [
      "15 compressões para 2 ventilações",
      "30 compressões para 2 ventilações",
      "30 compressões para 1 ventilação",
      "Compressões contínuas, sem ventilação"
    ],
    answer: "30 compressões para 2 ventilações"
  },
  {
    question: "Ao utilizar um Desfibrilador Externo Automático (DEA/DAE), qual o procedimento correto assim que o aparelho chega?",
    options: [
      "Continuar as compressões enquanto aplica as pás",
      "Parar a RCP, ligar o DEA e seguir as instruções de voz",
      "Aplicar o choque imediatamente, sem análise",
      "Aplicar as pás apenas se a vítima for um adulto"
    ],
    answer: "Parar a RCP, ligar o DEA e seguir as instruções de voz"
  },
  {
    question: "Durante o uso do DEA, o aparelho indica 'Choque recomendado'. Qual a ação correta do socorrista?",
    options: [
      "Continuar as compressões",
      "Afastar-se e garantir que ninguém esteja tocando a vítima antes de apertar o botão de choque",
      "Desligar o aparelho e reiniciar a RCP",
      "Verificar o pulso da vítima antes de chocar"
    ],
    answer: "Afastar-se e garantir que ninguém esteja tocando a vítima antes de apertar o botão de choque"
  },
  {
    question: "Imediatamente após a administração do choque pelo DEA, o que o socorrista deve fazer?",
    options: [
      "Reiniciar imediatamente as compressões torácicas",
      "Checar o pulso da vítima",
      "Esperar o DEA analisar novamente",
      "Aplicar duas ventilações"
    ],
    answer: "Reiniciar imediatamente as compressões torácicas"
  },
  {
    question: "Se o DEA indicar 'Choque não recomendado', qual deve ser a ação imediata?",
    options: [
      "Verificar o pulso",
      "Reiniciar a RCP imediatamente, começando pelas compressões",
      "Desligar o aparelho",
      "Aguardar a chegada de socorro médico"
    ],
    answer: "Reiniciar a RCP imediatamente, começando pelas compressões"
  },
  {
    question: "Para uma criança (não bebê), a profundidade da compressão torácica na RCP deve ser de:",
    options: [
      "Aproximadamente 5 cm (ou 1/3 do diâmetro do tórax)",
      "Aproximadamente 2 cm",
      "A mesma de um adulto (5 a 6 cm)",
      "Aproximadamente 7 cm"
    ],
    answer: "Aproximadamente 5 cm (ou 1/3 do diâmetro do tórax)"
  },
  // --- Hemorragias ---
  {
    question: "Em caso de hemorragia externa grave em um membro (braço ou perna), qual é o método prioritário para controlar o sangramento?",
    options: [
      "Elevação do membro",
      "Aplicação de torniquete",
      "Aplicação de compressão direta e firme sobre o ferimento",
      "Limpeza da ferida com água"
    ],
    answer: "Aplicação de compressão direta e firme sobre o ferimento"
  },
  {
    question: "Se a compressão direta não for suficiente para conter uma hemorragia grave em um membro, qual o próximo passo recomendado (antes de um torniquete)?",
    options: [
      "Aplicar gelo",
      "Aplicar pressão em um ponto arterial (ponto de pressão)",
      "Preencher o ferimento com gaze (empacotamento) e continuar a compressão direta",
      "Desistir da compressão e elevar o membro"
    ],
    answer: "Preencher o ferimento com gaze (empacotamento) e continuar a compressão direta"
  },
  {
    question: "O uso de torniquete é indicado em qual situação?",
    options: [
      "Qualquer sangramento venoso",
      "Hemorragias internas",
      "Hemorragia grave em membro, com risco de vida, que não foi controlada por compressão direta",
      "Sangramento capilar (escoriação)"
    ],
    answer: "Hemorragia grave em membro, com risco de vida, que não foi controlada por compressão direta"
  },
  {
    question: "Um sangramento arterial é tipicamente caracterizado por:",
    options: [
      "Sangue escuro, fluindo continuamente",
      "Sangue vermelho vivo, que jorra em jatos (pulsátil)",
      "Sangramento lento e superficial",
      "Sangue que coagula rapidamente"
    ],
    answer: "Sangue vermelho vivo, que jorra em jatos (pulsátil)"
  },
  {
    question: "Um sangramento venoso é caracterizado por:",
    options: [
      "Sangue vermelho vivo, pulsátil",
      "Sangue escuro, fluindo de forma contínua e lenta",
      "Sangramento superficial (babando)",
      "Sangramento que não para com a pressão"
    ],
    answer: "Sangue escuro, fluindo de forma contínua e lenta"
  },
  {
    question: "Qual o procedimento correto ao aplicar um torniquete?",
    options: [
      "Aplicar diretamente sobre a articulação (joelho ou cotovelo)",
      "Aplicar frouxamente, apenas para diminuir o fluxo",
      "Aplicar alguns centímetros acima do ferimento, apertando até o sangramento parar, e anotar o horário",
      "Afolgar o torniquete a cada 15 minutos"
    ],
    answer: "Aplicar alguns centímetros acima do ferimento, apertando até o sangramento parar, e anotar o horário"
  },
  {
    question: "Em caso de sangramento nasal (epistaxe), qual o procedimento correto?",
    options: [
      "Inclinar a cabeça da vítima para trás e aplicar gelo na nuca",
      "Inclinar a cabeça da vítima ligeiramente para frente e comprimir as narinas",
      "Solicitar que a vítima assoe o nariz com força",
      "Introduzir algodão profundamente na narina"
    ],
    answer: "Inclinar a cabeça da vítima ligeiramente para frente e comprimir as narinas"
  },
  // --- Queimaduras ---
  {
    question: "Uma queimadura que afeta apenas a epiderme (camada superficial da pele), causando vermelhidão e dor, é classificada como:",
    options: [
      "Primeiro grau",
      "Segundo grau",
      "Terceiro grau",
      "Quarto grau"
    ],
    answer: "Primeiro grau"
  },
  {
    question: "A formação de bolhas é a principal característica de qual grau de queimadura?",
    options: [
      "Primeiro grau",
      "Segundo grau",
      "Terceiro grau",
      "Queimadura química"
    ],
    answer: "Segundo grau"
  },
  {
    question: "Uma queimadura que destrói todas as camadas da pele, podendo atingir músculos e ossos, com aparência esbranquiçada ou carbonizada e pouca ou nenhuma dor, é de:",
    options: [
      "Primeiro grau",
      "Segundo grau superficial",
      "Segundo grau profundo",
      "Terceiro grau"
    ],
    answer: "Terceiro grau"
  },
  {
    question: "Qual o primeiro socorro imediato para uma queimadura térmica (causada por calor)?",
    options: [
      "Aplicar gelo diretamente sobre a queimadura",
      "Resfriar a área com água corrente limpa em temperatura ambiente",
      "Aplicar pasta de dente, manteiga ou café",
      "Estourar as bolhas imediatamente"
    ],
    answer: "Resfriar a área com água corrente limpa em temperatura ambiente"
  },
  {
    question: "Ao atender uma vítima com queimadura de 2º grau (com bolhas), qual o procedimento correto após o resfriamento inicial?",
    options: [
      "Estourar as bolhas para drenar o líquido",
      "Aplicar pomada antibiótica diretamente",
      "Cobrir a área com gaze estéril ou pano limpo e seco, sem apertar",
      "Remover roupas que estejam grudadas na pele"
    ],
    answer: "Cobrir a área com gaze estéril ou pano limpo e seco, sem apertar"
  },
  {
    question: "Em caso de queimaduras químicas nos olhos, qual o procedimento imediato?",
    options: [
      "Tentar neutralizar o produto químico (ex: base para ácido)",
      "Lavar os olhos abundantemente com água corrente por pelo menos 15 minutos",
      "Vendar os dois olhos imediatamente",
      "Aplicar colírio anestésico"
    ],
    answer: "Lavar os olhos abundantemente com água corrente por pelo menos 15 minutos"
  },
  {
    question: "Em vítimas de queimaduras elétricas, qual é o risco imediato mais grave que o socorrista deve monitorar?",
    options: [
      "Infecção da pele",
      "Parada cardiorrespiratória (arritmia cardíaca)",
      "Hemorragia interna",
      "Desidratação"
    ],
    answer: "Parada cardiorrespiratória (arritmia cardíaca)"
  },
  // --- Fraturas e Imobilização ---
  {
    question: "Uma fratura onde o osso quebrado perfura a pele, ficando exposto, é chamada de:",
    options: [
      "Fratura fechada",
      "Fratura exposta (ou aberta)",
      "Luxação",
      "Entorse"
    ],
    answer: "Fratura exposta (ou aberta)"
  },
  {
    question: "Ao imobilizar uma suspeita de fratura em um membro, qual é o princípio correto?",
    options: [
      "Tentar realinhar (colocar no lugar) o osso antes de imobilizar",
      "Imobilizar apenas o ponto exato da fratura",
      "Imobilizar a articulação acima e a articulação abaixo da lesão",
      "Aplicar gelo diretamente sobre a fratura exposta"
    ],
    answer: "Imobilizar a articulação acima e a articulação abaixo da lesão"
  },
  {
    question: "Em caso de fratura exposta, qual o procedimento correto?",
    options: [
      "Empurrar o osso de volta para dentro da pele",
      "Lavar o osso exposto com álcool",
      "Cobrir o ferimento com pano limpo ou gaze estéril e controlar o sangramento",
      "Imobilizar o membro sem cobrir o ferimento"
    ],
    answer: "Cobrir o ferimento com pano limpo ou gaze estéril e controlar o sangramento"
  },
  {
    question: "Ao suspeitar de uma fratura na coluna vertebral (lesão raquimedular), qual é o cuidado principal?",
    options: [
      "Manter a vítima sentada para facilitar a respiração",
      "Manter a imobilização total da coluna, especialmente a cervical (pescoço)",
      "Pedir para a vítima tentar girar a cabeça para checar a dor",
      "Elevar as pernas da vítima"
    ],
    answer: "Manter a imobilização total da coluna, especialmente a cervical (pescoço)"
  },
  {
    question: "A perda de contato entre as superfícies de uma articulação (deslocamento) é chamada de:",
    options: [
      "Entorse",
      "Contusão",
      "Fratura",
      "Luxação"
    ],
    answer: "Luxação"
  },
  {
    question: "O estiramento ou rompimento dos ligamentos de uma articulação é chamado de:",
    options: [
      "Luxação",
      "Contusão",
      "Entorse",
      "Fratura"
    ],
    answer: "Entorse"
  },
  // --- Obstrução de Vias Aéreas (Engasgo) ---
  {
    question: "Em um adulto consciente com Obstrução Grave de Vias Aéreas (não consegue tossir nem falar), qual o procedimento correto?",
    options: [
      "Dar tapas nas costas com a vítima em pé",
      "Oferecer água para ajudar a descer o objeto",
      "Realizar a Manobra de Heimlich (compressões abdominais)",
      "Esperar a vítima desmaiar para iniciar RCP"
    ],
    answer: "Realizar a Manobra de Heimlich (compressões abdominais)"
  },
  {
    question: "Se uma vítima de engasgo grave (Manobra de Heimlich) ficar inconsciente, qual o procedimento imediato?",
    options: [
      "Tentar as compressões abdominais com a vítima deitada",
      "Deitá-la com cuidado, acionar ajuda e iniciar RCP (compressões torácicas)",
      "Tentar remover o objeto com os dedos (varredura digital)",
      "Aplicar ventilações imediatamente"
    ],
    answer: "Deitá-la com cuidado, acionar ajuda e iniciar RCP (compressões torácicas)"
  },
  {
    question: "Em gestantes ou pessoas obesas com engasgo grave, as compressões da Manobra de Heimlich devem ser aplicadas:",
    options: [
      "Na altura do abdômen (umbigo), como em um adulto normal",
      "Na altura do tórax (esterno)",
      "Apenas tapas nas costas",
      "Não se aplica a manobra"
    ],
    answer: "Na altura do tórax (esterno)"
  },
  {
    question: "Em um bebê (lactente) consciente e engasgado, qual o procedimento?",
    options: [
      "Compressões abdominais (Heimlich)",
      "Segurá-lo de bruços, apoiado no antebraço, e aplicar 5 tapas nas costas; virar e aplicar 5 compressões torácicas",
      "Segurá-lo de cabeça para baixo pelos pés",
      "Oferecer água"
    ],
    answer: "Segurá-lo de bruços, apoiado no antebraço, e aplicar 5 tapas nas costas; virar e aplicar 5 compressões torácicas"
  },
  {
    question: "Ao iniciar a RCP em uma vítima que ficou inconsciente por engasgo, o que o socorrista deve fazer antes de tentar ventilar?",
    options: [
      "Procurar o objeto na boca e tentar removê-lo (apenas se visível)",
      "Aplicar 30 compressões primeiro",
      "Checar o pulso",
      "Administrar um choque com o DEA"
    ],
    answer: "Procurar o objeto na boca e tentar removê-lo (apenas se visível)"
  },
  // --- Estado de Choque, Desmaio e Convulsão ---
  {
    question: "Palidez, pele fria e pegajosa, sudorese, pulso rápido e fraco, e confusão mental são sinais clássicos de:",
    options: [
      "Estado de Choque (Hipovolêmico)",
      "Hiperventilação",
      "Hipóxia",
      "Convulsão"
    ],
    answer: "Estado de Choque (Hipovolêmico)"
  },
  {
    question: "Qual o procedimento de primeiros socorros para uma vítima em estado de choque (sem trauma abdominal ou de membros inferiores)?",
    options: [
      "Sentar a vítima e oferecer líquidos açucarados",
      "Deitar a vítima, elevar suas pernas e mantê-la aquecida",
      "Manter a vítima em pé e caminhando para estimular a circulação",
      "Aplicar compressas frias"
    ],
    answer: "Deitar a vítima, elevar suas pernas e mantê-la aquecida"
  },
  {
    question: "A perda súbita e breve da consciência, com recuperação rápida, geralmente causada por diminuição do fluxo sanguíneo cerebral, é chamada de:",
    options: [
      "Convulsão",
      "Síncope (Desmaio)",
      "AVC",
      "Estado de choque"
    ],
    answer: "Síncope (Desmaio)"
  },
  {
    question: "Ao atender uma vítima que desmaiou (síncope), qual o procedimento correto?",
    options: [
      "Dar tapas no rosto e jogar água fria",
      "Deitar a vítima e elevar suas pernas (se não houver trauma)",
      "Oferecer álcool para cheirar",
      "Sentar a vítima imediatamente"
    ],
    answer: "Deitar a vítima e elevar suas pernas (se não houver trauma)"
  },
  {
    question: "Durante uma crise convulsiva (movimentos tônico-clônicos), qual deve ser a ação prioritária do socorrista?",
    options: [
      "Segurar os braços e pernas da vítima para parar os movimentos",
      "Tentar abrir a boca da vítima e segurar a língua",
      "Proteger a cabeça da vítima contra impactos e afastar objetos perigosos",
      "Jogar água fria no rosto da vítima"
    ],
    answer: "Proteger a cabeça da vítima contra impactos e afastar objetos perigosos"
  },
  {
    question: "Após o término de uma crise convulsiva, em que posição a vítima deve ser colocada enquanto recupera a consciência?",
    options: [
      "Sentada, com a cabeça entre os joelhos",
      "Deitada de barriga para cima (decúbito dorsal)",
      "Em Posição Lateral de Segurança (PLS)",
      "Deitada com as pernas elevadas"
    ],
    answer: "Em Posição Lateral de Segurança (PLS)"
  },
  // --- Mal Súbito (IAM, AVC) e Outros ---
  {
    question: "Dor súbita ou desconforto no peito que irradia para o braço esquerdo, pescoço ou mandíbula, acompanhada de suor frio e náusea, é um sinal clássico de:",
    options: [
      "Ataque de pânico",
      "Infarto Agudo do Miocárdio (IAM)",
      "Ataque de asma",
      "Engasgo"
    ],
    answer: "Infarto Agudo do Miocárdio (IAM)"
  },
  {
    question: "Ao suspeitar de um Infarto (IAM) em um passageiro consciente, qual o procedimento recomendado a bordo?",
    options: [
      "Fazer a vítima caminhar pelo corredor",
      "Oferecer água com açúcar",
      "Manter a vítima em repouso (sentada ou semi-sentada), afrouxar roupas e administrar oxigênio (se disponível)",
      "Iniciar RCP imediatamente"
    ],
    answer: "Manter a vítima em repouso (sentada ou semi-sentada), afrouxar roupas e administrar oxigênio (se disponível)"
  },
  {
    question: "Dificuldade súbita para falar, perda de força em um lado do corpo (rosto, braço, perna) e confusão mental são sinais sugestivos de:",
    options: [
      "Infarto Agudo do Miocárdio (IAM)",
      "Acidente Vascular Cerebral (AVC)",
      "Crise de hipoglicemia",
      "Síncope"
    ],
    answer: "Acidente Vascular Cerebral (AVC)"
  },
  {
    question: "O mnemônico 'SAMU' (ou 'FAST' em inglês) é usado para identificar rapidamente os sinais de qual emergência?",
    options: [
      "Infarto (IAM)",
      "Parada Cardíaca (PCR)",
      "Acidente Vascular Cerebral (AVC)",
      "Estado de Choque"
    ],
    answer: "Acidente Vascular Cerebral (AVC)"
  },
  {
    question: "O procedimento de transporte de uma vítima com suspeita de trauma que necessita ser movida (ex: saída de local perigoso) deve ser feito, preferencialmente, através de:",
    options: [
      "Movimentação rápida, arrastando pelos braços",
      "Movimentação em bloco (rolamento 90º) para uma prancha rígida",
      "Pedindo para a vítima andar apoiada",
      "Movimentação em 'cadeirinha'"
    ],
    answer: "Movimentação em bloco (rolamento 90º) para uma prancha rígida"
  },
  {
    question: "Qual o objetivo da Posição Lateral de Segurança (PLS)?",
    options: [
      "Facilitar a RCP",
      "Manter a coluna alinhada em caso de fratura",
      "Manter as vias aéreas livres e prevenir aspiração de vômito em vítima inconsciente que respira",
      "Elevar as pernas para tratar o estado de choque"
    ],
    answer: "Manter as vias aéreas livres e prevenir aspiração de vômito em vítima inconsciente que respira"
  },
  {
    question: "Em um parto de emergência a bordo, se o cordão umbilical estiver enrolado no pescoço do bebê (circular de cordão), qual o procedimento?",
    options: [
      "Puxar o bebê rapidamente para desenrolar",
      "Tentar deslizar o cordão suavemente por cima da cabeça do bebê ou, se não for possível, pinçar e cortar",
      "Ignorar o cordão e focar na saída dos ombros",
      "Puxar o cordão umbilical para acelerar o parto"
    ],
    answer: "Tentar deslizar o cordão suavemente por cima da cabeça do bebê ou, se não for possível, pinçar e cortar"
  },
  {
    question: "Após o nascimento do bebê em um parto a bordo, qual a prioridade imediata?",
    options: [
      "Cortar o cordão umbilical",
      "Limpar, secar e aquecer o bebê, garantindo que ele esteja respirando",
      "Pesar o bebê",
      "Aguardar a saída da placenta"
    ],
    answer: "Limpar, secar e aquecer o bebê, garantindo que ele esteja respirando"
  },
  {
    question: "Um passageiro diabético, consciente, relata mal-estar e apresenta tremores, sudorese fria, palidez e confusão mental. Qual o procedimento imediato de primeiros socorros?",
    options: [
      "Administrar oxigênio imediatamente, pois é hipóxia",
      "Oferecer um alimento ou bebida açucarada (ex: suco de laranja, refrigerante não-diet)",
      "Deitá-lo com as pernas elevadas para tratar o estado de choque",
      "Solicitar que respire dentro de um saco, pois é hiperventilação"
    ],
    answer: "Oferecer um alimento ou bebida açucarada (ex: suco de laranja, refrigerante não-diet)"
  }
];