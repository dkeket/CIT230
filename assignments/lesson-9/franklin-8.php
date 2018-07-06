<?php include '_header.php'; ?>         
<br>
         <br><h2>The City of Franklin</h2>
          <h3 class="wsum">Weather Summary</h3>  
          <table class="summary">
              <tr>
                  <th>Sunny</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Precipitation</th>
                  <th>Wind Speed</th>
                  <th>Wind Chill</th>
              </tr>
              <tr>
                  <td><img src="https://openweathermap.org/img/w/01d.png" alt="sunny"></td>
                  <td><span class="fhighTemp"></span>&deg;F</td>
                  <td><span class="flowTemp"></span>&deg;F</td>
                  <td><span class="fprecipt"></span>%</td>
                  <td><span class="fwindSpeed"></span> mph</td>
                  <td><span class="fwindChill"></span>&deg;F</td>
              </tr>
          </table>
            <div class="tempsum">
                <table class="tempsum">
                    <tr><th>Weather Summary</th></tr>
                    <tr>
                        <td>Sunny</td>
                    </tr>
                    <tr>
                        <td>High: <span class="fhighTemp"></span>&deg;F</td>
                    </tr>
                    <tr>
                        <td>Low: <span class="flowTemp"></span>&deg;F</td>
                    </tr>
                    <tr>
                        <td>Precipitation:<span class="fprecipt"></span>%</td>
                    </tr>
                    <tr>
                        <td>Wind Speed:<span class="fwindSpeed"></span>mph</td>
                    </tr>
                    <tr>
                        <td>Wind Chill:<span class="fwindChill"></span>&deg;F</td>
                    </tr>
                </table>        
            </div>
        <br><br>
        <figure>
          <img src="images/Optimized-franklin-original.jpeg" alt="franklin" 
               srcset= "images/franklin-small.jpg 300w,
                        images/franklin-medium.jpg 600w,
                        images/franklin-large.jpg 900w"> 
        </figure>
          <br>
        <section class="forecast">
          <h3>10 Day Forecast</h3>
          <table class="daytable">
            <thead>
              <tr>
                <th>Day 1</th>
                <th>Day 2</th>
                <th>Day 3</th>
                <th>Day 4</th>
                <th>Day 5</th>
                <th>Day 6</th>
                <th>Day 7</th>
                <th>Day 8</th>
                <th>Day 9</th>
                <th>Day 10</th>
              </tr>
            </thead>
            <tbody>  
              <tr>
                <td>89&deg;F</td>
                <td>87&deg;F</td>
                <td>78&deg;F</td>
                <td>75&deg;F</td>
                <td>72&deg;F</td>
                <td>72&deg;F</td>
                <td>79&deg;F</td>
                <td>83&deg;F</td>
                <td>85&deg;F</td>
                <td>89&deg;F</td>
              </tr>
            </tbody>
          </table>
        </section>

        <article>
          <h3>Franklin Breaks Record</h3>	
          <p class="town-article">
            <img src="#" alt="">
            Lorum Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.short article content placeholder
              <br>
            Lorum Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.short article content placeholder
          </p>
            </article>		  
<?php include '_footer.php';?>     