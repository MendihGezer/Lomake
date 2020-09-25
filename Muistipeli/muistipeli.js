window.onload=tailGeneration;


			function tailGeneration()
			{
				var divs = "";
				for(i=1;i<=20;i++)
				{
					divs = divs +'<div class="tail" id="ta'+i+'" ><img src="img/locked.png" onclick="openTail('+i+')" /></div>';

					if (i%5==0) divs = divs +'<div style="clear:both" ></div>';

				}

				document.getElementById("tresc").innerHTML=divs;

				generate();

			}



			var openId = new Array(3);
			var openPict = new Array(3);




			var pictures =new Array(20);



			function generate()
			{

				for (i=0;i<10;i++)
				{
					pictures[i]=i+1;
				}

				for (i=10;i<20;i++)
				{
					pictures[i]=i-9;
				}

				var step =20;
				var images =new Array(20);

				for (i=0;i<20;i++)
				{
					var numerK = Math.floor(Math.random() * step);

					images[i]=pictures[numerK];
					pictures[numerK]=pictures[step-1];
					step=step-1;

				}
				pictures=images;


			}

			var maaraAvaa = 0;

			function openTail(nr)
			{

				var pictureNr = pictures[nr-1];

				document.getElementById("ta"+nr).innerHTML='<img height="200px" width="200px" src="img/im'+pictureNr+'.png" />'



				maaraAvaa++;


				if (maaraAvaa==1)
				{
					openPict[0]=pictures[nr-1];

					openId[0]=nr;
				}
				else if (maaraAvaa==2)
				{
					openPict[1]=openPict[0];
					openPict[0]=pictures[nr-1];

					openId[1]=openId[0];
					openId[0]=nr;

				}
				else if (maaraAvaa==3)
				{
					openPict[2]=openPict[1];
					openPict[1]=openPict[0];
					openPict[0]=pictures[nr-1];

					openId[2]=openId[1];
					openId[1]=openId[0];
					openId[0]=nr;

				}

				if (maaraAvaa>2)
				{
					closeTail(openId[2]);
					maaraAvaa=maaraAvaa-1;


				}

				if(openPict[0]==openPict[1])
				{
					trafione(openId[0],openId[1]);
					maaraAvaa=maaraAvaa-2;

				}
			}

			function closeTail(numerTail)
			{

				document.getElementById("ta"+numerTail).innerHTML='<img src="img/locked.png" onclick="openTail('+numerTail+')" />';

			}

			var laskuri=0;
			function trafione(firstTail,secondTail)
			{


				document.getElementById("ta"+firstTail).innerHTML=null;
				document.getElementById("ta"+firstTail).style.boxShadow="none";
				document.getElementById("ta"+firstTail).style.background="none";
				document.getElementById("ta"+firstTail).style.border="none";
				document.getElementById("ta"+firstTail).style.width="202px";
				document.getElementById("ta"+firstTail).style.height="202px";

				document.getElementById("ta"+secondTail).innerHTML=null;
				document.getElementById("ta"+secondTail).style.boxShadow="none";
				document.getElementById("ta"+secondTail).style.background="none";
				document.getElementById("ta"+secondTail).style.border="none";
				document.getElementById("ta"+secondTail).style.width="202px";
				document.getElementById("ta"+secondTail).style.height="202px";

				laskuri++
				if(laskuri==10)
				{
					document.getElementById("tytul").innerHTML='<span id="bravo">Congratulations !!! </span><br /> <input type="button" value="Pelata vielä kerran" onclick="location.reload()">';
					document.getElementById("tytul").style.paddingTop="100px";
					document.getElementById("bravo").style.fontSize="48px";


				}
			}
