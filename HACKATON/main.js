function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
 
    var vertices = [   
       
     //   N
          1,3,0.5,      1,0, 0, 0, 0, -1,
          1,1,0.5,      0,1, 0, 0, 0, -1,
          1.5, 1,0.5,   0,0, 1, 0, 0, -1,
          1.5, 3,0.5,   0,0, 0, 0, 0, -1,
      
          1,3,0,        1,0, 0, 0, 0, -1,
          1,1 ,0,       0,1, 0, 0, 0, -1,
          1.5, 1,0,     1,0, 0, 0, 0, -1, 
          1.5, 3,0,     0,0, 0, 0, 0, -1,
      
         2.5,3,0.5,     1,0, 0, 0, 0, -1,
         2.5,1 ,0.5,    0,1, 0, 0, 0, -1,
         3,1 ,0.5,      0,0, 1, 0, 0, -1,
         3,3,0.5,       0,0, 0, 0, 0, -1,
      
         2.5,3,0,       1,0, 0, 0, 0, -1,
         2.5,1 ,0,      0,1, 0, 0, 0, -1,
         3,1 ,0,        0,0, 1, 0, 0, -1,
         3,3,0,         0,0, 0, 0, 0, -1,
       
       
        //A
        1,-1,0,     1,0, 0,    0, 0, 1,
        1,-3,0,     0,1, 0,    0, 0, 1,
        1, -3,0,    0,0, 1,    0, 0, 1,
        1, -1,0,    0,0, 0,    0, 0, 1,
       
        1,-1,-1,    1,0, 0,    0, 0, 1,
        1,-1,1,     0,1, 0,    0, 0, 1,
        1, -2,0,    1,0, 0,    0, 0, 1,
        1, -1.5,0,  0,0, 0,    0, 0, 1,
       
        2.5,-1,0.5, 1,0, 0, 0, 0, -1,
        2.5,-3,0.5, 0,1, 0, 0, 0, -1,
        3,-3,0.5,   0,0, 1, 0, 0, -1,
        3,-1,0.5,   0,0, 0, 0, 0, -1,
       
        2.5,-1,0,   1,0, 0, 0, 0, -1,
        2.5,-3,0,   0,1, 0, 0, 0, -1,
        3,-3,0,     0,0, 1, 0, 0, -1,
        3,-1,0,     0,0, 0, 0, 0, -1,

        1.8,   -2,   0,    1,0, 0,0, 0, -1,
        1.8,   -1.8, 0,    0,1, 0,0, 0, -1,
        3.2,   -1.8, 0,    0,0, 1,0, 0, -1,
        3.2,   -2,   0,    0,0, 0,0, 0, -1,

 
     //    5
 
         -2.5,  -4.5, -2,       1,0, 0,    0, 0, -1,       
         -2.5,  -4,   -2,       0,1, 0,    0, 0, -1,  
         -3.5, -4,   -2,        0,0, 1,    0, 0, -1,   
         -3.5, -4.5, -2,        0,0, 0,    0, 0, -1,   
         
         -2.5,  -4.5, -2.5,     1,0, 0,    0, 0, 1,    
         -2.5,  -4,   -2.5,     0,1, 0,    0, 0, 1,   
         -3.5, -4,   -2.5,      0,0, 1,    0, 0, 1,    
         -3.5, -4.5, -2.5,      0,0, 0,    0, 0, 1,    
         
         -2.5, -4,    -2.5,     1,0, 0,    -1, 0, 0,   
         -2.5, -4.5,  -2.5,     0,1, 0,    -1, 0, 0,   
         -2.5, -4.5,  -2,       0,0, 1,    -1, 0, 0,   
         -2.5, -4,    -2,       0,0, 0,    -1, 0, 0,   
          
          -3.5, -4.5,  -2,      1,0, 0,    1, 0, 0,    
          -3.5, -4,    -2,      0,1, 0,    1, 0, 0,    
          -3.5, -4,   -2.5,     0,0, 1,    1, 0, 0,    
          -3.5, -4.5, -2.5,     0,0, 0,    1, 0, 0,    
         
          -3.5,  -4, -2.5,     1,0, 0,   0, -1, 0,   
          -3.5,  -4,   -2,     0,1, 0,   0, -1, 0, 
          -2.5, -4,  -2,       0,0, 1,   0, -1, 0,   
          -2.5, -4, -2.5,      0,0, 0,   0, -1, 0,   
         
         -2.5,  -4.5, -2.5,    1,0, 0,    0, 1, 0,  
         -2.5,  -4.5,   -2,    0,1, 0,    0, 1, 0,  
         -3.5, -4.5,   -2,     0,0, 1,    0, 1, 0,  
         -3.5, -4.5, -2.5,     0,0, 0,    0, 1, 0,   
     
         -2,   -3.5, -2,       1,0, 0,    0, 0, -1,       
         -2,   -4.5, -2,       0,1, 0,    0, 0, -1,   
         -2.5, -4.5, -2,       0,0, 1,    0, 0, -1,   
         -2.5, -3.5, -2,       0,0, 0,    0, 0, -1,   
         
         -2,   -3.5,  -2.5,    1,0, 0,    0, 0, 1,    
         -2,   -4.5,  -2.5,    0,1, 0,    0, 0, 1,    
         -2.5, -4.5,  -2.5,    0,0, 1,    0, 0, 1,   
         -2.5, -3.5 , -2.5,    0,0, 0,    0, 0, 1,    
     
         -2,   -3,   -2.5,     1,0, 0,    -1, 0, 0,   
         -2,  -4.5, -2.5,      0,1, 0,    -1, 0, 0,   
         -2,  -4.5,  -2,       0,0, 1,    -1, 0, 0,  
         -2,   -3,    -2,      0,0, 0,    -1, 0, 0,  
     
         -2.5, -3.5, -2.5,     1,0, 0,    1, 0, 0,   
         -2.5, -3.5,   -2,     0,1, 0,    1, 0, 0,   
         -2.5, -4.5,   -2,     0,0, 1,    1, 0, 0,   
         -2.5, -4.5, -2.5,     0,0, 0,    1, 0, 0,   
     
         -2,     -3,    -2,    1,0, 0,    0, -1, 0,   
         -2,    -3.5,  -2,     0,1, 0,    0, -1, 0,   
         -3.5, -3.5,  -2,      0,0, 1,    0, -1, 0,   
         -3.5,  -3,    -2,     0,0, 0,    0, -1, 0,   
     
         -2,   -4.5, -2.5,     1,0, 0,    0, 1, 0,    
         -2,    -4.5,  -2,     0,1, 0,    0, 1, 0,   
         -3.5, -4.5,  -2,      0,0, 1,    0, 1, 0,    
         -3.5, -4.5, -2.5,     0,0, 0,    0, 1, 0,     
         
         -2,       -3,  -2.5,  1,0, 0,    0, 0, 1,    
         -2,    -3.5,  -2.5,   0,1, 0,    0, 0, 1,    
         -3.5, -3.5,  -2.5,    0,0, 1,    0, 0, 1,   
         -3.5,    -3,  -2.5,   0,0, 0,    0, 0, 1,    
     
         -3.5,  -3.5,   -2.5,  1,0, 0,    -1, 0, 0,   
         -3.5,  -2,       -2,  0,1, 0,    -1, 0, 0,  
         -3.5,  -2,     -2.5,  0,0, 1,    -1, 0, 0,   
         -3.5,  -3.5,     -2,  0,0, 0,    -1, 0, 0,  
     
         -2.5, -3.5, -2.5,     1,0, 0,     1, 0, 0,    
         -2.5, -3.5,   -2,     0,1, 0,     1, 0, 0,    
         -3.5, -3.5,   -2,     0,0, 1,     1, 0, 0,    
         -3.5, -3.5, -2.5,     0,0, 0,     1, 0, 0,    
         
         -3,     -2.5,  -2,    1,0, 0,    0, -1, 0,   
         -3,    -3.5,  -2,     0,1, 0,    0, -1, 0,   
         -3.5, -3.5,  -2,      0,0, 1,    0, -1, 0,   
         -3.5,  -2.5,  -2,     0,0, 0,    0, -1, 0,   
     
         -3.5,  -2.5,  -2.5,   1,0, 0,    0, 1, 0, 
         -3.5,    -3,  -2.5,   0,1, 0,    0, 1, 0, 
         -3,       -3, -2.5,   0,0, 1,    0, 1, 0, 
         -3,     -2.5, -2.5,   0,0, 0,    0, 1, 0 , 
     
          -3,  -2.5, -2.5,     1,0, 0,    -1, 0, 0,   
          -3,  -3,   -2.5,     0,1, 0,    -1, 0, 0,   
          -3,  -3,     -2,     0,0, 1,    -1, 0, 0,  
          -3,  -2.5,   -2,     0,0, 0,    -1, 0, 0,  
     
          -2,   -3, -2.5,      1,0, 0,   1, 0, 0,    
          -2,   -3,   -2,      0,1, 0,    1, 0, 0,    
          -3,   -3,   -2,      0,0, 1,    1, 0, 0,    
          -3,   -3, -2.5,      0,0, 0,    1, 0, 0,    
         
          -3.5,  -2,    -2,    1,0, 0,    0, -1, 0,       
          -3.5,  -2.5,  -2,    0,1, 0,    0, -1, 0,       
            -2, -2.5,  -2,     0,0, 1,    0, -1, 0,       
             -2,  -2,   -2,    0,0, 0,    0, -1, 0,       
          
          -2,    -2,    -2.5,  1,0, 0,    0, 1, 0,    
          -2,    -2.5,  -2.5,  0,1, 0,    0, 1, 0,    
          -3.5,  -2.5,  -2.5,  0,0, 1,    0, 1, 0,    
          -3.5,  -2,    -2.5,  0,0, 0,    0, 1, 0,     
            
          -2,      -3,  -2.5,  1,0, 0,    0, 0, 1,    
          -2,    -3.5,  -2.5,  0,1, 0,    0, 0, 1,    
          -3.5,  -3.5,  -2.5,  0,0, 1,    0, 0, 1,   
          -3.5,    -3,  -2.5,  0,0, 0,    0, 0, 1,   
          
          -2,  -2,  -2.5,      1,0, 0,    -1, 0, 0,   
          -2,  -2,  -2.5,      0,1, 0,    -1, 0, 0, 
          -2,  -2,    -2,      0,0, 1,    -1, 0, 0,   
          -2,  -2,    -2,      0,0, 0,    -1, 0, 0,   
          
          -3.5, -2.5, -2.5,    1,0, 0,     1, 0, 0, 
          -3.5, -2.5,   -2,    0,1, 0,     1, 0, 0, 
          -2,   -2.5,   -2,    0,0, 1,     1, 0, 0, 
          -2,   -2.5, -2.5,    0,0, 0,     1, 0, 0, 
          
         -3.5,  -2,  -2.5,     1,0, 0,    0, -1, 0, 
         -3.5,  -2,  -2,       0,1, 0,   0, -1, 0,   
         -2,    -2,  -2,       0,0, 1,    0, -1, 0,   
         -2,    -2,  -2.5,     0,0, 0,    0, -1, 0,   
          
         -2,  -2,   -2.5,      1,0, 0,    0, 1, 0,   
         -2,  -2.5, -2.5,      0,1, 0,    0, 1, 0,   
         -2,  -2.5,  -2,       0,0, 1,    0, 1, 0,    
         -2,  -2,  -2,         0,0, 0,    0, 1, 0, 
 
         //3
                  
         -2.5, -1, 1,         1,0, 0,     0, 0, -1, //
         -2.5, 1.5, 1,        0,1, 0,     0, 0, -1,
         -2.8, 1.5, 1,        0,0, 1,     0, 0, -1, 
         -2.8, -1, 1,         0,0, 0,     0, 0, -1, 
                 
         -2.5, -1, 1,         1,0, 0,     0, 0, -1, 
         -2.5, -0.5, 1,       0,1, 0,     0, 0, -1, 
         -1.5, -0.5, 1,       0,0, 1,     0, 0, -1,
         -1.5, -1, 1,         0,0, 0,     0, 0, -1, 
        
        -2.5, 1.5, 1,         1,0, 0,     0, 0, -1,
        -2.5, 1, 1,           0,1, 0,     0, 0, -1,
        -1.5, 1, 1,           0,0, 1,     0, 0, -1, 
        -1.5, 1.5, 1,         0,0, 0,     0, 0, -1, 
        
        -2.5, 0, 1,           1,0, 0,     0, 0, -1, //11
        -2.5, 0.5, 1,         0,1, 0,     0, 0, -1, 
        -1.5, 0.5, 1,         0,0, 1,     0, 0, -1, 
        -1.5, 0, 1,           0,0, 0,     0, 0, -1, 
        
         -1.5, 1.5, 0.5,      1,0, 0,    0, -1, 0, 
         -1.5, 1, 0.5,        0,1, 0,    0, -1, 0, 
         -2.8, 1, 0.5,        0,0, 1,    0, -1, 0, 
         -2.8, 1.5, 0.5,      0,0, 0,    0, -1, 0, 
            
         -1.5, 1.5, 0.5,      1,0, 0,    0, -1, 0, 
         -1.5, 1.5, 1,        0,1, 0,    0, -1, 0, 
         -2.8, 1.5, 1,        0,0, 1,    0, -1, 0, 
         -2.8, 1.5, 0.5,      0,0, 0,    0, -1, 0,  
             
         -2.8, 1, 0.5,        1,0, 0,    0, -1, 0,    
         -2.8, 1, 1,          0,1, 0,    0, -1, 0, 
         -1.5, 1, 1,          0,0, 1,    0, -1, 0, 
         -1.5, 1, 0.5,        0,0, 0,    0, -1, 0,
        
        -2.8, 0.5, 0.5,       1,0, 0,    0, -1, 0, //-1
        -2.8, 0.5, 1,         0,1, 0,    0, -1, 0,
        -1.5, 0.5, 1,         0,0, 1,    0, -1, 0,
        -1.5, 0.5, 0.5,       0,0, 0,    0, -1, 0,
    
         -1.5, 0, 0.5,        1,0, 0,    0, -1, 0, //0
         -1.5, 0, 1,          0,1, 0,    0, -1, 0,
         -2.8, 0, 1,          0,0, 1,    0, -1, 0,
         -2.8, 0, 0.5,        0,0, 0,    0, -1, 0, 
    
        -2.8, 0, 0.5,         1,0, 0,    0, -1, 0, //1
        -2.8, 0.5, 0.5,        0,1, 0,    0, -1, 0,
        -1.5, 0.5, 0.5,        0,0, 1,    0, -1, 0,
        -1.5, 0, 0.5,          0,0, 0,    0, -1, 0, 

        -2.8, -1, 0.5,        1,0, 0,    0, -1, 0,
        -2.8, -1, 1,          0,1, 0,    0, -1, 0,
        -1.5, -1, 1,          0,0, 1,    0, -1, 0,
        -1.5, -1, 0.5,        0,0, 0,    0, -1, 0,

         -2.8, -0.5, 0.5,     1,0, 0,    0, -1, 0, //2
         -2.8, -0.5, 1,       0,1, 0,    0, -1, 0,
         -1.5, -0.5, 1,       0,0, 1,    0, -1, 0,
         -1.5, -0.5, 0.5,     0,0, 0,    0, -1, 0,

       -2.8, -1, 0.5,         0, 1, 0,    0, -1, 0,
       -2.8, -0.5, 0.5,       0, 1, 0,    0, -1, 0,
       -1.5, -0.5, 0.5,       0, 1, 0,    0, -1, 0,
       -1.5, -1, 0.5,         0, 1, 0,    0, -1, 0,
 
    
         -1.5, 1.5, 1, 1,     1, 1, 1,    0, 0,
         -1.5, 1, 1, 1,       1, 1, 1,    0, 0,
         -1.5, 1, 0.5, 1,     1, 1, 1,    0, 0,
         -1.5, 1.5, 0.5, 1,   1, 1, 1,    0, 0,
    
         -1.5, 0.5, 0.5, 1,   1, 1, 1,    0, 0, //3
         -1.5, 0, 0.5, 1,     1, 1, 1,    0, 0,
         -1.5, 0, 1, 1,       1, 1, 1,    0, 0,
         -1.5, 0.5, 1, 1,     1, 1, 1,    0, 0,
 
        
         -1.5, -0.5, 0.5, 1,  1, 0, 1,    0, 0,
         -1.5, -0.5, 1, 1,    1, 0, 1,    0, 0,
         -1.5, -1, 1, 1,      1, 0, 1,    0, 0,
         -1.5, -1, 0.5, 1,    1, 0, 1,    0, 0,

         -2.8, -1, 0.5, 1,    0.5, 0,     -1, 0, 0,
         -2.8, 1.5, 0.5, 1,   0.5, 0,     -1, 0, 0,//
         -2.8, 1.5, 1, 1,     0.5, 0,     -1, 0, 0,
         -2.8, -1, 1, 1,      0.5, 0,     -1, 0, 0,
        
         -2.8, -1, 0.5, 0,    1, 0, 0,    -1, 0,
         -2.8, 1.5, 0.5, 0,   1, 0, 0,    -1, 0,
         -2.5, 1.5, 0.5, 0,   1, 0, 0,    -1, 0,
         -2.5, -1, 0.5, 0,    1, 0, 0,    -1, 0,

    
         -2.5, -1, 0.5, 1,    0.5, 0,      0, 1, 0,
         -2.5, 1, 0.5, 1,     0.5, 0,      0, 1, 0,
         -2.5, 1, 1, 1,       0.5, 0,      0, 1, 0,
         -2.5, -1, 1, 1,      0.5, 0,      0, 1, 0,

         //cube
         2.5, -1, -5,     1, 1, 1,    0, 0, -1,   // Index:  80    
         4.5, -1, -5,     1, 1, 1,    0, 0, -1,   // Index:  81
         4.5,  1, -5,     1, 1, 1,    0, 0, -1,   // Index:  82
         2.5,  1, -5,     1, 1, 1,    0, 0, -1,   // Index:  83
         // Face B       // Yellow
         2.5, -1,  -3,     1,1, 1,    0, 0, 1,    // Index:  84
         4.5, -1,  -3,     1, 1, 1,    0, 0, 1,    // Index:  85
         4.5,  1,  -3,     1, 1, 1,    0, 0, 1,    // Index:  86
         2.5,  1,  -3,     1, 1, 1,    0, 0, 1,    // Index:  87
         // Face C       // Green
         2.5, -1, -5,     1,1,1,1   -1, 0, 0,   // Index:  88
         2.5,  1, -5,     1,1,1,1   -1, 0, 0,   // Index:  89
         2.5,  1,  -3,    1,1,1,1    -1, 0, 0,   // Index: 90
         2.5, -1,  -3,    1,1,1,1    -1, 0, 0,   // Index: 91
         // Face D       // Blue
         4.5, -1, -5,     1, 0, 0,    1, 0, 0,    // Index: 92
         4.5,  1, -5,     0, 1, 0,    1, 0, 0,    // Index: 93
         4.5,  1,  -3,     0, 0, 1,    1, 0, 0,    // Index: 94
         4.5, -1,  -3,     0, 0, 0,    1, 0, 0,    // Index: 95
         // Face E       // Orange
         2.5, -1, -5,     1, 0, 0,  0, -1, 0,   // Index: 96
         2.5, -1,  -3,     1, 0, 0,  0, -1, 0,   // Index: 97
         4.5, -1,  -3,    1, 0, 0,  0, -1, 0,   // Index: 98
         4.5, -1, -5,     1, 0, 0,  0, -1, 0,   // Index: 99
         // Face F       // White
         2.5,  1, -5,     1, 0, 0,    0, 1, 0,    // Index: 100
         2.5,  1,  -3,    1, 0, 0,    0, 1, 0,    // Index: 101
         4.5,  1,  -3,    1, 0, 0,    0, 1, 0,    // Index: 102
         4.5,  1, -5,     1, 0, 0,    0, 1, 0     // Index: 103
 
    ];
    var colors = [
        1,0,0, 0,1,0, 0,0,1, 0,0,0, 1,0,0, 0,1,0, 0,0,1, 0,0,0, 1,0,0, 0,1,0, 0,0,1, 0,0,0, 1,0,0, 0,1,0, 0,0,1, 0,0,0, 
     ];
    
    var indices = [
       
       //N
       0,  1,  2,  0, 2, 3, 
       4,  5,  6,  4, 6, 7, 
       8,  9, 10,  8,10,11, 
       12,13, 14, 12,14,15, 
       3,  9, 10,  0, 9, 3, 
       4, 13,  7,  7,13,14,   
       4,  0,  3,  4, 3, 7, 
       12, 8, 11, 12,11,15, 
       5,  1,  2,  5, 6, 2, 
       13, 9, 10, 13,10,14, 
       0,  1,  5,  0, 4, 5, 
       10,11, 14, 11,14,15, 
       3, 10, 14,  3, 7,14,
 
       // A
       24, 25, 26, 
       24, 26, 27,    
       28, 29, 30, 
       28, 30, 31,
       19, 25, 26, 
       16, 25, 19,
       20, 29, 23, 
       23, 29, 30,  
       20, 16, 19, 
       20, 19, 23,  
       
       28, 24, 27, 
       28, 27, 31, 
       29, 25, 26,
       29, 26, 30, 
       26, 27, 30, 
       27, 30, 31,
       19, 26, 30, 
       19, 23, 30, 
 
     // 5
       32, 33, 34,  32, 34, 35,
       36,	37,	38,	 36, 38, 39,   
       40,	41,	42,	 40, 42, 43,
       44,	45,	46,	 44, 46, 47,
       48,	49,	50,	 48, 50, 51,
       52,	53,	54,	 52, 54, 55,
       56,	57,	58,	 56, 58, 59,
       60,	61,	62,	 60, 62, 63,
       64,	65,	66,	 64, 66, 67,
       68,	69,	70,	 68, 70, 71,
       72,	73,	74,	 72, 74, 75,
       76,	77,	78,	 76, 78, 79,
       80,	81,	82,	 80, 82, 83,
       84,	85,	86,	 84, 86, 87,
       88,	89,	90,	 88, 90, 91,
       92,	93,	94,	 92, 94, 95,
       96,	97,	98,	 96, 98, 99,
       100, 101, 102, 100,	102, 103,
       104, 105, 106, 104,	106, 107,
       108, 109, 110, 108,	110, 111,
       112, 113, 114, 112,	114, 115,
       116, 117, 118, 116,	118, 119,
       120,121,122, 120,122,123,
       124,125,126, 124,126,127,
       128,129,130, 128,130,131,
       132,133,134, 132,134,135,
       136,137,138, 136,138,139,
       140,141,142, 140,142,143,
       144,145,146, 144,146,147,
       148,149,150, 148,150,151,
 
       //   3
       152,153,154,  152,154,155,
       156,157,158,  156,158,159,
       160,161,162,  160,162,163,
       164,165,166,  164,166,167,
       168,169,170,  168,170,171,
       172,173,174,  172,174,175,
       176,177,178,  176,178,179,
       180,181,182,  180,182,183,
       184,185,186,  184,186,187,
       188,189,190,  188,190,191,
       192,193,194,  192,194,195,
       196,197,198,  196,198,199,
       200,201,202,  200,202,203,
       204,205,206,  204,206,207,
       208,209,210,  208,210,211,
       212,213,214,  212,214,215,
       216,217,218,  216,218,219,
       220,221,222,  220,222,223,
       224,225,226,  224,226,227,
       228,229,230,  228,230,231,
       232,233,234,  232,234,235,
       236,237,238,  236,238,239,
       240,241,242,  240,242,243,
       244,245,246,  244,246,247,
       248,249,250,  248,250,251,

       //cube
        252,253,254, 252,254,255,
        256,257,258, 256,258,259,
        300,301,302, 300,302,303,
        304,305,306, 304,306,307,
        308,309,310, 308,310,311,   
        
    ];
       
    // Create a linked-list for storing the vertices data in the GPU realm
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
 
    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec3 aPosition;
        attribute vec3 aColor;
        attribute vec3 aNormal;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vPosition;
        varying vec3 vColor;
        varying vec3 vNormal;
        void main () {
            vec4 position = vec4(aPosition, 1.0);
            gl_Position = uProjection * uView * uModel * position;
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
            vColor = aColor;
            vNormal = aNormal;
            vPosition = (uModel * position).xyz;
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);
 
    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        uniform vec3 uLightConstant;      // It represents the light color
        uniform float uAmbientIntensity;  // It represents the light intensity
        varying vec3 vPosition;
        varying vec3 vNormal;
        uniform vec3 uLightPosition;
        uniform vec3 uViewerPosition;
        uniform mat3 uNormalModel;
        void main() {
            vec3 ambient = uLightConstant * uAmbientIntensity;
            vec3 lightDirection = uLightPosition - vPosition;
            vec3 normalizedLight = normalize(lightDirection);
            vec3 normalizedNormal = normalize(uNormalModel * vNormal);
            float cosTheta = dot(normalizedNormal, normalizedLight);
            vec3 diffuse = vec3(0.0, 0.0, 0.0);
            if (cosTheta > 0.0) {
                float diffuseIntensity = cosTheta;
                diffuse = uLightConstant * diffuseIntensity;
            }
            vec3 normalizedReflector = normalize(reflect(-lightDirection, normalizedNormal));
            vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
            float cosPhi = dot(normalizedReflector, normalizedViewer);
            vec3 specular = vec3(0., 0., 0.);
            if (cosPhi > 0.) {
                float shininessConstant = 100.0;    // bare minimum spec for metal
                float specularIntensity = pow(cosPhi, shininessConstant);
                specular = uLightConstant * specularIntensity;
            }
            vec3 phong = ambient + diffuse + specular;
            gl_FragColor = vec4(phong * vColor, 1.0);
            // gl_FragColor is the final destination for storing
            //  color data for the rendered fragment
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);
 
    // Comparing to C-Programming, we may imagine
    //  that up to this step we have created two
    //  object files (.o), for the vertex and fragment shaders
 
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);
 
    // Local variables
    var isAnimated = false;
    var theta = 0.0;
    var direction = "";
    var dX = 0.0;
    var dY = 0.0;
    // For the model (all linear transformation)
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");
 
    // For the camera
    var camera = [0.0, 0.0, 7.5]; //7.5 unit from the origin outwards the screen
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = glMatrix.mat4.create();  // Create an identity matrix
    glMatrix.mat4.lookAt(
        view,
        camera,
        [camera[0], 0.0, -10.0],
        [0.0, 1.0, 0.0]
    );
    gl.uniformMatrix4fv(uView, false, view);
 
    // For the projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
        perspective,
        ((Math.PI / 2) - 15),  // 75 degrees 
        1.0,
        0.5,
        50.0
    );
    gl.uniformMatrix4fv(uProjection, false, perspective);
 
    // For the lighting and shading
    var uLightConstant = gl.getUniformLocation(shaderProgram, "uLightConstant");
    // Ambient
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uLightConstant, [1.0, 1.0, 1.0]);   // white color
    gl.uniform1f(uAmbientIntensity, 0.153);             // 40% intensity
    // Diffuse
    var uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
    gl.uniform3fv(uLightPosition, [4.5, -1.0, -3.0], [-2.5, 1.5, 1.0]);
    var uNormalModel = gl.getUniformLocation(shaderProgram, "uNormalModel");
    // Specular
    var uViewerPosition = gl.getUniformLocation(shaderProgram, "uViewerPosition");
 
    // Local functions
    // MOUSE
    var dragging, prevx, prevy, rotation = glMatrix.mat4.create();
    function onMouseDown(event) {
        var x = event.clientX;
        var y = event.clientY;
        var rect = event.target.getBoundingClientRect();
        if (
            rect.left <= x &&
            rect.right >= x &&
            rect.top <= y &&
            rect.bottom >= y
        ) {
            dragging = true;
            prevx = x;
            prevy = y;
        }
    }
    function onMouseUp(event) {
        dragging = false;
    }
    function onMouseMove(event) {
        if (dragging) {
            var x = event.clientX;
            var y = event.clientY;
            var xdiff = x - prevx;
            var ydiff = y - prevy;
            var inverseRotation = glMatrix.mat4.create();
            glMatrix.mat4.invert(inverseRotation, rotation);
            var xAxis = [1, 0, 0, 0];
            var yAxis = [0, 1, 0, 0];
            glMatrix.vec4.transformMat4(xAxis, xAxis, inverseRotation);
            glMatrix.vec4.transformMat4(yAxis, yAxis, inverseRotation);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(xdiff), yAxis);
            glMatrix.mat4.rotate(rotation, rotation, glMatrix.glMatrix.toRadian(ydiff), xAxis);
            prevx = x;
            prevy = y;
        }
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);
 
    // KEYBOARD or even for changing the camera location
    function onKeyDown(event) {
        switch (event.keyCode) {
            case 87: // Object UP
                direction = "up";
                break;
            case 83: // Object DOWN
                direction = "down";
                break;
            case 68: // Object RIGHT
                direction = "right";
                break;
            case 65: // Object LEFT
                direction = "left";
                break;
                case 73: // Object UP
             direction = "up";
             break;
         case 75: // Object Down
             direction = "down";
             break;
        case 74:
    
            camera[0] += 0.05;
             gl.uniform3fv(uViewerPosition, camera);
             glMatrix.mat4.lookAt(
                 view,
                 camera,
                 [camera[0], 0.0, -10.0],
                 [0.0, 1.0, 0.0]
             );
             gl.uniformMatrix4fv(uView, false, view);
            break;
        case 76:
            camera[0] -= 0.05;
            gl.uniform3fv(uViewerPosition, camera);
            glMatrix.mat4.lookAt(
                view,
                camera,
                [camera[0], 0.0, -10.0],
                [0.0, 1.0, 0.0]
            );
            gl.uniformMatrix4fv(uView, false, view);
            break;
            case 38: // Camera UP
                camera[1] += 1;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 40: // Camera DOWN
                camera[1] -= 1;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 39: // Camera RIGHT
                camera[0] += 1;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            case 37: // Camera LEFT
                camera[0] -= 1;
                gl.uniform3fv(uViewerPosition, camera);
                glMatrix.mat4.lookAt(
                    view,
                    camera,
                    [camera[0], 0.0, -10.0],
                    [0.0, 1.0, 0.0]
                );
                gl.uniformMatrix4fv(uView, false, view);
                break;
            default:
                break;
        }
    }
    function onKeyUp(event) {
        direction = "";
    }
    function onKeyPress(event) {
        console.log('keypress');
        if (event.keyCode == 32) {  // Space button
            isAnimated = !isAnimated;
        }
    }
    document.addEventListener("keypress", onKeyPress)
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
 
    // Teach the GPU how to collect
    //  the positional values from ARRAY_BUFFER
    //  for each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        3 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);
    var aNormal = gl.getAttribLocation(shaderProgram, "aNormal");
    gl.vertexAttribPointer(
        aNormal,
        3,
        gl.FLOAT,
        false,
        9 * Float32Array.BYTES_PER_ELEMENT,
        6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);
 
    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var model = glMatrix.mat4.create();
        if (isAnimated) {
            theta += 0.01;
        }
        switch (direction) {
            case "up":
                dY += 0.1;
                break;
            case "down":
                dY -= 0.1;
                break;
            case "left":
                dX -= 0.1;
                break;
            case "right":
                dX += 0.1;
                break;
 
            default:
                break;
        }
        glMatrix.mat4.translate(model, model, [dX, dY, 0.0]);
        glMatrix.mat4.rotateZ(rotation, rotation, theta);
        glMatrix.mat4.rotateY(rotation, rotation, theta);
        glMatrix.mat4.multiply(model, model, rotation);
        gl.uniformMatrix4fv(uModel, false, model);
 
        // For transforming the normal vector
        var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);
 
        gl.drawElements(gl.TRIANGLES, indices.length,
            gl.UNSIGNED_SHORT, 0);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
 }