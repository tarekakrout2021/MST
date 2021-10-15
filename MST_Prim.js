var arr= []; // array of all points  

function setup() {
  createCanvas(1000, 1000);
}
function mousePressed(){
  var v = createVector(mouseX,mouseY);
  arr.push(v);
}
function draw() {
  background(70);

  var u = [], v=[];  // u = reached v= unreached 
  for(var i =0 ; i<arr.length; i++)
    v.push(arr[i]);
  var s = v[0]; // s = start node 
  u.push(s);
  v.splice (0,1);// splice delete from index how many objects 
  while(v.length!=0){
    var m = 100000; 
    var a,b,k; //a to pick in reached and b to pick  in unreached -- k index of unreached b  
    for(var i =0;i<u.length; i++){
      for( var j=0 ; j<v.length; j++){
        var t = dist(u[i].x,u[i].y,v[j].x,v[j].y);
        if (t<m){
          m=t;
          a=u[i];
          b=v[j];
          k=j;
        }
      }
    }
    v.splice(k,1);
    u.push(b);
    stroke(255);
    fill(255);
    line(a.x,a.y,b.x,b.y);
  }



  for(var i =0 ; i<arr.length;i++){
    stroke(255);
    ellipse(arr[i].x,arr[i].y,15,15);
    fill(255);     
  }
  
}