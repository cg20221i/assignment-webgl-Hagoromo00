function main() {
  
    var canvas = document.getElementById("canvasKesayanganKu");
    var gl = canvas.getContext("webgl");
  
  
    var vertices = [
    //=========  3 =========
      0.96019, 0.79791,
      0.6, 0.8,
      0.60192, 0.71387,
      0.87836, 0.71387,
      0.87836, 0.60329, 
      0.79432, 0.54136,
      0.60413, 0.54136,
      0.60413, 0.43078,
      0.79432, 0.43078,
      0.87836, 0.35559,
      0.87836, 0.25386,
      0.60413, 0.25386,
      0.60412, 0.16726,
      0.9624, 0.1654,

     //=========  5 =========
      0.5, 0.8,
      0.2, 0.8,
      0.2, 0.7,
      0.19811, 0.5606, 
      0.25763, 0.49117, 
      0.40443, 0.48522, 
      0.40642, 0.23525, 
      0.24572, 0.23723, //8
      0.20605, 0.15788, //9
      0.49966, 0.1559, //10
      0.5, 0.5,
      0.4, 0.6,
      0.3, 0.6,
      0.3, 0.7,
      0.4, 0.7, //15
      
    //=========  A =========
      -0.55689, 0.19786, //b     //A1
      -0.88607, -0.90648, //d
      -0.75865, -0.78437, //h
      -0.57548, -0.15256, //i
      
      
      -0.54362, 0.05451, //c       //A2
      -0.2562, -0.93181,//e
      -0.35324, -0.81599, //f
      -0.5364, -0.15867, //g
      
      
      -0.56297, -0.7659, //L       //A3
      -0.63437, -0.46748, //J
      -0.49312, -0.46748, //K
    
      //=========  crown A =========
      -0.73736, 0.24866, //p
      -0.68871, 0.21929, //q
      -0.69177, 0.27808, //s
      -0.64912, 0.2369, //r
      -0.64176, 0.29279, //u
      -0.61529, 0.2369, //o
      -0.6, 0.2, //w
      -0.70648, 0.1663, //v
      -0.72118, 0.20307, //m
      -0.73736, 0.24866, //p

     //============ N ==============
     0.21533, 0.10853, //N1      //1
    -0.15381, -0.86977, //t1
     0.01418, -0.8678, //z1
     0.22852, -0.43071, //a1
     0.30536, -0.5905, //b1
     0.31086, -0.23728, //c1

        
    0.65628, 0.06792, //g1
    0.80411, 0.03558, //n
    0.55887, -0.18908,//f1
    0.43516, -0.89103, //t
    0.35202, -0.65971, //e
    0.35925, -0.30744, //d
    0.44607, -0.60267, //h

    //======== CROWN N =========
       0.01209, 0.15712,
       0.06074, 0.12775, //q
       0.05768, 0.18654, //s
       0.10034, 0.14535, //r
       0.10769, 0.20124, //u
       0.13416, 0.14535, //o
       0.14945, 0.10846, //w
       0.04298, 0.07476, //v
       0.02827, 0.11153, //m
       0.01209, 0.15712, //p  
    ]
    ;
  
  
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec2 aPosition;
        void main () { 
            gl_PointSize = 25.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);
            // gl_Position is the final destination for storing
            // positional data  for the rendered vertex
        }
        `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);


    // FRAGMENT SHADER
    var fragmentShaderCode = `
    void main() {
        precision mediump float;
        gl_FragColor = vec4(1.0, 0.0, 0.1, 1.0); // change box color
        /* Blue = R:0, G:0, B:1, A:1
        gl_FragColor is the final destination for storing
        color data for the rendered fragment
        */
    }
`;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    /* 

    */
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);



    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition")
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0)
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(0.0, 0.0, 0.0, 0.9); // change bg color
    //R, G, Blue, Alpha
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.LINE_LOOP, 0, 14);
    gl.drawArrays(gl.LINE_LOOP, 14, 15);
    gl.drawArrays(gl.TRIANGLE_FAN, 29 ,4);
    gl.drawArrays(gl.TRIANGLE_FAN, 33 ,4);
    gl.drawArrays(gl.TRIANGLES, 37 ,4); 
    gl.drawArrays(gl.LINE_LOOP, 41 ,9);  //crown
    gl.drawArrays(gl.TRIANGLE_FAN, 50 ,6); //n1
    gl.drawArrays(gl.TRIANGLE_STRIP, 56 ,7); //n2
    gl.drawArrays(gl.LINE_LOOP, 63 ,9); 




}