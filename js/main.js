!function() {
	function writeCode(prefix, code, fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run(){
      n+=1
      container.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      container.scrollTop = container.scrollHeight
      if(n < code.length){
        id = setTimeout(run, 10)
      }else{
        fn && fn.call()
      }
    }, 10)
  }
	let code = ` .preview {
	    height: 100%;
	    border: 1px solid green;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    background: #FEE433;
	  }
	  .wrapper {
	    width: 100%;
	    height: 165px;
	    position: relative;
	  }
	  .nose {
	    width: 0px;
	    height: 0px;
	    border-style: solid;
	    border-width: 12px;
	    border-radius: 50%;
	    border-color: black transparent transparent transparent;
	    position: absolute;
	    left: 50%;
	    top: 28px;
	    transform: translateX(-50%)
	  }
	  .eye {
	    width: 49px;
	    height: 49px;
	    background: #2e2e2e;
	    position: absolute;
	    border-radius: 50%;
	    border: 2px solid #000000;
	  }
	  .eye.left {
	    right: 50%;
	    margin-right: 90px;
	  }
	  .eye.right {
	    left: 50%;
	    margin-left: 90px;
	  }
	  .eye::before {
	    content: '';
	    display: block;
	    width: 24px;
	    height: 24px;
	    background: #fff;
	    border-radius: 50%;
	    position: absolute;
	    left: 6px;
	    top: -1px;
	    border: 2px solid #000
	  }
	  .face {
	    width: 68px;
	    height: 68px;
	    background: #FC0D1C;
	    border: 2px solid #000;
	    border-radius: 50%;
	    position: absolute;
	    top: 85px;
	  }
	  .face.left {
	    right: 50%;
	    margin-right: 116px;
	  }
	  .face.right {
	    left: 50%;
	    margin-left: 116px;
	  }
	  .upperLip {
	    position: absolute;
	    top: 50px;
	    width: 80px;
	    height: 25px;
	    border: 2px solid #000;
	    background: #FDE348;
	  }
	  .upperLip.left {
	    right: 50%;
	    border-bottom-left-radius: 40px 25px;
	    border-top: none;
	    border-right: none;
	    transform: rotate(-20deg)
	  }
	  .upperLip.right {
	    left: 50%;
	    border-bottom-right-radius: 40px 25px;
	    border-top: none;
	    border-left: none;
	    transform: rotate(20deg)
	  }
	  .lowerLip-wrapper {
	    position: absolute;
	    bottom: 0;
	    left: 50%;
	    margin-left: -150px;
	    height: 110px;
	    width: 300px;
	    overflow: hidden;
	  }
	  .lowerLip {
	    position: absolute;
	    bottom: 0;
	    height: 3500px;
	    width: 300px;
	    background: #990531;
	    border-radius: 200px/2000px;
	    border: 2px solid #000;
	    overflow: hidden;
	  }
	  .lowerLip::after {
	    content: '';
	    position: absolute;
	    bottom: -20px;
	    width: 100px;
	    height: 100px;
	    background: #FC4A62;
	    left: 50%;
	    margin-left: -50px;
	    border-radius: 50px;
	  }`
	  writeCode('', code)
}.call()