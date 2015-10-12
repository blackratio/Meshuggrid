controllers.controller('homeCtrl', ['$scope', '$rootScope', '$http', '$timeout', 'userServices',
function ($scope, $rootScope, $http, $timeout, userServices) {



   userServices.verifUser()
   .then(function(){

   });

   userServices.getUsers()
   .then(function(){
      $scope.user = data;
   });

   var data = [150,136,135,101,80,68,50,29,19,41];
   var cats = [
      'Stats',
      'Design',
      'Business',
      'Cartography',
      'InfosScience',
      'Web Analytics',
      'Programming',
      'Engineering',
      'Mathematics',
      'other'
   ];

   var w = 350,
       h = 350,
       r = w/2;

   var depthColors = d3.scale.linear().domain([0,172]).range(['#fff', '#f62459']);

   var vis = d3.select('#donut')
      .append('svg').attr({width:w, height:h})
      .append('g').attr('transform', 'translate('+w/2+', '+h/2+')');

   var pie = d3.layout.pie()
      .sort(null)
      .value(function(d) {return d;});

   var arc = d3.svg.arc()
      .outerRadius(r)
      .innerRadius(r - 100);

   var g = vis.selectAll('.arc')
      .data(pie(data))
         .enter()
         .append('g')
         .attr('class', 'arc');


   g.append('path')
      .attr('d', arc)
      .style({fill: function(d) {return depthColors(d.data);}, stroke: 'white'})
      .append('title').text(function(d) {return d.data + ' votes';});

   g.append('text')
      .attr('transform', function(d) {return 'translate('+arc.centroid(d) +') rotate ('+((90*(d.startAngle+d.endAngle)/Math.PI-90))+')';})
      .attr('dy', '.35em')
      .style('text-anchor', 'middle')
      .text(function(d,i) {return cats[i];});


   vis.append('text')
      .attr("text-anchor", "middle")
      .text('May 2009')
      .style('color', '#666');

}]);
