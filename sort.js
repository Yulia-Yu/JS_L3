let tag_but_s = document.getElementsByTagName('button');
//Убирать выбор из списка сделать потом 
let table = document.getElementsByTagName('table');
table = table[0].children[0];
    let res = [];
    for(let i = 1; i < table.children.length; i++){
        let tmp = {}
        tmp['Тип'] = table.children[i].children[0].innerHTML;
        tmp['Название'] = table.children[i].children[1].innerHTML;
        tmp['Время приготовления'] = Number(table.children[i].children[2].innerHTML);
        tmp['Сложность'] = Number(table.children[i].children[3].innerHTML);
        res.push(tmp);
    }
    
let select = document.getElementsByTagName('select');

select[0].onclick = function(){
    let option = select[1].getElementsByTagName('option');
    for(let i = 0; i < option.length; i++){
        if(option[i].hidden == true){
            option[i].hidden = false;
        }
    }
}

select[1].onclick = function(){
    let option = select[1].getElementsByTagName('option');
    let l = select[0].value; 
    for(let i = 0; i < option.length; i++){
        if(option[i].innerHTML == select[1].children[l].innerHTML && option[i].innerHTML != 'Нет'){
            option[i].hidden = true;
        }
    }
    option = select[2].getElementsByTagName('option');
    for(let i = 0; i < option.length; i++){
        if(option[i].hidden == true){
            option[i].hidden = false;
        }
    }
}

select[2].onclick = function(){
    let option = select[2].getElementsByTagName('option');
    let l = select[0].value; 
    let l2 = select[1].value; 
    for(let i = 0; i < option.length; i++){
        if((option[i].innerHTML == select[1].children[l].innerHTML || option[i].innerHTML == select[2].children[l2].innerHTML) && option[i].innerHTML != 'Нет'){
            option[i].hidden = 'true';
        }
    }
    
}
//Клик на сортировку
tag_but_s[0].onclick = function(){
    let tag_select = document.getElementsByTagName('select');
    let l1 = tag_select[0].value;
    let l2 = tag_select[1].value;
    let l3 = tag_select[2].value;
    if (tag_select[0].children[l1].innerHTML == 'Нет'){
        alert('Заполните первое поле');
    } else if (tag_select[0].children[l1].innerHTML != 'Нет'&& tag_select[1].children[l2].innerHTML == 'Нет' && tag_select[2].children[l3].innerHTML != 'Нет'){
        alert('Заполните второе поле');
    } else {
        res.sort(compare = function(a, b){
        if(tag_select[0].children[l1].innerHTML != 'Сложность' && tag_select[0].children[l1].innerHTML != 'Время приготовления' && a[tag_select[0].children[l1].innerHTML] > b[tag_select[0].children[l1].innerHTML]) return 1;
        else if(tag_select[0].children[l1].innerHTML != 'Сложность' && tag_select[0].children[l1].innerHTML != 'Время приготовления' && a[tag_select[0].children[l1].innerHTML] < b[tag_select[0].children[l1].innerHTML]) return -1;
        else if((tag_select[0].children[l1].innerHTML == 'Сложность' || tag_select[0].children[l1].innerHTML == 'Время приготовления') && +(a[tag_select[0].children[l1].innerHTML]) > +(b[tag_select[0].children[l1].innerHTML])) return 1;
        else if((tag_select[0].children[l1].innerHTML == 'Сложность' || tag_select[0].children[l1].innerHTML == 'Время приготовления') && +(a[tag_select[0].children[l1].innerHTML]) < +(b[tag_select[0].children[l1].innerHTML])) return -1;
        else if(tag_select[1].children[l2].innerHTML != 'Сложность' && tag_select[1].children[l2].innerHTML != 'Время приготовления' && tag_select[1].children[l2].innerHTML != "Нет" && a[tag_select[1].children[l2].innerHTML] > b[tag_select[1].children[l2].innerHTML]) return 1;
        else if((tag_select[1].children[l2].innerHTML != 'Сложность' && tag_select[1].children[l2].innerHTML != 'Время приготовления') && tag_select[1].children[l2].innerHTML != "Нет" && a[tag_select[1].children[l2].innerHTML] < b[tag_select[1].children[l2].innerHTML]) return -1;
        else if((tag_select[1].children[l2].innerHTML == 'Сложность' || tag_select[1].children[l2].innerHTML == 'Время приготовления')&& tag_select[1].children[l2].innerHTML != "Нет" && +(a[tag_select[1].children[l2].innerHTML]) > +(b[tag_select[1].children[l2].innerHTML])) return 1;
        else if((tag_select[1].children[l2].innerHTML == 'Сложность' || tag_select[1].children[l2].innerHTML == 'Время приготовления') && tag_select[1].children[l2].innerHTML != "Нет" && +(a[tag_select[1].children[l2].innerHTML]) < +(b[tag_select[1].children[l2].innerHTML])) return -1;
        else if(tag_select[2].children[l3].innerHTML != 'Сложность' && tag_select[2].children[l3].innerHTML != 'Время приготовления' && tag_select[2].children[l3].innerHTML != "Нет" && a[tag_select[2].children[l3].innerHTML] > b[tag_select[2].children[l3].innerHTML]) return 1;
        else if(tag_select[2].children[l3].innerHTML != 'Сложность' && tag_select[2].children[l3].innerHTML != 'Время приготовления' && tag_select[2].children[l3].innerHTML != "Нет" && a[tag_select[2].children[l3].innerHTML] < b[tag_select[2].children[l3].innerHTML]) return -1;
        else if((tag_select[2].children[l3].innerHTML == 'Сложность' || tag_select[2].children[l3].innerHTML == 'Время приготовления') && tag_select[2].children[l3].innerHTML != "Нет" && +(a[tag_select[2].children[l3].innerHTML]) > +(b[tag_select[2].children[l3].innerHTML])) return 1;
        else return -1;
        return 0;
    } );
    
    
    let tmp = Object.keys(res[0]);
    for(let i = 1; i < table.children.length; i++){
        for (let j = 0; j < 4; j++)
        {
            table.children[i].children[j].innerHTML = res[i-1][tmp[j]];
        }
    }
    //Вывод элкментов массива(таблицы)
    /*for(let i = 0; i < res.length; i++){
        for(let key in res[i]) {
            document.write(res[i][key]);
        }
    }*/
    }
    
}

tag_but_s[1].onclick = function(){
    let tag_input = document.getElementsByTagName('input');
    let type = tag_input[0].value;
    let time_1 = +tag_input[1].value;
    let time_2 = +tag_input[2].value;
    let level_1 = +tag_input[3].value;
    let level_2 = +tag_input[4].value;
    if( time_1 <= -1 || time_1 % parseInt(time_1) != 0 || time_1 >= 301){
        alert("Ошибочное число 1");
    } else if ( time_2 <= 0 || time_2 % parseInt(time_2) != 0 || time_2 >= 301 || time_1 > time_2){
        alert("Ошибочное число 2");
    } else if ( level_1 <= -1 || level_1 % parseInt(level_1) != 0 || level_1 >= 11 ){
        alert("Ошибочное число 3");
    } else if ( level_2 <= 0 || level_2 % parseInt(level_2) != 0 || level_2 >= 11 || level_1 > level_2){
        alert("Ошибочное число 4");
    }else {
        //alert ('Все хорошо');
        type = type.toLowerCase();
        type = type.substring(0, 1).toUpperCase() + type.substring(1, type.length);

        let F_arr = [];

        //Релизовать поиск по массиву 
        for(let i = 0; i < res.length; i++)
        {
            if(res[i]['Тип'] == type){
                if(res[i]['Время приготовления'] >= time_1 && res[i]['Время приготовления'] <= time_2){
                    if(res[i]['Сложность'] >= level_1 && res[i]['Сложность'] <= level_2){
                        F_arr.push(res[i]);
                    }
                }
            }
        }
        //Красивый вывод 
        let tmp = Object.keys(res[0]);
        for(let i = 1; i < table.children.length; i++){
            for (let j = 0; j < 4; j++)
            {
                if( i - 1 < F_arr.length)
                {
                    table.children[i].children[j].innerHTML = F_arr[i-1][tmp[j]];
                } else table.children[i].children[j].innerHTML = ' ';
                
            }
        }
       /* for(let i = 0; i < F_arr.length; i++){
            for(let key in F_arr[i]) {
                document.write(F_arr[i][key]);
            }
        }*/
    }
    
}

////////////////////////////////////////////////////////////////////////////////////////--ГРАФИК--//////////////////////////////////////////////////////////////////////////

function getArrGraph(arrObject, fieldX, fieldY) {//Сюда почему то даже не заходит 
    // сформируем список меток по оси OX (различные элементы поля fieldX)
    // группируем по полю fieldX
    let groupObj = d3.group(arrObject, d=>d[fieldX]);//take an element from array d
    arrGroup = []; // массив объектов для построения графика
    for(let entry of groupObj) {
    //выделяем минимальное и максимальное значения поля fieldY in only two elements as min and max
    //для очередной метки по оси ОХ
    let minMax = d3.extent(entry[1].map(d => d[fieldY]));
    let elementGroup = {};

    elementGroup.labelX = entry[0];
    elementGroup.valueMin = minMax[0];
    elementGroup.valueMax = minMax[1];

    arrGroup.push(elementGroup);
}
return arrGroup;
}



function drawGraph(data) {
    if (!(data.res_max.checked)&&!(data.res_min.checked)){ 
        alert('Значения по оси OY отсутствуют!');	
    } else {
        res.sort(compare = function(a, b){
            if (a['Сложность'] > b['Сложность']) return 1
            else return -1;
            return 0;
        });

        let arrGraph = getArrGraph(res, data.ox.value, "Время приготовления")
        let marginX = 65;
        let marginY = 85;
        let height = 500;
        let width = 700;
        
        let svg = d3.select("svg")
            .attr("height", height)
            .attr("width", width);
        // очищаем svg перед построением
        svg.selectAll("*").remove();
        
        // определяем минимальное и максимальное значение по оси OY
        let min = d3.min(arrGraph.map(d => d.valueMin)) * 0.95;
        let max = d3.max(arrGraph.map(d => d.valueMax)) * 1.05;
        let xAxisLen = width - 2 * marginX;
        let yAxisLen = height - 2 * marginY;
        
        // определяем шкалы для осей//сопоставляем оси с текстовыми значениями
        let scaleX = d3.scaleBand()
            .domain(arrGraph.map(function(d) {
            return d.labelX;
            })
            )
            .range([0, xAxisLen],1);
            let scaleY = d3.scaleLinear()
            .domain([min, max])
            .range([yAxisLen, 0]);
        // создаем оси
        let axisX = d3.axisBottom(scaleX); // горизонтальная
        let axisY = d3.axisLeft(scaleY);// вертикальная

        // отображаем ось OX, устанавливаем подписи оси ОX и угол их наклона
        svg.append("g")
            .attr("transform", `translate(${marginX}, ${height - marginY})`)
            .call(axisX)
            .attr("class", "x-axis")
            .selectAll("text")
            .style("text-anchor", "end")
            .style("font-size", "15px")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function (d) {
            return "rotate(-45)";
        });
        // отображаем ось OY
        svg.append("g")
            .attr("transform", `translate(${marginX}, ${marginY})`)
            .attr("class", "y-axis")
            .call(axisY)
            .selectAll("text")
            .style("text-anchor", "end")
            .style("font-size", "11px");
        // создаем набор вертикальных линий для сетки
        d3.selectAll("g.x-axis g.tick")
            .append("line") // добавляем линию
            .classed("grid-line", true) // добавляем класс
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", - (yAxisLen));
        // создаем горизонтальные линии сетки
        d3.selectAll("g.y-axis g.tick")
            .append("line")
            .classed("grid-line", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", xAxisLen)
            .attr("y2", 0);
        
            //по умолчанию выбраны обе высоты и точечная диаграмма
        if ((data.res_max.checked)&&(data.res_min.checked)){
            svg.selectAll(".dot")//для максимальной 
                .data(arrGraph)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("cx", function(d) { return scaleX(d.labelX); })
                .attr("cy", function(d) { return scaleY(d.valueMax); })
                .attr("transform", `translate(${marginX + scaleX.bandwidth()/2}, ${marginY})`)
                .style("fill", "#a21212")

            svg.selectAll(".dot")//для минимальной 
                .data(arrGraph)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("cx", function(d) { return scaleX(d.labelX); })
                .attr("cy", function(d) { return scaleY(d.valueMin); })
                .attr("transform", `translate(${marginX + scaleX.bandwidth()/2}, ${marginY})`)
                .style("fill", "#646161")
                
        } else if ((data.res_max.checked)&&!(data.res_min.checked)){
            svg.selectAll(".dot")//для максимальной 
                .data(arrGraph)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("cx", function(d) { return scaleX(d.labelX); })
                .attr("cy", function(d) { return scaleY(d.valueMax); })
                .attr("transform", `translate(${marginX + scaleX.bandwidth()/2}, ${marginY})`)
                .style("fill", "#a21212")
                
        } else if (!(data.res_max.checked)&&(data.res_min.checked)){
            svg.selectAll(".dot")//для минимальной 
                .data(arrGraph)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("cx", function(d) { return scaleX(d.labelX); })
                .attr("cy", function(d) { return scaleY(d.valueMin); })
                .attr("transform", `translate(${marginX + scaleX.bandwidth()/2}, ${marginY})`)
                .style("fill", "#646161")
                
        }
    } 
}