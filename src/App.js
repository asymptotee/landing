import './App.css';
import logo from './assets/image.png';
import dedust from './assets/dedust.png';
import tg from './assets/tg.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

async function pullData() {
  try {
    const response = await axios.get("https://api.geckoterminal.com/api/v2/networks/ton/pools/EQAf2LUJZMdxSAGhlp-A60AN9bqZeVM994vCOXH05JFo-7dc?include=base_token%2Cquote_token");
    return {
      volume: (Number(response.data.data.attributes.volume_usd.h24) / 1000000).toFixed(2),
      cap: (Number(response.data.data.attributes.fdv_usd) / 1000000).toFixed(2)
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

function App() {
  const [data, setData] = useState({
    volume: 0,
    cap: 0
  });

  useEffect(() => {
    pullData().then(result => {
      setData(result);
    });
  }, []);

  return (
    <div className="App">
    <div class="container">
      <div class="Title">
        <div>
          <div class="title">$GOVNO - game over</div>
          <div class="title">venture now</div>
        </div>
        <div class="subtitle">Join us, and govno will flow all over the ton blockchain.</div>
      </div>
      <div class="Stats">
        <div class="stats-container">
          <div class="market">
            <div class="label">Market capitalization</div>
            <div class="value">${data.cap}M</div>
          </div>
          <div class="holders">
            <div class="label">Token holders</div>
            <div class="value">2.4K</div>
          </div>
          <div class="transactions">
            <div class="label">Transaction (24H)</div>
            <div class="value">2.812</div>
          </div>
          <div class="volume">
            <div class="label">Trade volume (24H)</div>
            <div class="value">${ data.volume }M</div>
          </div>
        </div>
      </div>
      <div class="Buttons">
      <div class="buttons-container">
        <a href="https://dedust.io/swap/TON/EQBlWgKnh_qbFYTXfKgGAQPxkxFsArDOSr9nlARSzydpNPwA" class="button dedust-button">
            <img src={dedust} alt="Dedust" class="button-icon" />
            <span>Buy on dedust</span>
        </a>
        <a href="https://t.me/cryptover1" class="button telegram-button">
            <img src={tg} alt="Telegram" class="button-icon" />
            <span>Join Community</span>
        </a>
      </div>
      </div>
      <div class="Image">
        <img src={logo} class="logo"/>
      </div>
    </div>
    <div class="stripe-container">
      <div class="stripe">
        <div class="marquee">
            <div class="marquee-content">
                SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - &nbsp;
            </div>
            <div class="marquee-content">
                SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - &nbsp;
            </div>
            <div class="marquee-content">
                SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - &nbsp;
            </div>
            <div class="marquee-content">
                SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - SALES EVERY DAY - &nbsp;
            </div>
          </div>
      </div>
    </div>
    <div class="section-container">
      <h2 class="section-title">#community</h2>
      <div class="cards-grid">
          <div class="card">
              <div class="user-info">
                  <div class="user-header">
                      <h3>Dan</h3>
                      <span class="username">@DAN</span>
                  </div>
              </div>
              <p class="message">Это наше $GOVNO и здесь будет наш порядок! Кому не нравится – до свидания: notcoin, major, нахуй!<br/><br/>©Жирик</p>
          </div>
          <div class="card">
              <div class="user-info">
                  <div class="user-header">
                      <h3>Richard</h3>
                      <span class="username">@Richard</span>
                  </div>
              </div>
              <p class="message">Купил за 20, продал за 30, сижу теперь локти кусаю</p>
          </div>
          <div class="card">
              <div class="user-info">
                  <div class="user-header">
                      <h3>Alex honey</h3>
                      <span class="username">@hoopengo</span>
                  </div>
              </div>
              <p class="message">Увидел о проекте в канале CryptOver, токен торговался в районе 0.3$ за штуку. Лёг спать, проснулся, токен уже пробил планку в 1$, пока пополнял он вырос уже до 1.7$. Закупился на 50$, потом добавил еще 100$. В моменте на кошельке лежало 5k$ в говне, но я не вывел и не собираюсь. We are #HODL! We are the truth of TON!</p>
          </div>
          <div class="card">
              <div class="user-info">
                  <div class="user-header">
                      <h3>Александер</h3>
                      <span class="username">@sasha_notcoiner</span>
                  </div>
              </div>
              <p class="message">🙏ГОВНО🙏РОДНЕНЬКОЕ🙏РАСТИ🙏ВЫСОКО-ВЫСОКО🙏РАЗВИВАЙСЯ🙏ДАЛЕКО-ДАЛЕКО🙏WEB 3.0 СТРОЙСЯ🙏КРЕДИТ ЗАКРОЙСЯ🙏🙏🙏🙏</p>
          </div>
          <div class="card">
              <div class="user-info">
                  <div class="user-header">
                      <h3>Nikita Bogdanoff</h3>
                      <span class="username">@saymyname_pls</span>
                  </div>
              </div>
              <p class="message">Накиньте $GOVNO пж<br/>UQB6K2w4D6_P84Lb7tD7KqOiOu-9stOCByAuC7ihxxd4-Rda</p>
          </div>
      </div>
    </div>
    <div class="section-container">
      <h2 class="section-title">#team</h2>
      <div class="team-container">
        <div class="Buffer">
        <div class="profile-card">
          <div class="Profile-Title">
            <div class="buffer-profile-name">Igor Over</div>
            <div class="buffer-profile-username">@overbafer1</div>
          </div>
          <div class="Profile-Description">
            <div class="buffer-profile-about">The creator of $GOVNO, a YouTuber with a million-dollar channel, believes in govno for $777</div>
          </div>
          <div class="Profile-Role">
            <div class="profile-role-text">"Founder</div>
          </div>
        </div>
        </div>
        <div class="Alex">
        <div class="profile-card hoopengo">
          <div class="Profile-Title">
            <div class="profile-name">Alex Mirskoy</div>
            <div class="profile-username">@hoopengo</div>
          </div>
          <div class="Profile-Description">
            <div class="profile-about">Site designer and developer, buy $GOVNO at 1.7 and now his capitalization is 2 iphone 16 pro max 1TB</div>
          </div>
          <div class="Profile-Role">
            <div class="profile-role-text">"Site Design</div>
          </div>
        </div>
        </div>
        <div class="Nikita">
          <div class="profile-card nikita">
            <div class="Profile-Title">
              <div class="profile-name">Nikita Worldwide</div>
              <div class="profile-username">@govnoupdates</div>
            </div>
            <div class="Profile-Description">
              <div class="profile-about">Site developer, playing with the market, but so far only been playing with pussy</div>
            </div>
            <div class="Profile-Role">
              <div class="profile-role-text">"Site Developer</div>
            </div>
          </div>
        </div>
        <div class="Manager">
          <div class="profile-card manager">
            <div class="Profile-Title">
              <div class="profile-name">Mr Bogdanoff</div>
              <div class="profile-username">@MNGR_iM</div>
            </div>
            <div class="Profile-Description">
              <div class="profile-about">Black horse of $GOVNO token</div>
            </div>
            <div class="Profile-Role">
              <div class="profile-role-text">"Manager</div>
            </div>
          </div>
        </div>        
      </div>
      </div>
    <div class="section-container">
      <h2 class="section-title">#our_goals</h2>
      <div class="stages-container">
        <div class="item">
          <span class="done">Launch $GOVNO</span>
          <span class="done">done <span class="icon">✔️</span></span>
        </div>

        <div class="item">
          <span class="done">Dedust pools</span>
          <span class="done">done <span class="icon">✔️</span></span>
        </div>

        <div class="item">
          <span class="on-stage">NFT-collection</span>
          <span class="on-stage">on-stage <span class="icon">⏳</span></span>
        </div>

        <div class="item">
          <span class="in-progress">Verification</span>
          <span class="in-progress">in-progress <span class="icon">🔄</span></span>
        </div>

        <div class="item">
          <span class="in-progress">CEX</span>
          <span class="in-progress">in-progress <span class="icon">🔄</span></span>
        </div>

        <div class="item">
          <span class="in-progress">ADs</span>
          <span class="in-progress">in-progress <span class="icon">🔄</span></span>
        </div>

        <div class="item">
          <span class="in-progress">Game</span>
          <span class="in-progress">in-progress <span class="icon">🔄</span></span>
        </div>

        <div class="item">
          <span class="in-progress">Application</span>
          <span class="in-progress">in-progress <span class="icon">🔄</span></span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
