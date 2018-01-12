
    //Global Var
    var Money = 0;
    var ClickPower = 0;
    var debt = 2000000;
    var debt2;
    var CashFlow = 0;
    //ShopVar    
    var ShopCount = 0;
    var ShopCount2 = 0;
    var ShopCost = 10;
    var ShopCost2 = 500;
    var ShopUpgrade = 0;
    var UpgradePower = 0;
    var CPUc = 200;

    //OnLoad
    function start(){
        TakeM();
        load();
    }
    //ClickPower

    function ClickPowers(){
        if(Money>=CPUc){
            Money-=CPUc;
            ClickPower +=1;
            CPUc += 500;
            document.getElementById("ClickPower").innerHTML='+' +ClickPower;
            document.getElementById("CPUc").innerHTML=CPUc+200;
        }
    }
    
    //AddMoney
        function AddM(number){
            Money = Money +number+ClickPower;
            document.getElementById("MoneyCount").innerHTML = Money;
        };
    //TakeMoney
        function TakeM(){
            debt = debt +1;
            document.getElementById("MoneyDebt").innerHTML = debt;
        };
            
        function CashFlows(){
            debt2= debt;
            CashFlow=debt-UpgradePower;
            debt2-=Money;
            document.getElementById("toWin").innerHTML=debt2;
        };
        
    //ShopStuff
        function UpgradeBuy(){
            if (Money >= ShopCost){
                ShopCount = ShopCount +1;
                document.getElementById("ShopCount").innerHTML = ShopCount;
                Money-=ShopCost;
                document.getElementById("MoneyCount").innerHTML = Money;
                ShopCost = ShopCost+1;
                document.getElementById("ShopCost").innerHTML = ShopCost;
                UpgradePower = UpgradePower +1;
                document.getElementById("UpgradePower").innerHTML = UpgradePower;
            };
        };
    
       function UpgradeBuy2(){
            if (Money >= ShopCost2){
                ShopCount2 = ShopCount2+1;
                document.getElementById("ShopCount2").innerHTML = ShopCount2;
                Money -= ShopCost2;
                document.getElementById("MoneyCount").innerHTML = Money;
                ShopCost2 = ShopCost2 + 50;
                document.getElementById("ShopCost2").innerHTML = ShopCost2;
                UpgradePower = UpgradePower+10;
                document.getElementById("UpgradePower").innerHTML = UpgradePower;
            };
        }; 
        
        //Save,Loade,Restart
        function save(){
            var Save = {
                Money: Money,
                debt:debt,
                debt2:debt2,
                CashFlow:CashFlow,
                ShopCount: ShopCount,
                ShopCount2: ShopCount2,
                ShopCost: ShopCost,
                ShopCost2: ShopCost2,
                ShopUpgrade: ShopUpgrade,
                UpgradePower: UpgradePower,
                CPUc:CPUc,
                ClickPower:ClickPower,
            };
            localStorage.setItem("Zapisanie", JSON.stringify(Save));
        };
        
        function load(){
            var SaveGame = JSON.parse(localStorage.getItem("Zapisanie",));
            
            if(typeof SaveGame.Money !== "undefined") Money = SaveGame.Money;
            document.getElementById("MoneyCount").innerHTML = Money;
            
            if(typeof SaveGame.debt !== "undefined") debt = SaveGame.debt;
            document.getElementById("MoneyDebt").innerHTML = debt;
            
            if(typeof SaveGame.debt2 !== "undefined") debt2 = SaveGame.debt2;
            document.getElementById("toWin").innerHTML = debt2;
            
            if(typeof SaveGame.ShopCount2 !== "undefined") ShopCount2 = SaveGame.ShopCount2;
            document.getElementById("ShopCount2").innerHTML = ShopCount2;
            
            if(typeof SaveGame.ShopCount !== "undefined") ShopCount = SaveGame.ShopCount;
            document.getElementById("ShopCount").innerHTML = ShopCount;  
            
            if(typeof SaveGame.ShopCost !== "undefined") ShopCost = SaveGame.ShopCost;
            document.getElementById("ShopCost").innerHTML = ShopCost;
            
            if(typeof SaveGame.ShopCost2 !== "undefined") ShopCost2 = SaveGame.ShopCost2;
            document.getElementById("ShopCost2").innerHTML = ShopCost2;
            
            if(typeof SaveGame.UpgradePower !== "undefined") UpgradePower = SaveGame.UpgradePower;
            document.getElementById("UpgradePower").innerHTML = UpgradePower;
            
            if(typeof SaveGame.CPUc !== "undefined") CPUc = SaveGame.CPUc;
            if(typeof SaveGame.ClickPower !== "undefined") CPUc = SaveGame.ClickPower;
            
        };

        function reset(){
            localStorage.clear();
            location.reload();
        }

        //Refreshing
        window.setInterval(function(){
          AddM(UpgradePower);
            save();
      }, 1000);       
        window.setInterval(function(){
          TakeM(debt);
      }, 100);
        window.setInterval(function(){
            CashFlows(Money);
        }, 100);
        window.setInterval(function(){
          CashFlows(debt2);
      }, 1000);
        window.setInterval(function(){
            CashFlows(CashFlow);
        }, 100);
    /* function ShopUpgrade(){
            ShopUpgrade = ShopCount;
            if (ShopUpgrade >= 1){
                Money = Money +2;
                document.getElementById("MoneyCount").innerHTML = Money;
            }
        }; */         
