
    //Global Var
        var Money = 0;
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
    //AddMoney
        function AddM(number){
            Money = Money +number;
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
            };
            localStorage.setItem("Zapisanie", JSON.stringify(Save));
        };
        
        function load(){
            var SaveGame = JSON.parse(localStorage.getItem("Zapisanie",));
            if(typeof SaveGame.Money !== "undefined") Money = SaveGame.Money;
            document.getElementById("MoneyCount").innerHTML = Money;
            
            if(typeof SaveGame.debt !== "undefined") Money = SaveGame.Money;
            document.getElementById("MoneyDebt").innerHTML = debt;
            
            if(typeof SaveGame.debt2 !== "undefined") Money = SaveGame.Money;
            document.getElementById("toWin").innerHTML = debt2;
            
            if(typeof SaveGame.ShopCount2 !== "undefined") Money = SaveGame.Money;
            document.getElementById("ShopCount2").innerHTML = ShopCount2;
            
            if(typeof SaveGame.ShopCount !== "undefined") Money = SaveGame.Money;
            document.getElementById("ShopCount").innerHTML = ShopCount;  
            
            if(typeof SaveGame.ShopCost !== "undefined") Money = SaveGame.Money;
            document.getElementById("ShopCost").innerHTML = ShopCost;
            
            if(typeof SaveGame.ShopCost2 !== "undefined") Money = SaveGame.Money;
            document.getElementById("ShopCost2").innerHTML = ShopCost2;
            
            if(typeof SaveGame.UpgradePower !== "undefined") Money = SaveGame.Money;
            document.getElementById("UpgradePower").innerHTML = UpgradePower;
            
        }

        //Refreshing
        window.setInterval(function(){
          AddM(UpgradePower);
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
