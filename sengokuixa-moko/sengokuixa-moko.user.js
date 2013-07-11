// ==UserScript==
// @name		sengokuixa-moko
// @namespace	sengokuixa-ponpoko
// @author		server1+2.nao****
// @description	戦国IXA用ツール ver 1.8.6a 20110330 + 婆羅門機能追加 20130712
// @include		http://*.sengokuixa.jp/*
// @match		http://*.sengokuixa.jp/*
// @icon		data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAACZkSURBVHja5Lt5tKXXWd7528M3nfnOQ91bt+ZBJVW5NJRsWcayLVsYsDFuQ2ww0AwJiRM60J0wdNNMAUJYZC0CWe6EJJihiTvgYAMxkgfJkmXNs1SlqlJV3ZruPJ5zz/CNe+/+494aJa/lBv7rs9a533e+c879zn72u9/3eZ/33cI5x/+fHxrg33zqzr/9f3CGokjJCp9eb4PERKi8g/U9FJL+Uj87SiXOtQIRF0Ep0PNv76Qbd7uc7evz6+U8l6OFsJlReZG7xBlbqEYlWi77UWdsbOqhmZXkQhCGvfGB+oXZxVVKQYDCUatWmV1ZRiifsdFJnCjg/8Nc/p//8fPXAPjbP8TWQbz1u+L6z4kfXlpZ/sdLl5eOJEZ6PS+LLy7ElaGKIkvaBOWArMgZGxlAZL6bX25z8sLrP+mczMLIi3039Uta6/8ghEhx9roJ2LqR+ztYwN9h+q/e93oMrjsXWssdi3Px1AuvT//sK2srB5wXgtLEyXIljCpc6vaQnodMHcJI0sWYim+EiQ1JL6Zc9X38wD9+evp3xsdGPjHY1/dznlaXhRDTV2/v3CYG3wIIzjnEdT/w78cCrnu5+UMcUuDntjh86uzsH7600DrY61gZ+CXSIkebDsPRNlaTDhE+vvCBgsGBOpVIEGGtq3vpnj13Hr84N3PLzMJSOSOimFu6e2Fu6WvbRob+cmxEfkoqOee27vutujJxk7Xqvy9n4tyWOTqEks4hgv/5wsWN/+vU+QW5EoQIFeKh8AGVp7isw/6JfqJgmCRuUR+ApaVlpKuy1sulcUlY3VjYu2/3uBpq1OZX1joDK4srXqubim6c3Z8Y+3SpEvx2qeT/nkD8rV353wkAIbi69gQOKUGivqvZVv/65PGLe2cWcym0T5RrnCcpbEacpTgcThu8wnLH7buZnX+dleY5uu2cuaUmhaqjAyd6b8w0mvNtJgZHhkaH+lJPKFZXNrKNjW75+Mnp8vjY0L/btataFpJ/44y1uM0Z3kTD3WSp10z/erT033nWtwavvWBPa2X9t6ZnZ99/eTGurMeCPAipCkVYFMi8jQoUleE6fhCwc3QS32qee/obKH+V7/ne9/GVx15gvb1CJgKcKFAyYmW5B8m6HhjzdSmKkIMDoq8+uJDnJpifX+xP0/O/WipV+0ZGhn+mMMVNzhEE4pqnugqQ+3t0gpteePvCcuffP/Vq84GVjkWEHjIU+NYnNQl+4BiIyuwcGWJyYpKhse089NiTnLwwS9Btcfcd43Q3IM8kubGktodTXSqViKnJIVQhSNM2NusRBf3eyNTUaKeTtZBevri47L1xZv4Hqv0T/177pUvO2htm/UZf5W66vgWAc+YGpMTWFxxu83zLsV11Ilvfl1LQTdN9lxZav/3i6ZUHugQIL0LkGt8ZtIrJXEKlXKUU+tQqJdYXVzk/Pcvy2hom0EReRGIKTp49Tze2WKkIfEUY1VhaWKHPae696zac7tHpJpw/t0xrfUaMbdvVuDRznmrdZ7W1PH7u4rmfGxkb/lSe5Vc9vXPuakgSWxGAt3KC5dH33Gw3bx1Xr7vuEJQDWDv92seffe3ShzpFGesURS8myAqkLigNljg0NcnOsVEWFlY4dWmGlW7C+kYMUhFIjRVVLi96LDSXWN1oY51CkNLXX2HHwSlKWY+N5gXGpvaiVYmR4YzZ2SWGh0e5+9jbePDLX0N5AfNzl3+8sMXnarXaI0LIGwZw1S+8xbg0gPBq15yZEJun1xb4m74khCCKIhaXZj/20Ndf+qXlVobyfUzco+al3HW0wchIBaciPFliebXFei9jrtljw1hypSh5HhpI6JFbQZgrCixSKox1rCy26VN9TEzuZGR4AKzHUP8wgapTK4/wxukzDA2PcfTwEZ567nnywnq9bvrr9953331hFKabS+HKZF438+7G6K2vevOrFy1yy3yuLgtxDQkpJVmac+LktP/iy8f/6eXFjqxEIUm3zW37hnnXHVMEYo1eq83SguOlC2+wEEMiPYzzUcJHeyAVJLYAZVHOoZ0CJMYU+KUIB5x8Y4HWUkxfNMOePcMEgU+n3WVocIg9O3cwM7vA1O59HNy7l1NvnEWh3r48N/OPPM/7vaIorjk7982piwaIStG36PJAKwXE8quPfv0zs3NL91UrDWy8xj1HpvieD97FxvollpctWVHm/IVF1joKEWmyzIIQeFvgZrnBaokSPkXmSDKJMwKBxTmDDgPSVLGcJHiBZHnlMlGpSuD5nDn7Onv37GTXzjEuXz7LxNgYuCnOn5vhwqkz37n31sO/990f/l7Gt09Q5Pm3wgPEdWbibnjttmjmlWu+53N+6fJ3LiwtfX8Qgcmb7BgdsuPVAfnGc5cYnxxmYnyC49OXyGoF/SXL2uoaJWMpfEnX5jgEnpD4haAoDDgJSKQE7TTWWOKsAC8ksZa5VpfRIZ9du0dQUpIXTc5fOMHtR+/A84c5fuJ1bjt6F621Ns1W+kAQln5rateen9m+aydFnl213msx4ZoZSIAk3SDJ2pvHdPOYbr3O8jbp1jVjYy7PXLjjs3/x+T8WnsZJjQCUkKLZ7JBmDmN8Lp9f5rZbDrHnQIOsiEmMQGiBKBLKRtJwZSIjiYIU6zKszklUQg+fRCqS3GFTjSdBqYQMwROn2pw402T78BiDfQPs2n+A6UvTTAxpdo1GnH39FQ4fm8Ir9Vi5vPwj3W53n7WGPM8pinzzuPXM8+xGCyhM9i2xPuks33ji8Z9aWF5uRKUALaBcKuOEEJeXlimwnL50iTTr0ep1qFvB0altnNcrrPdadIuUXAgkHr3EoHxJnQQBFAYKm2EFyMDD2RxrDNYKpJRU+oZ45bVzeMka1UaVhIDMKk5Pz7J//wHWnj3O8twlDuyf4MTLJwcf/dqDP1Sqeb9QZPnm3DtuSNzGb731GgBBMHCT038zjVRKs7GxcejVV09/PIw8hHOI3CE9xVq7i7U5rfk58nZKoxZBLnnv2w/z7Msv4IYCBvIqSxsxVlnaGzn1Sh3ruowN97O+vIEIfQZGBjl19iIWQVD2STOJkz65NVjj0ahWuXBhmfd94Ba+8fwpwgosLq4TeCXuffudfOPFl6mUBhisZ/z15/78vp0H99fLlXLLGnttVW+N6q4ro3PO8b53HL6WzV0lQVt/t+ijEAJjzH86e3b6x3PPRxhLUEDgaRKTUWiL52lKQhJZwXsO30G+uojRXe56x7uIs4TYrNBszfPqS+cJ9QDVumF0oM7yYod2t2DH/jGeevY0cSbIcUhZJQz76KQbtHLLrn6F111lZNsE22/Zx+cf+gr9jQo16bjrwHbWkw7rG4J6qczXnzlObXLqHwol//PV6b8upD/84rlrFrC+vvwm4ujetAQky6vNkpMOKQVSaKR1GGPJnSMVgm6WIcOIihdw4vQ0KjPcfvceTp6ZYXRknPFtUwxUfQb8CHKHlk2ics7eyUEWFpuMTAHZKDNzLXJrqJSG6bShpSR+6hgqlxhoeKxuLLO2OEBYajCz3GayP+Kl4+c4dGQXre4spbJmdCjk+Bvn+/btGeGjH34vpjDXJpWb9ICPfeSj16KAczeAJcSWBUi//l//7Iu3Lq4sY8ggK1AqxEmBEwrrDAhBnhcY32d1Y5nJ0TJGJTz9zGuMDk0SP7bBtrGAg7snGB2tsbKQ0FeJiGPDnp0ToDJu2zdFIC/TGKgRBUOcPztHs+2I1gWD5YA923fQv7bKmbkZfKVQXshKx2I9y5nzTbTykVIxPNjPSNscu+euw0xtn8QYex2dvykMlqLyTSmeuMEUPM/j+Zde+LcX584c9sshRQ5aSox05MaAlojcoLUg8hR+oCCFclDl1MkZityxst4mTjKavTbN3gpDA5oiyTG6Rp50WT+bc+wdd9Bs5owMTVIqN6hXt6HsCFHkc+78CTpJSv/wKHsP3MLwzGVmv/oozhl6FgK/zJlLc0xO+OioSqlS4Gv7sZmZy/91bGzwU8aY5jflAf2NwRvy+5stwNMeS0tr9zirMIUPLsPgMFJuaiDG4FtQSUEUhgS+Ig0tqZ9w8fIS5VpAz2zQKxS+8VlrdsEVdNcUNc+xY8coL756mqk9hldOnEP7HkpH1PrmyIuUSqnG6OgwL7x+nidfeYOJsUHuuvMwfU8+z2qvSSI8ljYSAldibk6yb1cJR069NshGq/l9Tz7+0H+xloevd/Cfuh6A4yde4k2J9PUpo1L7z507N+T5DissUkqscBglsAhkZvGMYXJkiDTvkmVtor4qZxdz1rMqeZFiiw2crOMSGB8b5pZdVZ7/2hxnT/XYtWOKarXGI4+cphVnpKZJuTJCfvE8/cMVLk2f5N1HDrHSzTh5/hLD56Yp8jZDdY+LK4bCK7PeTpBhxHo7QcgQJ7o4a+j1WulAo9QxxvFmXrwFwKc/8/9ctf6rOcPWubVQr/h3BoEe9IKIVq9HxffxAJfFWCswhWWwEhLYmLjTQ8oSF5ebtDNJWB6kWYBNM4a0D9k6w2GVqf6IZHcfT72+xMNPXybOFJdml9h/6y5ai6tstDtstHukukw7j3jtXJM0iEhtzvK65ckXzpD7CetGkLsMXzuMychdxqXVFqOlBnlyiUYjfH779p3PmMK+pXqtAX7tZ//5VRnpSr7vts59z+PEG2f7PvuFhzBSobTGFAppMqplRaeb0mh4HNlX5o49fTRqDU6d2+CVc8vEpsf5+Vl6nQBtIZVtju0dZfugT9Zb4cChQU63uzx78hJFDtW6YqndZa2bEkYlhF9hbrFF4AecWexi/XUK0cOKfuZakFdSYlHCFRlVaXEYukpwabkNQYYWipXF5Pzzz7xBEOgbxnUDAK+9+vI3Tfy11ly4OLtfWQ/hh+QuxfgROkupScOxww2O3V7nnjvGuXXXJFZoZjcSyvUxli6t8rkvPMH5S2vUq3Vu2X2I73rg/XjeCs32BVaX23xsd413Nw9w8pUWx0/OUxiFFAFLSz08XcKKLlYmmEhgpME4Sa/IKQcKZQqipEcYBDTKfaz2MjwZsLLSRIoCrfrwS+r9b3/H8NvGx+svG2PflBJqgEeefeqtBb8raorQI+WaIk6b1DyHNwKdC232Dk/xoXthx44Ou8f72GgWFF5K//gItdpBJie2MzFwiBdf/iq7d+9havI+pLwFFZQYFpcwxQyr62eJyhW+6wMBsclopS1SLM88d5o//aOHmJ8tiNOIvFJgEoczGq1CpFNU8BkMfDc6MiIycha6CUqXQAkKYoRSxEl3fHau+T0DA9HLWVZsDesmADwZXqPC4iZ/uFne6CaFRckQ7RvIFCGCu/aPMVKR2KTHy6fWOXtR88QL8zSzF9i1/3U+/pFv58gtt3JnydHuXGKmeYLBkW2bM5s2SDoFFd2PJwv8mqHuwYATVAYCjh07yuhIwK/+wp/SWlfIoII04IzCEpAWjoZXZ9tof7LRbvkznRWVW4+k20P7Ad3cEkqLXyqx1u4duTS3KvLCupsLCBogy+RWdeU6Nei6UovSiMJkOCnIiwK/B9vKDfZOTTLYn7CWe/zJn5/i6eOrTO7so3+gn7/+myd57tXj/NSP/UM+cv8h2skF4nyJPJjBLykKmxCWoDAGI2Pm5pdRwRCNvt2IrERhLvHhb/8QphXx27/5p7SLmEiHtOMOieqRO0nmV5lbWo3aaZcmpnCFVFp6ottLrcZI5QtsXhBEtXZQGnQqtzfom1cBOHZ06EbR87pwaI2h2uj/q68/ffYT7bTjFzjqtsye8bA3PCrDan1AOjHFJ37wTt69MsPwgMfy/AK7JxR3vPe9yNY88zNQCn16cYGmgpRlrLNkRrLRmuUvvvDfePzpVykKj7HxvbzjXbfzge8+xsigx8c/+X5aq5f5zGcepBZIiHuUStDKBUsrCaXAJ3eWVCqjrXGeKDyklg5Nai1lP6C5nt/5RjpXso7e9VnhNVU4W7yGyvWiCOBsgbRqVUhnC+sQysPLpT2wqxFX64RBNMx44zDbqppD8QShyJH7DhL1lWiJlKiQBHRJs4h6uUwgyhRpThD4FDYg7bUIhOUHPvZJfvfT/4Uz01/j4ce+wqf/Q5X/9V/8KN927y5+5Cc+ysF925iZvkS1WmW5s85ff/U1nnq+SU9s5iVloZVWxlhhcEJjERgHReFYWogn7/jAe0tRVOq56wurVwA4N5u8iQdcLxAnF6dvyWI/DF0Jk0LVV26kr1YPg4b09BCYAZQp0V+uIkQOQpG7hJLXIvA13fYccV4gAw+/vEbOEqYo8OQw/bWEwwf6Wd1Y5P3vuZ3hiT14wSjPvXiGl55OGBvyqPf18457j5Ee3YXnUlobq6wsrvLKiZQNUvJej921QX3b0X36kRdeRMsAmxuktmSpw0rKS4vL36c9/9Obuc5NS+CBD377tTV/vRfc+pznqSe++vAzrTPnF+tOKHyh1bZxiVMr5GY3gdaoqIcMFJY+OmTocoRv6qRylrV0FqGhrIeJY42nyyhyhIzoqx/i4M6I9V6LO+5+G7o8SH1wLz/445/AiZSkuERm1yniMtb2MFmPcuAzXKvSX6uzuHSZnWMTvG24wdr8JcIwpJem+FqRpRmhH5HnBa++cvqYg0+/JREaqvnXlN8rqoG7FhI8LV8dr+evnpbyXegKPQ39skEtaaBrDaxfwtg6iTX4YoPIePhpA4pp4qRHGPehdUQUlcjEGlZ7OFfFFQpZ7qOy6yg6STG5I00M8XpM3ltGhwKpquAEuVsAV6UQLTIj8VTAQN7hznqdX/v1H+aRv3mc1798GV9KUltQCB8jHLmwGKAbt7HWXrXqGwD4wh987q0U4xtoUaFlo+xXSAtLnBuMTSjyFpHOsb5FKoNUjlBvKsAmizFJTBKn5Imi3GgQyDJWAsahhEPYBCM0GRbhBZRLJaKyQEgByuH0poCq0NjcIQzYoo5wOWvNixw+7PHhj34HR94W8se/fwKhFZ72UCbDiGvz6YTAms1iDu4tiNCd77hvqwx2PQu8VlTwtGZmde2Vky++fltFVEiTlG6Ro4ICTxuMyxCui7QRNtMUeY7QGe1ui+X1ZZRn6C8pbFCAFmR5QqgE0oEnKhS9giJ3FIXB96sYI5BK4WmJK3Jc4RCpT1EsocgwZoNOd4b7H/gABw7uZ3nxLMpXSM+RFTnmSlZvxaYRWzBbIXATFXsjAHpgeLMkYs11IHA1ZirPw2XFXE8bKjkURtFK2sRGUMpXEWYdii6FraNVhCtSd/nyaaHjNerlGrlL8L0KBkVuMjJbUGRtyLuIvEm9PIAWAmMtFoP0QgprEDmYHIq4QGQ+wgqEdKwsL9PX18ettx2i2hiCosC6UdY2LmJLILUid5uSt3MOXys21jOsdW/qptkURIYihJBElfoWODemhVp5iMHodO34c6TzKVpYCtkldwWZXUTZYXx8hMiJOx6tZIWLZ55nl9/P0M69dDNDKZ3E+SUKndBKF3C2jZYZ7c4CaWeV0eFJnJE4WcJ5HnGqkM7hCo22HgIf6UZJeussLQqmth+mNlhnuTNHIeq8cHINq3wKF2NRzhjjtFLSmQKBZHhwYKs4+hZOcPnMszgrsdEAUWOTFlvrkHKTNUitwBUv7u33zOnZjnJUQfST5RlZASUhydIUIRPiVo9arS6SrMszl19lvLfM2OQR6i5AElI4iVMhlX5Bns9QKiRnj5+hs77E/n13YtBYExCoCkWaojIgUVjRjy0MRdElS3127rmbjcTSGK3ywssbXFqapdZXx/MCsqwQSkqBtUgtCX3Fvj175sQ3S4eV1mRJxpNf/AbHbglgqI+2EaTGo3AC04kJy+5Eo8/bt3Pn6J+cPD17T2o7pEVO5tZQbgHfl8TpOn4U4Xsldm3v59Wl0zz15FcZG5mmFPQY3DZKq7PB8uoSSbzG/j2j1MYm2XtrxJNfeojBWpWoPI6MHIYMVyiEsWAt0jMUKqVrLhLUBMPDuzGeJKyU+fLDf0EiHSUb45kKEoEToLVAuhQsybG7jv5BGIZY525oEdFXOyekAKEIlMamBRN9I0y3qmTOI12aoe1W83ved2z6w+/a872//Nt/9NzCQm/c2zuBkSE6CsmLlE68znBk6bZaTIzsYOT+KU6emObMqVM89uhX2H1oL6OTu5jaeRSHxtNglUetP2HfgQO8cfpVbr+9Qp5phA9OBDhyrOhgZZvCWtK0YN+eY/QP7oFQ8MSzT/HZP/si1coQUhRgQRiBkuALhytydu7d+fTKyuyFK2z3TbnAFR34qoFIib1SFRZOKCXk4uXEtBbKJAN67kMf/o4HL04/+GPB/QdBa8KqTxpbdJxjzRKrqxvE7YBttRHu2HWIdx68l5SMPBDI2iCyNIwsexSyTeYMXga79h/k8rnjLC6eozYqNhO0okwgJI6CPPZJemsUseDZx1/j2D07ePHEcX7ld36HPAU8R1EUzkMLwaaQ42yPRr1E/0Dj06try8U3bZC4cW1sSeMObNYmUpV6V9kv6dD7ozPnz5tHHn8m3nNodCy/kLGyXjA0bFlu9lCiRa0+wHOPPcoX//uTHN2/l9ZAQOTGGa7tpdI3SDQ+SmWgRqF8Os01/DCBShlNBc+kHH7bvTz/7CPcPdCPkwZrahQqoJAWWVRQnuHk9Aw/+yt/yMDw59hodZAKqtUay8kajSgUWkhSU6CVxrOGgVp5fny0/uoVWfxqoffGFhl3owhwpRIUL1JS+ffP9Vbvcp469srZN/61jsXD3U74eb80cu+5mbQ2vE8xOHaQxcVvUJaT+eiOI16z9TLO1mns0QwUZcz6IisL89jORcTKZbyoH51b6G6QD+TUtm1ndNtehidvp3r+JLMzp4p9+45oS0SvcKAsWrXxZMrnv/EYK6FH21pKFclQ4JMmGVpEKKkwLgNPYIuYunaUZfbPqmF22m6pQe6tnKC4mfc5h3NuKM/5xRenp/9Z1i3Yt33Xw41K/r8fnRhh4NbDjS8/+PBPPv/imcP33L0LGc8wMHyQuOPcnv0T/PAn3snZUxfYeecnqU8eobvYo9NKqUQNdB6RJmCEYaW9iOie5av//c+Ipcf9H/k2dt+2j05nXScyQtoQTyhK0qEix2un53nx9XmqpQBMgVaSjsmxShJ6PoEvAYExAl84otBzSobnLpxfuqmzzb1Ff8CWWKiVCzPsyIOPHv/5Tq5/Iu0V7B+f7EWF/dqewQr7tw2M/NUTz//FUmvj8DNrG8xMLzPYfwq5/V1Edeea82sMDTkWZx0PfvY53vnJ/Uwcuos0K9B+BVYdZRPhum2oD1BRw1yYbVJt1MnaGX3VEEdE3GxSGQjJQkdqM4J2zIOPvMhyK6VejRCZJfA8EpeifPCcxBlDWsQIGeFrHy2NKHIrzp+d31rm7q01QYftB+6S8NNnZ2tB0+SHnevvd3GHW7fvfWr/np3/pL228oqol0snVpv/9sz02btVELHUke6hr50Q+w6OYRfmCUeCIApLrMQtRkY0g17GqT/9A1amnkFENXbechuWEtYGCJPRS1fo5Bvcdvgwo7tHaaYLIBOMs2gdgfWRRUESJ5ybfoMvf+lpBqtDCGFxqiDwA4osx5gET0VXaX4oNVp4OOfodtcGClNgjL2x8nMDE/Rrwwur7Xd3UvXAXM/SyXKMKNAU3HnLnj8sBd7pvBd8/0vTlz85vbzywbJ2+J4jLfniwedmuH+6w769F8mIKPcNML7/EM//j79idLjK/bffS5ZGNI0hnrtEaXwnaJ+0E5PNLyPrA4xO7SYTMUaV8aOIuh/gsoSku4anJHF7mf/0fz+KSTR9folm2kRqQZok+AgcgjSO0YGjMJZQCJxwZMbhpPuXQvDw+MQQ35QILcwsf+Ti7MYHiRSiZEDmtFsdAk/wxPNP/EKaml9MMrFtMc1Jwoh6kGHyHgUwlxo++9cv8ws/cSsUVbKwQmN4gkNvv4fFs29gLp6gokcIK4MEqkGvtU5qC+L1Nn1B3ZYn90tX6Se3S0hZJe9uQFFQ5G0QjvmVNlF1hDvuvYszJ76GpyM6eYvUWTxh8Y1ASo9US6zYbLSIaiEUhk6WEwXq3SUl/4/RseFfl1K+yRFqgI31zj4v8oZ1WWGLBGMdTips4LFsxaTyPNpJjA40ZSXQnkdR5BQCVL3BYy9N86HXBbfsudXKVpPy0KA88PZ72Di80yWLVvTms27W66pwfSF0KqM6UGFw5w7Cmk9aKRHTQwqLJwKyROAJH2TIaqeDX93H6M7b+KEfu5fp4x2efPwFtAIjFFqpzQqx2EyhCy3JC0OWZ+AMcZbhvCAURffnu93ktHN8rshzhFA3qcIdVbHGVD0TsLYR40SILRSZ8imALIuREkJhqfuKNDEkOfihTy9JqNUH2Xbr3cxfvOyGlbRhPZKmMeC8Rp2gXmHgYLWc5wYPjyKJ8OUYSoYU0srAeKgiJRcRhXDkXhmjYjKTUUjL9om9+N4Ynlb86P/yE7x8+lMsnu8hvQgnHKmwWAOB1GAFxkqSPEVpSe55bGQCacLy8Vcvvm9ysv9zo5NTpMXGjU1Sc/HSyHy6Vl1OW/RsttnfqyBP2nR7TQqXgjSEno9vNcb6WB2RFRbX6XH33e+gsfN2TDlUcWvJi1vLtLsdEcmK8AoPmeRUJASeIap7iMhiQkNMTKq6GBVjih4yzigXCtHNyTs5UX0Eb/gAXTVK1vPZd/t+/sW/+pf4oY+NC7IspeVS1yoKep0OcSfGGkmaJMRFTGwLG+fCpZkmj83ekdHa1KEjB9h9aPxGAJxCC2sxiSBTEQkO51l8T1JRIWVXoSwH8HQfG5kg1x0sG+hcU1VlPvzAPmS8Tu58Xr2wTNzpINaaaCOJPIuSCU5ILH04O4ijjE9I6Dx86yBLybsxedql3WuTGA+jxxmevBshFU7kGF3F5QN82zu/kw989zvPMZgt5SV9ITW+yAWu4wmatlN0abmWy7KukaQpoldYNjzNknXve3165eGk15t4UxSY3DG5sLLc7K12N0qeshibY81mE4SwDu0JKhVFYTtkXoy1EuUkwqR86Ds+wOEDx0h6FylF4zz/3PMM1xbYe1BhwpD+xiBKlxHaUrguUkukC7Cph7OQxk3yrEfc7ZEVMX5Zgy5T7R+kVB0nTh1KWayXkpuMIIz40U998j/a8safNFulqQf/x8uH+8cYW5t3y6lxi2luZBDYfxqnyR1SqDVjMlkYOVmSPsfPNXdnn3/yc/e8e/xngK9fBWDvrfueDi/P7ZhZPXm7sAVWSJxxaK03+wGUI85aZEUPgyNU/SRxhyNHdvF9n/ggSRKRF2VKQYOyLnHy5bMIuUipucj4+G5GR3cgwjJeWN4UPYzE5j5J25DFMb1eSlYookoDFZQRYUj/6A5MJhDOJ8sKpM7QOqBwgp27D3/HP/j4D/67//z7f7lgXf7M+FRFrMw03RWTNs49mOeZjyXWSu3sJeJTFvyDh/rGV3rNdz74yMJv/jLcc61Vthb+VX2oZqNq6fbVxR5hGJJbg3EKqTwKA3magPJREmyas21E8vEfuJ++wZAijxE6Q0jL2OggazOnyVsh3XSa2fUlVi+8RlBpUCr3YYzG0x7dbovOxjqlyuRMrX9fo69/vBJWB2glMDK+Bx30kRebSqXWClSIcx7WeDgRb3vb0fvCf/SPR7LHH32NNMndDZu2oCsEXScA3Emc+EljDEffM8jq+vr4q1+P+25YAvXh8dOl/uHT1aHt8Ze++OivzS8u9HklTZxnKAnK6c2dXS7A01V0sW4/8Q/eIw/s3UWRB/jSggMrQsYnRph+7SReOkUlWkJbgXIdmsuLLFzOECIijS1RVGJsbJiRbf1RuX+wJLwqG6mlb9tugsYYeZFirAVh8QOBpUuRCaSsYVzq97pNefjofj79B7/KL//az5OmOUKJNxf4txI7hCBPLUXm5qRg7gYAKv2DSCkpldJPj28f+8rAgfCT1iamub5i2s2sXi8Vq9XAH9NF9CPttaw21i+eveW2oW2ZW58MSyNIFFns47RmcCIk6oP51hp7RxsUfoAuB5T7Ovh2Fa0svtfH0OBtlEo7icLqgFIBnUzgN0ZddXibcBbywuKcRYgMnMIViiLLMGYN43VHk6wdpGnMkbft5Xv/p49y+cSfs7C8yhbXua712V1TvK9Q4Zu7xJy1WOfIixzr7BnP179krER7AqlAaghCrUYaw3+Ublv5oYYq7fGDwaOlcJJqbQhtJ0mcQdUuUtYNBrZdIhFtav19eNV+YgRRZQLj2lQqilqtDyPreNUKxpVZXc/wamVGd+4RLrOkztLpdtDaEoUh1uSbSg89PN+xunHpv61uzCxKqQDBhz78ARq1Pv63f/K7bHS6qODm7PZKyu/eVP+4qgcIuaUIXfnw9TmDA1M4A7wUldOXarXgn4e10nfpsERUqaJFlaGRKp0NQ1lv5661Lm+89AXqpQYyalAKKqigShSW8LVEaUhERreIkbqK7t/G8OTezd5gocnydHNvgtgcoCkEoojQQhBEitZs9trZC/N42gdg+uICI5Nj/PQv/iC/8XO/j3NbNQB7JdBfv7v0LRWhG/sDb5aOnINyRdEY7mAMlOplZf2MoBRSq48iI8nXH/sMykrefvdHufO9H+HMyWdIc4/+2ig9ofCqDZT2UFpjgTjPKNeGqPQNsrjUoxAewjqsMAgBpShEsNlYbYHCbW6AsIkh9PvZNrQbpbwbmP0D79/O1790gkcefhzlg7uuxCfeer/EFXzEje3R1zVH5DkMj1TZsaeKkQm5UBgRiFK5hJWKVPj85m/8FH/z0O8SVQvOnnmR2tgkH/z4T9MlQvhDqHCMXJZwEaS6xXK8gi0P0z9+HzrcRmI7LC6fQ3mbe3s8T6OURggJVqOFRnkdnOrRydaIY3O2Vt5OORyjEm7beo4T6mF+47d+hb23bMekN7b7XBVEb2oF19fXwm+QxsRm+9vUVJWJnQO0CwvOUeCInU1lEZlGX737x3/5uzz51MN87L13UPcCmp2XmJ9vsP3IUTpzjyM3NAP1HXQKkL0Wtkg5eeo4937n3RBnGCLKJUM3fgnsfpQdxHk9CqeQSmDyAi0VQR5gnApzshNz63N/KYW8tqvtOlmvWqtSrpbZrI9d2c4r3rz1Zevx/w4AOWSjwxlhoMIAAAAASUVORK5CYII=
// ==/UserScript==
//

// http://www1.ocn.ne.jp/~hatt/3gkb/
// ↑を参考にしました。

// 
// 戦国IXA用ツール ver 1.8.6 + 01-38+ (server9.osafune)を元に修正
// 修正点:
// ・ 「選択拠点のデフォを選択拠点に」機能の追加(修正元で対応された)
// ・ 空地戦力をその土地にあったものだけ表示するように修正
// ・ 全編成画面に最大補充ボタンを追加
// ・ Ajaxページャーで、ページを移動する際に、上部にある
// 　「選択中の部隊へ」ボタンが前ページのもののままであったものを修正
// ・ 城主プロフィール画面の領地情報に陥落中かどうかの表示を追加
// ・ 外部URLより取得していたイメージをローカルから取得するように修正
// ・ 内政メニューに施設のリンク追加
// ・ 領地画面に合戦報告書のリンクを追加
// ・ 施設の画面に場所を記憶したり忘れたりすることが出来る機能を追加
// ・ 所領ソート機能で、不具合があったので、根本的に修正
// ・ 右クリックで、現状の地図移動だけではなく、コンテキストメニューで各種情報を参照出来る機能を追加
// ・ いくつかの機能でFirefoxで動かないものを修正
// 　・Ajaxページャーでのポップアップ
// 　・ダブルクリックでの合戦報告書表示
// 　・陣取り禁止区域表示
// 　・全部隊解散
// 　・全部隊配置
// 　・戦況マップ（若干挙動異なる）
// 　
// 既知の問題点:
// ・ Firefoxで動かない機能がある。
// 　・お気に入り部隊をうまくデッキにセットできない
// 　・「敵襲を枠内に表示」するとうまく動かない  （とりあえず解決 婆羅門 20110721） 
// ・ 地図の右クリックメニューでの、
//　　「城主合戦格付」「同盟合戦格付」で直接検索できない場合がある。
//　　「城主格付」「同盟格付」が全体格付になっている。
//　　どちらも、国(c)を直接指定していないため。別ページを読まずにcを特定出来る方法があれば。
//
// TODO:
// 1. 敵襲のサブウインドウ表示（距離、スピード予測）
//
// 婆羅門機能追加
// ・地図の右クリックメニューへ拠点報告書を追加
// ・同じく、どこ近を追加
// ・同じく、@を追加（マップ右クリックメニューとデッキ）
// ・JQueryライブラリを使用してソースをコンパクトに
// ・移動中の時の表示拠点並び替えがされない問題の修正
// ・部隊編成画面で部隊スキル窓移動 20110901
// ・マークした敵の拠点を地図上で表示 20110905
// ・永劫の秘境の全部隊出発対応 20110912
// ・右クリックメニューへプロフィール・同盟情報・出撃追加
// ・全解散のパフォーマンスアップをw24.mouri.ne1/1.8.6.216.20110904版から借用
// ・同じく、全編成: グループアイコン右クリック時に逆順
// ・IXA状態表示仕様変更に伴う表示されない問題に対応 20110914
// ・検知しなくなった敵襲に対応 20110915
// ・地図画面で隠れたパネルを上に出す
// ・サイドバー表示位置調整 20110917
// ・敵襲画像変更 20110919　アニメーション化 20110921
// ・敵マーク画像をソース埋込に 20111001 修正 1003
// ・Informer機能 20111003
// ・右クリックメニューへ敵襲追加 20111004
// ・３章空地必要戦力に対応 20111008
// ・自分の拠点名称に'('などの特殊文字があった場合にマップの右クリックメニュー出ない問題の修正
// ・trim関数を自前からjQueryライブラリへ 20111029
// ・「ここを記憶」でゴミがくっつく問題の修正 20111029
// ・どこ近で、自分の拠点を調べた場合、その拠点（距離0.0）は表示しない 20111030
// ・戦況マップで３章の黒田家・石田家に対応 20120122
// ・IXA占いの画面構成に対応 20120727
// ・秘境画面変更に対応、IXA占い微調整、戦況マップ微調整 20120809
// ・５章UIの地図に暫定対応その１ 20121027
// ・５章UIの地図に暫定対応その２ 20121030
// ・５章の空き地必要戦力に対応 20121213
// ・Map上の右クリックで城主名が(Lv??)がくっついた件の対策 20130131
// ・プロフィール画面で本領･所領･出城の陥落状況の表示 20130201
// ・６章の空き地攻略時の必要攻撃力に修正
// ・MAPの右クリックメニューに関して問題修正 20130712 暫定修正版

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function Moko_addJQuery(callback) {
	if (typeof(unsafeWindow.tb_init)!='undefined') {
		tb_init = unsafeWindow.tb_init;
	}
	
	if (typeof(unsafeWindow.jQuery)!='undefined') {
		jQuery = unsafeWindow.jQuery;
		callback(unsafeWindow.jQuery);
	} else {
		var script = document.createElement("script");
		script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js");
		script.addEventListener('load', function() {
			var script = document.createElement("script");
			script.textContent = "(" + callback.toString() + ")(jQuery);";
			document.body.appendChild(script);
		}, false);
		document.body.appendChild(script);
	}
}

// the guts of this userscript
function Moko_main($) {
	var TOOL_NAME = "戦国IXA用ツール";
	var VERSION_NAME = "戦国IXA用ツール ver 1.8.6a +婆羅門ツール";
	var options_grp = {
		all: '全般',
		chat: 'チャット',
		deck: '部隊',
		dungeon: '秘境',
		map: '地図',
		faci: '内政',
		unit: '簡易編成',
		sol: '兵舎',
		grp: 'グループ',
		battle: '出陣',
	};
	var options_param = {
		raid					: {tag: 'all',		caption: '敵襲の最上段表示'},
		inside_attack_view		: {tag: 'all',		caption: '敵襲を枠内に表示'},
		tohankaku				: {tag: 'all',		caption: 'あらゆる入力欄で全角数字を半角に強制変換'},
		sidebox_change			: {tag: 'all',		caption: '合戦向けサイドメニュー表示'},
		timeout_countdown		: {tag: 'all',		caption: 'タイムアウト予想時間カウントダウン'},
		pulldown_menu			: {tag: 'all',		caption: 'メニューのプルダウン化　砦表示：'}, //add
		toride_count			: {tag: 'all',		caption: '砦表示'},
		menu_reversal			: {tag: 'all',		caption: 'メニューと資源バーの位置を逆転表示'},
		non_cardview			: {tag: 'all',		caption: 'サイドメニューのカードを非表示'},
		sort_village			: {tag: 'all',		caption: 'サイドメニューの所領ソート'},
		sort_village_as_created	: {tag: 'all',		caption: '所領ソート時に本領所領を作成順にソート'},
		sort_camp_as_created	: {tag: 'all',		caption: '所領ソート時に陣を作成順にソート'},
		place_skip				: {tag: 'all',		caption: '該当文字列を含む所領を非表示にする'},
		place_skip_str			: {tag: 'all',		caption: 'スキップ文字列'},
		ad_sort					: {tag: 'all',		caption: '昇順降順'},
		fall_check				: {tag: 'all',		caption: '陥落中の表示'},
		atkpict_replace			: {tag: 'all',		caption: '敵襲画像を置換'},
		chat_mapcood			: {tag: 'chat',		caption: 'チャット中の座標っぽいものをリンクに'},
		chat_mikire				: {tag: 'chat',		caption: 'チャットの見切れを修正'},
		chat_linkchg			: {tag: 'chat',		caption: '「チャット履歴」のリンク先修正'},
		toubatsu				: {tag: 'deck',		caption: '討伐ゲージ時間表示'},
		refillhp				: {tag: 'deck',		caption: 'HP回復時間表示'},
		pager_ajax				: {tag: 'deck',		caption: 'ページャーをAjaxに'},
		def_honjou				: {tag: 'deck',		caption: '拠点選択のデフォを本城に'},
		deck_check				: {tag: 'deck',		caption: '拠点選択のデフォを現在の選択拠点に'},
		rank_lock				: {tag: 'deck',		caption: '一括削除の非活性化'},	//add
		hold_butai				: {tag: 'deck',		caption: 'お気に入り部隊編成登録'},
		favoriteSort			: {tag: 'deck',		caption: 'お気に入りソート登録'},
		all_dissolution			: {tag: 'deck',		caption: '全部隊解散'},
		all_deck_setting		: {tag: 'deck',		caption: '全部隊配置'},
		hikyou					: {tag: 'dungeon',	caption: '部隊の自動選択'},
		hikyou_all				: {tag: 'dungeon',	caption: '全部隊秘境送り'},
		//hikyou_where:   {tag: 'dungeon', caption: '秘境の自動選択'},  //del
		map_starx				: {tag: 'map',		caption: '☆リスト表示'},
		map_reg					: {tag: 'map',		caption: '座標記録リスト表示'},
		map_rightclick			: {tag: 'map',		caption: '地図上での右クリック挙動'},
		map_rightclick_type		: {tag: 'map',		caption: '地図上での右クリック挙動のタイプ'},
		map_butai_status		: {tag: 'map',		caption: '部隊行動状況を表示'},
		all_map_status			: {tag: 'map',		caption: '戦況マップを表示'},
		map_rightdblclick		: {tag: 'map',		caption: 'ダブルクリックで対象の合戦報告書を表示'},
		prohibitionArea			: {tag: 'map',		caption: '陣取り禁止区域表示'},
		zoomMap					: {tag: 'map',		caption: 'カーソル選択対象を拡大表示'},
		mapAdjust				: {tag: 'map',		caption: '隠れたパネルを上に出す'},
		faci_list				: {tag: 'faci',		caption: 'レベル別施設＆建築中数表示'},
		unit_list_hp			: {tag: 'unit',		caption: '武将HP表示'},
		unit_list_hp_bgc		: {tag: 'unit',		caption: '武将のHPが100でない場合は色づけ'},
		unit_list_total			: {tag: 'unit',		caption: '総兵数表示'},
		unit_list_group			: {tag: 'unit',		caption: 'グループ機能を使う'},
		unit_list_icon			: {tag: 'unit',		caption: 'グループ機能使用時にアイコン表示'},
		unit_list_sort_def_grp	: {tag: 'unit',		caption: '強制グループ単位ソート'},
		unit_list_hikyou		: {tag: 'unit',		caption: '秘境部隊に兵士1セット'},
		market_maxsoldier		: {tag: 'faci',		caption: '市での取引後最大作成兵数表示'},
		market_desc				: {tag: 'faci',		caption: '取引を上部に表示'},	//add
		non_back				: {tag: 'faci',		caption: '復活するボタンを非表示'},
		map_potential			: {tag: 'faci',		caption: '空地戦力を表示'},
		season3					: {tag:	'faci',		caption: '空地戦力は６章対応'},
		facility_selecter		: {tag: 'faci',		caption: '訓練施設内に他訓練施設リンクを設置'},
		facility_tool			: {tag: 'faci',		caption: '右クリックで施設操作ツールを表示'},
		facility_maxsoldier		: {tag: 'sol',		caption: '各兵生産施設で最大作成可能兵数リンク設置'},
		desc_soldier			: {tag: 'sol',		caption: '上位兵を上段に表示'},
		def_num_of_soldier		: {tag: 'sol',		caption: 'デフォルトの訓練数'},
		def_kind_soldier		: {tag: 'sol',		caption: 'デフォルトの兵種'},
		merge_fight_info		: {tag: 'battle',	caption: '合流攻撃検索に出陣確認情報表示'},
		extra_inform			: {tag: 'battle',	caption: '情報表示(旧Informer機能)'}
	};
	var options = {};
	var OPTION_TAG = 'ixa_moko_options';
	var OPTION_PREFIX = 'ixa_moko_';
	var HPres0 = [18, 19, 20, 21, 23, 25, 27, 29, 31, 34, 37, 40, 43, 46, 49, 52, 56, 60, 64, 68, 72];
	var HPres1 = [90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150];
	var groups_def = [
		'','','','','','','','','','','','','','','','',''
	];
	var groupsx_def = [
		'#888','#888','#888','#888','#888','#888','#888','#888','#888','#888','#888','#888','#888','#888','#888','#888'
	];

	var groups_img_def = [
	"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00qV4M.%15%AB%A8%A7%B8%A6r%C3%B4%7CI*%15%FF%FF%FF%E7%DC%9B%DB%CE%91W%3C*%94~SY%3B%1FlWI%88qH%F3%E9%A5P3%1FeI)%AC%99g%81rhs%60T%88%7Bs%9D%96%92%A4%9F%9DeN%3F%89ug%8F%84%7D%7Dc%3EZ%3D*%95%83vfK9%B9%AC%A4%A1%90%85%D0%C8%C3%7DgX%A0%8C%5DqYH%CF%C1%86zi%5E%96%8D%88%5EE4%FF%F7%B0B!%0B%B2%B2%B2%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%83%01%C4%19%19%8F%C8%A4r%C4%01%09%0D%98T%E2D%ADZ%AF%D8S%22%851xR%14%95xL.%9B%C7%A5%94%A739%BB%DF%E2G'e%82%DB%CBi%FAyr*U%EEh)ze%16%01%03%0D%01'%02e%26%12%16x%82ue%13%0D((%0E%10%92b%26%01%00%05%19dy%9Ab%02%05%07%96%0ARV%05%04(%04%01%A0b%A2%93%95%97%24%B7%B8%24%08%96(%0A%17%81%83%9B%01%A7%96%22%96%00(%24%C6%24%82)%B1*%B3%A4%0F%11(%03%C5%C7%C9%CB)%17%7F%C0%9A%0C%0D%07%10%C8(%C6(%C8%CA%C9%0B%A9a%B2%91c%17%0A%1A%00%0A%96%D6%BD(%08%D6%08%BB%08)%DD%D1%A0%01%10!%E2%1E%09%7B(%0E%1C%3C%40P%C4%02I%01%05%94(%C1%80%9C9t%DA%26J%F0f%C6%84El%E9%98%15h%E7.%98%0A%0AZ%3E%9E%CB%96%2C%02%89%00mJ%8EJ%D1%A0%A0%A5%83%D5%12%1Et%60%E9%40%0A%98%8Ec%B6%A4%00%00%81%A6%A0%05%01RtJ*(%01PR%17R%10%10%91%E2%00%82%00%1APDXpp%40%00%06%A1%DE%A1%09%D05%851%02)vE%08%C0%13A%81G2%C9%3ChU.%C5Af%D4%1C%A4%A0vNS%40%15%0Fv.%90%EA*E%3D%B4%E42%3D%85%B6%00%C0W%0AJ%0B%94(%20HB%02%08%10%0A%2C%8AK%A6%82%84n%16Ll%16%ADB%80%04%09%9B9%03%B2%93fC%CC%D5p%12l%F8%90%02%2Cl7%0CR%7C0%10%22%C5%83%2C%C0%B3%3C%E0b%20%08%00%3B",
	"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00qV4%88qH%5D%1E%19%DB%CE%91%AC%99g%CA%14U%FF%FF%FF%A0%8C%5D%E7%DC%9B%B8%16K%B8%A6rM.%15%9D%18%3C%94%197x%1C(K%20%0F%81%1B-T%1F%14%94~S%C3%B4%7CY%3B%1FeI)%7Dc%3E%89ug%C1%15P%A6%18A%D0%C8%C3o%1C%23%A1%90%85Z%3D*fK9%95%83v%B9%AC%A4%7DgX%F3%E9%A5qYH%8B%1A2%AF%17F%CF%C1%86f%1D%1E%FF%F7%B0B!%0B%D4%14Z%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%83A%F3%19%19%8F%C8%A4r%F4%D1%08%0D%97%94%E0D%ADZ%AF%D8%93%20u1%80R%0C%95xL.%9B%C7%A4%14%C8%039%BB%DF%E2%88'U*%170fL%02%AEJ%D3%C9%05%0F)R%10%05*%18%83)'%24n~uc%09)(%26%13%15%0D*%0D%00%93%04%14%97f%8Ee)%22(%22%16%8C%02%04(%AA%01%02%86e%A0d)%26%93%8A%0C%A2%A4%07%22%15%02%7Bd%B0%05%25%25%B2%93%12%01)%01%AB%A2%22%12)%0E%8F%7D%83%8F%11%89%B3%A3(%01%A3%04)%A9%AA%08%01%0B%8C%D0%7F*%DB%26%26%A3%22%E6%AA%93%B3%EB%AB%1Bb%B0%10Z%92%B4%C8%03%89%83%0A%AA%04%0F%BD%B0bJ%2CP5%C0%02%02%82%E6L%0CP%25%82B%98x%D1%7CiZ%17%60%96%89D%13%15%A4p%25%EE%99%0AT%EED%2CDp%A0%E4%3E%14%00%3CA%1C%A7B%985w(%26%60T%05%C0%23%C0%13%C8%10N8%A8%00%80O%9D%094Uv%14%93a%81%08%11%07%2F%D63Q%F2%C0I%87%BE%22%AAx%40%60%00%05%8B)%06N%020h%C1%00%04%00Z%A1%91%FA%A0%C2%20%AC%16%D6%A53g%CD%D2%D8q%09H%08%C3%BAo%94%D2a%08%16dx%EB%91%9C%5DM%12%B0%9E%9D%24%20*K1%F5%06%0C0V-%A1%DD%13%86%FB%A6%98%C0%D4%82%A0Y%DA%06%110%11%00%1E%DF2%10%06%9DpP%C0A%A20%B6%14%F5Z%D9%F7L%82%12%1C%1B%A5%E8%D0%86%8Fm1%02%3Aphv%9B%8Fi%0E%06B%A4%88%90%A5x%96i%5D%82%00%00%3B",
		"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00%A0%8C%5DG!%13qV4M.%15%E7%DC%9B%C7%17c%FF%FF%FF%97%25%8B%F3%E9%A5%DB%CE%91%8D%26%86L!%1B%AC%99g%88qH%B8%A6r%60%23%3C%5D%1E%19%CA%14U%81%1B-%88%26~%94~SY%3B%1FeI)~%25nK%20%0Fe%23D%89ugQ%22%23%94%197y%25e%B8%16K%5B%224%A6%18A%95%83v%B9%AC%A4fK9%A1%90%85Z%3D*%D0%C8%C3%83%25v%BE%18_%86%1B5%8B%1A2%7DgXx%1C(t%24%5D%C3%B4%7Co%24UT%1F%14%9D%18%3CqYHf%1D%1Ej%24MV%22%2C%AF%17F%CF%C1%86%FF%F7%B0B!%0B%D4%14Z%93'%8F%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%83%C1%14%92%19%8F%C8%A4R%162%09%0D%9A%1CdF%ADZ%AF%D8%19%24%A71%88r1%9DxL.%9B%C7%A9%9Ch%249%BB%DF%85%C3b%94%B3%BD%EF%E4%F8%8E%96%AB%E3%C5%20%1Cvez%7B%7D%83n%203*9%02%039%12%1Eb%85%86~c%116%996%1C%03%00%8F88%04%8E%10(%07%3B%A7%95%88%11%18%7D%AD%0E8%09%03%A07%088%0D%0F%A8%A7%7C%96%3A697%C0%C1%C0%16%A0%007879%19%B9%BB%AA%AC%AD%D09%C5%0C8%08%B1%2F%A8%CDc%5B%D1%D0%B5%9E%00%B39%13%BA%87c9%0C%C2%A0%04%C0%B5%EC%C29'%E5%BC%1CZ03%D2%A0%15%BF8.%015%00k%2C%9B%87H%C7%AAV%A0%18%F49vcA.f%E6%C6x%90%96%E0%15%0E%00%16%1C%84C%90C%C1C%82e%F2Q%C3%E1%80%405P%16%3A%7CL%15%12%94%80Y%00%00P(%F6a%87%02%1A%17%B2E%3C%E7%B2%D8%02%94%1A%01%12%84%8AWC%C08%90d%F2%BD%BC%F8%2F%40%83b%01%06%10%E8%88T%87%84%3E%3D%91%01pp%03%80I%5B%C6%1CVE%F7%15%14%A8%04%14*%04XJS'%2F%163%CD%A2U%FB%A0%83%82%0DOg%05p%8B%C8%C6%00%047%1A%D0U%89%EA%AE%05%A18r%E4d9%A9F%8E%00%19%16%AF%E4%23%40%C0%5E%A4z.x%5C%99kB%0B%1A%E4%40R%E2LZg%09%09%A3K%97%DEP%82D%0E%5C%AAc%3F%C8A%C2%C0%8A%1C%0B%02%EA%DE%CD%5B%F7%02.%06%82%00%00%3B",
		"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00%DB%CE%91%88qH%F3%E9%A5M)%0EeI)d%3B%14%FF%FF%FF%D8%952Y2%11%AC%99g%87V%1DM.%15%EF%A78%E7%DC%9B%C3%B4%7C%B8%A6r%AAq%26Y%3B%1F%92_%20%89ug%E3%9E5Z%3D*%A1%90%85%94~SfK9%95%83v%B9%AC%A4%C1%83%2C%D0%C8%C3%B5z)%7Dc%3E%7DgX%7BM%1AqYH%CF%C1%86%CC%8C%2F%A0%8C%5DqV4%9Eh%23pD%17%FF%F7%B0B!%0B%FB%B0%3B%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%83%81%93%09%19%8F%C8%A42%94%E1%08%0D%93T%E1D%ADZ%AF%D8S!51hR%1D%95xL.%9B%C7%A6%94%06%239%BB%DFb%04%265%82%BF%EB%E54%3D%7FRP%DC%0C%5B%05%07dzxc)%24%01)%0A%26%8E%8F%26'%04%02%01%03%84b%86e)%22(%00%25%9F%A0%A0%02((%01'h)%7Bd%9B%A4%24%AE%A4%0D%AE%B2%24%1E%A7%98%A9%87b%AC(%A9)%A4%22%A9%09%24)'%26%97*%99%AB%9C(%B2%B0%24%0E%A4%09%08y%B8%9A%CB%A0%A4%9E%A0%04%D3%85%D5%CA%A4%BD%BF)%0B%22%09)%26%D4%AA%88%CB%CD(%B1%CB%0F%03%EA%B9*%BB%D8%9D%A1%04%03%7F%A8%EB%BA%CB%A4%F8B!b%00%95%01%11J%20%60%E0%AF%DE%BDO%D9%40%5D%18%15%A0%40C2%1Bv%CD%12a%CE%D52%01%AA%92%E9%0A%F0%40%40%83%14%17%00%04%20%00%40%C00%12%AD%F8%DD%FA%87%C0%5C%04%01%00%16%00%40%F1%A0%04%A9~%00%09H%11%D8pQ%0C%84%05%A3%16%40%13%11%40%E8(%12%3By%1DK%C6%60%C05%98(%22%08%0D%C0%F4%D7%BC%A2%23%06%A2%80%08%20%05%01%02%C2H4%F8%A9%C0%9B%AA%03)v%02C%90J%01%84%02JIuZ%90K%A4%84%5E%1D%18%8C8%06!%C5(%07%0B%DA%BA%CD%25%F8%0D%88T%03%D2%D1%B3S%E6%C01j%15%DAP%DE%5C%A0%82%05F%9B%ED(Ha%C1%C0%87%14%08%B2%A8%CEB%B7K%10%00%3B",
		"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00%F3%E9%A5%9Eh%23M.%15%A0%8C%5DY%3B%1F%B8%A6r%D6%1DXeI)%FF%FF%FF%88qH%F3%92%40%DB%CE%91K%20%0F%E7%DC%9B%B5z)%AAq%26%7Dc%3E%87V%1D%9D%18%3Cx%1C(%94%197T%1F%14d%3B%14%94~S%5D%1E%19%89ug%92_%20%AC%99g%C3%B4%7CY2%11%C1%15P%E3%9E5Z%3D*%B9%AC%A4%D0%C8%C3fK9M)%0E%95%83v%D8%952%AF%17F%A1%90%85%B0f%2C%C1%83%2C%7BM%1A%97K(%EF%A78%A6%18A%B8%16K%CA%820%9C%5E%24%CA%14U%7DgXqYHpD%17qV4%CC%8C%2Ff%1D%1E%8B%1A2%CF%C1%86%FF%F7%B0B!%0B%D4%14Z%FB%B0%3B%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%04BT%A2%19%8F%C8%A4%92V%12%09%11%19%9E%A5F%ADZ%AF%D8%9A%85%97A%84x%0E%9FxL.%9B%C71%5Eh%A49%BB%DF%0ACe%C4%BB%BD%EF%E4x%2F%C7%AB%DF%5B%11%11%01%01%26fz%7B%7Dvo%0F%04%03%036%02*%3E%1F%1F%3E%87%88~o76%3B%9D%07%01%0E%7D)%06%3D%A5%98%8Ac%0F%83%83%11%02%9D%1B%3C%11%24%1C%0B%02%12%A6%A7d%0E%026%BD%BE%9D%05%BD%1B%9D%0B%3C%B8%7C%99b%BB%BE%BF%3B%C1%CC6%C6%A6%C8%A8b%AA%AB%11%3C%9D%03%1D%2C98%02%03%02%13%D3%89%A9%7D%E8%E8%DB%E9%1C%3B%0B%079%A5%D4c5%09%3A%F7%F7%00%3B%00%3A%FA%FC%F8%3A%12%E0%90g%CE%1A%BA%0B%02x%E8%D8%A1C!%C3t%3C%18%B8%20%98L%CC%0DW%00%06%2Cl%B8%B1%00%04%06%14p%E5%22%A3!A%A7%06%0D%1En4%A9%83%00%B9r%15%7DthW%2Ce%01%87%0D%0B%EC%83%07%B3%9A%03%AE%02%3B%B5%ED%18%80%93%07Pw%3CdP%AC%D6%A1%00%80%03%3C%20t%82P%94%87%BE%1D%07N%2C%1D%13%E0%C0%D3%3E%0B%1BD%0C%CB%03%83%CE%1D%04%B4%8E%F4%B1%C2%06%01%12%0C.tJ%90pA'%1E%12%1AA%A8%D0s%CC%87-%3C%06%EC%A3%7Bv%87%D8%3D8%26x%E8%2B%C6%04%8F%04%0B%00l%10%80C%02%83%B3%030%88d%EC%03%06%81%0B%D1*%97%A2%A0%97%C1%8B%CD%5B-%19%A0%90C%C2%E2c8(%BCF%3D%EF%12%EA%DB%22%F9%80%D0%60%1B%B7%EF%1E%18%40%A0%E0%F1%F2%F7%EF%09%3CP%20%98%C1%A3%02%8E%E7%D0%A3K%9F%8E%A3%02%17%04A%00%00%3B",
		"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00%60%23%3C%8D%26%86%FF%FF%FFM.%15Y%3B%1F%B8%A6r%E7%DC%9Bo%24UL!%1Be%23DG!%13t%24%5DeI)%DB%CE%91%83%25vQ%22%23%F3%E9%A5%AC%99g%88qH%5B%224%C3%B4%7C%7Dc%3E%89ugfK9%88%26~%B9%AC%A4%A1%90%85%D0%C8%C3Z%3D*y%25e%95%83v%7DgX%CF%C1%86%A0%8C%5DqV4qYH~%25nj%24M%FF%F7%B0V%22%2CB!%0B%93'%8F%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%81%60%E3%19%19%8F%C8%A4r%E4%D9%08%05%16%D4%E3D%ADZ%AF%D8%D3%03e%11dP%8B%94xL.%9B%C7%25T%E6%928%BB%DFb%C4%05E%82%9B%3B%A5%B09M%1F%3BH%80%81%82%24%07(%15%03%00%7B(%7D)%85%8B%8F%90%8F%11%26%0D%88e%7Cu)%25%0C%20%9D%9E%9F%9D%10%26%94%03zb%98b%1D%91%AB%8B%20%A3%10%04%25d%A8b%01%0A(%08%25%01f(%AE%26%22%0F%BBh%8B%99)%24(%06%11%04%08X%BD%A3%22%B2%B3%C4c%C7%A3%26%11!%D9%DA!%06%A3%12m%D2%8C%8D%0C%D6%22%E6%E7%E6%0D%A3!'%97%D3b%00%15%A3%20(%25%F6%F7%0A%05%94%0C%89%E1%C5'!F%15%40%60%C6%D1%A2~%C3%C493%11BA%16%04(%0AP%18pB%98%A6w%18%90%09%DC%C6%91%C2(%03%FC%12fZ0%C0%9A%04t(%D5%09lw%EA%DD%A6%8F(%12%DC%BB%07%00%85(%86%03%C0%5Dd%E4%E0%D6%22k%96e%E2%BD%1A%10%AD%A5%B8%00%81%C48%98%90%87%D0%C2%02%0A%DC%8933%C1%1C%81E%FAF%C5%92Z%8C*%01%8F%D6%04*%B0h%B4k%99%00i%24%845%40T%D1%D43%0E4%9A%00A%00%A8%3F%3B)N%10%10q5%01Y%91x%03%1C(q%00%C3%9B4%1Ct%E2%B5%F3%80%83%06%14%08%17%BB%A9%A9A%C0%07%5CY2%3F%E4%22%20%08%00%3B",
		"data:image/gif,GIF89a%1E%00%1E%00%E6%00%00%A6%40%7F%F4%A7%40%F3%E9%A5%94~SqV4%B8%A6r%DB%CE%91%E7%DC%9Bj%24MeI)%7Dc%3E%FF%FF%FFY2%11L!%1B%AC%99g%88qHY%3B%1F%7BM%1At%24%5DQ%22%23G!%13%E3%9E5e%23D%87V%1D%C3%B4%7C%8D%26%86M.%15%B5z)%89ug%C1%83%2C%92_%20%83%25v%B9%AC%A4fK9%D8%952%D0%C8%C3%60%23%3C%A1%90%85%95%83vY7%18%5B%224Z%3D*%EF%A78R.%1Dy%25eq%2CG%C6%834%85.hi%3C%1C%88%26~%5E3%19o%24U%92%3F%5E%9A7%7Cd%3B%14%7DgXqYH%A0%8C%5D%9Eh%23~%25npD%17%CF%C1%86V%22%2CB!%0B%FF%F7%B0%FB%B0%3B%93'%8F%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%07%FF%80%0B%0B%23%268%86%87%88%89%8A8%26%23%82%0B%1C%3F%13%3E%94%95%96%97%98%3E%13%3F%1C%0B%20%3F%12B%A2%A3%A2%19(%3E%1F%A4%AA%A3-%3F%20!%16%24%99%3E%0D%05%06%2B%A9%AB%A3%00%01%0C!%3F%3B%3F%3D%C3%C4%C4%02%40%06%14%BA%A2%BCA%3A%3F%C0%2C%0D%3F%3E%08%D6%D6%0D%3D%40%18%0D%CB%CD%CE%D0%3BB%3F%05%04%93%95%14%DA9%E2%AB%DF%E0%C0B%09%40%C8%C5%3D%C7%EB%ED%01A%FB%EF%3B%3B%0A%F3%A8%A1%D36%80%DD.%7D%FC%FA%CD%C8%01%E4%80%0FR%08%12%40%00E%CA%1D%BFg%C0%2C%60%00%D2%03%9AGh%05%04%24%08%25%C4%E2%C5p%3E%0Cp%CC%C1%B2%A5%83y%02%94%99%3C%09%EC%C7%01%01%0AH%5CC%80%E2%C1%3C%05%3Ej%B8%A8%A0B%C7%06%11%091%EE%90%40%C9%82%90%18%EC%7Ch3%D0%E0%85%8C%01'x%3C%C8%91%20%82%8E%0A%FDT5%200%D1'G%02%04%18%1E%80%A0%0DC%82%02'%F8*(U5!%C7%B1y%F3%06%00)%90%A3%87%83%03%7B%8F9%F0%1ANU%06%04%00%1B%02%26%80%0C%C8%00%C6%40%04%E4%20%90%C0%C3%DCU%0D%06(%D00%B5a%8F%1Cz%07%1CK%A0%23%EC%AA%0C%3Bh%C0%D0%C6%18%C3g%9C%3F%5E%1Ex%C0%E3r%3E%1E%DA%0Ax%06%E2%A0%25%60%20%0Ax%14%CE%17%047%10%C694%24H%EE%40%1E%90%1F%0C.%0C%AF%88%D0%B8%5E%95%9D%EF%FE0%7D%90%9Fq%02%03%18%CEc%A8%FB9%F7%92%08%F7%F10%60%EFnn%20%E2%B7%DB6%C9%00%2F%5E%DD%EA%02%9A6)%02%B2%00%5B%8E9V%80%5E%E6%CD5S%05l%11%60%D6%01%3F%40%C0%40%02*%01%C1%008)X0%D3%3E%1D%D4%16A_%09t%B0%CF%06%0A%F4%A0%80%07A%D8%90B%09%3F%5C%90%D0%8A%FC%A8%10%01%0F%1E%5Et%C1%06AHW%C2%027%40%C7%C3%8E%3C%F6%E8%E3%8F%3C0%C0%C9%02%81%00%00%3B",
																																																																																																																																																																																																							"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00%CF%C1%86%045QM.%15eI)%E7%DC%9B%F3%E9%A5%DB%CE%915%25%19%FF%FF%FF%94~S%1C-5%C3%B4%7C%3D%22%0F))'9%23%14%AC%99g%B8%A6rY%3B%1F%140%3E%7Dc%3E-'%22%88qH%084L%25*%2B%18.9%89ug%95%83v%A1%90%85%D0%C8%C3%0C2G%B9%AC%A4fK9Z%3D*%7DgXqYH%A0%8C%5D%101CqV4!%2C01%26%1DB!%0B%FF%F7%B0%007V%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%04%82%A3%11%19%8F%C8%A4R%A4%E1%08%11%19%D4%E1D%ADZ%AF%D8%D3%01%95AxP%18%95xL.%9B%C7%26%94%E7s9%BB%DFb%C7%07E*%5B%E0%F04%9D%2CAI1%0A~%0D%0E%0E%0D%12%24'('%01dzuh%25%04%23%02(%0B%00%03%03%00%09%94%15%00%13%07%8Cb%8E%8D%25))%06%00%A6%05%02%A6%A8%04%A6%13%0Dh~%8F%A2%A5)%25(%A6%0F%BA%B8(%23%A6%25%B2%A2%B4%A4%C1%BD%23%BD%B9%C0)(%A1*%A3%90%AD%A9)%C9%D3%AF%CD%8D%C5%D2)%03(%05)%0B%AC%BE%C0%06%CE%B3%7Bb%18%14%02%25%11~%10%AA%25%B9%0C(%0F%04%03%A0%C4%E9%24%ED%F3%F3%13L%A5H%F0%AFD%02U%B1%F6%3D%22%11a%84C%87%D8%16%404%F0%D0a%09%0A%0A%C7(0a%E2%02%8A%80)%20%A00q%A2B%8A%07%94%FC%1Cx%14mL%80%03%03%C0%89%A4%D0%11E%AA%02%10%08%0E%60%90qL%07%AA%07%25%C0%3D%88P%01%C5%3C%14%02%C0%09%E4%D53%40%1Af%92%0C%A4%00%F0%20%85%A4%05%02%170%90%D0SA%04T%A6%20%94%90Z%00%2B%AE%83%E1%06(%40%B7P%C0%3BS%C9R%01%60f4%98%BE%9E*%3A%04%82ks*%DD%5B%25LhK'%86D%AF%B9%AF%E6%C2%8D7P0%5B2%86%F9%A6%92h%0A%C5%00S%15%1C%E3Ua%01E%82I%0C%06%94p%9B%60'%83%12%3B%EF%3C%E6C%81%02%06%A7%26HlT%10%C0%82%02%09%CF6%E3%C1%93%06D%9B%DD%C0%0F%80%D8%80b%18%F07%0DPl%40%10%02%85%83%2C%D0%B38%E0%82%20%08%00%3B",
																																																																																																																																																																																																																																																																																																																														"data:image/gif,GIF89a%1E%00%1E%00%E6%00%00qV4%E7%DC%9B%B8%A6reI)%7Dc%3E%94~SM.%15Y%3B%1F%FF%FF%FF%88qHT%1F%14!%2C0o%1C%23%25*%2B%5D%1E%195%25%19%B8%16K%18.9K%20%0F%084Lx%1C(-'%229%23%14%1C-5%89ugV-%1A%C1%15P))'%AC%99g%3D%22%0F%0C2G%D0%C8%C3%B9%AC%A4%95%83v%81%1B-%CA%14U%9D%18%3C%A1%90%85Z%3D*%140%3EfK9%045Q.)0%AF%17FI%2F%1Ak%1E(E1%1E%A6%18A%7DgX%C6%16Y%DB%CE%91'0V%C3%B4%7CqYH%F3%E9%A5%A0%8C%5D1%26%1D%8B%1A2%101Cf%1D%1E%CF%C1%86B!%0B%FF%F7%B0%D4%14Z%007V%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%07%FF%80%08%08%1F!5%86%87%88%89%8A5!%1F%82%08%18%3D%0F8%94%95%96%97%988%0F%3D%18%08%20%3D%11%40%11%15%11%13%40%A7%11%0B%3A)%A7%AD%AE%AD*%3D%20(%0D%A7%0F%3C7%07%3A%17%0B%037%05.%AF%C231%0A(%3D%3A%A7%07%3E%3E4%07%03%05%09%3E%01%2C%C2%AE%C4%3F9%3D%C8%40'%D2%022%CD%CC%3E%3C%3D%16%1E%D6%D8%D9%DB%C9%1B4%01%067%E34%E4%EF%03%C9%D71%3F%FB%DA%C8%13%CB%BF%7C%D8%10%E0%23%9C%0D%1E%3C%12%2C%C8%B7%8F%1F%3Bw%05%C2%DD%B8%C1C%00%00r%DB%2C%B0%3A%A5%AEa%3F%1D%15%06%F4%E0!p%9A%81%8B%09m%24%A8%05%A4%A3Gv%15%0A%DC%08%D0%8C%07%8D%1B%04m%22%7C%D0R_%C3%97%C8%DC%D1%08GCe%0Fy2%3A%2CXp%C2%E5%CF%8F%3A%A41%B3a%83%40%0F%83%04B9%7D%CAN%C7Ef2%06%18%20P%D3%C6%00%1C%0E%18%18p%20b%C4%CFu%C8%FF%1A%14%E0a%A3%A0%8D%A22%0C%14%10H%83%87%01%1B%01n0x%FB%B1%01%C1i%05%00%C8%A0%01%80G%B8q%24%7D%00%D8%E1%60%C0%0E%0Dpux%00%20%60%40%07%02%3C%08Pz%40%D6%86%81%1E%1C%A6M%A4'%40Af%20%BC%26L%B0%80%03%DF%05y%1C%18d%B0!%03%80%EF%BD%3E%06h%F8h%8Dc%0Bz%03%24%08%A8%0A%80%22Y%1E%83%89%A7%2BF%95%80%0C%19%13g%92%23%97%E3%F5%B0%18%10%BE%12%B4%B1M%02%C9%8B%02%BAKgH%E10J%014%AC%FB%20xC%3D%BBW%D84%1C%08%10%0E%A5%3C%1E4%D1%94%C0%0A%DEq%E4%13%09%00%0Cp%1E9%F2%08%10%40%5D%92eP%A0K%24(%40%D2%5E%B8%F8p%C3U%1A%06%20%81w%5B%ED%40RN%F2%DC%20%81%01%07D%E4%C0k%5B%FD%20%A2%0F%07%84%26%CF4t1s%00%04%DA%98%D0%40%8B.r%40%83%049%88%A0%20%84%05%D1%90%C1%08%0E%98PB(%0F%14%BC%F5%13%04%3B0%00%C1%3E%2F0%B0%C3%95WR%00%01%05%3D%94%80%00%0C%3D(%80%E5%98d%969%A6%02%9C%20%10%08%00%3B",																																																																																																																																																																																																																											
																																																																																																																																																																																																																																																																																																																																																																																																																																																																												"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00%F3%E9%A5eI)%B8%A6r%89(%8B%FF%FF%FF%1B4%60M.%15%C3%B4%7C%DB%CE%91%AC%99gL!%1B5%25%19%60%23%3C%18.9t%24%5Dy%25e%8D%26%86%E7%DC%9BG!%13%88qH%94~S%045Qo%24U))'-'%22%89ug%25*%2BfK9Y%3B%1F%88%26~9%23%14%95%83vZ%3D*%A1%90%85%7Dc%3E%83%25v%1C-5%B9%AC%A4%3D%22%0F%D0%C8%C3%7DgX%140%3E!-%3DQ%22%23*%2B4~%25nqYH%101C1%26%1D%CF%C1%86V%22%2Cj%24M%A0%8C%5DqV4%FF%F7%B0B!%0B%93'%8F%007V%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%02%E1%F4q%19%8F%C8%A4%D2%F59%09%09%99%DB%02F%ADZ%AFX%D8%E2%96!%94n%8D%9CxL.%9B%C7%AC%5Bi%A39%BB%DF%85%81bs%7B%BD%EF%E48nv%AB%9B17%18%24%15b%1A%81%0D%84cz%7B%7Dvd%1571%09%01%26%170%91%93%0B9%240*%038%A0%7C~d%0D%016%A7%06%01%93%A7%007%17%064%06%0C%A0%8C%A3c%0B%02%A74%22%006%BD6455%08%BE%01%16%A1%8Dd)%06%BD%07%BE%094%A7%07%116%074%D753%C8%B6%15%1E%B9%027%C4%D76%097%13%BE%0672%0C%10%DB%8E9%175615%91%BE%00%137%1E%F26%02%1C%B3%B4D%BD3A%23%40%8Cj%D4%AA%5D%BB%96%10%40%00m%EE%C64%D8r%10%81%B0%8B5(%20%10%91%CB%06%05%19%01%93%91%B1%17c%E1%C2%5E%08%A2%D9%B8%F1%20%A4-1%241%CATy%83V%ADw0%0F%C6%B8%01%40%800%A6%0A%00%CA%D1%B4)%B0%0C%C9%1B%A7%04%D0%E88a%A8K%9C9%8E%9E%AA%C7%0F%D6%A9%9AO%8D%EADj%83%EAU%A7%11Gn%3D%85%20%06%B1%95%60oj%9D%C7%D5%2B%00%0E%CEV%12%159%E6h%80%1A%12%1EH%B8%91%E0%D4%D5%11Y%15%DD%A0v%40%81%05%0B%1Dp%40x%A0%80BR%09sm%C5%91q%F7%86%03%9B%A0Z%18%98%10%40%02%E0%C0z%208p%90%183%A8%073%1C%B4%8Blg%91%E9%D7%B0%F9%80%D0%E0%1A%B6m%9B%2B%40%84%B8%01%F0%B6o%1C%0Cn%84%20%80%E2%86%02%19%C8%93%2B_%CE%5C%86%02.%04%82%00%00%3B",
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								"data:image/gif,GIF89a%1E%00%1E%00%E6%00%00eI)%DB%CE%91%AC%99g%B8%A6r%88qH%C3%B4%7C%7Dc%3EqV4%FF%FF%FFY%3B%1F%25*%2B%B5z)!%2C0d%3B%14%0C2G%94~SM)%0EY2%11%EF%A78%87V%1D%D8%952%18.9%CC%8C%2F%89ug%E3%9E5I%2F%1A9%23%14%A1%90%85%AAq%26Y7%18Z%3D*%084LeD%22d%40%1B%3D%22%0F%95%83v%C1%83%2C%B9%AC%A45%25%19fK9M.%15%D0%C8%C3U%3D%24%7BM%1A%1C-5%BD%840%140%3E03.%7DgX))'PB%2B-'%22%92_%20%045Q%EB%A8%3C%2FMPqYH%F3%E9%A5%CF%C1%86pD%171%26%1D%A0%8C%5D%9Eh%23%E7%DC%9B%101CB!%0B%FF%F7%B0%007V%FB%B0%3B%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%07%FF%80%08%08)%238%86%87%88%89%8A8%23)%82%08%17A%26%3C%94%95%96%97%98%3C%26A%17%08%25A%2C%0C%15CC%15%221%0C%00%1A3%0E%1F%A4%AF%B0%A4%2FA%25'%0A%40%04%04%1A%3C%009%02A%3AB%0F%09%09%A3%B1%AF76%11'A%40%40%3DB%3F%D1%D2%04%01%C299*%AE%C7%C9D%3EA%CD%CFB%D0%05%3F%02%D0%D1%3D%3D%00%0E%DC6D%DE%E0%CE%D0%C1%3F%3A%3D%0FB%05B%01%22.%EE%F0%E2%85%83%06M%C0%00%03%3F%08%04%91V%20C%3Bd%EF%02~%1B%18M%88E!%03%D4%0D%C8%C1%8F%07%C4%80%F0%26%CE%1B7.%C1%83%02%06%EE%F1%03%A0%80T7%90%02G%06%B3fM%1AG%1D%0C%5CF%84)R%5C%0F%01%02%84p%2C(%04%E7%90%970c2%20%F0%E3%07%C7%A2P%E91%40%9AT%A4%82%7D%169%06%1D%40R%87%8C%9DIc%F2%C0fOZJ%00%03%B8%FE8%D0%C0%02%11%09%0D%FF%0Et%98%20Q%9E%02%03%072X%D3%B1K%81%0Ai%16%7F%40h%00%20%88E%00%18B%CA%1B%02%C4%01%10%00%3D%1C%92%AA%60%00!%BF%1C%04*%0A%81%E0CBLX%8Ek%20k%01%A0%A4P~%16%0D%0C%E8%80A%E41%88%3E%04%04%00%A6O%B3V%1F%AE_'%93%00%E2%07W%1D%40s%A0%B0%08%0E%02%85%DC%B1%BAQ8%00%E0%00%EA%00%0F%0C%07%00%A0%03%C0%02%E4%1F%89X%A0%5E%F3f%B0%1C%D2%04c%3F%BA%93%02%01%1D%99%83%F6%08%E2%FCG%90%1D%3B8%60%A7J%A4%C1i%86A%82%0A!%B0%40q%B3%EC%20%ED%F0%940A%A0%D0%D4F%D6%7DF%5ER%18%24PN4%3A4%95%03%00%06%08u%00%0D%AE%D1%07%8F%04%A5%095%C0%01%03%FC%60%5D%03%E1%25%F0%8D%07%0Ah%18%D0%0A%05%10%10B%02%F7%84%E0%D6v9%80%40B%03%1El%10%04%5Da%C1s%1C%09DL%10A%7F%01-%00%01%07%13%04%B1%01%12%020%04%11%01%7CPF)%E5%94%F0E%C0%09%02%81%00%00%3B",
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00eI)M.%15%AC%99g%DB%CE%91b%20%0FL%20%0C%F3%E9%A5%FF%FF%FFW%20%0EY%3B%1F%7Dc%3E%AC%1D%1A%E7%DC%9B%94~S%E2%1C%22%B8%A6r%8C%1E%15%82%1F%14%A2%1E%19%88qHw%1F%12%D7%1C%20%C3%B4%7C%B7%1D%1C%89ug%B9%AC%A4%95%83v%D0%C8%C3fK9%A1%90%85Z%3D*%7DgXqV4qYH%A0%8C%5D%CF%C1%86%C2%1D%1D%97%1E%17l%1F%11B!%0B%FF%F7%B0%ED%1C%24%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%C0%C3a%A3%09%19%8F%C8%A42%A4%D9%08%0F%98%13%C1D%ADZ%AFX%13%E1%849dN%8B%94xL.%9B%C7%A5S%86%039%BB%DFb%04%E7D%3AW%EAps%9A~.%04%0A%11xc%15%14%26%10%0B%0Eh'%7Ce%0B%09(%03%0D%01%12bu%24%00%0F%22%00%26%8A%8Cd%04%02(%A2%22%01%08%5B%8B%20%A2%16'%9D%82b%17%01%06%90%0D%A2%02'%23%06%23%8F(%20%11%ADd%0E%08%A1%03%7F%22%B5%23%90%01%A2%20%25%BFc%14%A9%C4%08%05%A9(%23%C8%22'%CB%CDb%7B%82%11%00%06%06%0A%20%20%B4%90%13%D8%DA%BC%DC)%DEb%12%00%0C%02%22%22%0C%D6%F5%20%B7(%D9%DB%CE%F1%0A%1A%24%D8%97%AD%01%00%82%EB%989K%01%A1%1A.%14%0C%06%A0%18%A7N%94%82v%EF*U%23XM%042%5B%A30.%12Db%236%93%D6%D6%89%10%E9%A9%E4%A8%7B%23%1E%88%02%80l%84J%96%82%24T%03qO%C09%8D%9A)C.%8C%17s%97%85%09%0A%06*%D0ts%A1%03%13%8BB1%B0%20j%C2%89%02%8B%94%F1%C3I%86D%81%09%13%01%C4%125%D0%C2%08%89%5B%9D%3D%0D%10j%04%00%02%04d%A2H%80%20%80%5C%14%13%B8%A6%B84B%00%80%02%CD%16%04%10%A1%80%40%8A%0B%B7%06%D8%AA%E0%AC%02V%0A%88%C6%2C%A0%00!%91%BBE%04.%90%C9%98%A7%F3eO%9E%E1%A4%F1%D0%26t%1E%02%1E%3A%9C%F0e%DAM%84%13%1D%0E%7C8%81%20%8B%ED%2C%08%B8%1C%08%02%00%3B",
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00%B8%A6rM.%15%E7%DC%9B%18M%26%FF%FF%FF%F3%E9%A55.%13%DB%CE%91Y%3B%1F%0CZ.9)%10%94~S%7Dc%3E%04c4%C3%B4%7CeI)%AC%99g%25%40%1E%88qH%08_1%3D%25%0D%1CH%23%89ug-7%18fK9%95%83v%14Q)Z%3D*%D0%C8%C3%A1%90%85)%3B%1B%B9%AC%A4%7DgX%CF%C1%86qYH%A0%8C%5DqV4!D!%10V%2C12%16B!%0B%FF%F7%B0%00h7%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%02%81%93%11%19%8F%C8%A4R%94%E1%08%09%16%94%E1D%ADZ%AF%D8%93%01e!%7CP%03%95xL.%9B%C7%25%D4%07%139%BB%DFb%05%06e%82%DB%CBi%3A9Q%177%C6%09%25%82%7Dfy%84%09%01%08%0A%03%17(%0A%09*%17%24%23%24%01%03%03'ah(zb%26%01)%00%24%0C%05%10%14%09%11%23))%0B%06%01%00%96%9B%9D*%26(%AB%00!%AB%23%9C%AA)%9C%0E)!%14%13b%86c%B5%AB%24%00)%05!%CE%02%AB%CE%D2%01%7D%C6%9E%B6)%24%02%05%0C%0C%01(%BD(%0F%23%DF%17%B2%84%C8%AC%D9%24%CC%10%B9)%23%07)%02%01%1A%E7%C7%D8%0E%F4%EC%AC%CB%D9%F2%05%10hRa%8D%166m%A2V-%F0GB%5E%08%03d%0A%A6%23%01%01%DE%ADw%23%A0%858%11%91%13%BA%83%AA%0A%24%0B%97kc%C7Y%13%2B%AE%0A%85Q%23%C4%7B%D7V%AE%82%D6%2F%99%3C%07(%FE%14%F3%88o%15%B0%7F%03%0FB%00%00%B7%0A%05%02%09%02%24%BC%24%C83f%0A%06%24%A2Je%D8p%D5%03M%12%0F%22%18%C1%95%2B%C6%AE%23%1ET%D8%89%F2%E0%09A%82N%84C%2BHg%D6d%25%22%86s%23%91%1F%89%B8hB%A2%A0%DBT%C5%04%14%12H%0C%23S%01%01%09%04%1C%CF%14%A4U%A2%82N2%03J%D8%E3%3B%EB%8E%9D4%1B%DAX%BEc%60C%07%14%1E6%C3%F1%80%A2%03%01%10%8E%B2%A8%CE%A2%80%0B%81%20%00%3B",
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00eI)H)%14qV4%C3%B4%7C%F3%E9%A5Y%3B%1FE%25%0F%E7%DC%9B%88qH%A0%8C%5D%FF%FF%FFo%5ER%B8%A6rM.%15T9'%7Dc%3E%DB%CE%91K-%19%94~SQ5%22W%3D%2C%60J%3A%5DF5lZM%AC%99g%89ugcN%3FiVHfK9%B9%AC%A4Z%3D*%A1%90%85%95%83v%D0%C8%C3%7DgXqYHfRD%CF%C1%86ZB1N1%1EB!%0B%FF%F7%B0scW%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%85%22%04%1A%19%8F%C8%A4r%04%0A%09%15%19T%E4D%ADZ%AF%D8S%04%95QtP%15%95xL.%9B%C7%26T%87C9%BB%DF%E2%00%07E%82%DB%CBi%FA%FBbY%DC%C5yuf%0Bi%00%11%16((%06%0E%24%0E%0E%17x%89%82c%17%26%06%02%10)%08(%0F%04%25%12(%05%9B'%1Bh%92c%1A%5B%0F%25)%AD)%02(%08%AD%18%12)%04%12%01%A6zb'%09%03%25%04)%07%0F%0D(%01(%03%AD%C9)%09%06%BA%93y(%AC%25%0D%0D%01%05%00%00%9E%07%C2(%A5%80%A7b%15T%06%D3%10%10%0D%0F%B6%08%00%AD%09%13d%81c'%18%25%C0%AE)%03%02%AD%00%09%AD%05%1A%E2%85S1!%11%8AV%25%0C%EEK%81%82%DB%80%5C%02w%89%D9%60%A1%40%AB%03%B0%12%2C%5C%F8%C0%80%09%3F%E0%24%8A%A1%20%CB%15%AB%92%0CR%40%F0d%E8Y%99%00%CB%F0%C5%7C%E5%8F%00%00%0B!'%A9%A8%60%F1b%B0%9A%14%ACZ1%085%EBD%CE1%0B%02%A4D%D8%0E%E8%C5%06%0E%0E%E63%AAB%DE%C8v%12%A6%D5b%C6%8F%C2%84%AC%10%00%988%CAK%A34%A0%0D%18%3CX%86%22%CD%81%02(%1C%80%B4%AAB%C3%09%0A%11%A6%25Z%9A%02%40%81%94%05%C2%B8%2Cs%B6%04%00%08%25J%E2c%40%95%2C%99%B3%10%F4%19h%10%F4%E2%03x%83%C9%18%A8%87%20%C0GK%06%13M%00%E9xL%05%03(%26%40BJBgD%D7%7F%DC%A4%F1%D0%26%B6%9D%08%1E%3E%C4%B5%FD%26%EA%07%05%22%8Ce%19%9E%E5X%97%20%00%3B",
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00%A0%8C%5DM.%15%E7%DC%9B%B8%A6r%FF%FF%FF%F3%E9%A5%5BJ%25%94~SS%3C%1C%88qHY%3B%1F%A0%B9l%98%ABc~%82IJ.%13ut%40eI)%DB%CE%91%BA%E3%87%AC%99g%8F%9DZ%89ug%B9%AC%A4%C3%F1%90%C3%B4%7C%95%83vfK9%A1%90%85Z%3D*%B2%D5~%D0%C8%C3mf7%7DgXqV4qYH%87%90R%A9%C7udX.%CF%C1%86%FF%F7%B0B!%0B%CC%FF%99%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%02%C1%93%11%19%8F%C8%A4R%94%F1%08%09%15%94%A1D%ADZ%AF%D8%92%01U!XP%8C%94xL.%9B%C7%23%94E%D38%BB%DFb%84%06E%82%9FI%92s%9An%17_%16%0F%0E%01%60f%7Bun%1D%0C%0D%5B%0A%09%18'%26%01%0Fe%86d%1D%1F%25%08((!%07%03%02'%A1%A1%02%0A%14d%95c%25!%03%26%A0%A2'%05%26%03%00%B4%0A%0Eab%A8)%0B%0E%9B!!%83(%A1%26%9B%9B%10%B1%01m)%BA%25%09%26%CF%D0%26%A1%B1%D0%05%A1%18(%B9%9B%87)%0D%9B%8D%C1%C2%90%9B%01%07%E1%06%DA%7Cc%24%14!%B0%13%B4%A3%B4%D2%02%10%25%DC%BAb%24%EE'%03%BF%A1%11~%0D%08u%A0%C4%A9me%F6%85%F2%C7%2F%E0%AAP(%16%1CT%B7%8E%9F%89x'%04%CC%83%C8m%19B2%0AO%00%D84l%13%00%8E%13%3B%A6%08)%E0%D9%B4g%AE(z%94%B9%92%DF%01%92%E3P%9C%2C%101e%99k%0F%9C%20%14%2B%89%22%40%84%13%07%1C%E4I%A7%12%C5%84h%D2%60%3D%3B%1AJ%01%AE%99%1D%25h*%86%93%18%D7%03%10%0C%5C%60%3A%86%02W%AED7%0D%3C%91%C0%20V4%CE%A0%CA%85%3A!%DB%5B1%0B%B6%9E%DD%CB%D5%C1%08%B2%7D%02%E7%0B%FC%26%0D%07e%84%E1%18%E0%B0%01%C5%A4%C4n%1E%A0%D8%40%00%04%0A%04Y2g%D1%D4%25%08%00%3B",
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00%A0%8C%5DqV4G%2B%1A%88qHRA8L6)%FF%FF%FF%E7%DC%9BM.%15eI)%8E%B6%E0%DB%CE%91%93%C1%EFbaf%C3%B4%7C%7Dc%3Er%81%94x%8B%A3Y%3B%1F%5DVW%B8%A6r%94~S%89ughku%7D%96%B2Z%3D*%B9%AC%A4%95%83v%D0%C8%C3%88%AB%D1fK9%AC%99g%A1%90%85%7DgX%F3%E9%A5qYHmv%85%83%A1%C2%CF%C1%86WKH%FF%F7%B0B!%0B%99%CC%FF%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%40%83%81%B3%19%19%8F%C8%A4r%B4%E1%08%0D%96%14%E1D%ADZ%AF%D8%13!e1hR%11%95xL.%9B%C7%A4%94%C6s9%BB%DF%E2%82'U%82%DB%CBiz%19rj%90%14c%18'%17%24%18nyud)%00%00%03)%80*'%03%8D%12%10g%88e%04%26(%22%12T%11'%0E((%03%0D%10%7Fd%98d'%9B%26))%14)%02%00(%AE%02%09%0F%05%0Ch%AF%89*%0A%25%9A%B5%15%08(%0B%26%07%9C%26%26%22%A4%13%BCz*%0C%02%01%01%0B%A3%9C%9C%14%0F%09%26%00%0F%A3%22)%D0%89%1D%8B%00%C9%07%1F%D8%A3%9B%9C%0B%03%03%05%E4h'%02%AD%12%E1(%07%01%A3%0F)%93%9E%89Q5%86U-%80%03%9A%3D%E8%87BB%00%11%15%1A%D0%13%A3%20B%81M%22%0E%98%10%15%8B!%B6%03%E3%06%F6%123-%00%80f%10%07%A0%00%20%20%02%02%07%CB%96%B1%9C%C8%20%05%3B%13%0F(HHQ%C0%DE%AB%9D%93%01%04t%98%A8%E2b%C6%83%93%18)%5D%C7%09%81%2F%82%0D%02t%3B%98%A0%9A5cV%83BRA%90%01%89%8B%B5%08%94%18%2B%CC%04%01%0C%13%20l%E5%3AR%CC%04%02%F7j%9D(%D8JK%02%04a%26%96H%01%B3%99%09%01U%E2%BAJ%60%0C%81%25%91%D1%22%BD%1Cu%2C%263e%CDP8%10%40T%05%84n%14%10%BC%DA%CC%99%B3%40%B6%89%A5%9DHq%22%C2%D8%D3%A8Q%A7j%7B%E7%0E%C1%D6p%D2dh%03%DB%0E%81%0C%20RH%AC%ED%A6A%0A%10%06B%F0%CCB%3CK%01.%06%82%00%00%3B",
"data:image/gif,GIF89a%1E%00%1E%00%D5%00%00%DB%CE%91%94~S%F3%E9%A5M.%15%E7%DC%9B%C3%B4%7Cua%40%FF%FF%FF%C3%C1%90%5BA%25eI)%B2%AB~J%2B%13%BA%B6%87%B8%A6r%8F%81Z%7Dc%3EY%3B%1F%88qH~kI%98%8BcS6%1C%89ug%AC%99gfK9%D0%C8%C3%A1%90%85%95%83vmV7%B9%AC%A4Z%3D*%A0%96l%7DgX%CF%C1%86%A0%8C%5DqV4qYH%87vR%A9%A1udK.%FF%F7%B0B!%0B%CC%CC%99%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00!%F9%04%00%00%00%00%00%2C%00%00%00%00%1E%00%1E%00%00%06%FF%C0%C3!%B3!%19%8F%C8%A4%92%B4%C9%08%0F%96T%E2D%ADZ%AF%D8S%22e9tR%14%95xL.%9B%C7%A5T%0739%BB%DF%E2%0A%26e%82%AB(%A6%85%5D%95%A6%C3%1F%11%0A))%06b%26%25ad%7Duo%25%10((%00%11y)%01%03%85h%83%8C*%0D%0C%83%9F)%23%90%05%9F%17%91%0A%25%99~b%0F%0A!%AF%B0%00%90%04%B0%90(%0E'%AA%9B%9D%A0%83%A2(%22%83%05%02%10%83%A9b%8Bd%26%AE%B0!%B2(%B4%CF%02%03'%08%BAc%0F%06%BD%A1%90%C1%9F%00%02%12%09%D6%7C%9A%86)%22%E9%EA%22%0E%90!%EA%05%B6%23%0F%C8%E6*%0B%A1%23%FA%FA%22%90%00%01%A3%F6%8D%18%40%AF%DC%AA%7B%25%D2%C4%13%40%40%40%80%14%ED%22%0D%3AQ%E2%C3%B51%0DLP%60%20a%167%87%04%08%88%18%D0%E6%E2%BD%5E%11%230%84%10%C0T%A4%01%9B%92%19%1A%60%AB%A6%AD%10%0E%02%F4C%11%E0%98%C1%98M*%18%3CC!%A0%C0No%83%04%F0%F4)S%8C%81%11%22%14%3C*%40%13X%BF%A2%01F%1Cl%AA%02%01%87%14%0A%94B%EB%06%F6Y%08%98%26%BBr%88%20%8B%80%84%08%A3N%18%18%40%00RO%93%0B%18%8C%60(!%C5%89%14%EEr%3D%B5%CB%D4%1E%9F%11%0E%8A%19%C8%08%18%C5%85%5C%08%12%8C%B0%14%D3p%83%04%09%264%10%83%80%C1%80%14%0C%F4tM%08%94%EB%19%04%26%80%BA1%BD%A7Q%0A%0F%25%5B%DBI%E0A%03!%D9p%B4i8%00%22E%85%2C%C0%B3T%E0r%20%08%00%3B"
	];

	var groups_img_recommand = [

"data:image/gif,GIF89a%18%00%18%00%91%00%00%FF%FF%FF%00%00%00%FF%FFf%00%00%00%2C%00%00%00%00%18%00%18%00%00%02F%94%8F%A9%2B%E1%0C%D1%8Bt2%AB%9C%DE%1C%9F%DD%04%C6%E3I%22)%86ju%A6(%A5N%AF%D7%D5%F5%D5%8E9%BB%BE%BC%BC%8B%F8f%A9%8F%EDX%82%C1%80%C6%E6%C2%02-%960Q%93%F5%BA%D2)%B7%DC%AE%F7%AB(%00%00%3B",

"data:image/gif,GIF89a%18%00%18%00%91%00%00%00f%FFf%00%00%FF%FFf%00%00%00%2C%00%00%00%00%18%00%18%00%00%023%94%8F%A9%CB%ED%DF%80%84LZ%AA%EC%C5HO~x%00%18jd)%05%C1)%A4%EAz%BE%2F%2B%ABt%0D%83x%CE%ED1~%93%05g%24%E0%CF%C6J*1%05%00%3B",

"data:image/gif,GIF89a%18%00%18%00%91%00%00f%00%00%FF%993%FF%FFf%00%00%00%2C%00%00%00%00%18%00%18%00%00%02%3F%94%8F%A9%CB%ED%08b%7CJZ%40%CF%B5Yl%D9%7DF%90m%08I%5D%09%EA%A8k%CA%BDO%2C%B7%A0%C26%F4%09Ox%8F%F9%CDv%23%A0%EF%90c%88%90%A5O%24isv%3C%D2%E9r%3A-%00%00%3B",

"data:image/gif,GIF89a%18%00%18%00%91%00%00%00%00%00%993%00%FF%FFf%00%00%00%2C%00%00%00%00%18%00%18%00%00%02H%94%8F%A9%CB%ED%0F%01%80-H%BA%82%BD%D8%E8%CFa%1F%18B%A3%26M%9D%E6m%5Dr%C6%A3%23%D7U%7D%960N%DE%BC%CB%F8%A1T%19%A1%0E%C1b%09%94%C3%DB2%D0j%1D%0FI%E83J%832%ADJ%E7%D6%F3%0A%8B%05%05%00%3B",

"data:image/gif,GIF89a%18%00%18%00%A2%00%00%00%00%00fff%99%00%00%99%99%00%FF%FFf%00%00%00%00%00%00%00%00%00%2C%00%00%00%00%18%00%18%00%00%03bH%BA%DC%FE0%CAIk%1Db%D8'%FA%E6%DA%E6-%A3%95)C%AA%AE%AB3%B2%B0%EAjq%1D%92%02a%07%3C%9F6'_%AAG%EC%DD%14%9E%A2%928%23%2CW9%88%A7C%ADR%23'L%15%C3%3Dqr%D6pu%96%A1%02%00%D1%B0%CBzF%83%3B%E7(%C3%0B%8F%A7%05q%89%189%C6Z%E7%25%1F%11%09%00%3B",

"data:image/gif,GIF89a%18%00%18%00%A2%00%00f%00%00fff%99f%00%FF%00%00%FF%FFf%00%00%00%00%00%00%00%00%00%2C%00%00%00%00%18%00%18%00%00%034H%BA%DC%FE0%CAI%AB%BDX%8D%91%DB%EE%8D%00%80%0B%20%90%8A%88%12f%13%BCp%2C%C7%EEl%CB%F5%0D%03%3C%DC%F1%23%14P8%24%15%8D%C1%95r%C9l*%12%00%3B",

"data:image/gif,GIF89a%18%00%18%00%91%00%00%FF%FF%FF%00%00%00%FF%FFf%00%00%00%2C%00%00%00%00%18%00%18%00%00%02N%94%8F%A9%CB%16%DF%9E%0C%0AFjS%96%08%FA%09%82%C7%C4d%0ByR%97%EA%84b%C7%B5%23k%0A%9F%8C%DB%2C%FE%B9%F1%2C%DB%D0v%BA%E0%10%083%22%8B0%8C%D3W%7B%09%1B%CC%D2%CE%24%84%BE%AA)jMC%04%7B%C3%C9%0B%F5%8CNS%0B%00%3B"
	];
	const IMAGES = {
		rel_interstitial_loading: 'data:image/gif;base64,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%3D%3D',
		bg_status_red: 'data:image/jpeg;base64,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%3D%3D',
		btn_all_departure: 'data:image/png;base64,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',
		mode_jinhari: 'data:image/png;base64,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%3D',
		hd_joinattack: 'data:image/gif;base64,R0lGODlhqgAQAIMAAEAWAKOPfHteSsrArWdGMvLx3VQuGranlI93Y97YxQAAAAAAAAAAAAAAAAAAAAAAACwAAAAAqgAQAAAI/gALCBwo8ADBgwIFDBiYoECChggjRnx4kKLEiAYvajyY8aJChg4hbtSYYOHIgQc6agQAQGRBATABGCBg4ABLmQcCIDSgU6NNBARtCiCIAACChhQPCGA59OTKlhxhLp1Z82bNnk4PFiUgMYCBowNZalxo0wDCBAEEBABAgMBRADHXuiywFKhHAFgLCCWYwADLBDZvEoBpkm9KlQjJyjybdm3bt3GhrkU8lqWBuQOnHmaZUoCBAQOkTq0rEC3KmzeLpr3ZdCABABkLExQbFG5F2HptXxzwGrXdAqGlyiTtEGtg33iXMs0NVS8CmAEw+0Vg4LJEAc89yxwME2hKzgP8/qI2WpCtTJaDgVcX4DIBzoYGWgt0fDjlVrd8y7fmLbJsgNcCAIhSYAeENx55ub0mXnrhxdeQY8AdKBtdtvWFF0HQYXhZWxOKNYBY7gFQm4LooWZWacApJ1NJugn0mlKiKUgYQsehxlWE1i21EHECeQgibeWRaJ5VmeEGmFA58bVUaxYSYJKFCn0nQE6czSZib1TKd8Bg24n4YZURojaAe0MVFVuV/bU4UE97AekiAAu5d2KIVhaA5VpacjmTlzd1VB1BAVDW5GF4imddAtyZiN1fYbWEV1svrnngcKxFR1d8ulW4mJ2ckamfpJYVMFkBbnoq6oVvdvTXo23hNt+k/pgyFZ17v3XFVnCiHaUaQ7AFGECcB4DVaAIIBBtqRLY9Nxhvmzako0O6LRXoeQbhmZt811JokJs29eQXQZH22FKxRW2KULIBKqRgbjlNyFdDBR40pkNEiSgUZ646VOOvLOVVWk4wiccWUryeuJdzDYXm6nQHnzbUt6SKeJpORdVKG2Co8YuqYWlphx7B3cI570WTsiSbe1zdC5urX8rUk3LWBSWarP+5tJZdoyK0VEYBeKfmtR/a5eaHPJl7Klct85SQZXPBGBNcAdRcHlt0yTeyuAe5SdOFKtvkJwFYTeVXzAnNDJdUBIjkV0+vuastRz8LRVOjBwnc0VrNzRS2vkxjuySacjFCVGW5eyKIdZ2nQWUmvvbRW+RlFtYUZslWJcyWX+tGtDPc8v2HXmEwVUSTQQNQNzBIjz80NumUm9jQazeWKxjidCP+WoheP8eXX/vdNOF3EiP0WnR9Xpeviq0Fthrl7j73q0RQDtTy74FBP+VJlB90u9cR13iakxxJrv1N0FuakttLy6acSunp5bFvWX3/u/jgkh8/ssH3eGJmYLtaYALKqRX6LnK++xkwPwccyQAlUsAEOlAjAQEAOw%3D%3D',
		btn_gojinhere: 'data:image/png;base64,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%3D',
		btn_butai_save: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAAZCAYAAAAmGVxfAAAACXBIWXMAAAsRAAALEQF/ZF+RAAAU1UlEQVR4nO2b+XdVVZbH/Se6VMqF/0Cvsgr1B/2tV3eV1SVjlcFyKHFgnoSEGQzEhCQCCbOgTBnRJDIjCATCpARxQhCZRUHDkLyXl3lk9/7sc897Ny+o1d3Ub5y19rr33TPts/d3D+ec5L777rtPPD322GP36B7dVQrj674w0O6Ve+VulyTAJYBWfbDN6NiBVvm40lH4PUxH9975e7iO58/Rr/W9N+7dG/eXxgrrGbrbGOgBOA+0wx8lGOU9mQ7tbok/oaoPW+LvyRSu4/3nyLe5N+6/dtxkupM+vZ7/FRiIA86DLczkgR2/TpXbfpn2ben5fify9f/XcSu3tsj+7crzDke8852nfd+ZIP+tF4Xm9d8Y14+fzC/1B1VGB3c5OhCa9460NTHP/m13Htf3D8uBbwdC/CfP88/K19a3MyA/7h3kzXsPsO7sSf8fDPQCm6/wjO7Z9Ou0+4Nmo/C7p482JSi5LpmSx/X99m5u+dkx9mxulqP7WuRmTZfcut4lJ45gfU5Q+3c0G4UFZ8LZ3mxU5YWvdZ9oiPjikzap2uWV0iynP293Rqfv+7bp/JsTa9m7tVmuXu6Ub79qlyN71Mp3tarcHD9hOdCHtszHuKe/aDdwev7ow9ieJ36HQfjxvla5+VOXnNF58DT0pd8+3y+gfVvd3MkyMl63NMspXcs3Ovfxg24M5tqzxcnWy9vrHrmYEe10BtUD6NvujItfwoCnXmDb+X6z7CrvSf5b+PlLtGNjs3wY9P3oA7dYiPc4VWjbMm1H+/dcH/rSz4MIAcatQxXg+9IH4v2IKqCt5basW1Mu69eWS3v7bbn0bYecP91h66m90WXU1nrbnuQPgNL/boh123t7221rX3ezS6qrWq2OQt1nR9tM+Hs2Ox72qAJv/NgllXuPWRv6fnmszUC+b5sTtslO13fy0za5oWC5VePm8u0vfNMh577uMLCe+bLd6pkLMABE1guIW4O1UaK1DnRnv26Xb08m+rEewhQg3V0R6EBlun2j4+P6j109kvWLZzpsbOZAzh6UX3/abvMx9rlT7fLj951x2UF8O7gbr6jjVvw6BvzTv/cC27bSZkclzfH3rcVNP/sObS7s+dxW0mRAaW3ulvpIt3kdBINl/XCp0ywVr0EbwLWttEm2aD8YQtBXLnZILNIdF44BQwWKQs2CNzkvcf1ap8Sirp3f6Xx36Vq839N/GSob1pdLwYZyGTVyshToe4eC8UDlMRk5PNXqMjPytS5VqvYfkwfu72ttaXPpwlUbb9SIVPt98nibKRq+SZThacTwydYm6818my9yq0vBHyiwokm+qm6T82evGlg2rCuXN3UuG1PnSy7Uj3htsgOu9jusYAAUF89fi6/tToV+GFldaO4Py5oUbMizyYwEY5yX7uYe0D/F+rEOQIUhAR4iAmXuG3nxsZETMkN2o0ZMVplcM57wcgB0+3sJDISxkIwH/60X2CrWNcl7qxslf25ECpfHZNOGph5Effh36duNsnB2RAqWxqwO2lLUZIJfs7pcmc+XDYFlUvZ+dEzWvVsmF5Xxc6c6zC3vVKa3KVNfahij4DHmpefJU39Mkb/8OcWUU7jOjYHHqj7gLH7tu+U2dpEKxCtkY3GF9OnzsIwbm2a/SworrN+DD/Y1uqxgLAjalxSWa7tUez90sDreh5I9P1/bP2ztKRgOAET5vowZnSp9tM2RQ9UyVt/XKy94RsIdORHeK7l8d/maHNa5ChXUUHFBhRTps98fnrC5R49y4AYEjeoJkcP9agTww7pKiyqM7+ICR77fwQPVanxdGrab5NLZDvn6RLt5qjNq4OjCG+SgQUN78VSn3uvUZ+32/vtHnojLctDAofJoP/e7/9MpcvniNfn+Qod5UTwmevaY8LgI46F8TZMRdTx7gW394gaZP7U2TuvyYvL+u409aONqR4XLXdvMNNd2zaJ6q/9gfaPzbAqIjLl5xmjSoZ488EBfm49F7lVrJF/CC/zu359Qj5FqVo6nQdlO8QoW7YPCvzvfIZFaJ0CAc/DAsbjg+vTpKxMmpMWFW1pSLm/lOkWhaEqxAtDAVuSAOXjwswZS2g0ZPNTeqc/Jzpdx4xyg6HOoqtqU2//poTJwQGJNjz/2pCmmKuAD5eLJjT81EsDBmO8pLxPGp8pgVTjgxju2NDnPTH8PdPqzRspvftPXvK9T1JO6tp5ekbE8gIgIba3dsnf3Jz3aVO2vNh4Y/7cqH9Y4YICbDyBvUM9IBCLqULyBwi9tilVOnZ235dqVDvnsY7cLJXqVremNh5wZCey8s6DewOdx0wtsK+bXy5xxN43SJ9RK3pyIvLswJsUrGnvQ2rwGeTu7XuZNrLV2PH1bJsZt+vMVLPjRfk9Kdla+KcyXhvpuAxnh6cK5a/Kbf+trYYGC1/DC79KFEh5Ruvc2NVc7zfKxaAOOKhMwmXcrrYiDjXcEfORwtbSod8JDFQeCR1GDB/e0dH779skFj8McxUXlBlKAk1xYH+ulMF+40Jc58YReeQDEg8avN1rXbWsDqBhckXowANUn4Ku0pCJOAH1I0hoe+V3CO2GgABkCrFCpygoZYECFGyrMY/1wucMM34O8JDA42lLg5/zpdtuM7apwYXHjqkYDE3hYs6hBVmQ5PHjCw72zICZFyxuNeoFtnYJocXpUZoy6KdlT64xmj7kpSzOiskG9HrQ6NyZvjLslmam1sjyz3upplzvdtV2RFTXUk/xePH9VMtJdHoAlR+u6DCgs7uj+ZvnquAud96sFkx/5gmDHj0mVri5ViiaqnR23ZewYB0AEFS58m6DhMDdnsYxXAKDMKwHwJqqXQyEoGm/Y2tId92zmFQYOjQPh8ceftLa52c6TMEYf9ahDhgw1Pmo0RwT4eESvCDwnAOjudhuM3ByXG+EB/bgeGCgQKi3uyT9lUAhsyAkAjNb0ASMLGxNzu3kdGYAefdLkNTgUIlmjTwHgD8OgrfeCyKGxodsMHsAf/KhZPtO8jZyRHBSjZi7Hb2IsNiclq+ulcEVMSlY2SOGyBgMaeJirAFsyN2oYAAsQOAI74MoM4ZFHEmB7R4EELc+MSZaCacqrN4ymDr8p+XOisjIrJtOGu99Q+vha+zZ/SsR+TxtxU2arV2Rr/emRNvnph05b0FndyeCCv9Ak/5Du2ra/3yAfFMXkqlo3uV3YiyEcS/ZVuIDz9Bdt9sTrGUjUkll8iXqYsEDGj0+z3wBoQpB/4dlcuHQhuTMEFt/W2mtf5qUdRB3KAWiAt1nDXa3mY5cD5VPHd4DJb4Du+zIevMXBVux48G0HBR51oIYyn7v53IgSi/bcPYbHz9GUwqcDfg0GqEPOEwMWjKKpwXlV+ACE9PG8US586zYIn+xXT7WpUXXVYp74qT+59KCfRiIn33KLSIAPAyLXPnG0Vd5+K2JhclVOTGaPviXTRzg8zBlXa9jxePC0aHbU5n3ooYdCYfTNmNH8tDoFW51MfPGGUerLNwy1qzTMMjDfJr10w8CWo14tZ1qd/U5TYJatj8nZM1flguZgJ0+0SuXOJtm7rcmS162ljVK2rkFW5kaUYcfAn3WB3hNQzMMombI0IT1S2Sz1qoB5ulMKu3YKHs0L3wm3wnI8r4yNJU7p3lNam+LyuKI88LwyAARP70261aM1NXabAi+ptyHXxJP4Ami8lwyHXvoAGsYN83f4kMvrLISHPBEg8r/9EQn8ev7w2JZHznf8lQZhDqPybcgvMdbz37QbeCjkl8UBIC3hf9TJ+expdrxq9O81yoFdzaav//yPZ2ycogLXHvBhZOZpAyP7w+9d/x1lhFD1ahomZ46+afiAwAPYmT+lLv4NZ5X/htP1ww8/nADb4jccmMY8W2MNM16vlQkvXJcFMyKydG69LMuol8Xq4QDWTHWR0LjnagxkWTrJFPV67IZWryiT9Dl5ZmGfHHDWU7Ze43pORFZkR6RKF7i5pMHc+cjhk81yKIQGFoWlRiNdcuLjFjl+2OV+fqeE8girHlB4GQ8cgOABGc7fwjkR1urB5L3Ngpz8eE7lwcY7yiP84lk5CiAHot2VAJwebIzFGd9PmiJcOKNe/FirHcvgtah/S+fxcwEQ71Ep5G7M44tfG8BADubZAiMArB6ofPc8eM/GWEcrW6RyR5OBheMZePY7bS+Dy+fbpWxDzDwUBr1iyftW5/NNXzhnu/it2+wM6J+QIfkbm4T1i2OybF7UsDJLw+ecsbUy/oWe2Fk4y2GH0q9fvwTYpr12U0YMqYnTxOdvyFvTopI/uz5OC6fXS+4UzeuG35KRf3PteKYNuyHLNT6fOOx2ljBWsK53fhIuuH2f5CM0202OdRZ6+ss2uXSu3QDJsYKzunJL8qO1ie18OMn3yvd1C3MXm3ezEPeg2wEnvEJqvD8AArTjx6XF6wHuwIEuZAMALJzivSDPjYFxsGloa3NJ/1fHW+XTQ612DMJOL+yN/S53oIHNnXlxE3HlQmfc+/hC4u/XAy8+ZDIvYd/vhCEK3vSL6lbZXtYgRW/XS+XWZuOZHTtyC8vq8N5mKVhRL9nTamVneaPpa/8+B1hkQPoAoFk76QMFh8C6DWynOuzIau3CBlmS7vAwc+QtGZ1SY46KZ6o6pEUzEtih9NggZEyMKHiuy8v9f5JXB9bI3HG6SUiN2mCAzhPf5k+OyNhnrztg/rVG+9aZ11urO1KsKiMIe7heDlif+uMz8qf/SjGy44/gaINCQsvixgeh4FZwgs+51n8/lWJtC1VoeErO2q591xlXXvjsaEgS2PBsgM3nWA5s5fFjEQrhD2X6et5pfzjwKnYOV+WOKgAUvIZDqQ/VYQP6/Gibnex7sJUEmwIHvHID28AAbL74UOULfHnPxnzIx28G4jtvb0hBTsrhLh6rdFWDnZdWbm8xvjkeoj1nfPW6292ztUmWZ9dJ+oRbslJTI25NyK05JvE8sNnpE0Qcf3xFVADUJzTabCpoktWas+XNipoDyk6LyJiU6/La4J9k+OAayZoUMayAHfDSG2wTIvLGmDp5bVCNzBxea789ZU2KSubrUXv6d8A56pnr1odvuVOjFmo5OeacjTyHcyJcMATo/DlVdma+CYgbhcYgocWDfH/RAYmT94z0fBMAhbDEqTz3hdxGeOV5qyeUAZIeYCtJ5HcIkxzEW7nfHZIH+UNdn6jnBHkfIIPYWFzW9ABvBT/eygcH3seOJh504ZddJICjrffIjO2PE3gODM7V8GQD+zt5MKbfDFA8iEjQ3U60PO4Z/e41fOTDbp15uV3hqGGt7hKPqqwunLtq52msu7nRyXBnWZPkzqqThTMjlk+tXRSTvVscMOEfkPmUxG0YnrBTAIB28tN2a8tONH8OIEtgIhkPYaz0Atu8cQq2URGZPcI9w0Rd+hhH/p1nMjH5yqx6KV/XaF7I74ySC+Hwqnqozz9uszM5/xcUXIf4Q1HOdwAjW25Axt1kxfpG2b6xyfoDSMIwQkIQ4eJ3YRyScprPmR53mlWV1TLg6aHx3SlGQU5G4Tpn7Jg0+05oAzDcP5Ia+ItwPBaFKy68XJhQKOW7c+5+FkVzpMNceOw4cPU3NwdGBYmnr+eQlTbmUVvcdV1jLLE+vgNUjkb8vW6HGip3seRS774Vkw1L3HHDnOl5dtXUoMbqr/yKljdYfp6dGrEItWhmVNZoREK+Pl1ILsxPf4BWvLLR8jC8V8b4nvoPYwQn5b/3Ahsgg6a/XGc0a3idzHjVPSHqwu93IiaaPzlqzLAovBwX8SjK/phun/tbKf6igMttDgg5sylY4s7xCpY26O9Gu/74sMxduHOxXLamyXKEZfN0x5zprtI4s+N4BTBUV7XJqRPtdn/nT8N5crm9b4u774UXrnUMEOc7DOjH9ru/0zp70h1oojzuDjEA/giAO9tNGzi8bJDCpS48UXftSqdtHgAGFAueZ7/usPFY28nj7aY8Nk2MCdi5SsJL2sYj2Hz4MQA27VgPBsLauItlPOSFEXJd529QftB87yudgz8+QKZcxOPVyKMIYfxVB94cmTDG7vJmKQ7qs9TbzBlVJ3NG1hkYcjTcrcx0t0B4L/IyZPT9RXfgy/jctyIDjsHeJAqOvjMGwuSdVy+wTX2pLg403n+JfDvACPnvM15xYJw31sXsZQo6LG19foOBD2DxXJ/XIKuyY+aKWWjW6xHJVDdMfF+g/ZbOq7ecgDbLNTSTG8xXS2LcTG1L0slh4XvvNErFuuDqZFWjHShzbwdItpc22/c1CxpsDAg+aA/wACzgKdKQwGm49eMvJkrdCTn5J156ccAjRrRwetR4oj2Gwjy7g79wQdmMQZ0/BGd8vm1V2qLtP1jfZPkOHggjwqC4a+TJb8aEZ/oZveOAjrwwSBuvMNGXe2XWw0k+cs6fHTU5AiB4XbPQyYh+1OPFAApA83pDZzNfc6DLm6Vy1RBcpjxsLnB33fAMSN/OipkcANn0V34eA/67r+PZC2ypL9T2oLQX64z870nPOXr9WfdMbhP+PuUftcZQ+uiES0UIFsMnut+2YF3k1GGMUyuTn9en9auV2SO9S3aC4Bvtprzkxp0beNAFKtCFM1y+mJPmAL5IgblYrZdQwe+5CtBZI+rUyuqsT54CdYkaAf3mp0YsHORMiRioVmbGzHvSLyOw3pnDg/mZW4UHT6QLKG6ZGgWARBH0deFJFTrRjQt/jLs0PdjNax8MZ4m2o++KTEfL36w3A6MuR8cm4c5VnliXH4+QBb+0IXIsz4jZc+GMevs+Tzd0yG3ay06Gc2y9kbh8GGOWrSUBBq8/5I98kRNgpD3rM56D8Vk3Y6e++M9hwNcBwDjY3HmVA9z4v9Uajf3rrfj7hBRHvDOYf/e/PQD9t3C/SX93IPJATQatHzt5XPrRdvJzQZtnEnUTh7oxAXTC2waL49swFcowJ9RpKlDaTkxx/egDeADw1H+ogJ53c/CcFqQO1NGO7xD9PJ8Q35iP9uYVXkXJdaZc3tNeSPSd8qLjwVu48Tos4Q2Yy9KVVxLfmBt+WA/z+LWZTGzdbn2+/bRhIbn+3fE78Vk3P7zQlnltLSkJnXmATApkjM4npiTmcU7DrSfe7pn/PQZCQHNgCwPuXrlX7mbp9d9VYcDdo3t0NymMr/8BkSJsw1+I1NUAAAAASUVORK5CYII%3D',
		btn_all_breakup: 'data:image/png;base64,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%3D%3D',
		btn_all_setting: 'data:image/png;base64,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%3D%3D',
		wait: 'data:image/gif;base64,R0lGODlhEgASAMQaAHl5d66urMXFw3l5dpSUk5WVlKOjoq+vrsbGw6Sko7u7uaWlpbm5t3h4doiIhtLSz4aGhJaWlsbGxNHRzrCwr5SUkqKiobq6uNHRz4eHhf///wAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAaACwAAAAAEgASAAAFaaAmjmRplstyrkmbrCNFaUZtaFF0HvyhWRZNYVgwBY4BEmFJOB1NlYpJoYBpHI7RZXtZZb4ZEbd7AodFDIYVAjFJJCYA4ISoI0hyuUnAF2geDxoDgwMnfBoYiRgaDQ1WiIqPJBMTkpYaIQAh+QQFAAAaACwBAAEAEAAQAAAFY6AmjhpFkSh5rEc6KooWzIG2LOilX3Kd/AnSjjcyGA0oBiNlsZAkEtcoEtEgrghpYVsQeAVSgpig8UpFlQrp8Ug5HCiMHEPK2DOkOR0A0NzxJBMTGnx8GhAQZwOLA2ckDQ0uIQAh+QQFAAAaACwBAAEAEAAQAAAFZKAmjpqikCh5rVc6SpLGthSFIjiiMYx2/AeSYCggBY4B1DB1JD0ertFiocFYMdGENnHFugxgg2YyiYosFhIAkIpEUOs1qUAvkAb4gcbh0BD+BCgNDRoZhhkaFRVmh4hmIxAQLiEAIfkEBQAAGgAsAQABABAAEAAABWOgJo6aJJEoiaxIOj6PJsyCpigopmNyff0X0o43AgZJk0mKwSABAK4RhaJ5PqOH7GHAHUQD4ICm0YiKwCSHI7VYoDLwDClBT5Di8khEY+gbUBAQGgWEBRoWFmYEiwRmJBUVLiEAIfkEBQAAGgAsAQABABAAEAAABWSgJo7a85Aoia1YOgKAxraShMKwNk0a4iOkgXBAEhgFqEYjZSQ5HK6RQqHJWDPRi/Zyxbq2Fw0EEhUxGKRIJEWhoArwAulAP5AIeIJmsdAE/gEoFRUaCYYJfoFRBowGZSQWFi4hACH5BAUAABoALAEAAQAQABAAAAVloCaOGgCQKGma6eg42iAP2vOgWZ5pTaNhQAxJtxsFhSQIJDWZkCKR1kgi0RSuBSliiyB4CVKBWKCpVKQiMWmxSCkUqIQ8QbrYLySD3qChUDR3eCQWFhoHhwcaDAxoAY4BaCSOLSEAIfkEBQAAGgAsAQABABAAEAAABWOgJo6a45Aoma1ZOkaRxrYAgBZ4oUGQVtckgpBAGhgHqEol1WiQFgvX6PHQJK4JKWaLMXgNWq7GYpGKJhMShZKSSFCH+IGEqCNIgXxAo1BoBIACKHkaF4YXf4JSh4hmIwwMLiEAIfkEBQAAGgAsAQABABAAEAAABWSgJo5aFJEoWaxFOi6LRsyE5jhooidaVWmZYIZkKBpIwiHJYklBICQKxTUCADSH7IFqtQa+AepgPNB8qaJGg6RQpB4P1GV+IWHuGBK9LpFo8HkkDAwaCIYIGhMTaAKNAmgkjS4hADs%3D',
	panel_rollover_pink: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsRAAALEQF/ZF+RAAABPUlEQVR4nO3bUQ6CMAwGYE/C8TwxKHgYp0ZnYLZbN7Y2uP/hjwka7Wfb8cTJOTc8c+okg3UB6jEvAGCAAQYYYIAB7ifmBQAMMMAAAwwwwP3EvACAAQYYYIABBrifmBcAMMAAHw98n9zZ52/BX+SFz+HBMVwqhwHvQZKpPPb6yOsq62sJtF8HM3CyyB0dTWZ8pzl40x2qUxrokU418M/ozY2gks4Kkw1md24OYtVlaYjOyw4eCpw73rHP+9f1vXpycXjBHybrMFc4hZBMRqvDjkn+Dqe+lBv3VxbmeukqCDtd75TmwDHg7XM9fE+yDhSsAFnnPhzr9MLEY8PVoJAF49oULMKHyd1hAr631irgDZ7qUM7pWqmTamCy87m3lMpINXB07BWRJmAOr/3bJmDLmBcAMMAAAwxwAtzVo3gPOnSIPDelmfwAAAAASUVORK5CYII%3D',
	}
	//敵襲アイコン
	var gifraid = 'data:image/gif;base64,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';
	//敵マーク画像
	var mapimg = new Array ();
	mapimg['camp_t_l'] = 'data:image/png;base64,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';
mapimg['camp_t_m'] ='data:image/png;base64,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';

mapimg['camp_t_s'] = 'data:image/png;base64,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';
mapimg ['capital_t_beginner'] = 'data:image/png;base64,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';
mapimg['capital_t_l'] = 'data:image/png;base64,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';
mapimg['capital_t_m'] = 'data:image/png;base64,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';
mapimg['capital_t_s'] = 'data:image/png;base64,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';
mapimg['fall_capital_t_l'] = 'data:image/png;base64,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';
mapimg['fall_capital_t_m'] = 'data:image/png;base64,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';
mapimg['fall_capital_t_s'] = 'data:image/png;base64,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';
mapimg['fort_t_l'] = 'data:image/png;base64,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';
mapimg['fort_t_m'] = 'data:image/png;base64,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';
mapimg['fort_t_s'] = 'data:image/png;base64,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';
mapimg['reclaimed_t_s'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAjjSURBVHja7Jt7cFTVHcc/55x7726yyebBIxLQItJkqiI+a9UqvhIdx07FFzUOVvsHtWo7ZUo7dFQIRDvqVO0MnbFip0oRtYyKDogQHbVYdZRRLAqRCKgtCBGSkITNZu/ec379Y5OQSEVQkTbumdnZPffeved87vf3OOfec5WI8E0qmm9YyQPngfPAeeA8cB44D5wHzgPngfPAeeA8cB4Y8A5Vw+tLlBydOgtOr95rX9uGByhvETWkgCs7j4Gp1+cqxg3aV/7GuwevYRE5JJ+3liLzz0QkcalI/DiR2Gm572sflsggB6vdQ+bDTa9cz6qivtpwUKWgc1bcXTlEg9a3DuvrxW6I+VB6LACZriEIfNEdL3Nb+4NwyTkQK4LiNFSeMXSBF81cxwOt18FTL0LiDEiUQPFaALoqhiBwGdfz0fjeSqIIzCjQZQDsHjkE8/CgUrA9F7T8CUCIzQxVH878DSZeAJwPMQETARC1DFEffnbrFPjnSvB2gS4CPwWAGzlEffiVcX2OlYZgOPgjclG6fAgCjzjyT3y0vbfiW9AReNsA6KwegkHrtY9nsFCfCBO7IDYK/BbwSsFCT3oIKmw3vs/bz0zN+bDfBToBZhcAWZs7ZnpdrdxXf4M0rXxQptfVyv8rsAJU9eGjePw6u2drbCfYUUBB/6ZpP75q0B+n19V+aXDv6wK8Z7nyXYZ4d9OwaS9tmTBtXs1LbHhmwFGJoF/hvjJ/waOUFBexo7WVqqrxHFM1jnXNm5leVytVVeM5+7RTmL/gUe59pFEdcuC7VyiD4JGhPP1hya3WJX+glE1Kye54YNab0Zcew5xLZsDEECIPSEKv4KGCv6xV8TFTMVsW1ti2XR0sbVxFc/NGJl9cC0B7645BygP7Be59hYCq10UUkEg3Je93XmayNzwTeId3SDwApVDi4Hz9CfdefRorF63gyCt7ZwoDR1feRUzcsPxmv5ilYTaku6sbgIoLnlNLliHAF1Z+n8D7c4K7VygDxIBhPZvj81UQ1ppSpwuqOxEFSvWb9aAfR409gvZj/8EV16351A0JUAJi+e2Wv9bckkp38dHHW9jUFXB2JaX+jOeCR24gumJcjdsf5T/d530GrX0FjbtWKP/uZ1VFqinRmP5XsCvTygdBZXhBvFLrWCKGUXE8YmgJ0OKhxRvInYMuDvd2eAVRpOnujJu+9j/Z0Q7Atgdr2rO/rwl/OYMRA5X/3UNPqSXLGmlu3kgYWna0tvZfgANSeN9B42c55Vc/yqgfPSeBF1eFrgRlAwwaRAGK0KSIVJpIZel30s+LcgrE5dpvae3Mjb0nDGfyxbWsa95M85O0DFR+W/hq+U9/PldVfe+7/OrqC6VtVwfzH15C9djKAwO+95FGNb2uVj7PdLY9VqMAxk19DSMRzvm5XitBEBQardQg3C0dvaOqbYWIBRNzxBIRJm7RHhSWZPEv+TtFHT49HT7rnhzNHX98iJk3XQvA0sZVlCVzys+bdlcrwDlcPm6g8gfsw7fOHPNMmB3ff4KisWvdkmU5N/hvyjcvhKqq8ZzV6/PfvnoNvsRREsNJhKcCMiqFKEt3Ry6dtm0qJpsyBMkI7QlKa0wMYoURhcPSlIzuoXRMN+VHdpHaGePpf99GU+MYRIT2zq5Byr847/HNqXSmX/n9MulZN49ebLvNZEF56ZajGWg6p/hWl53wKlKUZdfLk/g85d9fdALHT/kQUEQmgxKDpwqwYgnOXcnEUxXOKqIegzIGrTTaU2jfEiQEbTTW+hiTJUhY/IJuCks1J1y1icwOn562OBveGvmZyk+vq5XiY9/4syrIzJgzPd0BoPpW4tXPqpiX7YrdKKJUX2yZemE9d86bT1mymOXv7OSiCcNzSh/3Gm1vnsQZJ5/Ew0+vZNJvmti++Dz6lD930ukALFnWyHfq3kWUI6tTCOC7QpRoIp0mKxZrwTmDc2BFkF7fVwhohzYW7YUYYxEnuBAkAzYFticgtTMgbE+QTXtsWluKiFAxLMlP6i5jybJGCketB0/EFGa2qmSqVg1ceji3YURptDtYbUMzTlA63VLNex9spWJYkrJk8Z6g0byR9s4uqo86godeeJ+6Ge8RS4Z4ccvWhTVM+v6p/UHj8Guez6UDFxBQgCcFGBegJGdcTsBZhcURSpaMZIgIAUFph/IsWodoE+EEJALpBtsDko5jUzFsyidKe+AAa8Bpnng+J86UH25t0UXpxaowvGX2L3o61WettZxbXzE+SnvP28gcIU6pt18vBmDmTdeyrnkzSxtXUT22cpDy3vGr6V49sV/582at+9QY06DFQykNTiGi0WLABiA+zkEoGbISoZSglEN5WRRZUA4VgfRApsPA7jiZdAGkDWIN2F6zFET5dpcXz66YU7+zbq8MsD+LS+c2HHZiJm2eIDSjxeK9/XpS9ZnOvpS/5pZ3MIFgAoc2gvRl/b4nK71NW6fBeojTCCqXvZQgLgLrcJGDDGRDDZ0Jou4CJO3tgQSUlpQuiJY3zGm5cp8p7wBX03r1cypOdmlvkXVqrNai31xVtk/lvVNex3gOUyDEirLEklkQyeVam4NWLmeqNsqNtIj2XBjZrcmkE7iUh2R8sH5fOhelpUf79vGG27dfs98zmS+zfHh2/YhzXGgW4NQYp1FrXhq2V9AIR68BDX48Ip4MKSzL4CVsDioL4hQigrMKsT6IQqHAamyPQVIxotAIkSc4lDLSrT17X8Pt23/9haZuX9V66dmzR5zpMt5jLjJlWuMWPzsyAXDZlA9wkeQCv3F4BQ5fCYjBRgoBVKRw4qGsQiKDk95Rd6SdKEKF6zSeu2fubS13fum56kFYIK7qZw+/3Kb9PzhMOcoGnhcpfFEoB6bXfbMGmzXgchvEISgEcU5pLWB36pjc3DCnZcEAr+d/EXjQxKh+Tvlkmw7ud6KG5R4PutycRXLm3HfHB41Vnt2sg+yNDfU7Xzhonfo6XwGY1VB+uU0F84i8kSJaK2MtXrReF2SnNNza1vS13F/Kv/OQB84D54HzwHngPPAhK/8ZABnkFXovbMJJAAAAAElFTkSuQmCC';
mapimg['stronghold_t_l'] = 'data:image/png;base64,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';
mapimg['stronghold_t_m'] = 'data:image/png;base64,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';
mapimg['stronghold_t_s'] = 'data:image/png;base64,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';
mapimg['territory_t_l'] = 'data:image/png;base64,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';
mapimg['territory_t_m'] = 'data:image/png;base64,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';
mapimg['territory_t_s'] = 'data:image/png;base64,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';
mapimg['village_t_l'] = 'data:image/png;base64,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';
mapimg['village_t_m'] = 'data:image/png;base64,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';
mapimg['village_t_s'] = 'data:image/png;base64,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';
mapimg['camp_v_l'] = 'data:image/png;base64,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';
mapimg['camp_v_m'] = 'data:image/png;base64,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';
mapimg['camp_v_s'] = 'data:image/png;base64,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';
mapimg['capital_v_beginner'] = 'data:image/png;base64,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';
mapimg['capital_v_l'] = 'data:image/png;base64,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';
mapimg['capital_v_m'] = 'data:image/png;base64,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';
mapimg['capital_v_s'] = 'data:image/png;base64,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';
mapimg['fall_capital_v_l'] = 'data:image/png;base64,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';
mapimg['fall_capital_v_m'] = 'data:image/png;base64,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';
mapimg['fall_capital_v_s'] = 'data:image/png;base64,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';
mapimg['fort_v_l'] = 'data:image/png;base64,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';
mapimg['fort_v_m'] = 'data:image/png;base64,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';
mapimg['fort_v_s'] = 'data:image/png;base64,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';
mapimg['reclaimed_v_s'] = 'data:image/png;base64,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';
mapimg['stronghold_v_l'] = 'data:image/png;base64,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';
mapimg['stronghold_v_m'] = 'data:image/png;base64,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';
mapimg['stronghold_v_s'] = 'data:image/png;base64,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';
mapimg['territory_v_l'] = 'data:image/png;base64,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';
mapimg['territory_v_m'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAhTSURBVHja7JtdjFxlGcd/z3vec8587Mx2d5ltu2u7RQRDIlg00QjxgkolorGCmroRQmK40JCI6IUJxMs2eKH1A73BkBI/KBorNMVEY0rESi+kKoVQIP3Y0lLabYHS3Z05X+/7eHFmt9QCQqQUhjnJSeacdybz/s7/+f+f95zJiKryXtoM77GtD9wH7gP3gfvAfeA+cB+4D9wH7gP3gd/QZs/VFz8pO1SiT1C74syx4Yf+TUNXSk8BH2suhas89eaZRdaOVnJxryk8W7+Kw5sv46ODv2MkhbaHmoFjX4GLshSIe8vDL3ztGh7mTwCcBNpyajZtdvdmaE0QAqWyUoHpReX5lHrvAU/89Nusvu4YweehiGGoAUfH5oGj3gN+4uRHeGbzWtwW2FMHX4dLGuXYDE/1HnDj9us5wDaghH0pgNnubGbZ25sevrDr4bEqJDHsLw9x3fM95+H333CE6UvhUSCOIQzKsYJWb3r4qV9+mdFdMGghMdDoCus53NserlqYi2A2nE/pgz0I/KM/cIAcgDiE0ECru+47ySO9B7zrO5N89XMvMX0pzMZgYpi10HGQUOk94Hz/Poa37mJ0FwyEkBlodkMrx/Ue8BUXjrObzywct2I47iDr1QcAyfc38xfaC8dBHQaDcn9XPwCYXLNqMfAx4IvAjQAXbHmM1c2d3HTdcvYfmCOcCThRPbV+3suxszYfOVs/iE+uWfVDYAVwLSiuKOicfBmvHjHKyhUX8/sdU3z4siWv+vlqbX8tqmVFEKr7+Y/3+HekwpNrVt0MrAbWqCrOZaSzcyAFJlCihmJCMKJctHwMdkwhbh8A6sDlUBRCXKmRZM128rJFMHdNfuHK7UKx6Tf3/y07pwpfv/aDxiVj1wKfQvjG/DqpM3cCwWFCTxgrYVUxRgkiMAGIwCdHr2bTtm2MX5ojgKK4XPAFuFzQAorCoD5GXAwSIxI8Aro2qBx+7lf3Pa1vm8KTa1ZdJuI/jSy9QwIPFHTaJwmMw1hPdZEQVRRrIagoxp4CBYVXTNXGipTXCTGKM4IYRa0SeE+RefIkxeWWwAxcHgThQZeMM7nmyjtBppDiZ/fe/3Dylis8uWbVpAncx72aWzAgxpG3TxBWcsQqYUUxVrGREMaloiqCMYoJAAH14FIhTw0T9hK279xN6wMFIqBa7qiiCAbFO1k47zIhT0Cd4NVQqTcRDaC8s7oL+Adwz70PbMveMPBtt98qgKxft8Hf/PXrx2ZeOL7auXxEjPuBGIf3KTADBiRUanXFxIqNfKmiUdSDMQHqQaUEF9MF8ULaNqRtYWl6Cf/c8xTDE0X53gC06JqikPI7PBgpdycgXvEq4BXvBVeAS0Oq9ZH58gHYDHz33ge27bnt9lsvAg6sX7chfU3g9es26K233DQWV6rP5VnGkQN7SDpHqTRzKgOlH8OqIgJehbiiZVmKRxHUdZX0gvhTnV61DKaiMLgUQPBOEMApqBd8Ct6XHi4y8A7ElCEHoAJ4wTkFV34m60CeBAQ2xMYxcbXGkuUrMNYS1+p3A3cCu9av2+DOAG7Pzcn69d9bmSTtB4cWDbeq1ToDjUXWxo4jR/ey+1/bcUUbEwpRzRHFStRwWAtiy4ssUir5umVVWhb1ggLiBZ9D7gRfKC4VstTg09IW5dUqlS9yIU0En5VRF1ca1JsjtMYnUFW8KsnsSVxRYKOIWqP5i8CG37zjjp90TgO+4UtXV+qNwdsGz2t9q1KpDoRhKGEUISKIsdSrAwwNDxFaw7Hj0zy+88908iNE9QRbcdgQjC3LV+bXcDqPpwgCphtQ0h1SUJWyMrzgPWgiZDm4XHFp2abUQZFDNhdQpIYwalCtN1k8sQKArJOQZ2XVuqJA1S8EoxiTB9ZuSjvtm+7+9ZZMVJVrLv9Qq7VsYnpegdHxZQwODhFGISqCesUYgzEGG0bUa3WiKCLLZ3jpxCEOTj1OJ53Gxgm2AjZSAluqzbzYuoCNqpbz8VLCK3gvUECaCi4BV0CRCHlHyDMhoMbA0BJGlr4PVCgKR2duBpfn3bQDEUFf0QVMYEjanYXKuue+B+VVU/rGtZ9VKMNnybLlVKo1wihaCAZRgw0DrI1AHI2BRcSR8vz0Pp58bDueWaoNRxA7bLf3GtOF1LLXzr9WVVSFvCjVTWcNyZxQJIIJKtiowdj5FyISgAqd9hx50jlNRaQL2035PMuY57rnvgflTbWlU/CG1vgyBhpN4jheCCIAay1xFBNFMc1mgziOePbQMzz+6F9pJy8QxQXhgBJFigS+bEMiZavpCM6VAVUkEbgGYdygNba8W+qQdTrkabIAoeoXXguCGEOWnBoXkWjjpq35/73SmocHGBodpVZvMNBchBFBuuobY6hU6hhjGR0dJrAwNbWPx3Y8RJqfQIIUGykSlH3W5QYhJgjqjCy+ANQAQp6mOOfwrsA7R7c+SlN0Fc2S9LRyPatLy9PgW6PU6gPUBpoENli46mFgCWxIHMeMDLdQdTz9zBM8ufPvJJ0ZQhsxOnE+IiFg8EVBkec451DvywRfmGm3hRUO7/2bgnzL75bm4UWEodZimsMj2MBijACCCUq/V+OYMK5ig4AjR57l6OFDZFmGdx71RQkyH98L5gRfuK7XFRGpbty0NTknNw//S/lF57VoDo0QhiFBEHQ9JkRRRLs9y5FDB3Euxzt3Rp92p0O+piffMffD/w1/3tg4URwjYoiiGFAOT+3F+bI3i5Gyh3rFe4+IjGzctPXFd80DgNeDb40vI4wijj9/iLTdRgILqogxY6i+CGQbN209KxOTc/EXgFfCd2ZeNr/94/a3bRLS/89DH7gP3AfuA/eB+8DnbPvPAAyT+4cW5+mFAAAAAElFTkSuQmCC';
mapimg['territory_v_s'] = 'data:image/png;base64,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';
mapimg['village_v_l'] = 'data:image/png;base64,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';
mapimg['village_v_m'] = 'data:image/png;base64,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';
mapimg['village_v_s'] = 'data:image/png;base64,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';
mapimg['branch_v_l'] = "data:image/png;base64,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";
mapimg['branch_v_m'] = "data:image/png;base64,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";
mapimg['branch_v_s'] = "data:image/png;base64,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";
mapimg['castle_1_v_beginner'] = "data:image/png;base64,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";
mapimg['castle_1_v_l'] = "data:image/png;base64,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";
mapimg['castle_1_v_m'] = "data:image/png;base64,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";
mapimg['castle_1_v_s'] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAyiSURBVHja7NtZkFzVecDx/7lL972399H09PSoRz0S2iyCECEGCQOSEUIg7ALElpDEBPKQ5CUJDlWpxEVSoVzOQ5aiKqbsJGXKiQuRuAikgkMKg1kCWEhICMVCYtDC7EvP9L7c7ruckweBY6pIlauQB8me77H74Zzf/c75ztf33hZKKX6RQuMXLJbBy+Bl8DJ4GbwMXgYvg5fBP6swlmqgkVsu3T2fr7rdhP+GFmq2kCggCA3p2+1I0PnG+JI09WIpfjzs2Lhzj2Xbt5ULrb9+85mXRwHEg3kBYLo63qNT6ucqw54WXp6IWlevnkxwZ/8dzuLlvd9Tz802fnxBNuy6q+f04vuP/PdjPxdgs6XPXJRcvdHPhBvttEV/s73p1jW3N2zPOfPE1HfuM9DfpBv9822Xbu/tP/rK4xc0+Pode264tXbL1+x4gtmJWSzdYlPml7aIxDZODZ289lcvv/dzMT/es/3ocN1uHr2g9/DNX9i7c/eJ3c/ommHPt+Yw0EhEk1gRm0a3SaB8er0uA+kcKpS8rr3aPrl4/LcOV9968oIDf2Xg4esGU4M/CL2Qydo4K/sK2KYDQiGlBBQ9zyORTFGrVSnPzRCLpXnVeZnp2vgd73RO/NsFcw4/NPDwzuEVhedDL2SqOkaxf4RMqh8nHse0bTRNo9NzGRgYwETjX6uPM1tcZCCZ5Zr2dgYThSc32RtvvyDA91x7/y0XFdY/u3LlSu304nvk0kMkEmkiloVt25imSafXIZ/LE7Q8/n78GziBxeTsOD9KHcMUJrek72R9/uInP5P8zB+d90VLzQePiqiK1Dstdn5uN6lcmoXxRUpzc5jouL6LE0vQbbo83tqH7UUZHhyhuP4irMMmraDN6chJZE8idBE/7/fwLYN7r49k7WTQaP/T+uzF8Y3NTdj9Nv3FQaJ2hLFjY0wcP81E732GMiPk4gOU6xXMAF5Jvkyr1mC+OxeGRnj/yc7pf74gitYXb7jr7/q99O9MHBk3fdWjP55lR/vzOENxnGyK0R8exouB7kLNX+Bw6m2Cno9jJaFPUarPBScWT5jnfZXe82t3OGbPeGxjet3d63LrmHhvgpnKDIszi6iSD1GBEBrtToOOaOGFHpFIDCsRxUrEyNoDrJlaw8mhUXX65PG3qqq6+0RjtHxe7eEbf31v1JJR79+feEIJVz64Khzeu31mB9F6lLXaWrRBQcNqM2fMcqj/TWpzFbrSJWFmIKGxtbIN048ga4pYJ0Yml6EoVwtZDC+vTB78R2DveZfhbb+yQ7OHrEw4J1fVTsx+q7hi7WUjA2v4rNpKJpnGMAzsfgcDQeCHHIkcofOyi64bGLqOpdnE4ylqnTJjU6NU3UUOJY9U62Zz5+Ti2JHzrkonVqeTpjJejGXszfFVUVLHo6xrrWPUO4ZlOZxKneKGmd04fTGcFQ7bsldxpjhGp9WmuVjnvZm3Wb9yMyIKKdIsMEN/I57xs8FzWy7dtuvto/uPnjcZvmbr9b+dT+Qf+WLj1riUIZ1SE10KsoUhDr7xEqs3X0ylVOZF9zmEZXJtsJ11IxuYnhrj0PzrpEmzKreRwqpVvHPoIH2ZIayIzf655xkx1/PGL78VSCkXmm7j6Ujc+oMf7n8x+NTAV23Z8YVILPrdm8f22IloChVT9EouQxtW8dWjf8pYZ5z71L1csmUr5dkSL+jP0ew2KTcXccMWG+wNXBe5kdyalbxU/z6vvf8iF3kFbit+iQgRFlSZIAg4YOzHHeyGoR5WZqemvtzsNr87X5rxlrzTshN2bN2mDd+u3lhWB2KvMXdqgr7BPioLCzyY/WP+Zuhv0dFoTlZJ9qXYUruM5MYUsTUpbgpu4GptB0bcpDq+QN2rsPKSNWyxtlLpVfGdkHajwXvBCZysg4oYuhk3K4ERbgPin9qS3ljcHLEzsReG+gaviS5EsYMIn/W2Mjg0RDqbwa206dZ7pIZShJ5Htd6k02oxX51DCIGSEulJzIiNFY9QbVTplBscyb6N2+tgODotq01X9h7zvOB3O34jmC/Nqk+taHl2eFlp+sw1XuARj8cwwggl8Z84LQtzxsQ2Ha7SryWjZUj29+EkEwgdKm/UCEMfXTfxzC7lyjTt+TqvDL5BkOliWjZmPEoQhCzWS4D0hS5U6RNgz0mGN23e7INndFyNqO1gSIgKE0wNyzQZiAxgaAZBI4AWXLHyCq4e2cGr33+ZufIkHa/B/oFDdA0XOx5DRHSCEKr1MgqJDCW6Brl830K30/vLern5rfnS/90eWlJwvlD4k5tv3f61VDrJ5MQClUqJuZk2oqHQlECPGoiIhjA17KhDLpVlgCz6+xoHJ16lnQ7RMgbSkHhBSKvZwu+5CE0glCKRiDE80ocRNYnFbGpll9OjEz/oef7+0uzMQ0sCzhcKArgU+EPg3ptv24plOfRl+gjDkEa9x/ximdlKk+bJGr4M0DRBxIgghSKdzNBnpzg9PUZHuPSCgF6vg/J9UBLHcVjRn6Z/0CESjeD74Pd6uB0fw4hSrzVoNtpzAeIiIAZUxkdHw3MOHl67oQA8EHTbX/7ws6HhETZt7kPTdCzLIRGLgwDHtvEDSavZpVwtMTtdYWHSJZQBYSiptWroERMCDwSoUGLZJk4sRrvdIZVKkMrEAYnbDgjlWU887tBpdwmlTrVeewFYD0wDtwO18dFR9xODh9du2A7cD3wJIOi2yReKCCFJ9SlWDjs49gBKQTRqIUOJUpKe1yWVzJCIJ/D9kFarQ7W2yFsHR6lWWmRzGVavzdKodZifbVEo5LCjJo1Wh/n5MoZpYhgaQoCSEl0XSDyk6uKaMdySe0ophlFIYAK4fnx0dOoTV+nJU6OvDK/d0P8h2LRidLsumt7EC6HVbpAtuMjAQMgUYZCk0/Lp9Vwq1ZB2u0skYhCPxchk1qDpgnq9gQxhdqpFvd7CMnRsO8L7YzMMDvThdz2EAF0z8cMQK+HRnxO0Wwblko5bcT2lWI1AIdABF8Wu4oYN3xkfHQ3OyZK++76b1Kl3m5QWFhAChBBoQmA74MQ1Vq83WbMeEmkdt2XRqSdot6IEnsDzQ+yog2PHKFfKzEzUqNU7CA2a9TZOxGTFQJrRU2MMDOSozi8Sy+oUVutk+sFtCmbGNBo1RbcXIsQHk9fA1A03NxCvhGFw8esvHa6f03P4N+6+k5n5KU6dPM7EdJ2FxQXaLUGnHVJZCDnzbkhxnSI/XCfdVyeWcXBbMVoNB7fVQimF2w4JpULTBAgwdI1Oz8NfrOMYklx/m1WbFLajaFclY8cNymWF7wWAQtM1NCGIRnSy2SjptCMFIoGIaOes8cgXCldeu+uS+qricGpVcZitV2xjYnzyo/iFBRZLOoslhWUrhkfaDK3u4TgtYkmbSNSiPF+j1TKRIfheDwRomsdQvsdQMSCe1QlFm9Kc4J2DGq2mQKnw7GrSBLquE49F6F+RwHEMhBZ80B5L8dO2yT/Vks4XCvF8YfAvioXc769dt8nYesW2j3w/MT7J9Nwko+8eY3yqSsetYUQUpgm2I1kxcHapp9Im7bbH9CmDrjQYHJJYiR4yCGjWBIuzBu2GRhCAlAJQCE1g6Dq5gRTppIMQCpBSiECiB6FAhUrp3wb1wNP/8rr3sziHN+cLg48WC7mr167bxMfhZ+anOH78fxifrNBxm+iGImqdzbxugmUrVmQtAl8yPa7otCEIBCiFVCAQ2JZJOp0gGXPQjfDsFkCh6IEI8X3VDsLgm7GY/qgQTD2174C/FJ3Ww/nC4EPFQo7/Dz81O8GJ4z9ieq5BKLsIAWGoQEikDFFKIKVCKdA1QSIRIZNM4TgWmg4IT0kVCiFCQEnHsY91e63vgXoEWHxq34EfA3btuS7y/LMvektyEy9fKPxmvjD4V8VCLvdx+LH3xzl8ZD+nzozTbLsIoWEaGpKAaEQjlbCxLCvUdR1EqAkhhRBnLwxCeroeHlKK/wC++dS+Ax+pxrv27BSArpDyhWdfkkt+mzZfKDyQLwz+WbGQS/8k/uCb+zlz5iSaJjAjJqXKGUw95mlCF5oeGoD4cFZCC3whVBXFPwhNfQ/UMcD9yYyed08PP8DvyxcG7yoWcvrI6vUM5nJ0vPGxt44e7qgwukYXIio0KVCAJn0hlCtQcwj1CvAwMPfUvgPBuZqPWMr3pfOFwleu/Lz+VY04mrCRgU7gR+tC0NZ0Pwrq60KoR57ad6B2QT4f/ri4+qYRLT/Ql1JSe0ZJraiUOKmUds/TT+yfW4rxDZY4XvuvMQlUgav33nPlWsAUQpaWanyx/BeAZfAyeBm8DF4GL4OXwUsV/zsA0kUM6bb4MwYAAAAASUVORK5CYII=";
mapimg['castle_2_v_beginner'] ="data:image/png;base64,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";
mapimg['castle_2_v_l'] = "data:image/png;base64,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";
mapimg['castle_2_v_m'] = "data:image/png;base64,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";
mapimg['castle_2_v_s'] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABG2SURBVHja7Jt5kBxndcB/fff0MbNz7D2r2dVKslZeSZaxLYwQwhzGXDF2AanEBZhQQDgKhysxBmxMDBQkRQgVyM0RKgWJSbhCyTZghIUvjC0kS7ZuaVd7zuzMzkzP1Xf+WMm2bFnIwqZchb6qrprub7r7/b7vvfe99+YbIY5j/pCayB9YOwd8Dvgc8Dngc8DngM8BnwM+B3wO+Flq8tnemO1OEsfwxOTj9YVbLh/ZMXn7EWsxXN/aIN+oX/9Yn26InPhqFEWAgCA8/rzFcuP5O8NLsDFPzrTO3+HdbkvD3GMcnHryPVEMcQyVBYdqpUkcx0TR8SOMSXWZz1/gJdinXm+LDZzwKC9pDhS2iT+KZd386Yk+rx3xgcq74j82/jQGCGIIw5g4hChaOpIp8/mn0quyOZ7IGhOjIeIS/08ceYxbLyM2Jtjs6lxUWf/yCfNYXHIr/DL1UCtumxT9o7wt/8nprlAedAlxhfgJA/k8tOEojkF4IjBICPKHFz90td/Tgxr3c4lcIEx76H6BUN3HZldnQ3md8SvlF2SCblSn0R8SEfO4DxCOG/T27dvZvHnzcwt88803c9NNNz2jGxfLDumsnZQQRtenr7oyX19GLl5PJ2qheC0EwQAlxSb5JYgDGarHKqSUFA/038cFk5qwWX9VfKd8m/BEMxGe6MWAPXv2PC6oLKMoytPKs3z58ud+WRrNXjH2+fTt2684tOamTPoCFv0aSuDj+z5u7KJHHr5bxw0qPJS4j1+mH2D18k3sXrGXsCOyOXh1vFbfvL/htE567vbt25/yriAI8DzvaWVxHOe5AT5YKbOl7/3vTmftm15/YOV98sRec9hah+uW6ZJNGpqIKwkQBbSJCEWdA7O30Wn7rBk5n8FchkJfD0k5QVLIMLhgrXyDeXVwRc91X4zjePQ1r73iad8dhiGu656yr1QqPTc2nEyZb7mhcf0/XSn+PWFugG41D4Dme8RAKHbQZBmPEMuN8OQW98Q7uWfwV5hz3QzeN0i/MkrCSCLFGpl0njFvRLp38icfFE37fVHoaE9W55N8SBTheR6qqj6lb2JigkKh8OwC12vNbwHfeqv9Z4HS6JLW+WtwMj598Qh9ap4sWcLQox1U8Y1uJudvx2OOl81fgaCoWIluZFljzBvhN9JOGs4x7uUgVcWJN3X/yQe2HvgSpwM+MdOngg7DkE6ng67rz36k9R/O1+R01r5p5pItnxrYtor+jsJvuo8w7C5DSNioosrOzlYmpQmGzI2EioQWy7hhnYnqXh6Jf8Kevj34asxQuG7qLeG1Q39x4Nozfn8Yhvi+/xRHNjMzc1oHdtZO6wvq57m69c6bR3oHGftgH4++/RHuX/9jZtq7eTT6JROLv+ZYexrLMKl685QW93Fg8U7+z/w6e0d3Ut/Q4aJ1lyKKIq9798tffCPve8YyBEFAEARPuV4sFs9+hk8sFSfWS9M0aTab7Agf4tvef/Hea99NYWSYwsgw568dp3zxAp25BX5xbD/ST00WOkViMcnBFY+Ssbq4sPuFANhdPTjVIrnubr78L3/7/Y7b2Qh4W7duxfd9RkdHzwja9/3Hlq0TrdFokM1mkSTpd1fp1bnLLTvV/9oXSqu+81bhTcxsqSLEOiODg2S7cyfBf/bo58jaaXq7TcZYhd3Vg6nrNDsdapU5SuUFapUSlzuvuOBB4WB7vPulN+0ubbvlxEDv3r37jKEFQTgJcGJi4pSq/YyA32G/J/qjxpgQsQp0kZoVcWzXo5TvmuDBS+4ma/YwnF/5GLxlmgwvK5BKdT8GebC8wNTcIcZm17CWlaxSL0AMarxCukycqUz+9ZCQ/3Q1Wa0pmtgLeGcqm+d5aJqGKIqn9dpnDKxJ5pc/Hf2VkO99Ka7VR1MS6erUsf39tLrL9B6a51Cwh9adc3zvRfeTMXJLCUW7zdHJXzM1d5g1c+exOh5jTF5HwsqhSzoZQSYRakzHs4iNFpeJlwl1v5n6fud/vVNFXGcCfcIMwzCkUqmQyWTOHPiE7X5o4/c+M1UquRzZ9pFeZ5x0sp+2aaKpF+L5TepBDVVeSdRTZ8u+RaaCGXYmd5F52GQsGmVcX4tt51EEA0WAIA7RoxZ1t8VUcJBt/fdhRhnWxEacdM2zzuJOQJ9o1WoVy7IeW8LOeIa/efht83+58JGP5ntf+tE7tJ9+yjn/Wzdt3LqBHvN8bKsfw0xjCjlcr4EftlmpN7AXFTQriS6YKHFMREi9s4Do+sxToiotsLvwCIZpI5RDnF7z1uSE+ebfJdyNoogoik5S7ampqcfsWXimP5d++R/+2ZgtLn7swL5dn7jqZa9m4e6IXyx8n41bN9Bnr0E0BmibJmazxkJnGs1tsl+botEpUg8aOEKJ/UM70e00HadCX/48hpcv566fbWXDljZSKkv5rg73HJgTdjy46+wyolMkGieA5d+2JD15QMrlsv+DbY/s6lOK7Dp2mAteu46hB1bjbtKoZkO2/eALvPC2C1GNcR6JH6AVLFLtTPCboX1k0jn680O8NnkNAHc+shXTtjh65AiL1TqT9yYYGIR8r8WGPjv++OdeHFd3GoK4KvpKHAjXbfvhbBjH8W+16dNN4mln+ITxv/+zG8Sg3VkWBPHKu7dN3GFZKkd3iCiqTGFkOfnB5ay/aCN9uRy79uxmtLCMZCrND773XQ4fPsDQsmGyvcP87Lb/Znz9C5YioqmjtJ0yVccFBEQhpteOMRSNrlSCer1Npscgo6rsFWcZWpGjfFeHgZfrn//4O394/emAJUl6Sth5Rip95TuWCUIntFxf+EznSPTOklbTkymFA/eDIqskkwnCMKbZahPFsKxQIJ3uZXzdemxD5+c//zlxFFAYGaVUXuChX91LylapOi6+t5T1GEYC00hQXKhw4WgPbtBG0WTcVoAiCiSNBMWKQ+9Aij5dY7cyxUUXp5u7v+ub429U8u9544+nATa8YB0nTOB0Kn1K4PH1K3nBK4Rb5u/rfExdTlSbbcu2rzMz00QRVaqxRWWxjCCI6KqCpikoiozTaGFZBu1Wm1bHQxQVenq7aTtlOl5Eq70EmUioJDSNRqtD4Edouoxp2IRBwMVjaWZL84jIOPU2yVSC0oKDKsqsWTHI7v1TDORTZAybevYoK0a651r4V/7b3xyLgQd2PLjrKevx0wLf+I8XXXz/vxZ/ld1sL85OzaULzT4WWh0aNY+eXJKJYyW82EewBxgYGKBUKlGvt2g2HTodH1EUSFoJNE0ljCKmp4voCQ1VkWm1XSRJPl6iBV1X0LUEqqaQTndRrzVotdqMrPcomCbHmm263V4OH5kiaVkUFxdZvrybw0eKbFyZZ9+xCupYjBD6sZTySWjq3NQh/xXpXvZ95eYHw6eriJw0DImEvN3KJXAfDdLtPTKxqFAuNnE6LXwxwIsDWkIWwzDIZrL0dPfS1ZVk48WXcOmlF9I/0EO77VEq13HqreMBfojrBmiqgqpKZNIZ0l1d5HLd9A/00dvTh+8HLCvkMS2DhSMJJqZ8zh9OUtjisOWVwygZgU1rltFxmvTYNplMF9VOCzUhxtVWKEhYQseN+5K5eE+XrX/nq7deLv/W5OGy16x61Ytek9YaC21W5jMcDos0gjad0KWiNVEmZaxhG6GskUnnOHL0KMOFITLpLur1GlPHprlg7Traq1waDYf5+SJyUcELXBIJE8s00BM6AiK6rmOYOtPTc4RRQOAFmIaFrmnMzJYx+8CLevDv9jhSmiZwRZJrbIKpCiXHIYpjxISAaUuCH6i4Xkjgi8Kq8zJ02uLVUUj7q7de/nbgP9/7pjviU6aH3cuk25pVj6LjkEza9Ng20xNVNo0VGB7JUs86FCcUBgcH6e3tpiuVwmk0mS/O4fs+42vG2XfgAK1mk1qtxtDQEJZt0de7pP6iJOHU67RaTTpum+npOVRFJpVMIssyzWYDz6+TSqbwy12wIJBM2gSuSPF4varoOGiSylzTwRoVqdc6JFMaubSJpgkcOlijVHTEHQ8tyFEUfxPY/tVbL5eeAvz1rReInbYbFIuPF9OKjkPK1EgmbfRphZE4wytXWyyUyszNzyErCnOzs/T0DaAlDI5OTjDQ30+r1SaX66ZYnMe0bQRRoLq4SCqZQlYV8kODLJQqKIpCd0+O+bkSiOD5dYzeBoV8SP8aTpJDE1VKTnupcLgiQ26sw9iyNIIQIYkB6e4Y21KJIpH8MoP8YJbJiUgENgETX731cusklf7ml7w3bHpdt7w45xMPxZScNpqonjSyPdgkkzbJqQmihXkGunPMiTLVSpmO65HJ5nCcBp7nIitpCkMFHtqxk97ePjxNYX5+jq5MmspChXx+kEplgVazg2kJJHrKJLMSutrFWL8GrQSP1qp4VRtRFBhdlUEQNS6/qoAmj5DLaLTsKonkJDPFNocPVvA8kaRt0G7HpLKgOBJHD4cURsRBEJy3fGg1vb2BIB0LflRb82LzmupcW2x7EUkrgTTYoKpW8OdlulI25XKTuttmZb6HnYenSEg6I/keyrMzCF6RFSkRIdlPEIakUimiMCKIInzfo1ZbpK+vF03V8bwle/bDBeR0GTWzyPo1SXS7h4ZvEvg+tU6IqsSkWja5vgT5UQMSAmY6RTKZJGFEhKGHpeXpSiQxZQMhDgjiOPa9QAhDqFQ6SKJGGMYcPlTBczVWjjej2Qn7Bvnfb3kwBXDtDWv3C7KUitSkbZiONnZeQTwgzNMerDAaZnhk39xpZ/7AnnuRtYih7hx3T7osXz5CreaQzaZpNTu02k2krimUtISES1/OYPKozPaHwY99giiBYQoEUZrd7TYJs00w2cIydCwzganVGIxS5JIafVkLQYiRYpu0pSCJPsSzTFertJruUhUkhtXjCkaiN/D9uD61M5rsHnY3POalv/HZh1ed+HztJ9Y+jMDQ6vP7bVUOxGy/zPilK+mUdFpnAJ9aOcnRxiSGuRIxPYmaDjlvOEuznmJqziLyZ7l7xyCKZiDJIoqkIEsCURwjyQJaxkQQRQTZo+l7tBogtxSaUR0rscDC4nJktU7GyuEGVeLYIGMlBCOdoOlXYxFJkEn48YJfOjY1PwiQzab55JvuOHXy8I1bHl4L8NI3ZRhePTi92IoyqtjSVw9EXDBgwmiWAcF4WvjOLgV7HZh9c3QlLbqyGq1GQLHiUKvHdLwCdqYPNaET+QFxFCLJCurx8mrTqWOYFm67gywqhITEgYTT8NhfFkmaD1OwDOaDgBpT6IqObvSz2DoSSaHRWtv3gsEwrjuvu/rv4mdU4tl2awVg8MT52z+5doo4Tg706AlLbsnEPmtOAe9GHjrCEmxGpVp2Kdccygs2rU4OK70MuysNgkAYLtl66C+FnZIoY9op3HYbTTdAB7fTQoyL9OfAMssULIO23MGSHeik/LrXalmG1JWOVd71nu+fvih5NtuHr7luBbKt71UE0qOGlmo7y9RDzYeF6ZkKWwbHOXiwxN5wEtvSGBzIYFoGk0dmmZgZQDH6URIWdjqLJKsIx0OBKAyIwoAw8ImPJ/GR38APJURvEkM/giDnKQx4qMSBD43xHitz9Zu//YwAhN9lv/Q1161gw0Ba2O909icksU8WMeYqTXF6pnJ8p0CO4X6NYrmF04a9+01ktQ/dTqJp9vHcNVxKQ2OIoxDfLSPJCST3HmQ1QpDzDPQ0UWU5jKE1MaMlB7J1bvnwHWcls/BsbBC/8YarONR8GDulCqqklBIiSU0UFT+KcCKfKI6pL/osOjL1Wogo6YhCg9pCDSmxEgBVnEDTl4KiSOwlm2mgCEIgikJnpmTYzYaCaS3VoL/22e+etazCs70j/prrVgAwPVNhxdgyVyFSIyIShkerJaOIAe1Wh5qjLdlw0CLbJSLJsFgzUYQ40FSpcWRGS8fBFIKc/50hn1PgJ7Y/v/HxGNGLlIOiEKckIbBM09ecqiv05D0O7s0QeYEXEVfnZp1eTZeIxN5nFfL3Bvxk6OOxe96LlDtqlU6vKIjtKA4HwqDFF6+/6/eyi0c49yePc8DngM8BnwM+B/z8af8/AG4gVHONjJoVAAAAAElFTkSuQmCC";
mapimg['castle_3_v_beginner'] = "data:image/png;base64,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";
mapimg['castle_3_v_l'] = "data:image/png;base64,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";
mapimg['castle_3_v_m'] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABD1SURBVHja7NtpkBxnecDxf9/X3MfO3tKu7nstn/IBxoc4XbE5KnYFTIIrfOAmpJJyKHJUKD5wGjBFxamiKCcxwaSMErBjA44Nli1kLMnalbReWdKe2t3ZmZ17eqbvfJBRUmVykPIhgvrz9PT7m+d93n6fp6eFKIr4bTpEfsuOi+CL4Ivgi+CL4Ivgi+CL4N8+cKFQEO5XH4g+INwe/b8Cb8xuOZxKpcb+E3RNobf3Hs1Til+PPk8LkXQ6/bNX6/rCa1k8vEd7V3il/1bhu+K9nDGXyjc2rs2ZxMjHB5GFGABSo8tD6kPeojEfq9Vq7is9Bvm1jO6idrZbcseNkXAd10dvz8mJc8iSMw9UARjN7GJHZZ0iKv7P0un0nmq1Gv1Ggvekr3vo5ua1RowkbepU3ep5ZFpNn/9cKygyZl6P0A6v7ImPfD2dTn+8Wq0GvxFTOp/PCyLCrqvDmz41WOl/r29JTI1Oc9vEXqZ4CiM++LJzdMEnECyCeoNFZqjItdpR69TehdrMLy548K3x3z96tb1zYz1c0luWSHOrQ2KLwviRWW6cWMe0VievDeFHrZedG4oSQiukGSwS4vG95A8erNVqv3tBgW8XrpHHR2a9O6bvZGvhVg4XvwfAsLqDefd5IGDxcgGAXzSe4o1T218W5VCUUCODhG/QkDsEyrk8D2tFisELPNnzOPPFqnDBRHhw6zZNWKoduKl2zdi7eJ/gFArUrBi618Hp1qHTpG4vcTo8QB/956MMkPANMn4GgDlzlTDsstw4zk96Hka3ZIqrzo/NRuKW5WjBueCmtGEYykhf1gW4Y/pOLmEPzsBGahqIbpOwVabRmOF0eADV2oihmOci+RKySZWDPc+gWzK6Oszc0qkH0s3G+2fCyL9gc3hs52h0243v5cc/fZxKbZY7pu/kKEd5Hx9G7FuL5zSYrT3Pv4UPMWpu4Kw9cx6Zjm2i2ppibNNNPD/1E7ptX50vVr0L/ra0YcMGxn9wgrraJfHZYXpPdLj7wAfP4y/hSkZZxyOFB9HVYbbnryBUVETPBTad/55XAvuqgd90xRbhiWcnI4Dv7vshG94wSKKSJJ+2MHduZungVTy46TEu2zzGv849BsB6azcLpTKxWIajUz9jeHotCj5FefHC31rmUtnEUF+iftvJ90TT4bTQWBfhj0pkzBhrRwaYmT5L41idd/3R7/DswXEmZg4xOLCOlfk5KjOrXFG5EjvoMOecwsPl7MhpAl/9nI/053Nzc8EFAd6SvmISQO8tbQa4++QXcSwNLwLFbbLgTnKSSYSsyupun93bNtHfO8DxE6d4buIZrFSG6ZnDbFvaxSZljEPN/SxvatM7ZeHjoaNzWJ+YX+muXhZF0crrDh7bORp9cOIjhLveSboTETirL626HrRt1MAHJEK3xXznMAuU6GQbnByeQRIsWjMVxlq7yWu589h0Oke1WiY3pSIhYGChodLBY0kteaeM03c1ao2/e13A+XxeSMUJPzl9N73x7SyObsRYm6MzUyZeLdEVfMQATM9D6HbQQ4FFt4rgnOZbmYfY2dyOKIrUhCLjfc/SbfvsXtlDXhtC0RKEYUiOXs62ZjgrvBhN6EceXrZLt7yuOSwIQkpVjVu2bOq9v91q8kt89YarqcWKaMckwmYRMQiQENEik+TcJL8wprGFgGn7p4jI9FAgG+8jjsmKrGB0I1Y7Uzzasw+vYr5QCpc/EATBgdd9lY6iqCYIwqMAN197B8euneG+5++lPf4f+OLe9ah+D52ZMsPlFi9oUJVKDIpDOLEdxCSLVJTBDiNmWuM8OfJDdHWYdDqHXpRZWFm8N4qiA6/pbWlsbGyL5ZmflkO5sui8cNdV74ib0zN1X1eSsiSIWYDR4c2sH+0FYCAaoGiWuE/6KO3DFT45fTf98e3MpXth85UYJ55jQZtHCzM0Wqf4l5FvoqvD9Bf60YvDXH/tDWiWzsOPHmNs2xV/AXzjNVu0dm0diPZOvpt9Iw/w9tJHEO0aT1+5Lyqs94TCQIrpkx0WjzgMbtzI3sveTaUyTyYzRKUyj+CaHJh6moKZYXLp59w+8Xv8445/oN1qnisN1WG67hxjm26id2CQhCHx1HNH2N6/mWOLL1CtlvGkCkGnhZkz5jQzWunW9EE8c+/48aMTrxj47o//ybb9h557c6My9aUbZu9Ctut4sQx+LI3cqvJw/l4Ka+Jkhlxmz7TpFlVkVUFRNRRFZdv2y7jtunfSP9jHj378NKXlBW595zuoVxs8u/8g+ycP0ZPMMbpxPY889ghvHb0ZYQQOHR3Hdhzq9km6rsvgQC+lUhmQUCyHwpAWzJ+qSWpcwq8Ofub48YnP/p/Aa0cKOzbuNt4rhz3vEMTt2sLkY+tumL2LLT1vw67MMusfR7brbFa2cChe49rOKM85B3h8z7fxFi3ieYtsNsHSUpmhoTyVSp1W2ydmyfQP7WDn6DVcsnk9Pb15Dh+a4MknnmB48zrq9TrjL44TdgWa3VN0XRddVTEMFc87t7OUFRnP9akWmwhpl2zOYHBtmrmZMmG9708nJk58/tcC/9Xf7Ik9+/TCtGEo2VpZEBZPJih723n/VIa+2FXEciMATK48gmzXucS4hiOdp9k38gDdto+ZUBkcLmBZOu12l61b17K8vIquqxSLTWy7SavtE0+YjPRfR1oxefLow+TjIxQbk9gdm95CgW6nBQK0bYeeXIpGs4UkSRCzKS03MaUUVt5FFITI9TwICVVVcdxmev/RQ1Nv/l+D/+xrl9068Xzx+8NrYwgSnDkWUDwlcfPb7uTh7/4TAG+ZuhaAfSMPAHDj8gd5vPc+VEMjFrMoFJK0210sSyeZtNi6tY/Dh2cpFPK8OD1Fux5iJUXa9RDHCait1gklkUI+Tbttn+tt2Q65TBLL0qk3WkgqNOrnymArH5DLmrheSKPSxg98htflWJipRsm0fkw35CqgPPrgzNX/4yq9Umx+uqdfw4oryKJEc3WJbHYrb9xzFVs3bKA5U6G4VKNxpMqbtA8hDdpYqgdPQEyHTrdDsQiSJNDfn6W/v8CJE0s4jseL01MUsn0UWSJmxnHtNrWaTSqbBKDd7qIoCplMGmdhCdf18f0WUsKjsRIyulNDksGxQwxTwV5tkdIM6qU2pyaKqKYkOLa3AyJ0Q4n2vnvtW0SRxx99cMb7Lxvx+/e1PtSquf6h/UWqpZA1m1MIxgk+9+U7eObAQTbt2cr26zezvOYM0qDNrm3DtPQI1dAQpCzDfRZX7k6TjkecPLnI5OQZlksea9b00m1Bu+1gWQaLi6vouk4URYiigGWZv9y8UK1WGR7sQ9dVksk4nhcytEUikZGwEhLDvRZSKNMTT5EyDDZtHGQkm6VadVlZ7nB2oUa+oAmiyPeA+//bCG+8Jvp5eckRzaTKlp0FVlZKdNse8QxMHH0UQ6uyft1lLCyWSW0f5smj+5kYf5q4lSWXccmkNSIPLhnrJ5FSsJseiysh09NLqKpKvd7EME1kUWP9+gFKpfpLyNq5lm06hW3btFotfN8jIMJKCAiRRK0UYElxXCVOUlFQdI9YWsbxffxQpqfcoNKSCDqwsuSxvFyPDa9J3w7c8Stz+MOf3rmwuFwZaNQ8dEtmdFOK/p4CVlJmebHK8WcbzL7YJq4PEokWSX0BQRAxdRndPPfbJU2FVCZGYTBDXy6LpAq0nTaLC0usLreptWB6PiIMuhimjuv4rFbqqIqMIEREEYiidK5NZIr09MWI6TEkAhwf2q0OoQeyLKDKAZIq8tyRZVzXJZ9PUa6epel69PbFSVsGy7UaI2uzN+z7+1NPvCzCni0MeN1zszyRVACot+tkegr09qdpbejS7dTJvFSdDQ0lmJkP0E0ZTZJJxHWS+Ti5eIKB3n6SuQIiAlTOsGHdepK9C/jdBuvXhczN6qyshtRrNlEoYtsOmqYwPJAhk08jRQKdThtRAF1RMU2JbiekUm6yXGywslJBlgVESWF0dICFhRKNRodOSyUeA02QqDTbALh+9P233zrY8/C+Bfd8hO/66CVR4EnUmy0k3aNaa5HtNVm/KYPT6ZDIGpw902FmssYNO3bRaLVJxmMcP7mIpcBqI2DtkMSGdSN0bIHe4QLZvhiOV8dtiWQyowBUKmdYrlZwGz6Nuo3Xdem4UK8GeCGYhkUUguMXqaw2KC7XiceTrN86wEBvFgmDQ0dOc2a+jGmoTM8uUujJEQYBYryBThYz1aFnWOPsdIdms0vvQIJERkKUREOqpH9Q+ecfffOvRVuVJEnEMjVMSyeTihGGIe16G5DwA6jM+cSJkYnHScQtZhdCzrZPE1k+KUlmuQxhUGd8skzgNJg6PokuStiNLsXmMkbMJnAFYoZBJ3IwkxqaooKUJJVMoBsqibiOqIXoqggCrFYj5hbrWFJAtidOMt6DogU49TLtpk2nGxLvb6EmXDI5ndygTCKt0qyFBIFAOqPjdKOgpz8qE2i3nI/wJ75w2WG3Im4InMhAiKQoimi3bRZXKqQzCqqmU5n2KTbr3HDJTryOxdG5w2y6NE5PX4Lp6RX60jFeeNpltaYwtLtFvteidsRjdEOGUq3NxjU9tGwJSTGwVJVQKp1PJ9vOEdMEoiDg6IlZxk+UaTQdkkmTMBIppEN2XL6dQmqYWMxEiBrMzzVpNJocOTPBxrEYsy82sZIGqioSegJG3INIJIBjluh851vfmPvcr9xafvzzly506kHSc0Mj8FypUW9SXXXQghhZ5VyOL9g2qh4y9oYsa4aH0DSZg8++gOp6LBYj8n0x+oYsVpZrJA2ZUt1h8ikZtxOwbUOMRCyOrkkIEnhuiGroHJtc4PR0FUVRiMdNkqkEqipRrTYpr5S57roN9OTWkU4kMAwNQXQQUOh4PpHvEUYeHcem3engiEs+ftX+6pdeTP5axcPHvri7GEVhvNsI9MZ8KJQrJTQnjqM1kUyBbbvTJNMWXkekXusyd+rcE8FkSqN/TYLR9X2UVkp4js/06SZTPwe71UWWZaJIwLIkyuUWoigRswziCRPX9el0HERJJp2Ksbpao15rsGtThp41gySMPIZpYpkGohQgSj7tboXF+oLne532ffdMpF+R8vATX71syV51kk470t2OKyycarB2q0lvIYPXFnGciFbLxkiE5Hp1YjGVWDJJpVKlVqzQsD3OzvmMDb+BU6fmWV1ZZaXcpNCbpVptnotq0qJYrJBOJ6nXW3S7DvG4hSyLLMwv88Y3bUQ3k1hSEkGx6Uhlr+M223/7pfH0q9ri+dg9l5b8lh9zm4ImuYpAJBKFIoQhaC5aMiTfI2OYInYnZG6+hoTA6rLDmSMyf/D+6zl7tsOPHnsGVTMxDJWO4yIKIEkikigRBAGyLOH7PumExnC/SUcTQbY9n27r/q+eyLwuPa0//MuxYmiTFAJZ1UQE3xeIZBfNAtWKIPIJI6iWu0wftxGaKRLZGGuG+jl48DiuG6KoMr7rk8unEHNFDCdNtwvJuEEspRKZLc/Hb9z/lRO5C6oR/8dfu7yMQzz0IkVWO4JmSizNtamWXVrtgEv39FFctGk2PeoVG8kRWdPfx2rJpljsoPd1GcyMQuDi0PYCyW985xtTuVdqfK/qw7RPfe2KCk4QC11BUVWXTk2iZneJ5wTsRsDiXJPtW9aSTmTwXZeF+VLk4LuSErS+/eUTuVdjTK/Zv3g++cXL64SyZYialIyrBF0LWVFwhVbUdqtu13cbX/nUoZ5XexzC6/HOw2fu2VsPBFfyBKf5hY8d6Hstry1cfMnjIvgi+CL4Ivgi+MI5/n0AYvc90xz6kuYAAAAASUVORK5CYII=";
mapimg['castle_3_v_s'] = "data:image/png;base64,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";
mapimg['castle_4_v_beginner'] = "data:image/png;base64,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";
mapimg['castle_4_v_l'] = "data:image/png;base64,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";
mapimg['castle_4_v_m'] = "data:image/png;base64,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";
mapimg['castle_4_v_s'] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAA/MSURBVHja7Jt7jB1Xfcc/58zzztz33n3Yu2vHduK0iWM7gbwcq4TSNlXdQKENqSgIECJUagmtGtrSVo0ClfpCgqoqD6kIqek/bUWBlpIEQhIgoQkkxDjkaXv92l3v9d69r7kzd57n9I8lTqK+UkLAoXv+mrmaI53P/f7O7zVnhNaa/09D8v9sbABvAG8AbwBvAG8AbwBvAG8AbwBvAL8CgFutlnxP+SZ9vf8G/WMDfMsVn/uF599PtuaZnJpvvX7+7ccuH15RPBF+Bxlrrtry86/6UQCLH3Q9fJNzk3bsOocrJ4+KzvB8QCfZgIwcCxPHq0ImsDdtPvT5E3+75xWt8Pz8/Odn0ip+UiE8fWxHkg10kg1wvCplr0m5tgnL8plsnoe9Oth94OLfrL+igd/U/6XXNxtXE9hnAHC8KnPTe7AsH8vyzz6XpuBnHmr51MqFW66wX5HAN1d+W2+3X8ux7D4e3vEI13ItSTTEHqn/9GykzlB2a4z6K049sPutVuuiV8Qe/sN9X94XH7rnga2hT1it8vjwfk7sXmT3q1/N9Gfn+EbvDupikrLX5IzZAaAmXGIp1q8Tn6fDRxGYfE0/IM5Z4Lm5bbveOLjhsemRw6bN1xM2bNQgJO4eph89ySLHOLp3mesOXst9fIUL/UtYdWMAKtokIqOW+KRlyZZoOyvqCE+Hj/J4+einpcNNnU4nPycV3ja9I7/hzHVGlQlmaleStJoYrkOxOqLdeYRQneQoh/GsKnHVwjd8lNBsi87niLnAcHCSQK0iLIdj/tF4bCTndTqd9jlr0rOzs7bWxdWX7bz8vou/Og/AJi6gsvkahhWN6o94evgvxNWMLdF2DltHCfqnCNQqT008wUR9jrX+IpfY1x06lN53TafTGb3cJm1+vxP/fvp+MEmFML6aqpwtH97N1+65jxP6G2y94zAAY6BBnceSQxxTj6xDbpuj1vTZN/laAJ5+GpZ5fE9nufNDcVrmS5l84/zH5cGTf3cQQmbqLaY2z/CaK69h7WfXuPfLXwFg6g5Y2HaUWtNn//TraFQaaK0xhMGhwwfXU85wx4lWq3XxD0Phl2rS7/mZ5as+sZdX8Zk9d7BlbjN7Lt3Ljq3nc9+D93PtVftZC9a48547aVQa2NJipd9mub3IsBfRPOlTUdOcEYus1Ad3zfo7f/Hh41/Kz0ngA403xK2+6ewVP4U7vYNOsEAcnuIEJzi8e5Fts7PsvexSGhNN7rznTpbbiwy64VnIsusxwwxrdkHeO06bNYZmVnRqvS9sKl/wKz8o8JveeoNwm5v09w38tr1/Vd/yncVeqTZH09yFv2WGcAR2DmkYUsgz9MLDRMESp8RJjlyyiPFkSr2YoeJWaYkJ1uwCw15PSKxCMpdsp6dOcCj8Ji3Z4LPFnT/QmHzzzTe/cA/fdttt3HrrrS9q8u0H39d/7Y4bfn3PwuATDiaiNMH8RZMAdDoaPZrF8lpIL2FKrLLt2HEOW9+mZa+D9u0MA9gWnQ9AT53g2+P7CNQqgTHm6/lD4pxzWvce/adP7t/7un84klvvuPbx0UceXYxgYo6WfQnzl6yHp9OrK8jAYUZNE3RXOV1tszPbBflzkG11kqcaKZ67xGoneNlAlVJIKV+al77/4Ff6wEd/7fpf/UitMcWxgwe5+rFnOLEWUildSNPcRXXXHON6FyttYYwX+XbyHOTmzdCo+eyfmGdhAfZfu12XpvtkYxfHLD86v9X9QL0lHpyZs6Nb3v6t7KUAB0GAaZr4vr++h2+77TaAF2XWb/uNPX8aBOObOp2gGbcVs/Ov4aqrr2QcjcnXAga9gIXHTnLlYxfRJ6BSnWVheJSneIRwR0at6dOYmGF5eQlpSLbOb+XBB+5mdmuN+a3TaLenTWkztT0TutDJedvqRx/5evjmf787OLy0tJQ+fy1XXjct0qhlpMkZLSV+rvP4yYd66X/RaeHAgQNIKf93hfdfv8kzDCkv2LH5LU9899QnTEuKVqumpyslHn8qo51/h7sHK1yydx+7LttFkiS0Lpil/7oha92Ux05+iVEYcd6Wn+DIkSPEqaJaq5BlUywff4onDq0w0WzQXupRq9com55w6opi5GD6ylkd9C+aPE98953v33Tqtz506e2Lx6J/DON4KgjSi4JB/jtSnp6Kk6JIY2VZplTTc/VjzWnzrYMzWiyfWnv4mWeeeYFpv0DhZ1W++rpNQgrDrrfc6VE4ftQvuUUUxhM7d7TkMMzxSgbfPXSG4XGLnTu2UuiCtdUuAOWJGXZfeg27LrmYIAi444v/iu/72LZFrzfg+NOHSNMMxzVxHRfbNsjygvZqm01b68xsblGZKmhMC2oVkFZOyRd0BxFHngoZdQ363YRRkFGr20zP1LDtgn5PEfQT+t2UeJxRbbhZv128794vP/jxffv2ceDAgefC0rPAd33zY0YUFsfjMJ9uTnh905GG79nNet1javNzPuXJhyJ6K4KyVSdRCT95/hY6vQ62dshRnFlZTxO95gyWW2HhyYNE4xiv5GJaBqZpUq9XybKMLM6wPJeV9gqikjLbmqLSsGlttpncJCnVFIZVIIUijHJOHYGlU33GYY5bssnynKIoSMYFCCgyjW3aJElBrxPn9QnXbi9o/SzwWZP+0rc+bipFP4m0f+mrtpKm+WS3G9DtRCTjlFptklK1oHtKMepqgm6KUR5Tn/DpDSI2t6YZj1OmZ2aYnWkRjkYcPrLE4uAormNh2iZuycbzPPI4o1DFOqxtYbkGtXKF9pk22UTK2krCOPWJE5et51n4TZCWoNkUlHeZCASrZ4YUOZiWg2FKIitiNMyZ31ahvTgGoD7hqsFaenR6u70D0C/oeGRp8f6wX/h7L5ulszZkOBqjCk215hInKXmuaE5ZVBomlYqDIcHyDBzTw7UEUpkE6ZDV9iKtVo1wFPFzP/0aLrxgG1bJYmpTk5LrUiQ5pbJHkSq8pg+mwWB1iG3auCWP9vEIw7TJ45RBJ2X5VEHUtVG5iVYGpqnZsr2CQhOFCcNgRBCElFwbxzNIkgynZH0vFAlLo+af75OMux/5JAvLD/sI7nBc27BNC9M0WF0dgpLYQpCohEpDsmVbmVrDoTEpCdY0xdgiCGPyQoMAy1I0ak06/TNUPZ+ltWXaa0O8cokkSNFqPavrDQJ6vT7t9mnKjofSmqIocCyHrEiQpsYxXIRRUChAS0zDwCkpTEeAgKhjYDuCYJQzjnLSNEflmkKBVhrHsTGkEOEolZZj3P6BW/6kt2fPHszvqfyEKrRwLMkoHCOkpIg1qRgzHCrKVRNhCOySxq0auI7Lpfsli8dHtE8qumtjiizHdAWwyvat5/HMwgKTjUkOx20sq4a0JON4vevRWVs5+49nRUEUj8hTjRQwudXH82xQBpYlQUCuc4Q0QUsQBSUPpjbbPPn0kGajyuKJNZoth2CQgdYUmWAcpZiGQcmzCPrpAzfeeOMMgLFlZ1nPbaro48eGB1zXJIpSikIx7OV4tg0ILBt2X16n4hk4vo3jWjQmTcpVA60LVAK9UUwYJhiZRT+McYVJEA8pWWVWe10sTPyyTxalDMMhUgpcq0ySpDSmTGqtEpu21qh6Zeq1JuWqSaksqFQsXE9QrRg4vqTkC7SyMEyXcU+hRUqea4JhSn3CodtJGY8KskyTZwXSEESjrDwxa3210hQnzH3XzO74t88tfLRWs3EcB9NM6XcLHNcgHGfYrmSi5RLHilGQ4FRsqp6EkonvlylVbGqtMd5jEI1ChkHE6uIAz7XxzRLtXhff80mShF4wBAFlt0Zj0kNaBdVqGc/1qVRdPMfFLlm4jkQ4GXE+IJMplbqBU8swXI3SJiq3iMMxrWmbfCUizRSGIQn6KWkEpinWXZQApTW1CZeiEPeOA102gzA9MjPrA4p+d0w6ViRJjlAgpEQVYBkm3UUD26hQqgg8y0baMcqQeGXN5JyNYxX02hVWlxRKe+SZZmmxT1oUpMGQOIyZm6/i132mplpYpoHnlXAsE8sycG2bXOUICVpkJGlKQYTr2jh+jjA0RW6iYpteLyGOcpI0QUrN7JxPZzWis5KitSZNFaYpUQoMAxzX5PzzGyRjZ3S2PHzju3fq3mrM2soYEMRRjuualDyDnTuruGUTv+JRabpMTAm8UgEyJxtDFGiykUUeOfTXcpLIwCpcDNOk3VmPyZNTNZoTNWzTwfc8MCRSSgwBSgm0VqRFSpqmjMIhw2SIWY6wSylmSSGFSZ5JokCx1o7pD8foTBLHGXkOaZ6TxgUl38SyTNKkwHUllmVR8mxckXLrB74gzsbhtaVUFoWuW7aZ77x4YqhSQRpmGIbEq9iUSjDOM+hniMKla2rq9ZwiExRKIyyBadtMTLokY00UxtRqJaZntq2HA8OgXKlgGBJTGhiGTaFBC7XuaDSIdD2BKIoC25DkkUkuUhQaIQRBENFdyYnCjDQuSNMYDIEpTfyay1Cm5IlGKMXMTJWGB7e87zPiv+14PJt3vult+wH459vv54/+/Je1ZRUEwYCp6RY5Ia5XRgHlkoHnKizXwNQCQ9votISBCdpdL/DtBNuYQmAjBEgklrSQhnO2ZAON1gZCQzQO6A16hNkIpWKcck4kQ4LhmHiU015OKApBkSlyBXkMpguqAGnC1JTHh37vs+L/1OJ5fsINsHPnTgDe/bt7dZ4oBoOQWlMgjBIaQavlUKlIfEugMoEuHCw8DGESx+tQhqVRsUuOwjIsXMfGMh1MaWIYNpbhIpAUCnrDNcbjCFVkWE5IO14iUiHdRU0UKKJxThzBKIyYna/j+Ra9tVD8zYfvenl6Wu/+gz3EkdZCQbUqUcImSWNmpg0aFZuikJjKBGliaQtd2GhlkMUmSZEjWFfasUsYhoXvutiWjyk9tC4oCoXSgmHYX3/5li3TjpdYbRcMBiG2niLTAb3hetMgj+FTH7vrRa39JXUt3/X7uwFBMFR6cqqEIQSNOpimxjYFInMRQuDYgkJmyKROkUrCqEAaIDAQGLiOhW9bOHYTQ7jkhbFu6Lpg5cwifrnKwslVlruLTJQnjNP9w+ovbv3iD78v/ak/OwTAez94pQAwTdNY7aa5KSXNsocjbKSQaC2xDEhVSgG4JQlolCpACwylUEVGEI6QhkHJ2oEwJN1gjWdWTjHdnJH9ZEELK+V0v3tunAB47wev/J4q6/dJaIgcpUwMas666lXfwTQkQkrQmiTNSdKc0ysBSki2b5rAL1ksDcdcPHO5WDo9ACAchwC88123vuR1ipfjE4Bn4f/6jx86+9s73n+FtqSBzDNmp8qMovXkouy5jNOUYZqze+ZyYVpnWFqKKTlzvPktt5z7Zzxe3N6/Quf5erHw6b/8lvifIsSPBfCPcmwcTNsA3gDeAN4APpfHfwwARL+kviYLV0gAAAAASUVORK5CYII=";

	var group_setting = null;
	var cardname_setting = null;

	var groups = groups_def;
	var groupsx = groupsx_def;
	var groups_img = groups_img_def;
	
	if (localStorage.getItem(OPTION_TAG)) {
		// FirefoxだとjQueryが1.3.2なのでJSON系が使えない
		options = secureEvalJSON(localStorage.getItem("ixa_moko_options"));
	}

	group_setting = {};
	cardname_setting = {};
	
	if (localStorage.getItem("ixamoko_group_set")!=null) {
		group_setting = secureEvalJSON(localStorage.getItem("ixamoko_group_set"));
	}

	if (localStorage.getItem('ixamoko_init_groups')) {
		groups = secureEvalJSON(localStorage.getItem('ixamoko_init_groups'));
	} else {
		localStorage.setItem('ixamoko_init_groups', ArraytoJSON(groups));
	}
	if (localStorage.getItem('ixamoko_init_groups_img')) {
		groups_img = secureEvalJSON(localStorage.getItem('ixamoko_init_groups_img'));
	} else {
		localStorage.setItem('ixamoko_init_groups_img', ArraytoJSON(groups_img));
	}

	//
	// 婆羅門追加 top
	//
	var targetEnemy;		//ターゲット相手
	var targetAlli;			//ターゲット同盟

	targetEnemy = window.localStorage.getItem('targetenemy');
	if (targetEnemy == null) targetEnemy = "";
	
	targetAlli = window.localStorage.getItem('targetalli');
	if (targetAlli == null) targetAlli = "";

	function saveTargeties() {
		try {
			window.localStorage.setItem('targetenemy',targetEnemy);
		} catch (e) {
			alert("cannot setItem('targetenemy,'"+ targetEnemy + ")");   
		}
		try {
			window.localStorage.setItem('targetalli',targetAlli);
		} catch (e) {
			alert("cannot setItem('targetalli,'"+ targetAlli + ")");
		}
	}
	
	function posinfo(s) {
		var re0 = s.match(/displayMenu\((.*)\);/);
		var ps = RegExp.$1;
        var pa = new Array();
		pa = ps.split(", ");
		return pa;
	}

	var mapPoz = new Object();
	mapPoz.mapContainer = $('#ig_mapbox_container');
	mapPoz.orghost = null;
	mapPoz.areas;
	mapPoz.size;	//11 | 15 | 20
	mapPoz.mapsAll;
	mapPoz.topleft;
	mapPoz.xtl;	// top-left x座標
	mapPoz.ytl;	// top-left y座標
	mapPoz.btmright;
	mapPoz.x = 0;
	mapPoz.y = 0;
	mapPoz.imgfile;
	mapPoz.imgclass;
	mapPoz.user_name;
	mapPoz.alliance_name;
	mapPoz.place_name;
	mapPoz.isEnemy = false;
	mapPoz.mid;
	mapPoz.init = function() {
		this.areas = mapPoz.mapContainer.find('map#mapOverlayMap area');
		this.mapsAll = mapPoz.mapContainer.find('div#ig_mapsAll');
		var mapscount = this.mapsAll.find('img').length;
		if (mapscount == 123) {			//10x10
			this.size = 11;
		} else if (mapscount == 227) {	//15x15
			this.size = 15;
		} else {									//20x20
			this.size = 20;
		}
		var tlurl = this.areas.eq(0).attr('onclick').toString();
        var p_tl = new Array();
		p_tl = posinfo(tlurl);
//GM_log("p_tl[0]:"+p_tl[0]);
//GM_log("p_tl[1]:"+p_tl[1]);
//GM_log("p_tl[2]:"+p_tl[2]);
//GM_log("p_tl[3]:"+p_tl[3]);
//GM_log("p_tl[4]:"+p_tl[4]);
//GM_log("p_tl[5]:"+p_tl[5]);
//GM_log("p_tl[6]:"+p_tl[6]);
//GM_log("p_tl[7]:"+p_tl[7]);
//GM_log("p_tl[8]:"+p_tl[8]);
		//var re0 = tlurl.match(/land\.php\?x=(-?[0-9]+)&y=(-?[0-9]+)&c=([0-9]*)/);
		//this.xtl = Number(RegExp.$1);
		//this.ytl = Number(RegExp.$2);
		//this.topleft = RegExp.$1 + ',' + RegExp.$2;
		this.xtl = Number(p_tl[5]);
		this.ytl = Number(p_tl[6]);
		this.topleft = p_tl[5] + ',' + p_tl[6];
		var brurl = this.areas.eq(this.areas.length-1).attr('onclick').toString();
		var p_br = new Array();
		p_br = posinfo(brurl);
//GM_log("p_br[0]:"+p_br[0]);
//GM_log("p_br[1]:"+p_br[1]);
//GM_log("p_br[2]:"+p_br[2]);
//GM_log("p_br[3]:"+p_br[3]);
//GM_log("p_br[4]:"+p_br[4]);
//GM_log("p_br[5]:"+p_br[5]);
//GM_log("p_br[6]:"+p_br[6]);
//GM_log("p_br[7]:"+p_br[7]);
//GM_log("p_br[8]:"+p_br[8]);
		var xbr = Number(p_br[5]);
		var ybr = Number(p_br[6]);
		this.btmright = p_br[5] + ',' + p_br[6];
	}
	mapPoz.setTarget = function(target) {			//target は areaを指定
		var onmouseover = $(target).attr('onmouseover');
		if (onmouseover == undefined) {
			this.user_name = undefined;
			this.alliance_name = undefined;
			this.place_name = undefined;
			return false;
		}
		onmouseover = $(target).attr('onmouseover').toString().match(/(?:[^'"]|\\.)*/g);
		this.user_name = unescapeUnicode(onmouseover[6]);
		//GM_log("1:"+this.user_name);
		this.alliance_name = unescapeUnicode(onmouseover[18]);
		this.place_name = unescapeUnicode(onmouseover[2]);
		var trgs = $(target).attr('onclick').toString();
		var p_t = new Array();
		p_t = posinfo(trgs);
//GM_log("p_t[0]:"+p_t[0]);
//GM_log("p_t[1]:"+p_t[1]);
//GM_log("p_t[2]:"+p_t[2]);
//GM_log("p_t[3]:"+p_t[3]);
//GM_log("p_t[4]:"+p_t[4]);
//GM_log("p_t[5]:"+p_t[5]);
//GM_log("p_t[6]:"+p_t[6]);
//GM_log("p_t[7]:"+p_t[7]);
//GM_log("p_t[8]:"+p_t[8]);
		var xt = Number(p_t[5]);
		var yt = Number(p_t[6]);
GM_log("xtl:"+this.xtl+"  xt:"+xt+"  yt:"+yt);
		this.x = xt;
		this.y = yt;			
		var xd = xt-this.xtl;
		var yd = -(yt-this.ytl);
		var mastr;
		var ma = xd*this.size + yd + 1;
GM_log("xd:"+xd+"  this.size:"+this.size+"  yd:"+yd);
		if (ma < 10) {
			mastr = '0'+ma;
		} else {
			mastr = ma.toString();
		}
		var re9 = this.user_name.match(/\(Lv([0-9]+)\)/);
		this.user_name = RegExp.leftContext;
GM_log("this.user_name:"+this.user_name);
		//GM_log("2:"+this.user_name);
		this.imgclass = 'mapAll' + mastr;
GM_log("imgclass:"+this.imgclass);
		var imgtag = this.mapsAll.find('img.'+this.imgclass);
		var src = imgtag.attr('src').toString();
		if (src.indexOf('data:') == 0) {		//マークした敵か同じ同盟なら
			this.imgfile = imgtag.attr('alt');
			this.isEnemy = true;
			var re2 = this.imgfile.match(/(_r_|_t_|_v_)/);
			this.mid = re2[0];
		} else {
			var re1 = src.match(/\/([^\/]+\.png)$/);
			GM_log("re1 = "+re1);
			if (re1 != null) {
				if (this.orghost == null) {
					this.orghost = RegExp.leftContext + '/';
				}
				this.imgfile = RegExp.$1;
				var re2 = this.imgfile.match(/(_r_|_t_|_v_)/);
				if (re2 != null) {
					this.isEnemy = true;
					this.mid = re2[0];
				} else {
					this.isEnemy = false;
				}
			} else {
				
			}
		}
		return true;
	}
	mapPoz.replaceFile = function(mid) {
		if (this.isEnemy) {
			if (mid == '_r_') {
				if (mapPoz.mid != mid) {
					var destfname =  this.imgfile.replace(mapPoz.mid,mid);
					var imgcls = this.mapsAll.find('img.'+this.imgclass);
					imgcls.attr('src',this.orghost + destfname);
					imgcls.attr('alt',destfname);
				}
			} else {	// _t_ または _v_
				if (mapPoz.mid != mid) {
					var rfname= this.imgfile.replace(mapPoz.mid,mid);
					var destfname = mapimg[rfname.replace('\.png','')];
					var imgcls = this.mapsAll.find('img.'+this.imgclass);
					imgcls.attr('src',destfname);
					imgcls.attr('alt',rfname);
				}
			}
		}
	}
	mapPoz.repTargets = function() {		//mapのターゲット拠点の画像置換え
		for (var x = 0;  x < mapPoz.size; x++) {
			for (var y = 0; y < mapPoz.size; y++) {
				if (mapPoz.setTarget(mapPoz.areas.eq(x*mapPoz.size + y)) == true) {
					if (mapPoz.user_name == targetEnemy) {
						mapPoz.replaceFile('_t_');
					} else if (mapPoz.alliance_name == targetAlli) {
						mapPoz.replaceFile('_v_');
					} else {
						mapPoz.replaceFile('_r_');
					}
				}
			}
		}
	}
	//
	// 婆羅門追加 end
	//

	var setting_dialog_str = '<div id="nowLoadingContent" style="position:absolute;width:220px;height:20px;display:none;z-index:9999;padding:20px;background-color:#fff;border:3px solid #f00;-moz-border-radius:5px;-webkit-border-radius:5px;" class="window">'+
		'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;しばらくお待ちください<br><img src="' + IMAGES.rel_interstitial_loading + '">'+
		'</div>'+
		'<DIV id="ixamoko_boxes">'+
		'<DIV id="ixamoko_dialog" style="position:absolute;width:400px;height:480px;display:none;z-index:9999;padding:20px;background-color:#fff;border:3px solid #f00;-moz-border-radius:5px;-webkit-border-radius:5px;" class="window">'+
		'<B>'+TOOL_NAME+'設定</B> | <A style="color:#000;" href="#" class="close">[ 設定する ]</A>'+
		'<DIV style="border-top:1px solid #000;padding-top:10px;line-height:1.5em;">';
	var changed = false;
	setting_dialog_str += '<DIV id="ixamoko_set_grp">';
	var setting_dialog_strxx = '';
	for(var grp in options_grp) {
		var setting_dialog_strx = '';
		if (setting_dialog_strxx=='') {
			setting_dialog_str += '<DIV tabid="'+grp+'" style="cursor:pointer;text-align:center;width:50px;padding:5px;margin:2px;background-color:#aaf;float:left;border:1px solid #000;-moz-border-radius:5px;-webkit-border-radius:5px;">'+options_grp[grp]+'</DIV>';
			setting_dialog_strx = '<DIV style="line-height:2em;display:block;" id="ixamoko_set_tab_'+grp+'">';
		} else {
			setting_dialog_str += '<DIV tabid="'+grp+'" style="cursor:pointer;text-align:center;width:50px;padding:5px;margin:2px;float:left;border:1px solid #000;-moz-border-radius:5px;-webkit-border-radius:5px;">'+options_grp[grp]+'</DIV>';
			setting_dialog_strx = '<DIV style="line-height:2em;display:none;" id="ixamoko_set_tab_'+grp+'">';
		}
		if (grp=='grp') {
			setting_dialog_strx += '<DIV style="height:180px;overflow-y:scroll;">';
			setting_dialog_strx += '<DIV id="ixamoko_grp_list">';
			for(var i=0;i<groups.length;++i) {
				setting_dialog_strx += '<DIV grpid="'+i+'"><IMG width="30" height="30" align="absmiddle" src="'+groups_img[i]+'" /> <INPUT class="ixamoko_icon" style="width:200px;position:relative;top:-10px;" type="text" value="'+groups_img[i]+'" /> <INPUT class="ixamoko_color" style="width:50px;position:relative;top:-10px;" type="text" value="'+groups[i]+'" />';
				setting_dialog_strx += '&nbsp;<INPUT style="position:relative;top:-10px;" type="button" value="設定" class="ixamoko_set_grp_set" />';
				if (i>0) {
					setting_dialog_strx += '&nbsp;<INPUT style="position:relative;top:-10px;" type="button" value="削除" class="ixamoko_set_grp_del" />';
				}
				setting_dialog_strx += '</DIV>';
			}
			setting_dialog_strx += '</DIV>';
			setting_dialog_strx += '<INPUT style="" type="button" value="追加" class="ixamoko_set_grp_add" />';
			setting_dialog_strx += '&nbsp;<INPUT style="" type="button" value="標準に戻す" class="ixamoko_set_grp_default" />';
			setting_dialog_strx += '&nbsp;<INPUT style="" type="button" value="お勧め" class="ixamoko_set_grp_default2" />';
			setting_dialog_strx += '</DIV>';
		} else {
			for(var key in options_param) {
				if (options_param[key].tag!=grp) continue;
				
				if (typeof(options[key])=='undefined') {
					changed = true;
					if (key=='rank_lock') {
						options[key] = 2;
					} else if (key=='def_kind_soldier') {
						options[key] = {"1":false,"2":true,"3":false,"4":false,"5":true,"6":false,"7":false,"8":true,"9":false,"10":true,"11":false,"12":false,"13":true,"14":false};
					} else if (key=='pulldown_menu') {
						options[key] = false;
					// change end
					} else if (key=='map_rightclick_type') {
						options[key] = 1;
					} else if (key=='map_starx') {
						options[key] = 2;
					} else if (key=='def_num_of_soldier') {
						options[key] = '100';
					} else if (key=='place_skip_str') {
						options[key] = '';
					} else {
						options[key] = true;
					}
				}
				if (key=='rank_lock') {
					setting_dialog_strx += '<INPUT type="checkbox" checked disabled /> '+options_param[key].caption+'<SELECT class="ixamoko_setting" key="'+key+'"><OPTION value="0">非活性化しない</OPTION>';
					var lock_list = {
						1: '上以上非活性',
						2: '特以上非活性',
						3: '極以上非活性',
						4: '天のみ非活性'
					};
					for(var key2 in lock_list) {
						if (key2==options[key]) {
							setting_dialog_strx += '<OPTION value="'+key2+'" SELECTED>'+lock_list[key2]+'</OPTION>';
						} else {
							setting_dialog_strx += '<OPTION value="'+key2+'">'+lock_list[key2]+'</OPTION>';
						}
					}
					setting_dialog_strx += '</SELECT><BR />';
				} else if (key=='def_kind_soldier') {
					setting_dialog_strx += '<INPUT type="checkbox" checked disabled /> '+options_param[key].caption+'<BR />';
					setting_dialog_strx += '<DIV style="margin-left:10px; height:60px; width:150px; overflow-y:scroll;">';
					setting_dialog_strx += '<TABLE class="ixamoko_setting" key="'+key+'" width="100px";><TBODY>';

					var drs_list = {
						1: '足軽',
						2: '長槍足軽',
						3: '武士',
						4: '弓足軽',
						5: '長弓兵',
						6: '弓騎馬',
						7: '騎馬兵',
						8: '精鋭騎馬',
						9: '赤備え',
						10: '鉄砲足軽',
						11: '鉄砲騎馬',
						12: '破城鎚',
						13: '攻城櫓',
						14: '大筒兵'
					};

					for(var key2 in drs_list) {
						if (options[key][key2]) {
							setting_dialog_strx += '<tr><td><input type="checkbox"; checked/></td><td>'+drs_list[key2]+'</td></tr>';
						} else {
							setting_dialog_strx += '<tr><td><input type="checkbox"; /></td><td>'+drs_list[key2]+'</td></tr>';
						}
					}

					setting_dialog_strx += '</TBODY></TABLE></DIV><BR/><BR/>';
				} else if (key=='map_starx') {
					setting_dialog_strx += '<INPUT type="checkbox" checked disabled /> '+options_param[key].caption+'<SELECT class="ixamoko_setting" key="'+key+'"><OPTION value="0">表示しない</OPTION>';
					var hoshi_list = {
						1: '★１表示',
						2: '★２まで表示',
						3: '★３まで表示',
						7: '★７を表示',
					};
					for(var key2 in hoshi_list) {
						if (key2==options[key]) {
							setting_dialog_strx += '<OPTION value="'+key2+'" SELECTED>'+hoshi_list[key2]+'</OPTION>';
						} else {
							setting_dialog_strx += '<OPTION value="'+key2+'">'+hoshi_list[key2]+'</OPTION>';
						}
					}
					setting_dialog_strx += '</SELECT><BR />';
				} else if (key=='def_num_of_soldier') {
					setting_dialog_strx += '<INPUT type="checkbox" checked disabled /> '+options_param[key].caption+'<SELECT class="ixamoko_setting" key="'+key+'"><OPTION value="0">表示しない</OPTION>';
					var nos_list = {
						100: '100',
						200: '200',
						300: '300',
						400: '400',
						500: '500',
						600: '600',
						700: '700',
						800: '800',
						900: '900',
						1000: '1000',
						1500: '1500',
						2000: '2000',
						2500: '2500',
						3000: '3000',
					};
					for(var key2 in nos_list) {
						if (key2==options[key]) {
							setting_dialog_strx += '<OPTION value="'+key2+'" SELECTED>'+nos_list[key2]+'</OPTION>';
						} else {
							setting_dialog_strx += '<OPTION value="'+key2+'">'+nos_list[key2]+'</OPTION>';
						}
					}
					setting_dialog_strx += '</SELECT><BR />';
				} else if (key=='sort_village') {
					var chk_flg='';
					if(options[key]){chk_flg='checked';}
					setting_dialog_strx += '<LABEL style="line-height:2em;"><INPUT type="checkbox" class="ixamoko_setting" key="'+key+'" '+chk_flg+' /> '+options_param[key].caption+'</LABEL><SELECT class="ixamoko_setting" key="ad_sort">';
					var sort_list = {
						0: '名前降順',
						1: '名前昇順'
					};
					for(var key2 in sort_list) {
						if (key2==options['ad_sort']) {
							setting_dialog_strx += '<OPTION value="'+key2+'" SELECTED>'+sort_list[key2]+'</OPTION>';
						} else {
							setting_dialog_strx += '<OPTION value="'+key2+'">'+sort_list[key2]+'</OPTION>';
						}
					}
					setting_dialog_strx += '</SELECT><BR />';
				} else if (key=='place_skip') {
					var chk_flg='';
					if(options[key]){chk_flg='checked';}
					setting_dialog_strx += '<LABEL style="line-height:2em;"><INPUT type="checkbox" class="ixamoko_setting" key="'+key+'" '+chk_flg+' /> '+options_param[key].caption+'</LABEL><BR />非表示にする文字列：<input type=text key="place_skip_str" value="'+options['place_skip_str']+'" class="ixamoko_setting"><BR />';
				} else if (key=='pulldown_menu') {
					var chk_flg='';
					if(options[key]){chk_flg='checked';}
					setting_dialog_strx += '<LABEL style="line-height:2em;"><INPUT type="checkbox" class="ixamoko_setting" key="'+key+'" '+chk_flg+' /> '+options_param[key].caption+'</LABEL><SELECT class="ixamoko_setting" key="toride_count">';
					var sort_list = {
						10: '10',
						20: '20',
						30: '30'
					};
					for(var key2 in sort_list) {
						if (key2==options['toride_count']) {
							setting_dialog_strx += '<OPTION value="'+key2+'" SELECTED>'+sort_list[key2]+'</OPTION>';
						} else {
							setting_dialog_strx += '<OPTION value="'+key2+'">'+sort_list[key2]+'</OPTION>';
						}
					}
					setting_dialog_strx += '</SELECT><BR />';
				} else if (key == 'map_rightclick') {
					var chk_flg='';
					if(options[key]){chk_flg='checked';}
					setting_dialog_strx += '<LABEL style="line-height:2em;"><INPUT type="checkbox" class="ixamoko_setting" key="'+key+'" '+chk_flg+' /> '+options_param[key].caption+'</LABEL><SELECT class="ixamoko_setting" key="map_rightclick_type">';
					var sort_list = {
						0: 'マップ移動',
						1: 'コンテキストメニュー',
					};
					for(var key2 in sort_list) {
						if (key2==options['map_rightclick_type']) {
							setting_dialog_strx += '<OPTION value="'+key2+'" SELECTED>'+sort_list[key2]+'</OPTION>';
						} else {
							setting_dialog_strx += '<OPTION value="'+key2+'">'+sort_list[key2]+'</OPTION>';
						}
					}
					setting_dialog_strx += '</SELECT><BR />';
				} else if ((key=='ad_sort')||(key=='place_skip_str')||(key=='toride_count')||(key=='map_rightclick_type')) {
				} else {
					if (options[key]) {
						setting_dialog_strx += '<LABEL style="line-height:2em;"><INPUT type="checkbox" class="ixamoko_setting" key="'+key+'" checked /> '+options_param[key].caption+'</LABEL><BR />';
					} else {
						setting_dialog_strx += '<LABEL style="line-height:2em;"><INPUT type="checkbox" class="ixamoko_setting" key="'+key+'" /> '+options_param[key].caption+'</LABEL><BR />';
					}
				}
			}
			if (grp=='all') {
				setting_dialog_strx += '<INPUT id="clear_map_reg" type="button" value="記録した地図をクリア" />';
				setting_dialog_strx += '&nbsp;<INPUT id="clear_grp_reg" type="button" value="記録したグループをクリア" /><BR />';
			}
		}
		setting_dialog_strx += '</DIV>';
		setting_dialog_strxx += setting_dialog_strx;
	}
	setting_dialog_str += '</DIV><DIV style="clear:both;margin-bottom:5px;border-bottom:2px solid #000;"></DIV><DIV>'+setting_dialog_strxx+'</DIV>';
	if (changed) {
		localStorage.setItem(OPTION_TAG, toJSON(options));
	}
	setting_dialog_str += '</DIV></DIV><DIV style="position:absolute;z-index:9000;background-color:#000;display:none;" id="ixamoko_mask"></DIV><DIV style="position:absolute;z-index:9000;background-color:#000;display:none;" id="loading_mask"></DIV></DIV>';
	menu_reversal();
	$('BODY').prepend(setting_dialog_str);
	
	$('#ixamoko_set_grp > DIV').click(function(e) {
		var $this = $(this);
		$('#ixamoko_set_tab_'+$this.attr('tabid')).show().siblings().hide();
		$this.css('backgroundColor', '#aaf').siblings().css('backgroundColor', '');
	});
	$('INPUT.ixamoko_set_grp_set').live('click', function(e) {
		if (confirm('本当に変更して良いですか。')) {
			var $parent = $(this).parent();
			var color = $parent.find('INPUT.ixamoko_color').val();
			var icon = $parent.find('INPUT.ixamoko_icon').val();
			groups[parseInt($parent.attr('grpid'))] = color.replace('"', '%22');
			groups_img[parseInt($parent.attr('grpid'))] = icon.replace('"', '%22');
			$parent.find('IMG').attr('src', icon);
			localStorage.setItem('ixamoko_init_groups', ArraytoJSON(groups));
			localStorage.setItem('ixamoko_init_groups_img', ArraytoJSON(groups_img));
		}
	});
	$('INPUT.ixamoko_set_grp_del').live('click', function(e) {
		if (confirm('本当に削除して良いですか。')) {
			var $parent = $(this).parent();
			var id = parseInt($parent.attr('grpid'));
			
			groups.splice(id, 1);
			groups_img.splice(id, 1);
			
			for(var cardid in group_setting) {
				if (group_setting[cardid]==id) {
					group_setting[cardid] = 0;
				} else if (group_setting[cardid]>id) {
					--group_setting[cardid];
				}
			}
			localStorage.setItem("ixamoko_group_set", toJSON(group_setting));

			$parent.remove();
			localStorage.setItem('ixamoko_init_groups', ArraytoJSON(groups));
			localStorage.setItem('ixamoko_init_groups_img', ArraytoJSON(groups_img));
		}
	});
	$('INPUT.ixamoko_set_grp_default').click(function(e) {
		if (confirm('本当に標準に戻して良いですか。全てのグループ設定は破棄されます。')) {
			group_setting = {};
			localStorage.setItem("ixamoko_group_set", toJSON(group_setting));

			var html = '';
			for(var i=0;i<groups_def.length;++i) {
				html += '<DIV grpid="'+i+'"><IMG width="30" height="30" align="absmiddle" src="'+groups_img_def[i]+'" /> <INPUT class="ixamoko_icon" style="width:200px;position:relative;top:-10px;" type="text" value="'+groups_img_def[i]+'" /> <INPUT class="ixamoko_color" style="width:50px;position:relative;top:-10px;" type="text" value="'+groups_def[i]+'" />';
				html += '&nbsp;<INPUT style="position:relative;top:-10px;" type="button" value="設定" class="ixamoko_set_grp_set" />';
				if (i>0) {
					html += '&nbsp;<INPUT style="position:relative;top:-10px;" type="button" value="削除" class="ixamoko_set_grp_del" />';
				}
				html += '</DIV>';
			}
			$('#ixamoko_grp_list').empty().html(html);
			
			localStorage.setItem('ixamoko_init_groups', ArraytoJSON(groups_def));
			localStorage.setItem('ixamoko_init_groups_img', ArraytoJSON(groups_img_def));
		}
	});
	$('INPUT.ixamoko_set_grp_default2').click(function(e) {
		if (confirm('本当にお勧めに設定して良いですか。全てのグループ設定は破棄されます。')) {
			group_setting = {};
			localStorage.setItem("ixamoko_group_set", toJSON(group_setting));

			//groups = groups_def;
			//groups_img = groups_img_recommand;

			var html = '';
			for(var i=0;i<groups_def.length;++i) {
				html += '<DIV grpid="'+i+'"><IMG width="30" height="30" align="absmiddle" src="'+groups_img_recommand[i]+'" /> <INPUT class="ixamoko_icon" style="width:200px;position:relative;top:-10px;" type="text" value="'+groups_img_recommand[i]+'" /> <INPUT class="ixamoko_color" style="width:50px;position:relative;top:-10px;" type="text" value="'+groups_def[i]+'" />';
				html += '&nbsp;<INPUT style="position:relative;top:-10px;" type="button" value="設定" class="ixamoko_set_grp_set" />';
				if (i>0) {
					html += '&nbsp;<INPUT style="position:relative;top:-10px;" type="button" value="削除" class="ixamoko_set_grp_del" />';
				}
				html += '</DIV>';
			}
			$('#ixamoko_grp_list').empty().html(html);
			localStorage.setItem('ixamoko_init_groups', ArraytoJSON(groups_def));
			localStorage.setItem('ixamoko_init_groups_img', ArraytoJSON(groups_img_recommand));
		}
	});
	$('INPUT.ixamoko_set_grp_add').click(function(e) {
		var $list = $('#ixamoko_grp_list');
		var i = $list.find('DIV').get().length;
		
		var html = '';
		html += '<DIV grpid="'+i+'"><IMG width="30" height="30" align="absmiddle" src="'+groups_img[0]+'" /> <INPUT class="ixamoko_icon" style="width:200px;position:relative;top:-10px;" type="text" value="'+groups_img[0]+'" /> <INPUT class="ixamoko_color" style="width:50px;position:relative;top:-10px;" type="text" value="" />';
		html += '&nbsp;<INPUT style="position:relative;top:-10px;" type="button" value="設定" class="ixamoko_set_grp_set" />';
		html += '&nbsp;<INPUT style="position:relative;top:-10px;" type="button" value="削除" class="ixamoko_set_grp_del" />';
		html += '</DIV>';
		$list.append(html);

		groups[i] = '';
		groups_img[i] = groups_img[0];
		localStorage.setItem('ixamoko_init_groups', ArraytoJSON(groups));
		localStorage.setItem('ixamoko_init_groups_img', ArraytoJSON(groups_img));
	});
	$('#clear_map_reg').click(function(e) {
		var map_list = {};
		localStorage.setItem("map_list", toJSON(map_list));
		alert('Done.');
	});
	$('#clear_grp_reg').click(function(e) {
		var tmp_list = {};
		localStorage.setItem("ixamoko_group_set", toJSON(tmp_list));
		localStorage.setItem("ixamoko_card_name", toJSON(tmp_list));
		alert('Done.');
	});
	$('#sideboxTop').prepend('<DIV class="sideBox"><DIV class="sideBoxHead"><H3 style="padding:5px;">'+TOOL_NAME+'</H3></DIV><DIV class="sideBoxInner" id="mokotool"></DIV></DIV>');
	$('#mokotool').append('<div id="allMapThicbox" style="display:none;"><span id="all_map"></span></div>');
	if (location.pathname=='/world/select_world.php') {
		//localStorage.setItem(OPTION_PREFIX+'starttime', ''+getUnixTime());
		//console.log('set');
		document.cookie = 'im_st='+getUnixTime()+'; domain=.sengokuixa.jp; path=/;';
	} else if (getCookie('im_st')!==null) {
		localStorage.setItem(OPTION_PREFIX+'starttime', getCookie('im_st'));
		document.cookie = 'im_st=0; expires=Fri, 31-Dec-1999 23:59:59 GMT; domain=.sengokuixa.jp; path=/;';
	}
	showLinksAtDeck();
	allpage_check();
	non_cardview();
	chat_check();
	chat_default_check();
	disp_ToubatsuRestTime(true);
	dungeon_check();
	message_check();
	report_check();
	map_check();
	map_potential();
	map_rightdblclick();
	map_rightclick();
	map_butai_status();
	mapAdjust();
	fade_button_check();
	bbs_check();
	reportlist_check();
	reportlist_check2();
	trade_default_check();
	user_check();
	//set_unit_default_check();
	village_check();
	facility_check();
	facility_check2();
	unitList_check();
	chat_log_check();
	// add start
	delList_check();
	non_back();
	all_map_status();
	all_check_inbox();
	fightlist();
	merge_fight_info();
	extra_inform();
	facility_selecter();
	hold_butai();
	unit_list_hikyou();
	send_troop_check();
	all_dissolution();
	all_deck_setting();
	deck_check();
	sort_village();
	ptop_check();
	war_detail_navi();
	facility_tool();
	prohibitionArea();
	zoomMap();
	favoriteSort();
	fall_check();

	var br3 = {
		closeTimer : null,

		makeMenu : function(arr,target){
			var submenu = document.createElement('div');
			submenu.id = target;
			submenu.style.position = "absolute";
			submenu.style.zIndex = 200000;
			submenu.style.background = "#000000";
			submenu.style.display = "none";
			$("."+target).append(submenu);
			$(submenu).mouseover(function(){
				br3.closetimeC();
			});
			$(submenu).mouseout(function(){
				br3.closetime();
			});

			for(var i=0;i<arr.length;++i){
				var a = document.createElement('a');
				a.href = arr[i][0];
				a.innerHTML = arr[i][1];
				a.style.margin = "12px";
				a.style.fontSize = "100%";
				a.style.textIndent = "0px";
				a.style.height = "14px";
				a.style.background = "#000000";
				submenu.appendChild(a);
			}
		},

		makeMapMenu : function(arr,target){
			var c = location.href.match(/c=\d+$/);
			if (c!==null) {
				c = "&" + c;
			} else {
				c = "";
			}
		
			var submenu = document.createElement('div');
			submenu.id = target;
			submenu.style.position = "absolute";
			submenu.style.zIndex = 200000;
			submenu.style.background = "#000000";
			submenu.style.display = "none";
			submenu.style.width = "235px";
			$("."+target).append(submenu);
			$(submenu).mouseover(function(){
				br3.closetimeC();
			});
			$(submenu).mouseout(function(){
				br3.closetime();
			});

			for(var i=0;i<4;++i){
				var l = document.createElement('li');
				l.style.background = "#000000";
				l.style.height = arr.length*27.5+"px";
				l.style.width = "55px";

				var dir,x,y;
				switch (i) {
					case 0:
						dir = "北東砦";
						x = 1;
						y = 1;
						break;
					case 1:
						dir = "南東砦";
						x = 1;
						y = -1;
						break;
					case 2:
						dir = "南西砦";
						x = -1;
						y = -1;
						break;
					case 3:
						dir = "北西砦";
						x = -1;
						y = 1;
						break;
				}

				for(var j=0;j<arr.length;++j){
					var a = document.createElement('a');
					a.href = "/map.php?x="+arr[j][0]*x+"&y="+arr[j][1]*y+c;
					a.innerHTML = dir + eval(j + 1);
					a.style.margin = "12px";
					a.style.fontSize = "100%";
					a.style.textIndent = "0px";
					a.style.height = "14px";
					a.style.width = "50px";
					a.style.background = "#000000";
					l.appendChild(a);
				}
				submenu.appendChild(l);
			}
		},

		openMenu : function(obj) {
			br3.closeMenu();
			br3.closetimeC();
			$("#"+obj).toggle();
		},
		closeMenu : function() {
			$("#gnavi01").css('display', "none");
			$("#gnavi02").css('display', "none");
			$("#gnavi03").css('display', "none");
			$("#gnavi05").css('display', "none");
			$("#gnavi07").css('display', "none");
			$("#gnavi08").css('display', "none");
		},

		closetime : function() {
			br3.closeTimer = window.setTimeout(br3.closeMenu, 50);
		},

		closetimeC :function() {
			if(br3.closeTimer) {
				window.clearTimeout(br3.closeTimer);
				br3.closeTimer = null;
			}
		}

	};
	//ブラ三のsub menu +を移植、無許可のためコメントアウト
	initMenu();
	// add end
	jQuery.noConflict();

	function proToString(pro) {
		var out = '';
		for(var key in pro){
			if (out!='' ) out += ',';
			out += "'"+key+"':'"+pro[key]+"'";
		}
		return '{' + out + '}';
	}

	function caddDate(baseDate, timetxt) {
		var tim = timetxt.match(/^(\d+):(\d+):(\d+)/);
		if( !tim ) return "";

		var dt = new Date(baseDate.getFullYear(),
						  baseDate.getMonth(),
						  baseDate.getDate(),
						  baseDate.getHours() + parseInt(tim[1],10),
						  baseDate.getMinutes() + parseInt(tim[2],10),
						  baseDate.getSeconds() + parseInt(tim[3],10) );

		return (dt.getMonth()+1) + "/" + dt.getDate() + " " +
				(dt.getHours()+100).toString().substr(-2)  + ":" +
				(dt.getMinutes()+100).toString().substr(-2)  + ":" +
				(dt.getSeconds()+100).toString().substr(-2);
	}

	function caddDate2(baseDate, timetxt) {
		var tim = timetxt.match(/^(\d+):(\d+):(\d+)/);
		if( !tim ) return "";

		var dt = new Date(baseDate.getFullYear(),
						  baseDate.getMonth(),
						  baseDate.getDate(),
						  baseDate.getHours() + parseInt(tim[1],10),
						  baseDate.getMinutes() + parseInt(tim[2],10),
						  baseDate.getSeconds() + parseInt(tim[3],10) );

		return (dt.getHours()+100).toString().substr(-2)  + ":" +
				(dt.getMinutes()+100).toString().substr(-2)  + ":" +
				(dt.getSeconds()+100).toString().substr(-2);
	}


	//////////////////////
	//全ページ用: 資源数の横に全部隊へのリンク
	//			  簡易編成へのリンク
	//////////////////////
	function allpage_check() {
		if (options['sidebox_change']) {
			var $sidetop    = $('#sideboxTop');
			var $money_div  = $('#sideboxTop > DIV.sideBox:eq(1)').addClass('last');	//銅銭・金
			var $card_div   = $('#sideboxTop > DIV.sideBox:eq(2)');						//カード
			var $joutai_div = $('#sideboxTop > DIV.sideBox:eq(3)');						//状態

			var $sidebottom = $('#sideboxBottom');		//生産～
			var $seisan_div = $('#sideboxBottom > DIV.sideBox:eq(0)');		//生産
			var $kyoten_div = $('#sideboxBottom > DIV.sideBox:eq(1)');							//拠点
			var $report_div = $('#sideboxBottom > DIV.sideBox:eq(2)').removeClass('last');		//報告書
			
			$('#sideboxTop > DIV.sideBox:eq(0)').after($kyoten_div).after($joutai_div).after($report_div);
			$('#sideboxBottom > DIV.sideBox:eq(0)').after($money_div).after($card_div);
			
			$('TABLE.situationWorldTable').remove();

			if (options['tohankaku']) {
				if (!location.pathname.match(/\/message\//)) {
					$('INPUT[type="text"]').change(function(e) {
						var $this = $(this);
						$this.val(toHankaku($this.val()));
					});
				}
			}
		}
		if (options['chat_mapcood']) {
			var cood = new RegExp(/(-?\d+),\s?(-?\d+)/);
			$('.msg > SPAN').each(function() {
				var $this = $(this);
				var msg = $this.text();
				var tmp = null;
				
				if (tmp=msg.match(cood)) {
					var tmp2 = '<A style="display:inline;" href="/map.php?x='+tmp[1]+'&y='+tmp[2]+'">'+tmp[0]+'</A>';
					msg = $('<div>').text(msg).html();
					msg = msg.replace(tmp[0], tmp2);
					
					$this.html(msg);
				}
				//$this.html(msg.replace(/(-?\d+,\s?-?\d+)/g, '<A href="#">$1</A>'));
				//↑チャット中の<>が有効になるので止めた
			});
		}
		$('#status_left').css({width:'860px'}).append('<SPAN class="normal"><A href="/facility/unit_status.php?dmo=all">全部隊</A></SPAN>'+
														'<SPAN class="sep">&nbsp;|&nbsp;</SPAN>'+
														'<SPAN class="normal"><A href="/facility/set_unit_list.php?show_num=100">全編成</A></SPAN>'+
														'<SPAN class="sep">&nbsp;|&nbsp;</SPAN>'+
														'<SPAN class="normal"><A href="/facility/unit_list.php">待機兵</A></SPAN>'+
														'<SPAN class="sep">&nbsp;|&nbsp;</SPAN>'+
														'<SPAN class="normal"><A href="/senkuji/senkuji.php">くじ</A></SPAN>'+
														'<SPAN class="sep">&nbsp;|&nbsp;</SPAN>'+
														'<SPAN class="normal"><A href="/card/trade.php?t=name&k=&s=no&o=a">取引</A></SPAN>'+
														'<SPAN class="sep">&nbsp;|&nbsp;</SPAN>'+
														'<SPAN class="normal"><A href="/union/index.php">合成</A></SPAN>'+
														'<SPAN class="sep">&nbsp;|&nbsp;</SPAN>'+
														'<SPAN class="normal"><A href="#" id="ixamoko_setting">設定</A></SPAN>'+
														'<SPAN class="sep">&nbsp;|&nbsp;</SPAN>');
		var uranai = false;
		$('table.situationBtnTable').each( function(i) {
			if ($(this).find('tr td a').attr('href').indexOf('uranai') > 0) {
				uranai = true;
				$(this).find('tr td a').remove();
			}
		} );
		$('#status').find('p').each( function(i) {	//IXA占い
			if (i == 0 || i == 2 || i == 4) {
				$(this).remove();
			} else {
				$(this).attr('style','float:left; padding:0 0 0 0;');
				if (uranai == true) {
					$(this).wrap('<a href="/user/uranai/uranai.php"></a>');
				}
			}
		} );
		$('#ixamoko_setting').click(function(e) {
			var id = '#ixamoko_dialog';
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
			$('#ixamoko_mask').css({'width':maskWidth,'height':maskHeight}).fadeTo(0 ,0.8).show();
			var winH = $(window).height();
			var winW = $(window).width();
			$(id).css('top',  winH/2-$(id).height()/2).css('left', winW/2-$(id).width()/2).fadeIn(500);
			return false;
		});
		$('#ixamoko_dialog .close').click(function(e) {
			e.preventDefault();
			$('#ixamoko_mask, #ixamoko_dialog').hide();
			$('.ixamoko_setting').each(function() {
				var $this = $(this);
				var key = $this.attr('key');

				// change start
//				if ((key=='hikyou_where') || (key=='map_starx') || (key=='def_num_of_soldier')) {
				if (key=='def_kind_soldier') {
					var a = $this.find('INPUT[type="checkbox"]');

					for (i=0;i<a.length;++i) {
						options[key][i+1] = a[i].checked===true ? true:false;
					}
				} else if ((key=='map_starx') || (key=='def_num_of_soldier') || (key=='rank_lock') || (key=='ad_sort') || (key=='toride_count') || (key=='map_rightclick_type')) {
				// change end
					//options[key] = $this.val();
					options[key] = $this.children(':selected').attr('value'); // なぜ.val()で取れない??
				} else if (key=='place_skip_str') {
					options[key] = $this.attr('value');
				} else {
					options[key] = $this.attr('checked')===true ? true:false;
				}
			});
			localStorage.setItem(OPTION_TAG, toJSON(options));
		});	   
		$('#ixamoko_mask').click(function(e) {
			$(this).hide();
			$('#ixamoko_dialog').hide();
		});
		if (options['raid']) {
			var $raid = $('IMG.fade[alt="敵襲"]');
			if ($raid.get().length>0) {
				// 敵襲あり
				var href = $raid.parent().attr('href');
				$('BODY').prepend('<DIV id="ixamoko_raid" style="width:100%;position:fixed;padding:2px;background-color:#f00;z-index:9999;"><MARQUEE scrolldelay="100"><A href="'+href+'">敵襲あり</A></MARQUEE></DIV>');
				$('#ixamoko_raid').click(function(e) {
					$(this).hide();
				});
			}
		}

		if (options['inside_attack_view']) {
			var $raid = $('IMG.fade[alt="敵襲"]');
			if ($raid.get().length>0) {
				// 敵襲あり
				var href = $raid.parent().attr('href');
				/*
				$('div#status.clearfix').css('background','url(http://www.jj-midi.com/image/bg_status_red.jpg)');
				*/
				$('div#status.clearfix').css('background','url(' + IMAGES.bg_status_red + ')');
				//$('span.sep').last().after('<span class="normal"><a href="'+href+'">敵襲</a></span>');
			}
		}

		if (options['atkpict_replace']) {	//敵襲・アイコン置換
			var $raid = $('IMG.fade[alt="敵襲"]');
			$raid.attr('src',gifraid);
		}

		if (options['timeout_countdown']) {
			if (localStorage.getItem(OPTION_PREFIX+'starttime')!==null) {
				var totime = (parseInt(localStorage.getItem(OPTION_PREFIX+'starttime'))+3*60*60);
				var sec = totime-getUnixTime();
				if (sec<0) sec = 0;
				var timeText = formatTime(sec);
				var dayText = caddDate2(new Date(), timeText);
				var str = 'タイムアウトまで <SPAN todo="d30m" totime="'+totime+'" class="ixamoko_countdown">'+timeText+'</SPAN>'; //+'('+dayText+')';
				$('BODY').prepend('<DIV style="z-index:9999;width:100%;position:fixed;"><DIV id="ixamoko_sessout" style="cursor:pointer;border:1px solid #000;float:right;width:125px;padding:2px;background-color:#fff;z-index:9999;display:none;">'+str+'</DIV></DIV>');
				$('#ixamoko_sessout').click(function(e) {
					$(this).hide();
				});
			}
			var countdownTimer = null;
			var countDown = function(nowdate) {
				if (countdownTimer!==null) clearTimeout(countdownTimer);
				
				$('.ixamoko_countdown').each(function() {
					var $this = $(this);
					var totime = parseInt($this.attr('totime'));
					var todo = $this.attr('todo');
					var sec = totime - getUnixTime();
					if (sec<0) sec = 0;
					var timeText = formatTime(sec);
					$this.html(timeText);
					if (sec<600) {
						$this.parent().css({backgroundColor:'#f00'});
					} else if (sec<1800) {
						$this.parent().css({backgroundColor:'#af0'});
					}
					if (todo=='d30m' && sec<1800) {
						$this.parent().show();
					}
				});
				
				countdownTimer = setTimeout(function() {countDown(new Date());}, 1000-new Date().getMilliseconds());
			}
			countDown(new Date());
		}
	}

	function non_cardview() {
		if (!options['non_cardview']) return;
		$('div#sideboxTop').find('div.sideBox').find('h3.sidebox_cardbg img[alt="カード"]').parent().parent().parent().remove();
	}

	//////////////////////
	//地図: ★１と２だけリスト表示
	//////////////////////
	function map_check() {
		if (location.pathname!="/map.php") return;

		// 選択中の所領を判断
		var basedata = $('.basename').find('LI.on > SPAN').attr('title');
		var tmp = basedata.match(/^(.+)\((-?\d+),(-?\d+)\)$/);
		var base_name = tmp[0];
		var base_x = parseInt(tmp[2]);
		var base_y = parseInt(tmp[3]);
		
		if (options['map_reg']) {
			var maplist_box = $('<DIV id="ixamoko_maplist1">').css({fontSize:'10px',zIndex:1000, overflowY:'scroll', width:'165px', height:'110px', position:'absolute', top:'400px', left:'620px', backgroundColor:'#fff', border:'1px solid #000'});
			$('#ig_mapbox').prepend(maplist_box);
			map_list(base_x, base_y, base_name);
		}

		if (options['map_starx']>0) {
			var status_box = $('<DIV id="ixamoko_maplist2">').css({fontSize:'10px', zIndex:1000, overflowY:'scroll', width:'165px', height:'110px',  position:'absolute', top:'10px', left:'620px', backgroundColor:'#fff', border:'1px solid #000'});
			$('#ig_mapbox').prepend(status_box);
			map_list2(base_x, base_y, base_name);
			$('.ixamoko_regmap').live('click', function(e) {
				location.href = $(this).attr('url');
			}).live('mouseover', function(e) {
				$('AREA[alt="'+$(this).attr('alt')+'"]').trigger('mouseover');
			});
		}
	}
	function map_list(base_x, base_y, base_name) {
		var $maplist_box = $('#ixamoko_maplist1');
		
		$maplist_box.empty();
		
		var map_list = {};
		if (localStorage.getItem("map_list")) {
			map_list = secureEvalJSON(localStorage.getItem("map_list"));
		}
		for(var key in map_list) {
			var tmp = key.match(/(-?\d+),(-?\d+)/);
			
			if (tmp===null) {
				//console.log('tmp null1');
				continue;
			}
			
			var dist = Math.sqrt(Math.pow(parseInt(tmp[1])-base_x, 2)+Math.pow(parseInt(tmp[2])-base_y, 2));
			dist = Math.floor(dist*10)/10;
			
			$('<DIV cood="'+key+'" style="cursor:pointer;padding:2px;margin:1px;">[距: '+dist+'] '+map_list[key]+' ('+key+')</DIV>').hover(function(e) {
				$(this).css({backgroundColor:'#aaf'}); // class使いたい
			}, function(e) {
				$(this).css({backgroundColor:''});
			}).click(function(e) {
				var tmp = $(this).attr('cood').match(/(-?\d+),(-?\d+)/);
				if (tmp===null) {
					//console.log('tmp null2');
					return;
				}
				location.href = '/map.php?x='+tmp[1]+'&y='+tmp[2];
			}).appendTo($maplist_box);
		}
	}

	function map_list2(base_x, base_y, base_name) {
		var $status_box = $('#ixamoko_maplist2');
		$status_box.empty();

		$status_box.append('<DIV style="background-color:#faf;margin-top:3px;font-weight:bold;">[選択拠点: '+base_name+']</DIV>');

		var HOSHI_SET = [];
		var hoshi = '★';
		
		if(options['map_starx']!=7) {
			for(var i=0;i<options['map_starx'];++i) {
				HOSHI_SET.push(hoshi);
				hoshi += '★';
			}
		} else {
			hoshi = '★★★★★★★';
			HOSHI_SET.push(hoshi);
		}
		function Tochi(name, dist, url, alt) {
			this.name = name;
			this.dist = dist;
			this.url = url;
			this.alt = alt;
		}
		function cmp_dist(a, b) {
			return a.dist - b.dist;
		}
		for(var i=0;i<HOSHI_SET.length;++i) {
			var hoshi = HOSHI_SET[i];
			var count = 0;
			var tmp2='';
			var Tochis = new Array();
			$('AREA[onmouseover*=", \''+hoshi+'\',"]').each(function() {
				var $this = $(this);
				var tmp = $this.attr('alt').match(/^([^(]+) (-?\d+),(-?\d+)$/);
				if (tmp===null) {
					//console.log('tmp null3');
					return;
				}
				var dist = Math.sqrt(Math.pow(parseInt(tmp[2])-base_x, 2)+Math.pow(parseInt(tmp[3])-base_y, 2));
				dist = Math.floor(dist*10)/10;
				if(hoshi=='★★★★★★★') {
					tmp2='';
					tmp2=$this.attr("onmouseover").toString();
					tmp2=tmp2.replace("function onmouseover(event) {\n",'');
					tmp2=tmp2.replace('  rewrite(','');
					tmp2=tmp2.replace(' ','');
					tmp2=tmp2.replace(/'/g,'');
					tmp2=tmp2.split(',');
					tmp2='('+tmp2[8].replace(' ','')+tmp2[9]+tmp2[10]+tmp2[11]+')';
					tmp2=tmp2.replace(/'/g,'');
					tmp[0]=tmp2+tmp[0];
				}
				Tochis[count++] = new Tochi(tmp[0], dist, $this.attr('href'), $this.attr('alt'));
			});
			Tochis.sort(cmp_dist);
			for(var j=0;j<Tochis.length;++j) {
				if(hoshi=='★★★★★★★') {hoshi='★７';}
				var $hosiarea = $('<DIV class="ixamoko_regmap" style="cursor:pointer;padding:2px;margin:1px;">'+hoshi+' [距: '+Tochis[j].dist+'] '+Tochis[j].name+'</DIV>').attr('url', Tochis[j].url).attr('alt', Tochis[j].alt).hover(function(e) {
					$(this).css({backgroundColor:'#aaf'}); // class使いたい
				}, function(e) {
					$(this).css({backgroundColor:''});
				}).appendTo($status_box);
			}
		}
	}

	function unescapeUnicode(str) {
		return str.replace(/\\u([a-fA-F0-9]{4})/g, function(m0, m1) {
			return String.fromCharCode(parseInt(m1, 16));
		});
	}

	function map_rightdblclick() {
		if (location.pathname!="/map.php") return;
		if (!options['map_rightdblclick']) return true;
		return true;
		//var g_click='1';
		//var target_html;
		//$('AREA[href^="/land.php"]').dblclick(function(e) {
		//	g_click='2';
		//	target_html = $(this);
		//}).click(function(){
		//					 g_click='1';
		//					 target_html = $(this);
		//					 setTimeout(function() {
		//									if(g_click=='1') {
		//										var tmp = target_html.attr('href').match(/land\.php\?(.+)$/);
		//										location.href='/land.php?'+tmp[1];
		//									} else {
		//										var tmp = target_html.attr('onmouseover').toString().match(/(?:[^'"]|\\.)*/g);
		//										location.href='/war/list.php?m=&s=1&name=lord&word='+unescapeUnicode(tmp[6])+'&coord=map&x=&y=';
//
		//									}
		//										   },200);
		//					 return false;
		//				   });
	}

	//////////////////////
	//地図: 右クリック挙動設定
	//////////////////////
	function map_rightclick() {
		if (location.pathname!="/map.php") return;
		if (!options['map_rightclick']) return true;
GM_log("option map_rightclick -start-");
		//
		// ターゲット対象の敵拠点のイメージを置き換え
		//
		mapPoz.init();
		mapPoz.repTargets();

		if (options['map_rightclick_type'] == '0') { // 地図移動
			$('AREA[href^="/land.php"]').live('contextmenu', function(e) {
				map_move_ajax($(this));
				return false;
			});
		} else if (options['map_rightclick_type'] == '1') {  // コンテキストメニュー
			var tmp = '<div id="tooltip"><ul id="cm_mapItem" style="text-align:left"></ul></div>';
			$(document.body).append(tmp);
			$("#tooltip").hide().css({ position: "absolute", backgroundColor: "white", border: "solid 1px darkgray", padding: "3px", zIndex: 1001});
			$('AREA[shape="poly"]').live('contextmenu', function(e) {
				openToolForMap(this, e.pageX, e.pageY, mapPoz);
				return false;
			});
		}
	}
	function openToolForMap(target, x, y, mapPoz) {
		$("#tooltip").css({ left: x + "px", top: y + "px"}).show();
		$(document).unbind("click").one("click", function(){$("#tooltip").hide();});
		/*
		$("#cm_mapItem").text("").append("<li style='padding:0px 10px'><img src='http://www.jj-midi.com/image/wait.gif' style='opacity: 0.6' /></li>");
		$("#cm_mapItem").text("").append("<li style='padding:0px 10px'><img src='" + IMAGES.wait + "' style='opacity: 0.6' /></li>");
		*/
		//
		// XXX 以下は要関数化！！！！
		//
		$('#cm_mapItem').text("");
		var list_id = 0;
		// mapの移動
		//$('#cm_mapItem').append('<li id="fUnit'+list_id+'" style="color:black; padding:0px 10px; cursor:default">ここを中心に</li>');
		//$('#fUnit'+list_id).hover(function() {
		//	$(this).css({color:'white', 'background-color':'blue'});
		//}, function() {
		//	$(this).css({color:'', 'background-color':''});
		//}).click(function(e) {
		//	map_move_ajax($(target));
		//});
		//list_id++;
		//
		// どこ近
		$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="' + user_name+ '" style="color:black; padding:0px 10px; cursor:default"><a><img src="' + gifdoko + '" alt="どこ近"></a></li>');
		$('#fUnit'+list_id).hover(function() {
			$(this).css({color:'white', 'background-color':'blue'});
		}, function() {
			$(this).css({color:'', 'background-color':''});
		}).click(function(e) {
			calc_dokochika($(target).attr('onclick').toString());
		});
		list_id++;

		mapPoz.setTarget(target);

		var user_name = mapPoz.user_name;
		var alliance_name = mapPoz.alliance_name;
		var place_name = mapPoz.place_name;

		//
		// @ 表示拠点変更
		//
		if (!(user_name == "　")) {
			if ($('li#lordName').text() == user_name) {		//自分の拠点なら
				var posSign = null;
				var lnk = null;
				var aes = $("div.sideBoxInner ul li a");
				var href = null;
				for (var i = 0; i < aes.length; i++) {
					if (aes.eq(i).text() == place_name) {
						href = aes.eq(i).attr('href');
						break;
					}
				}
				if (href != null) {
					var s = href.match(/(village_id=[0-9]+)&/);
					lnk = RegExp.leftContext + RegExp.$1 + '&from=menu&page=/map.php';
					posSign = "@ ここを表示拠点にする";
					//alert(tmp);
				} else {
					if ($("div.sideBoxInner ul li.on span").text() == place_name) {
						lnk = document.URL;
						posSign = "* 現在の表示拠点";
					}
				}
				if (posSign != null) {
					$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="' + user_name+ '" style="text-align:center; color:black; padding:0px 10px; cursor:default">'+ posSign + '</li>');
					$('#fUnit'+list_id).hover(function() {
						$(this).css({color:'white', 'background-color':'blue'});
					}, function() {
						$(this).css({color:'', 'background-color':''});
					}).click(function(e) {
						location.href = lnk;
					});
					list_id++;
				}
			}
		}

		$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="break" style="color:black; padding:0px 10px; cursor:default">---------------</li>');
		list_id++;
		// 部隊出陣
		var posStr=$(target).attr('onclick').toString();
		var re = posStr.match(/\/map\.php\?(x=(-?[0-9]+)&y=(-?[0-9]+)&c=[0-9]+)/);
		posStr = RegExp.$1;
		$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="出陣" style="color:black; padding:0px 10px; cursor:default">ここへ部隊出陣</li>');
        $('#fUnit'+list_id).hover(function() {
            $(this).css({color:'white', 'background-color':'blue'});
        }, function() {
            $(this).css({color:'', 'background-color':''});
        }).click(function(e) {
            location.href='/facility/send_troop.php?'+posStr;
        });
		list_id++;

		$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="break" style="color:black; padding:0px 10px; cursor:default">---------------</li>');
		list_id++;
		// 拠点報告書
		$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="拠点報告書" style="color:black; padding:0px 10px; cursor:default">拠点報告書</li>');
		$('#fUnit'+list_id).hover(function() {
			$(this).css({color:'white', 'background-color':'blue'});
		}, function() {
			$(this).css({color:'', 'background-color':''});
		}).click(function(e) {
			var re = posStr.match(/x=(-?[0-9]+)&y=(-?[0-9]+)&c=[0-9]+/);
			location.href='/war/list.php?m=&s=1&name=lord&word=&coord=map&x='+RegExp.$1+'&y='+RegExp.$2;
		});
		list_id++;

		if (user_name != "　") {		//空き地ならここまで、以下は拠点
			//
			//
			// 城主報告書
			$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="' + user_name+ '" style="color:black; padding:0px 10px; cursor:default">城主報告書</li>');
			$('#fUnit'+list_id).hover(function() {
				$(this).css({color:'white', 'background-color':'blue'});
			}, function() {
				$(this).css({color:'', 'background-color':''});
			}).click(function(e) {
				location.href='/war/list.php?m=&s=1&name=lord&word='+$(this).attr('name')+'&coord=map&x=&y=';
			});
			list_id++;
			// 同盟報告書
			$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="' + alliance_name+ '" style="color:black; padding:0px 10px; cursor:default">同盟報告書</li>');
			$('#fUnit'+list_id).hover(function() {
				$(this).css({color:'white', 'background-color':'blue'});
			}, function() {
				$(this).css({color:'', 'background-color':''});
			}).click(function(e) {
				location.href='/war/list.php?m=&s=1&name=alliance&word='+$(this).attr('name')+'&coord=map&x=&y=';
			});
			list_id++;
			//
			$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="break" style="color:black; padding:0px 10px; cursor:default">---------------</li>');
			list_id++;
			// 城主合戦格付
			// 敵国の格付はそのままではでない。攻撃国、防御国、援軍国ボタンを押す…
			// 別ページを読まずにcが特定出来る方法はあるのか？
			$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="' + user_name+ '" style="color:black; padding:0px 10px; cursor:default">城主合戦格付</li>');
			$('#fUnit'+list_id).hover(function() {
				$(this).css({color:'white', 'background-color':'blue'});
			}, function() {
				$(this).css({color:'', 'background-color':''});
			}).click(function(e) {
				location.href='/war/war_ranking.php?m=&find_rank=&find_name=' + $(this).attr('name');
			});
			list_id++;
			// 同盟合戦格付
			// 敵国の格付はそのままではでない。攻撃国、防御国、援軍国ボタンを押す…
			// 別ページを読まずにcが特定出来る方法はあるのか？
			$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="' + alliance_name+ '" style="color:black; padding:0px 10px; cursor:default">同盟合戦格付</li>');
			$('#fUnit'+list_id).hover(function() {
				$(this).css({color:'white', 'background-color':'blue'});
			}, function() {
				$(this).css({color:'', 'background-color':''});
			}).click(function(e) {
				location.href='/war/war_alliance_ranking.php?m=&find_rank=&find_name=' + $(this).attr('name');
			});
			list_id++;
			// 城主格付
			// とりあえず、c=0にして全体格付表示で…
			// 別ページを読まずにcが特定出来る方法はあるのか？
			$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="' + user_name+ '" style="color:black; padding:0px 10px; cursor:default">城主格付</li>');
			$('#fUnit'+list_id).hover(function() {
				$(this).css({color:'white', 'background-color':'blue'});
			}, function() {
				$(this).css({color:'', 'background-color':''});
			}).click(function(e) {
				location.href='/user/ranking.php?m=&find_rank=&find_name=' + $(this).attr('name') + '&c=0';
			});
			list_id++;
			// 同盟格付
			// とりあえず、c=0にして全体格付表示で…別ページを読まずにcが特定出来る方法はあるのか？
			$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="' + alliance_name+ '" style="color:black; padding:0px 10px; cursor:default">同盟格付</li>');
			$('#fUnit'+list_id).hover(function() {
				$(this).css({color:'white', 'background-color':'blue'});
			}, function() {
				$(this).css({color:'', 'background-color':''});
			}).click(function(e) {
				location.href='/alliance/list.php?m=&find_rank=&find_name=' + $(this).attr('name') + '&c=0';
			});
			list_id++;
			//if ($('li#lordName').text() != user_name) {
			//	$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="break" style="color:black; padding:0px 10px; cursor:default">---------------</li>');
				list_id++;
				// プロフィール
				//$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="プロフィール" style="color:black; padding:0px 10px; cursor:default">プロフィール</li>');
				//$('#fUnit'+list_id).hover(function() {
				//	$(this).css({color:'white', 'background-color':'blue'});
				//}, function() {
				//	$(this).css({color:'', 'background-color':''});
				//}).click(function(e) {
					//location.href=profUrl($(target).attr('href'));
				//	var purl = '';
				//	var ws = $(target).attr('onclick').toString();
				//	var re = ws.match(/(\/user\/\?user_id=[0-9]+)/);
				//	if (re) {
				//		purl = RegExp.$1;
				//	}
				//	location.href = purl;
				//});
				//list_id++;
				// 同盟情報
				//$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="プロフィール" style="color:black; padding:0px 10px; cursor:default">同盟情報</li>');
				//$('#fUnit'+list_id).hover(function() {
				//	$(this).css({color:'white', 'background-color':'blue'});
				//}, function() {
				//	$(this).css({color:'', 'background-color':''});
				//}).click(function(e) {
					//location.href=profUrl($(target).attr('href'));
				//	var aurl = '';
				//	var ws = $(target).attr('onclick').toString();
				//	var re = ws.match(/(\/alliance\/info\.php\?id=[0-9]+)/);
				//	if (re) {
				//		aurl = RegExp.$1;
				//	}
				//	location.href = aurl;
				//});
				//list_id++;
			//}
			//
			// Targetize
			//
			if (mapPoz.isEnemy == true) {		//敵拠点なら
				$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="break" style="color:black; padding:0px 10px; cursor:default">---------------</li>');
				list_id++;
				if (mapPoz.user_name == targetEnemy) {
					$('#cm_mapItem').append('<li id="fUnit'+list_id+'" style="color:black; padding:0px 10px; cursor:default">この敵のマークをやめる</li>');
					$('#fUnit'+list_id).hover(function() {
						$(this).css({color:'white', 'background-color':'blue'});
					}, function() {
						$(this).css({color:'', 'background-color':''});
					}).click(function(e) {
						targetEnemy = "";
						targetAlli  = "";
						saveTargeties();
						mapPoz.repTargets();
					});
					list_id++;				
				} else {
					$('#cm_mapItem').append('<li id="fUnit'+list_id+'" style="color:black; padding:0px 10px; cursor:default">この敵をマークする</li>');
					$('#fUnit'+list_id).hover(function() {
						$(this).css({color:'white', 'background-color':'blue'});
					}, function() {
						$(this).css({color:'', 'background-color':''});
					}).click(function(e) {
						targetEnemy = mapPoz.user_name;
						targetAlli  = mapPoz.alliance_name;
						saveTargeties();
						mapPoz.repTargets();
					});
					list_id++;				
				}
			}
		}
		$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="break" style="color:black; padding:0px 10px; cursor:default">---------------</li>');
		list_id++;
		// 敵襲表示
		$('#cm_mapItem').append('<li id="fUnit'+list_id+'" name="敵襲表示" style="color:black; padding:0px 10px; cursor:default">距離20以内の敵襲表示</li>');
        $('#fUnit'+list_id).hover(function() {
            $(this).css({color:'white', 'background-color':'blue'});
        }, function() {
            $(this).css({color:'', 'background-color':''});
        }).click(function(e) {
			//     /war/fight_history.php?find_x=-39&find_y=-1&find_length=20
			var re = posStr.match(/x=(-?[0-9]+)&y=(-?[0-9]+)&c=[0-9]+/);
			location.href='/war/fight_history.php?find_x='+RegExp.$1+'&find_y='+RegExp.$2+'&find_length=20';
        });
		list_id++;
	}

	function map_move_ajax(area) {
		if (location.pathname!="/map.php") return;
		if (typeof(this.ajflag)=='undeifned') {
			this.ajflag = false;
		}
		if (this.ajflag) {
			return false;
		}
		this.ajflag = true;

		var src = area.attr('onclick').toString();
		var tmp = src.match(/(\/map\.php\?x=(-?[0-9]+)&y=(-?[0-9]+)&c=[0-9]+)/);
		if (tmp===null) {
			this.ajflag = false;
			return true;
		}
		var murl = RegExp.$1;
		location.href = murl;
		this.ajflag = false;
	}

	function get_map_status(k,i,x,y) {
		if (location.pathname!="/map.php") return;
		var mp = new Array(48);
		mp[0]=new Array(12,28);
		mp[1]=new Array(28,12);
		mp[2]=new Array(12,52);
		mp[3]=new Array(36,36);
		mp[4]=new Array(52,12);
		mp[5]=new Array(12,76);
		mp[6]=new Array(36,60);
		mp[7]=new Array(60,36);
		mp[8]=new Array(76,12);
		mp[9]=new Array(12,100);
		mp[10]=new Array(36,84);
		mp[11]=new Array(60,60);
		mp[12]=new Array(84,36);
		mp[13]=new Array(100,12);
		mp[14]=new Array(12,124);
		mp[15]=new Array(36,108);
		mp[16]=new Array(60,84);
		mp[17]=new Array(84,60);
		mp[18]=new Array(108,36);
		mp[19]=new Array(124,12);
		mp[20]=new Array(12,148);
		mp[21]=new Array(36,132);
		mp[22]=new Array(60,108);
		mp[23]=new Array(84,84);
		mp[24]=new Array(108,60);
		mp[25]=new Array(132,36);
		mp[26]=new Array(148,12);
		mp[27]=new Array(36,156);
		mp[28]=new Array(60,132);
		mp[29]=new Array(84,108);
		mp[30]=new Array(108,84);
		mp[31]=new Array(132,60);
		mp[32]=new Array(156,36);
		mp[33]=new Array(60,156);
		mp[34]=new Array(84,132);
		mp[35]=new Array(108,108);
		mp[36]=new Array(132,84);
		mp[37]=new Array(156,60);
		mp[38]=new Array(84,156);
		mp[39]=new Array(108,132);
		mp[40]=new Array(132,108);
		mp[41]=new Array(156,84);
		mp[42]=new Array(108,156);
		mp[43]=new Array(132,132);
		mp[44]=new Array(156,108);
		mp[45]=new Array(132,156);
		mp[46]=new Array(156,132);
		mp[47]=new Array(156,156);

		var p = new Array('hs','ht','ns','nt');
		var j=i;
		var c = k;
		var minus_x = '1';
		var minus_y = '1';
		if(p[c]=='hs') {
			minus_x = '-1';
			minus_y = '1';
		} else if(p[c]=='ht') {
			minus_x = '1';
			minus_y = '1';
		} else if(p[c]=='ns') {
			minus_x = '-1';
			minus_y = '-1';
		} else {
			minus_x = '1';
			minus_y = '-1';
		}
		var t = $('select#target option:selected').val();
		$.ajax({
			url: '/map.php?x='+(x*minus_x)+'&y='+(y*minus_y)+'&type=1&c='+t,
			cache: false, 
			dataType: "text",
			success: function (html){
					var num = 0;
					$(html).find('div#ig_mapsAll').find('img').each(function() {
						var $this = $(this);
						var img = $this.get()[0].src;
						if(img.indexOf("stronghold_r_l.png")>0) {
							num++;
						}
						if(img.indexOf("stronghold_r_m.png")>0) {
							num++;
						}
						if(img.indexOf("stronghold_r_s.png")>0) {
							num++;
						}
						if(img.indexOf("stronghold_g_l.png")>0) {
							num++;
						}
						if(img.indexOf("stronghold_g_m.png")>0) {
							num++;
						}
						if(img.indexOf("stronghold_g_s.png")>0) {
							num++;
						}
						if(img.indexOf("stronghold_ga_l.png")>0) {
							num++;
						}
						if(img.indexOf("stronghold_ga_m.png")>0) {
							num++;
						}
						if(img.indexOf("stronghold_ga_s.png")>0) {
							num++;
						}
					});
					j++;
					if(num==0) {
						$('table#act_battle_data').find('td#'+p[c]+j).css('color','#ffffff');
					}else if(num<=4) {
						$('table#act_battle_data').find('td#'+p[c]+j).css('color','#ff9999');
					}else if(num<=9) {
						$('table#act_battle_data').find('td#'+p[c]+j).css('color','#ff6666');
					}else if(num<=14) {
						$('table#act_battle_data').find('td#'+p[c]+j).css('color','#ff4c4c');
					}else{
						$('table#act_battle_data').find('td#'+p[c]+j).css('color','#ff0000');
					}
					if(j>47){j=0;c++;}
					if(c>3){$("input#update_map").attr("disabled",false);return;}
					get_map_status(c,j,(mp[j][0]),(mp[j][1]));
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
					return false;
			}
		});
	}

	function all_map_status() {
		if (location.pathname!="/map.php") return;
		if (!options['all_map_status']) return;
		$('#mokotool').append('<a href="#TB_inline?height=340&amp;width=265&amp;inlineId=allMapThicbox" class="thickbox" title="戦況マップ" onclick="return false;">戦況マップ</a>');
		$("a.thickbox").live("mousedown",function() {
			tb_init('a.thickbox');
			var tmp = '<div style="top:17px;right:0px;position: absolute;border-collapse: collapse;"><table id="act_battle_data"><tbody>';
			/*
			tmp+='<tr><td colspan=14><select id="target"><option value="1">織田</option><option value="2">足利</option><option value="3">武田</option><option value="4">上杉</option><option value="5">徳川</option><option value="6">毛利</option><option value="7">浅井</option><option value="8">北条</option><option value="9">長宗</option><option value="10">島津</option><option value="11">大友</option><option value="12">最上</option></select></tr>';
			*/
			if (options['season3']) {	//2012.12 時点の5章
				tmp+='<tr><td colspan=14><select id="target"><option value="1">織田</option><option value="2">黒田</option><option value="3">武田</option><option value="4">上杉</option><option value="5">徳川</option><option value="6">毛利</option><option value="7">伊達</option><option value="8">今川</option><option value="9">長宗</option><option value="10">島津</option><option value="11">豊臣</option><option value="12">石田</option></select></tr>';
			} else {		// 4小
				tmp+='<tr><td colspan=14><select id="target"><option value="1">織田</option><option value="2">足利</option><option value="3">武田</option><option value="4">上杉</option><option value="5">徳川</option><option value="6">毛利</option><option value="7">伊達</option><option value="8">北条</option><option value="9">長宗</option><option value="10">島津</option><option value="11">豊臣</option><option value="12">最上</option></select></tr>';
			}
			var x = new Array(7);
			x[0] = new Array('',2,5,9,14,20,27);
			x[1] = new Array(1,4,8,13,19,26,33);
			x[2] = new Array(3,7,12,18,25,32,38);
			x[3] = new Array(6,11,17,24,31,37,42);
			x[4] = new Array(10,16,23,30,36,41,45);
			x[5] = new Array(15,22,29,35,40,44,47);
			x[6] = new Array(21,28,34,39,43,46,48);
			tmp+='<tr><th colspan=7>北西</th><th colspan=7>北東</th></tr>';
			for(i=6;i>=0;i--){
				tmp+='<tr>';
				for(j=6;j>=0;j--) {
				   tmp+='<td id="hs'+x[i][j]+'">'+x[i][j]+'</td>';
				}
				for(j=0;j<7;j++){
				   tmp+='<td id="ht'+x[i][j]+'">'+x[i][j]+'</td>';
				}
				tmp+='</tr>';
			}
			tmp+='<tr><th colspan=7>南西</th><th colspan=7>南東</th></tr>';
			for(i=0;i<7;i++){
				tmp+='<tr>';
				for(j=6;j>=0;j--) {
				   tmp+='<td id="ns'+x[i][j]+'">'+x[i][j]+'</td>';
				}
				for(j=0;j<7;j++){
				   tmp+='<td id="nt'+x[i][j]+'">'+x[i][j]+'</td>';
				}
				tmp+='</tr>';
			}
			tmp+='<tr><td colspan=14>【消沈<<<<font color="#ff4c4c">激戦</font>】<input id="update_map" type=button value="　　現在の戦況を確認する　　"></td></tr></tbody></table></div>';
			$('span#all_map').append(tmp);
			$("input#update_map").live("click",function() {
				$("input#update_map").attr("disabled","disabled");
				get_map_status(0,0,12,28);
			});
		});
	}

	 //////////////////////
	 //地図: 部隊状況表示
	 //////////////////////
	function map_butai_status() {
		if (typeof(this.ajflag)=='undeifned') {
			this.ajflag = true;
		}
		if (location.pathname!="/map.php") return;
		if (!options['map_butai_status']) return;
		var btimer = new Array(5);
		var wtime  = new Array(5);
		$('#act_battle_data').find('th').eq(0).replaceWith('<th>部隊名</th>');
		$('#act_battle_data').find('th').eq(1).replaceWith('<th>&nbsp;&nbsp;&nbsp;&nbsp;状況&nbsp;&nbsp;&nbsp;&nbsp;</th>');
		$('#act_battle_data tbody').find('tr').eq(3).after('<tr><th></th><td></td></tr>');
			$.ajax({
				url: '/facility/unit_status.php?dmo=all', 
				cache: false, 
				dataType: "text",
				success: function (html){
					var fighter = new Array(5);
					var bomtime = new Array(5);
					for(var i=0;i<5;i++) {
						fighter[i] = $(html).find('div.ig_fight_statusarea').eq(i).find('h3').eq(0).text();
						bomtime[i] = $(html).find('div.ig_fight_statusarea').eq(i).find('div.ig_fight_dotbox table.paneltable.table_fightlist').find('tr').eq(0).find('td').eq(0).find('span').text();
						if(bomtime[i] == ''&&fighter[i]!=''){
							bomtime[i]='待機';
						}else if(bomtime[i]==''&&fighter[i]==''){
							fighter[i]='&nbsp;';
							bomtime[i]='&nbsp;';
						}else{
							var len = bomtime[i].indexOf('あと');
							bomtime[i]=bomtime[i].substring(len+2,len+10);
							var wdate = bomtime[i].split(':');
							wtime[i] = new Date();
							wtime[i].setHours(wdate[0]);
							wtime[i].setMinutes(wdate[1]);
							wtime[i].setSeconds(wdate[2]);
							if(btimer[i]){clearInterval(btimer[i]);}
							if(i==0) {
								  btimer[i]=setInterval(function() {
													   var j=0;
													   wtime[j].setSeconds(wtime[j].getSeconds()-1);
													   $('#act_battle_data tbody').find('span#bt'+j).replaceWith('<span id="bt'+j+'">('+("0"+wtime[j].getHours()).slice(-2)+':'+("0"+wtime[j].getMinutes()).slice(-2)+':'+("0"+wtime[j].getSeconds()).slice(-2)+')</span>');
													   if(wtime[j].getHours()==0&&wtime[j].getMinutes()==0&&wtime[j].getSeconds()==0){clearInterval(btimer[j]);setTimeout(function(){location.href='/map.php';}, 5000);return;}
												 },1000);
							}else if(i==1) {
								  btimer[i]=setInterval(function() {
													   var j=1;
													   wtime[j].setSeconds(wtime[j].getSeconds()-1);
													   $('#act_battle_data tbody').find('span#bt'+j).replaceWith('<span id="bt'+j+'">('+("0"+wtime[j].getHours()).slice(-2)+':'+("0"+wtime[j].getMinutes()).slice(-2)+':'+("0"+wtime[j].getSeconds()).slice(-2)+')</span>');
													   if(wtime[j].getHours()==0&&wtime[j].getMinutes()==0&&wtime[j].getSeconds()==0){clearInterval(btimer[j]);setTimeout(function(){location.href='/map.php';}, 5000);return;}
												 },1000);
							}else if(i==2) {
								  btimer[i]=setInterval(function() {
													   var j=2;
													   wtime[j].setSeconds(wtime[j].getSeconds()-1);
													   $('#act_battle_data tbody').find('span#bt'+j).replaceWith('<span id="bt'+j+'">('+("0"+wtime[j].getHours()).slice(-2)+':'+("0"+wtime[j].getMinutes()).slice(-2)+':'+("0"+wtime[j].getSeconds()).slice(-2)+')</span>');
													   if(wtime[j].getHours()==0&&wtime[j].getMinutes()==0&&wtime[j].getSeconds()==0){clearInterval(btimer[j]);setTimeout(function(){location.href='/map.php';}, 5000);return;}
												 },1000);
							}else if(i==3) {
								  btimer[i]=setInterval(function() {
													   var j=3;
													   wtime[j].setSeconds(wtime[j].getSeconds()-1);
													   $('#act_battle_data tbody').find('span#bt'+j).replaceWith('<span id="bt'+j+'">('+("0"+wtime[j].getHours()).slice(-2)+':'+("0"+wtime[j].getMinutes()).slice(-2)+':'+("0"+wtime[j].getSeconds()).slice(-2)+')</span>');
													   if(wtime[j].getHours()==0&&wtime[j].getMinutes()==0&&wtime[j].getSeconds()==0){clearInterval(btimer[j]);setTimeout(function(){location.href='/map.php';}, 5000);return;}
												 },1000);
							} else {
								  btimer[i]=setInterval(function() {
													   var j=4;
													   wtime[j].setSeconds(wtime[j].getSeconds()-1);
													   $('#act_battle_data tbody').find('span#bt'+j).replaceWith('<span id="bt'+j+'">('+("0"+wtime[j].getHours()).slice(-2)+':'+("0"+wtime[j].getMinutes()).slice(-2)+':'+("0"+wtime[j].getSeconds()).slice(-2)+')</span>');
													   if(wtime[j].getHours()==0&&wtime[j].getMinutes()==0&&wtime[j].getSeconds()==0){clearInterval(btimer[j]);setTimeout(function(){location.href='/map.php';}, 5000);return;}
												 },1000);
							}
							var a = $(html).find('div.ig_fight_statusarea').eq(i).find('div.ig_fight_dotbox table.paneltable.table_fightlist tbody tr.noborder').eq(0).find('img').get()[1].src;
							var m='';
							if(a.indexOf('mode_meeting.png')!=-1){m='合流';}
							if(a.indexOf('mode_return.png')!=-1){m='帰還';}
							if(a.indexOf('mode_attack.png')!=-1){m='攻撃';}
							if(a.indexOf('icon_backup.png')!=-1){m='加勢';}
							if(a.indexOf('mode_dungeon.png')!=-1){m='探索';}
							if(a.indexOf('mode_develop.png')!=-1){m='開拓';}
							bomtime[i]=m;
						}
						fighter[i] = fighter[i].replace('部隊','');
						$('#act_battle_data tbody').find('th').eq(i).replaceWith('<th>'+fighter[i]+'</th>');
						$('#act_battle_data tbody').find('td').eq(i).replaceWith('<td>'+bomtime[i]+'<span id="bt'+i+'"></span></td>');
					}
					return;
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					return false;
				}
			});
		return;
	}
	function mapAdjust() {
		if (location.pathname!="/map.php") return;
		if (!options['mapAdjust']) return;
		$('div.ig_mappanel_maindataarea').click(function(e) {
			$(this).css('z-index','1001');
			$('table#act_battle_data').css('z-index','999');
		});
		$('table#act_battle_data').click(function(e) {
			$(this).css('z-index','1001');
			$('div.ig_mappanel_maindataarea').css('z-index','999');
		});

	}

	//////////////////////
	//施設の情報：
	//////////////////////
	function facility_check() {
		if (location.pathname!="/facility/facility.php") return;
		
		var fname = $('DIV.ig_tilesection_detailarea > H3:eq(0) > A').text();
/*
		var soldiertype = {
			'足軽': [9, 14, 5, 5],
			'長槍足軽': [14, 20, 7, 8],
			'武士': [18, 27, 9, 11],
			'弓足軽': [14, 9, 5, 5],
			'長弓兵': [20, 14, 8, 7],
			'弓騎馬': [27, 18, 11, 9],
			'騎馬兵': [5, 5, 9, 14],
			'精鋭騎馬': [7, 8, 14, 20],
			'赤備え': [9, 11, 18, 27],
			'破城鎚': [22, 16, 11, 14],
			'攻城櫓': [22, 16, 11, 14],
			'鉄砲足軽': [72, 67, 90, 75],
			'鉄砲騎馬': [67, 90, 72, 75],
			'大筒兵': [68, 81, 108, 45]
		};
*/
		var soldiertype = {};
		if (options['def_kind_soldier'][1]) {soldiertype['足軽'] = [9, 14, 5, 5];}
		if (options['def_kind_soldier'][2]) {soldiertype['長槍足軽'] = [14, 20, 7, 8];}
		if (options['def_kind_soldier'][3]) {soldiertype['武士'] = [18, 27, 9, 11];}
		if (options['def_kind_soldier'][4]) {soldiertype['弓足軽'] = [14, 9, 5, 5];}
		if (options['def_kind_soldier'][5]) {soldiertype['長弓兵'] = [20, 14, 8, 7];}
		if (options['def_kind_soldier'][6]) {soldiertype['弓騎馬'] = [27, 18, 11, 9];}
		if (options['def_kind_soldier'][7]) {soldiertype['騎馬兵'] = [5, 5, 9, 14];}
		if (options['def_kind_soldier'][8]) {soldiertype['精鋭騎馬'] = [7, 8, 14, 20];}
		if (options['def_kind_soldier'][9]) {soldiertype['赤備え'] = [9, 11, 18, 27];}
		if (options['def_kind_soldier'][10]) {soldiertype['鉄砲足軽'] = [72, 67, 90, 75];}
		if (options['def_kind_soldier'][11]) {soldiertype['鉄砲騎馬'] = [67, 90, 72, 75];}
		if (options['def_kind_soldier'][12]) {soldiertype['破城鎚'] = [14, 7, 11, 9];}
		if (options['def_kind_soldier'][13]) {soldiertype['攻城櫓'] = [22, 16, 11, 14];}
		if (options['def_kind_soldier'][14]) {soldiertype['大筒兵'] = [69, 81, 108, 45];}

		if ((options['market_desc']) && (fname=='市')) {
			var tmp1 = $('DIV.ig_tilesection_mid:eq(0)').clone();
			var tmp2 = $('DIV.ig_tilesection_mid:eq(1)').clone();
			$('DIV.ig_tilesection_mid:eq(0)').replaceWith(tmp2);
			$('DIV.ig_tilesection_mid:eq(1)').replaceWith(tmp1);

		}
		// add end

		if ((fname=='厩舎') || (fname=='足軽兵舎') || (fname=='弓兵舎') || (fname=='兵器鍛冶')) {
			var wood = parseInt($('#wood').text());
			var stone = parseInt($('#stone').text());
			var iron = parseInt($('#iron').text());
			var rice = parseInt($('#rice').text());
			
			if (options['desc_soldier']) {
				var line = new Array();
				var count = 0;
				var $targetLoop = $('DIV.ig_tilesection_mid:eq(1) > DIV.ig_tilesection_innermid');
				if ($targetLoop.get().length>0) {
					$targetLoop.each(function() {
						line[count++] = $(this);
					});
					
					$('DIV.ig_tilesection_mid:eq(1) > DIV.ig_tilesection_innertop').each(function() {
						$(this).after(line[--count]);
					});
				} else {
					$('DIV.ig_tilesection_mid:eq(1) > DIV.ig_tilesection_innermid2').each(function() {
						line[count++] = $(this);
					});
					
					$('DIV.ig_tilesection_mid:eq(1) > DIV.ig_tilesection_innertop2').each(function() {
						$(this).after(line[--count]);
					});
				}
			}
			if ((options['facility_maxsoldier']) || (options['def_num_of_soldier']!='0')) {
				$('DIV.ig_tilesection_mid DIV.ig_tilesection_detailarea > H3').each(function() {
					var soltype = $(this).text().slice(1, -1);
					if (typeof(soldiertype[soltype])!='undefined') {
						var $parent = $(this).parent();
						var maxsol = 150000;
						if ((wood/soldiertype[soltype][0])<maxsol) maxsol = Math.floor(wood/soldiertype[soltype][0]);
						if ((stone/soldiertype[soltype][1])<maxsol) maxsol = Math.floor(stone/soldiertype[soltype][1]);
						if ((iron/soldiertype[soltype][2])<maxsol) maxsol = Math.floor(iron/soldiertype[soltype][2]);
						if ((rice/soldiertype[soltype][3])<maxsol) maxsol = Math.floor(rice/soldiertype[soltype][3]);
						if (maxsol>=100) {
							if (options['def_num_of_soldier']!='0') {
								if (parseInt(options['def_num_of_soldier'])>maxsol) {
									$parent.find('INPUT[type="text"]').val(''+maxsol);
								} else {
									$parent.find('INPUT[type="text"]').val(options['def_num_of_soldier']);
								}
							}
							if (options['facility_maxsoldier']) {
								$parent.find('INPUT[type="submit"]').before('<SPAN value="'+maxsol+'" style="margin-left:-8px;cursor:pointer;" class="ixamoko_maxsol">('+maxsol+')</SPAN>');
								$('.ixamoko_maxsol').click(function(e) {
									$(this).parent().find('INPUT[type="text"]').val($(this).attr('value'));
								});
							}
						}
					}
				});
			}
		} else if ((options['market_maxsoldier']) && (fname=='市')) {
			var wood = parseInt($('#wood').text());
			var stone = parseInt($('#stone').text());
			var iron = parseInt($('#iron').text());
			var rice = parseInt($('#rice').text());
			var rate = parseInt($('DIV.ig_tilesection_detailarea IMG[alt="取引相場"]').parent().next().find('SPAN').text().substring(0, 2))/100;
			var all = new Array(wood,stone,iron,rice);
			var tmp = '<TABLE style="background-color:#F3F2DE;" class="common_table1 center" width="100%"><TR><TH>複合</TH><TH>兵士</TH><TH>不足</TH><TH>過剰</TH><TH>作成可能</TH></TR>';
			for(var key in soldiertype) {
				var moko = maxsoldier(wood, stone, iron, rice, soldiertype[key][0], soldiertype[key][1], soldiertype[key][2], soldiertype[key][3], rate);
				if (moko.maxsoldier<100) {
					tmp += '<TR><TD><input type="checkbox" id="'+key+'"></TD><TD>'+key+'</TD><TD>-</TD><TD>-</TD><TD>100未満</TD></TR>';
				} else {
					tmp += '<TR><TD><input type="checkbox" id="'+key+'"></TD><TD>'+key+'</TD><TD>'+moko.shortage+'</TD><TD>'+moko.excess+'</TD><TD>'+moko.maxsoldier+'</TD></TR>';
				}
			}
			tmp += '<TR><TD colspan=2><div id="merge">-</div></TD><TD id="shortage">-</TD><TD id="excess">-</TD><TD id="maxsoldier">-</TD></TR>';
			tmp += '</TABLE>';
			$('IMG[alt="市での取引"]').after(tmp);

			for(var key in soldiertype) {
				$('input#'+key).click(function() {
					var tmp2 = '';
					var wood2 = 0;
					var stone2 = 0;
					var iron2 = 0;
					var rice2 = 0;
					var checker=0;
					for(var key in soldiertype) {
						if($('input#'+key).attr('checked')) {
							checker++;
							tmp2+='<div>'+key+'</div>';
							wood2+=soldiertype[key][0];
							stone2+=soldiertype[key][1];
							iron2+=soldiertype[key][2];
							rice2+=soldiertype[key][3];
						}
					}
					var moko = maxsoldier(wood, stone, iron, rice, wood2, stone2, iron2, rice2, rate);
					if(checker==0) {
						tmp2='-';
						moko.shortage = '-';
						moko.excess = '-';
						moko.maxsoldier = '-';
					}
					$('div#merge').replaceWith('<div id="merge">'+tmp2+'</div>');
					$('td#shortage').replaceWith('<TD id="shortage">'+moko.shortage+'</TD>');
					$('td#excess').replaceWith('<TD id="excess">'+moko.excess+'</TD>');
					$('td#maxsoldier').replaceWith('<TD id="maxsoldier">'+moko.maxsoldier+'</TD');

					$('#shortage > span.ixamoko_short').hover(function() {
						$(this).css({backgroundColor:'#afa', textDecoration:'underline'});
					}, function() {
					   $(this).css({backgroundColor:'', textDecoration:''});
					}).click(function(e) {
					   var $this = $(this);
					   $('#select2').val($this.attr('type'));
					   if ($('#tc').val()=='') $('#tc').val($this.attr('value'));
					});
					$('#excess > span.ixamoko_excess').hover(function() {
					   $(this).css({backgroundColor:'#afa', textDecoration:'underline'});
					}, function() {
					   $(this).css({backgroundColor:'', textDecoration:''});
					}).click(function(e) {
					   var $this = $(this);
					   $('#select').val($this.attr('type'));
					   if ($('#tc').val()=='') $('#tc').val($this.attr('value'));
					});
				});
			}

			$('SPAN.ixamoko_short').hover(function() {
				$(this).css({backgroundColor:'#afa', textDecoration:'underline'});
			}, function() {
				$(this).css({backgroundColor:'', textDecoration:''});
			}).click(function(e) {
				var $this = $(this);
				$('#select2').val($this.attr('type'));
				if ($('#tc').val()=='') $('#tc').val($this.attr('value'));
			});
			$('SPAN.ixamoko_excess').hover(function() {
				$(this).css({backgroundColor:'#afa', textDecoration:'underline'});
			}, function() {
				$(this).css({backgroundColor:'', textDecoration:''});
			}).click(function(e) {
				var $this = $(this);
				$('#select').val($this.attr('type'));
				if ($('#tc').val()=='') $('#tc').val($this.attr('value'));
			});
		}

		function maxsoldier(a, b, c, d, aa, bb, cc, dd, rate) {
			var cmax = 1500000;
			if ((a/aa)<cmax) cmax = Math.floor(a/aa);
			if ((b/bb)<cmax) cmax = Math.floor(b/bb);
			if ((c/cc)<cmax) cmax = Math.floor(c/cc);
			if ((d/dd)<cmax) cmax = Math.floor(d/dd);
			var i;
			for(i=(cmax+1);i<15000;++i) {
				var shortage = 0;
				var excess = 0;
				if ((i*aa)>a) {
					shortage += i*aa-a;
				} else {
					excess += a-i*aa;
				}
				if ((i*bb)>b) {
					shortage += i*bb-b;
				} else {
					excess += b-i*bb;
				}
				if ((i*cc)>c) {
					shortage += i*cc-c;
				} else {
					excess += c-i*cc;
				}
				if ((i*dd)>d) {
					shortage += i*dd-d;
				} else {
					excess += d-i*dd;
				}
				if (excess*rate<shortage) break;
			}
			--i;
			var tmp1 = '[必要 ';
			var tmp1c = 0;
			var tmp1t = null;
			var tmp2 = '[余剰 ';
			if ((i*aa)<a) {
				var tmpx = (a-i*aa);
				tmp2 += ' <SPAN class="ixamoko_excess" type="101" value="'+tmpx+'">木: '+tmpx+'</SPAN>';
			} else {
				var tmpx = Math.ceil((i*aa-a)/rate);
				tmp1 += ' <SPAN class="ixamoko_short" type="101" value="'+tmpx+'">木: '+tmpx+'</SPAN>'
				++tmp1c;
				tmp1t = 101;
			}
			if ((i*bb)<b) {
				var tmpx = (b-i*bb);
				tmp2 += ' <SPAN class="ixamoko_excess" type="102" value="'+tmpx+'">綿: '+tmpx+'</SPAN>';
			} else {
				var tmpx = Math.ceil((i*bb-b)/rate);
				tmp1 += ' <SPAN class="ixamoko_short" type="102" value="'+tmpx+'">綿: '+tmpx+'</SPAN>';
				++tmp1c;
				tmp1t = 102;
			}
			if ((i*cc)<c) {
				var tmpx = (c-i*cc);
				tmp2 += ' <SPAN class="ixamoko_excess" type="103" value="'+tmpx+'">鉄: '+tmpx+'</SPAN>';
			} else {
				var tmpx = Math.ceil((i*cc-c)/rate);
				tmp1 += ' <SPAN class="ixamoko_short" type="103" value="'+tmpx+'">鉄: '+tmpx+'</SPAN>';
				++tmp1c;
				tmp1t = 103;
			}
			if ((i*dd)<d) {
				var tmpx = (d-i*dd);
				tmp2 += ' <SPAN class="ixamoko_excess" type="104" value="'+tmpx+'">糧: '+tmpx+'</SPAN>';
			} else {
				var tmpx = Math.ceil((i*dd-d)/rate);
				tmp1 += ' <SPAN class="ixamoko_short" type="104" value="'+tmpx+'">糧: '+tmpx+'</SPAN>';
				++tmp1c;
				tmp1t = 104;
			}
			tmp1 += ']';
			tmp2 += ']';
			var moko = {
				shortage: tmp1,
				excess: tmp2,
				maxsoldier: i,
				shortc: tmp1c,
				shortt: tmp1t
			}
			return moko;
		}
	}

	function facility_check2() {
		if (location.pathname!="/facility/facility.php" && location.pathname!='/village.php') return;
		var facility_list = {};
		if (localStorage.getItem("facility_list")) {
			facility_list = secureEvalJSON(localStorage.getItem("facility_list"));
		}

		var moko_tmp = '';
		for (var code in facility_list) {
			var mname = facility_list[code];
			var tmp = code.match(/(\d+)\(([-]*\d+),([-]*\d+)\)/);
			var village_id = tmp[1]
			var x = tmp[2]
			var y = tmp[3]
			var url = '/village_change.php?village_id=' + village_id + '&from=menu&page=' + encodeURIComponent('/facility/facility.php?x=' + x + '&y=' + y);
			moko_tmp += '<li style="magin-left:6px;padding-bottom:6px;padding-left:8px;"><a href="' + url + '">' + mname + '</a></li>';
		}
		if (moko_tmp != '') {
			moko_tmp = '<BR />施設へのリンク<BR />' + moko_tmp;
			$('#mokotool').append('<ul>'+moko_tmp+'</ul>');
		}

		if (location.pathname!="/facility/facility.php") return;
		var x;
		var y;
		var village_id;
		$('form#facilityPartForm').find('input').each(function() {
			var name = $(this).attr('name');
			var value = $(this).attr('value');
			if (name == 'x') {
				x = value;
			} else if (name == 'y') {
				y = value;
			} else if (name == 'village_id') {
				village_id = value;
			}
		});
		var village_name=$('#lordSiteArea').text().replace("選択中の拠点:","");
		var facility_name = $('DIV.ig_decksection_top').text().split(/\s|　/)[0];
		var mname = facility_name + '[' + village_name + ']';
		var code = village_id + '(' + x + ',' + y + ')';
		if (typeof(facility_list[code])=='undefined') {
			$('DIV.ig_decksection_top').append('&nbsp;<INPUT mname="'+mname+'" code="'+code+'" class="reg_facility" type="button" value="ここを記憶" />');
		} else {
			$('DIV.ig_decksection_top').append('&nbsp;<INPUT mname="'+mname+'" code="'+code+'" class="remove_facility" type="button" value="ここを忘れる" />');
		}
		$('INPUT.reg_facility').click(function(e) {
			if (confirm('本当に登録してよいですか')) {
				var $this = $(this);
				var facility_list = {};
				if (localStorage.getItem("facility_list")) {
					facility_list = secureEvalJSON(localStorage.getItem("facility_list"));
				}
				var code = $this.attr('code');
				var mname = $this.attr('mname');
				facility_list[code] = mname;
				localStorage.setItem("facility_list", toJSON(facility_list));
			}
		});
		$('INPUT.remove_facility').click(function(e) {
			if (confirm('本当に削除してよいですか')) {
				var $this = $(this);
				if (localStorage.getItem("facility_list")) {
					var facility_list = secureEvalJSON(localStorage.getItem("facility_list"));
					var code = $this.attr('code');
					var mname = $this.attr('mname');
					if (typeof(facility_list[code])!='undefined') {
						delete facility_list[code];
						localStorage.setItem("facility_list", toJSON(facility_list));
					}
				}
			}
		});
	}

	//////////////////////
	//内政：
	//////////////////////
	function village_check() {
		if (location.pathname!="/village.php") return;

		if (options['faci_list']) {
			var MAXLVL = 10;
			
			var tmp = '';
			for(var i=1;i<MAXLVL;++i) {
				var $count = $('AREA[alt$="LV.'+i+'"]');
				if ($count.get().length>0) {
					tmp += 'LV.'+i+'施設残: '+$count.get().length+'<BR />';
				}
			}
			var $building = $('.buildStatus');
			var buildingNow = $building.get().length;
			if (buildingNow>0) {
				tmp += '建築中: '+buildingNow+'<BR />';
			}
			$('#mokotool').append('<DIV>'+tmp+'</DIV>');
		}
	}

	function non_back() {
		if (location.pathname!="/village.php") return;
		if (!options['non_back']) return;
		$('div#back_bottom').remove();
	}
	//////////////////////
	//空地戦力：
	//////////////////////
	function map_potential() {
		if (location.pathname!="/facility/send_troop.php" && location.pathname!="/land.php") return;
		if (!options['map_potential']) return;
		var tmp = location.search.match(/x=([-]*\d+).*y=([-]*\d+).*c=(\d+)/);
		if (tmp!==null) {
			get_map_potential(tmp[1], tmp[2], tmp[3]);
		}
	}

	function get_map_potential(x, y, c) {
		const potentialLists = {
			5: {
				'10000': '★1　[平 10000]<ul><li>×槍245</li><li>×弓185</li><li>◎馬155</li><li>×器203</li></ul>',
				'01000': '★1　[平 01000]<ul><li>◎槍155</li><li>×弓245</li><li>×馬185</li><li>×器173</li></ul>',
				'00201': '★2　[鉄 00201]<ul><li>◎槍370</li><li>×弓550</li><li>×馬430</li><li>◎器370</li></ul>',
				'11020': '★2　[糧 11020]<ul><li>×槍520</li><li>×弓520</li><li>×馬520</li><li>◎器448</li></ul>',
				'11101': '★3　[平 11101]<ul><li>◎槍　735</li><li>×弓2,265</li><li>×馬1,245</li><li>×器1,041</li></ul>',
				'11110': '★3　[平 11110]<ul><li>×槍1,245</li><li>◎弓　735</li><li>×馬2,265</li><li>×器1,041</li></ul>',
				'11110': '★3　[平 11110]<ul><li>×槍2,265</li><li>×弓1,245</li><li>◎馬　735</li><li>×器1,551</li></ul>',
				'11101': '★4　[木 11101]<ul><li>計5,145</li></ul>',
				'12100': '★4　[綿 12100]<ul><li>×槍8,255</li><li>×弓5,265</li><li>◎馬3,770</li><li>×器6,162</li></ul>',
				'11210': '★4　[鉄 11210]<ul><li>×槍5,260</li><li>◎弓3,780</li><li>×馬8,220</li><li>×器4,668</li></ul>',
				'21131': '★4　[糧 21131]<ul><li>◎槍3,745</li><li>×弓8,005</li><li>×馬5,165</li><li>×器4,597</li></ul>',
				'50201': '★5　[木 50201]<ul><li>◎槍10,435</li><li>×弓28,673</li><li>×馬19,320</li><li>×器13,842</li></ul>',
				'32010': '★5　[木 32010]<ul><li>×槍21,680</li><li>◎弓12,200</li><li>×馬24,050</li><li>×器16,466</li></ul>',
				'23010': '★5　[綿 23010]<ul><li>×槍18,965</li><li>◎弓10,383</li><li>×馬28,990</li><li>×器14,920</li></ul>',
				'10501': '★5　[鉄 10501]<ul><li>×槍18,535</li><li>×弓18,535</li><li>×馬18,535</li><li>◎器16,771</li></ul>',
				'01520': '★5　[鉄 01520]<ul><li>×槍28,950</li><li>×弓19,065</li><li>◎馬10,483</li><li>×器20,471</li></ul>',
				'04150': '★5　[糧 04150]<ul><li>◎槍12,630</li><li>×弓22,090</li><li>×馬24,160</li><li>×器13,804</li></ul>',
				'22210': '★6　[木 22210]<ul><li>×槍69,090</li><li>◎弓34,545</li><li>×馬78,960</li><li>×器50,196</li></ul>',
				'43311': '★6　[木 43311]<ul><li>×槍51,985</li><li>◎弓28,288</li><li>×馬99,380</li><li>×器42,506</li></ul>',
				'45232': '★6　[綿 45232]<ul><li>×槍76,025</li><li>◎弓38,013</li><li>×馬67,840</li><li>×器53,602</li></ul>',
				'25132': '★6　[綿 25132]<ul><li>◎槍 27,140</li><li>×弓101,930</li><li>×馬 52,070</li><li>×器 42,098</li></ul>',
				'32431': '★6　[鉄 32431]<ul><li>×槍72,345</li><li>×弓69,920</li><li>◎馬37,523</li><li>×器57,283</li></ul>',
				'11450': '★6　[糧 11450]<ul><li>×槍102,015</li><li>×弓 51,985</li><li>◎馬 26,970</li><li>×器 66,994</li></ul>',
				'15152': '★7　[山 15152]<ul><li>◎槍 77,070</li><li>×弓308,280</li><li>×馬154,140</li><li>×器123,312</li></ul>',
				'22230': '★7　[山 22230]<ul><li>◎槍 88,105</li><li>×弓286,555</li><li>×馬154,255</li><li>×器127,795</li></ul>',
				'12630': '★7　[山 12630]<ul><li>×槍154,050</li><li>◎弓 77,025</li><li>×馬308,100</li><li>×器123,240</li></ul>',
				'910651':'★7　[山 9a651]<ul><li>×槍169,650</li><li>×弓169,650</li><li>×馬169,650</li><li>◎器150,930</li></ul>',
				'52222': '★7　[山 52222]<ul><li>×槍291,770</li><li>×弓164,890</li><li>◎馬 82,445</li><li>×器194,809</li></ul>',
				'33341': '★7　[山 33341]<ul><li>×槍240,945</li><li>×弓154,185</li><li>◎馬110,805</li><li>×器180,213</li></ul>',
				'72221': '★8　[山 72221]<ul><li>槍172,340</li><li>◎弓141,805</li><li>×馬302,010</li><li>×器154,246</li></ul>',
				'27213': '★8　[山 27213]<ul><li>×槍257,500</li><li>×弓178,508</li><li>◎馬150,728</li><li>×器203,210</li></ul>',
				'22702': '★8　[山 22702]<ul><li>◎槍140,220</li><li>×弓267,480</li><li>×馬182,640</li><li>×器165,672</li></ul>',
				'33342': '★8　[山 33342]<ul><li>計182,440</li></ul>',
			},
			6: {
				'10000': '★1　[平 10000]<ul><li>×槍245</li><li>×弓185</li><li>◎馬155</li><li>×器203</li></ul>',
				'01000': '★1　[平 01000]<ul><li>◎槍155</li><li>×弓245</li><li>×馬185</li><li>×器173</li></ul>',
				'00201': '★2　[鉄 00201]<ul><li>◎槍370</li><li>×弓550</li><li>×馬430</li><li>◎器370</li></ul>',
				'11020': '★2　[糧 11020]<ul><li>×槍520</li><li>×弓520</li><li>×馬520</li><li>◎器448</li></ul>',
				'11101': '★3　[平 11101]<ul><li>◎槍　735</li><li>×弓2,265</li><li>×馬1,245</li><li>×器1,041</li></ul>',
				'11110': '★3　[平 11110]<ul><li>×槍1,245</li><li>◎弓　735</li><li>×馬2,265</li><li>×器1,041</li></ul>',
				'11110': '★3　[平 11110]<ul><li>×槍2,265</li><li>×弓1,245</li><li>◎馬　735</li><li>×器1,551</li></ul>',
				'11101': '★4　[木 11101]<ul><li>計5,145</li></ul>',
				'12100': '★4　[綿 12100]<ul><li>×槍8,255</li><li>×弓5,265</li><li>◎馬3,770</li><li>×器6,162</li></ul>',
				'11210': '★4　[鉄 11210]<ul><li>×槍6,285</li><li>◎弓4,380</li><li>×馬10,095</li><li>×器5,523</li></ul>',
				'21131': '★4　[糧 21131]<ul><li>◎槍3,745</li><li>×弓8,005</li><li>×馬5,165</li><li>×器4,597</li></ul>',
				'50201': '★5　[木 50201]<ul><li>◎槍12,075</li><li>×弓31,375</li><li>×馬22,475</li><li>×器15,595</li></ul>',
				'32010': '★5　[木 32010]<ul><li>×槍21,680</li><li>◎弓12,200</li><li>×馬24,050</li><li>×器16,466</li></ul>',
				'23010': '★5　[綿 23010]<ul><li>×槍23,530</li><li>◎弓12,740</li><li>×馬37,375</li><li>×器18,551</li></ul>',
				'10501': '★5　[鉄 10501]<ul><li>×槍18,535</li><li>×弓18,535</li><li>×馬18,535</li><li>◎器16,771</li></ul>',
				'01520': '★5　[鉄 01520]<ul><li>×槍28,950</li><li>×弓19,065</li><li>◎馬10,483</li><li>×器20,471</li></ul>',
				'04150': '★5　[糧 04150]<ul><li>◎槍14,530</li><li>×弓24,233</li><li>×馬27,885</li><li>×器15,603</li></ul>',
				'22210': '★6　[木 22210]<ul><li>×槍80,295</li><li>◎弓40,148</li><li>×馬96,960</li><li>×器58,782</li></ul>',
				'43311': '★6　[木 43311]<ul><li>×槍65,250</li><li>◎弓35,090</li><li>×馬125,570</li><li>×器53,186</li></ul>',
				'45232': '★6　[綿 45232]<ul><li>×槍84,870</li><li>◎弓42,435</li><li>×馬79,020</li><li>×器60,120</li></ul>',
				'25132': '★6　[綿 25132]<ul><li>◎槍 27,140</li><li>×弓101,930</li><li>×馬 52,070</li><li>×器 42,098</li></ul>',
				'32431': '★6　[鉄 32431]<ul><li>×槍72,345</li><li>×弓69,920</li><li>◎馬37,523</li><li>×器57,283</li></ul>',
				'11450': '★6　[糧 11450]<ul><li>×槍102,015</li><li>×弓 51,985</li><li>◎馬 26,970</li><li>×器 66,994</li></ul>',
				'15152': '★7　[山 15152]<ul><li>◎槍 77,070</li><li>×弓308,280</li><li>×馬154,140</li><li>×器123,312</li></ul>',
				'22230': '★7　[山 22230]<ul><li>◎槍 88,105</li><li>×弓286,555</li><li>×馬154,255</li><li>×器127,795</li></ul>',
				'12630': '★7　[山 12630]<ul><li>×槍154,050</li><li>◎弓 77,025</li><li>×馬308,100</li><li>×器123,240</li></ul>',
				'910651':'★7　[山 9a651]<ul><li>×槍169,650</li><li>×弓169,650</li><li>×馬169,650</li><li>◎器150,930</li></ul>',
				'52222': '★7　[山 52222]<ul><li>×槍291,770</li><li>×弓164,890</li><li>◎馬 82,445</li><li>×器194,809</li></ul>',
				'33341': '★7　[山 33341]<ul><li>×槍240,945</li><li>×弓154,185</li><li>◎馬110,805</li><li>×器180,213</li></ul>',
				'72221': '★8　[山 72221]<ul><li>槍182,140</li><li>◎弓146,705</li><li>×馬321,610</li><li>×器162,086</li></ul>',
				'27213': '★8　[山 27213]<ul><li>×槍259,560</li><li>×弓179,538</li><li>◎馬154,848</li><li>×器204,858</li></ul>',
				'22702': '★8　[山 22702]<ul><li>◎槍140,220</li><li>×弓267,480</li><li>×馬182,640</li><li>×器165,672</li></ul>',
				'33342': '★8　[山 33342]<ul><li>計182,440</li></ul>',
			},
		};
		var tiles = new Array();
		tiles['森林'] = '0';
		tiles['綿花'] = '0';
		tiles['鉄鉱山'] = '0';
		tiles['畑'] = '0';
		tiles['池'] = '0';
		var potential_list = potentialLists[ (!options['season3'])? 5:6];

		$.ajax({
			url:'/land.php?x='+x+'&y='+y+'&c='+c,
			//cache: false, 
			dataType: "text",
			success: function (html) {
				$(html).find('div[class^="ig_mappanel_tilelist_"]').each(function() {
					var tmp = $(this).text().match(/\s*(\D+)(\d+)/);
					if (tmp!==null) {
						tiles[tmp[1]] = tmp[2];
					}
				});
				var tiles_text = tiles['森林'] + tiles['綿花'] + tiles['鉄鉱山'] + tiles['畑'] + tiles['池'];
				if (tiles_text in potential_list) {
					$('#mokotool').append('<SPAN class="normal">必要攻撃力<BR />'+ potential_list[tiles_text] +'</SPAN>');
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				//console.log(textStatus);
			}
		});
	}

	//////////////////////
	//書状：ナビを上部に
	//////////////////////
	function message_check() {
		if (location.pathname!="/message/detail.php") return;
		
		var navi = $('.message_footernavi').clone();
		$('.common_box3bottom').prepend(navi);
	}

	//////////////////////
	//報告書：ナビを上部に
	//////////////////////
	function report_check() {
		$('li.gnavi05.iepngfix').find('a').eq(0).replaceWith('<a href="/war/war_situation.php">合戦</a>');
		if (location.pathname!="/report/detail.php") return;
		
		var navi = $('.report_navi').clone();
		$('.ig_decksection_innermid').prepend(navi);
	}

	//////////////////////
	//同盟掲示板：戻るボタン追加
	//////////////////////
	function bbs_check() {
		if (location.pathname!="/bbs/res_view.php") return;

		var tmp = '<div align="center" style="margin-top:15px; margin-bottom: 15px;"><a href="/bbs/topic_view.php"><img style="opacity: 1;" src="http://cache.sengokuixa.jp/world/20101027-01/img/common/btn_back.gif" class="fade" alt="戻る" title="戻る"></a></div>';
		$('DIV[class="common_box3"]').after(tmp);
	}

	//////////////////////
	//部隊：戻るボタン修正
	//////////////////////
	function fade_button_check() {
		if (location.pathname!="/facility/set_unit_list.php" && location.pathname!="/facility/unit_list.php" && location.pathname!="/card/deck_card_delete.php") return;

		$('IMG[alt="戻る"]').attr('style','opacity: 1;').attr('class','fade');
	}

	//////////////////////
	//部隊：簡易兵士編成リンクを100件に
	//////////////////////
	function set_unit_default_check() {
		if (location.pathname!="/card/deck.php" && location.pathname!="/facility/unit_status.php" && location.pathname!="/facility/unit_list.php" && location.pathname!="/card/deck_card_delete.php") return;

		$('A[href="/facility/set_unit_list.php"]').attr('href','/facility/set_unit_list.php?show_num=100');
	}

	//////////////////////
	//チャット：はじめからを100件に
	//////////////////////
	function chat_default_check() {

		$('A[href="/alliance/chat_view.php"]').attr('href','/alliance/chat_view.php?pager_select=100');
	}

	//////////////////////
	//取引：カードナンバー順に
	//////////////////////
	function trade_default_check() {

		$('A[href="/card/trade.php"]').attr('href','/card/trade.php?t=name&k=&s=no&o=a');
	}

	function send_troop_check() {
		if(location.pathname != "/land.php") return;
		tmp=$('a[href^="facility/send_troop.php?x"]').clone();
		$('.ig_mappanel_maindataarea').find('h3').append(tmp);
	}

	//////////////////////
	//犬
	//////////////////////
	function dog_balloon(x, y, n, c, target) {  //x座標, y座標, 画像(1-5), セリフ, afterする対象
		var tmp = '<div style="left: '+(x+210)+'px; top: '+y+'px; position: absolute; z-index: 112;"><img src="./img/lot/img_ixadog0'+n+'.png" width="70%"></div>';
		tmp += '<div style="left: '+(x+203)+'px; top: '+(y+18)+'px; position: absolute; z-index: 110;"><img src="img/common/facility_rollover.png"></div>';
		tmp += '<div style="left: '+(x+10)+'px; top: '+(y+10)+'px; position: absolute; z-index: 112;"><img src="./img/lot/img_ixadog_balloon.png" width="70%"></div>';
		tmp += '<div style="left: '+(x+20)+'px; top: '+(y+20)+'px; position: absolute; z-index: 113; font-weight: bold; padding: 1px; width: 170px; height: 46px; overflow: hidden;">'+c+'</div>';
		$(target).after(tmp);
	}

	//////////////////////
	//ユーザー表示: よく使う所領を登録して地図に表示
	//////////////////////
	function user_check() {
		if ((location.pathname!="/user/")&&(location.pathname!="/land.php")) return;
		var map_list = {};
		if (localStorage.getItem("map_list")) {
			map_list = secureEvalJSON(localStorage.getItem("map_list"));
		}
		if (location.pathname=="/user/") {
			$('DIV.common_box3bottom > TABLE').find('TR.fs14').find('A:eq(1)').each(function() {
				var $this = $(this);
				var mname = $this.parent().parent().find('A:eq(0)').text();
				if (typeof(map_list[$this.text()])=='undefined') {
					$this.after('&nbsp;<INPUT mname="'+mname+'" cood="'+$this.text()+'" class="reg_map" type="button" value="ここを記憶" />');
				} else {
					$this.after('&nbsp;<INPUT mname="'+mname+'" cood="'+$this.text()+'" class="remove_map" type="button" value="ここを忘れる" />');
				}
			});
		} else if (location.pathname=="/land.php") {
			var mname=$('h3:eq(0)').text().replace(/\[合戦報告書\(拠点\)\]/,'');	//苦肉の策
			var code=location.search.replace('?','');
			code=code.split("&");
			code=code[0].replace('x=','')+','+code[1].replace('y=','');
			if (typeof(map_list[code])=='undefined') {
				$('.ig_mappanel_maindataarea').find('h3').append('&nbsp;<INPUT mname="'+mname+'" cood="'+code+'" class="reg_map" type="button" value="ここを記憶" />');
			} else {
				$('.ig_mappanel_maindataarea').find('h3').append('&nbsp;<INPUT mname="'+mname+'" cood="'+code+'" class="remove_map" type="button" value="ここを忘れる" />');
			}
		}
		$('INPUT.reg_map').click(function(e) {
			if (confirm('本当に登録してよいですか')) {
				var $this = $(this);
				var map_list = {};
				if (localStorage.getItem("map_list")) {
					map_list = secureEvalJSON(localStorage.getItem("map_list"));
				}
				var cood = $this.attr('cood');
				var mname = $this.attr('mname');
				map_list[cood] = mname;
				localStorage.setItem("map_list", toJSON(map_list));
			}
		});
		$('INPUT.remove_map').click(function(e) {
			if (confirm('本当に削除してよいですか')) {
				var $this = $(this);
				if (localStorage.getItem("map_list")) {
					var map_list = secureEvalJSON(localStorage.getItem("map_list"));
					var cood = $this.attr('cood');
					var mname = $this.attr('mname');
					if (typeof(map_list[cood])!='undefined') {
						delete map_list[cood];
						localStorage.setItem("map_list", toJSON(map_list));
					}
				}
			}
		});
	}

	//////////////////////
	//報告書リスト：
	//////////////////////
	function reportlist_check() {
		if (location.pathname!="/report/list.php") return;
	}


	//////////////////////
	//合戦報告書リンク：
	//////////////////////
	function reportlist_check() {
		if (location.pathname!="/user/") return;
		$('DIV.common_box3bottom > TABLE').find('strong').find('A:eq(0)').each(function() {
			var $this = $(this);
			var name = $this.parent().text();
			$this.after('&nbsp;<span style="font-weight: normal;font-size: 12px;"><a href="/war/list.php?m=&s=1&name=lord&word='+name+'&coord=map&x=&y=">[合戦報告書]</a></span>'); 
		});
		$('DIV.common_box3bottom > TABLE').find('DIV.pro4').find('A:eq(0)').each(function() {
			var $this = $(this);
			var name = $this.parent().text();
			$this.after('&nbsp;<span style="font-weight: normal;font-size: 12px;"><a href="/war/list.php?m=&s=1&name=alliance&word='+name+'&coord=map&x=&y=">[合戦報告書]</a></span>'); 
		});
	}
	function reportlist_check2() {
		if (location.pathname!="/land.php") return;
		$('DIV.ig_mappanel_dataarea').find('A[href^="/user/"]').each(function() {
			var $this = $(this);
			var name = $this.text();
			$this.after('&nbsp<a href="/war/list.php?m=&s=1&name=lord&word='+name+'&coord=map&x=&y=">[合戦報告書]</a>'); 
		});
		$('DIV.ig_mappanel_dataarea').find('A[href^="/alliance/"]').each(function() {
			var $this = $(this);
			var name = $this.text();
			$this.after('&nbsp<a href="/war/list.php?m=&s=1&name=alliance&word='+name+'&coord=map&x=&y=">[合戦報告書]</a>'); 
		});
	}

	//////////////////////
	//チャット履歴：同盟掲示板にリンクをつける
	//////////////////////
	function chat_log_check() {
		if (location.pathname!="/alliance/chat_view.php" && location.pathname!="/bbs/res_view.php") return;
		$('UL[class="clearfix"] > LI:eq(2)').wrap('<a href="/bbs/topic_view.php" style="color: #006600;text-decoration: underline;"></a>');
	}

	//////////////////////
	//チャット：
	//////////////////////
	function chat_check() {
		if (options['chat_linkchg']) $('DIV[class="commentbtn2"] > A:eq(1)').attr('href', '/alliance/chat_view.php');

		if (options['chat_mikire']) {
			$('TD[class="al"]').css({width: '105px', height: '14px'}).find('> A').css({width: '105px', overflow: 'hidden'});
			$('TD[class="msg"] > SPAN').css('width', '230px');

			$('UL[class="commentbtn"] > LI[class="right"] > A, UL[class="commentclose"] > LI:eq(0) > A').click(function(e) {
				setTimeout(function(){
					$('TD[class="al"]').css({width: '105px', height: '14px'}).find('> A').css({width: '105px', overflow: 'hidden'});
					$('TD[class="msg"] > SPAN').css('width', '230px');
				}, 500);
			});
		}
	}

	//////////////////////
	//秘境探索：デフォでチェックが入っている、出発ボタンを上にも
	//////////////////////
	function dungeon_check() {
		if(location.pathname != "/facility/dungeon.php") {
			return;
		}
		
		if (options['hikyou']) {
			var tmp = $('INPUT[name="unit_select"]:first').attr('checked', true);
			if (tmp.get().length>0) {
				var dungeon_btn = $('IMG[alt="出発"]').parent().clone().wrap($('<DIV class="center">')).parent();
				$('#dungeon_list_body').after(dungeon_btn);
			}
		}
		var idx = localStorage.getItem(location.hostname + 'dungeon_idx');
		var realidx;

		if (idx!=null) {
			realidx = Number(idx);
			$('INPUT[name="dungeon_select"][value="'+realidx+'"]').attr('checked', true);
		}
		$('INPUT[name="dungeon_select"]').change(
			function() {
				localStorage.setItem(location.hostname + 'dungeon_idx', $('INPUT[name="dungeon_select"]:checked').val());
			}, false);
		if (options['hikyou_all']) {
			var tmp = '<a href="javascript:void(0)" onclick="return false;" id="send_all"><img src="' + IMAGES.btn_all_departure + '" alt="全部隊選択"></a>';
			$('a[onclick^="submitDungeonForm"]').before(tmp);
			$('#send_all').live('click',function(){
				$('INPUT[name="unit_select[]"]').attr('checked', 'checked');
			});
		}
	}

	//////////////////////
	//兵士編成:
	//////////////////////
	function unitList_check() {
		if(location.pathname != "/facility/set_unit_list.php") return;
		
		var hpstatus = {};
		$('DIV[id^="cardWindow_"]').each(function() {
			var $this = $(this);
			var cid = $this.attr('id').substring(11);
			hpstatus[cid] = $this.find('SPAN.ig_card_status_hp').text();
		});
		
		var soldiers = {};

		$('SPAN[id^="now_unit_cnt_"]').each(function() {
			var $this = $(this);
			var id_num = $this.attr('id').substring(13);
			var card_id = $('#card_id_arr_'+id_num).val();
			var max = parseInt($this.parent().next('SPAN').text());
			var current = parseInt($this.text());
			var type = $this.parent().prev().prev().attr('alt');
			if (current>0) {
				if (typeof(soldiers[type])=='undefined') {
					soldiers[type] = current;
				} else {
					soldiers[type] += current;
				}
			}
			var $pparent = $this.parent().parent().parent();
			if (options['unit_list_hp']) {
				if (typeof(hpstatus[card_id])!='undefined') {
					$pparent.find('IMG:eq(0)').attr("ALIGN","left");
					//$pparent.find('A:eq(0)').after('<DIV style="margin-top: 5px; font-size: 11px; width: 100px;">&hearts;'+hpstatus[card_id]+'</DIV>');
					$pparent.find('A:eq(0) ').after('<DIV style="margin-top: 5px;width:90px;"><span style="color: #e02020;margin-right: 1px;">&hearts;</span><span style="font-size: 11px; ">'+hpstatus[card_id]+'</DIV>');
					
					if (options['unit_list_hp_bgc'] && (hpstatus[card_id]!='100/100')) {
						$pparent.css({backgroundColor:'#aaa'});
					}
				} else {
				   // $pparent.find('TD:eq(2)').after('<TD>-</TD>');
				}
			}
			if (max==current) {
				$this.css({backgroudColor:'#faa'});
				$pparent.find('TD:eq(5) INPUT').css({backgroundColor:'#fbb'});
			}
			// 最大補充ボタンを追加
			$pparent.find('TD:eq(6) INPUT').after('<input type="button" id="btn_maxchange_' + id_num + '"' + ' onclick="' + 'setUnitInputMaxValue(' + '\'unit_cnt_text_' + id_num + '\'' + ',' + '\'unit_set_link_max_value_' + id_num + '\'' + '); postSetUnit(\'/facility/set_unit_list_if.php\',' + '\'' + id_num + '\'' + ',' + '\'' + card_id + '\'' + ')' + '"' +' value="最大">');
		});
		if (options['unit_list_total']) {
			var tmp = '';
			var total = 0;
			for(var key in soldiers) {
				tmp += '<TR><TD>'+key+'</TD><TD>'+soldiers[key]+'</TD></TR>';
				total += soldiers[key];
			}
			tmp += '<TR><TH>合計</TH><TD>'+total+'</TD></TR>';
			if (tmp!='') {
				$('#mokotool').append('<TABLE style="background-color:#F3F2DE;" class="common_table1 center">'+tmp+'</TABLE>');
			}
		}
		var snum = parseInt($('SELECT[name="show_num"]').val());
		if (options['unit_list_group'] && (snum==100)) {
			group_setting = {};
			cardname_setting = {};
			
			if (localStorage.getItem("ixamoko_group_set")!=null) {
				group_setting = secureEvalJSON(localStorage.getItem("ixamoko_group_set"));
			}
			if (localStorage.getItem("ixamoko_card_name")!=null) {
				cardname_setting = secureEvalJSON(localStorage.getItem("ixamoko_card_name"));
			}
			var $trth = $('DIV.ig_decksection_innermid > TABLE.common_table1').before('<INPUT type="button" id="ixamoko_reset_grp" value="グループを表示順に覚えなおす" /><SPAN id="ixamoko_reset_grp_result"></SPAN>').find('TR:eq(0)'); //.prepend('<TH><INPUT type="button" value="GRP" id="ixamoko_grp" /></TH>');
			$trth.find('TH:eq(6)').append('<INPUT type="button" value="GRP" id="ixamoko_grp" />');

			$('#ixamoko_reset_grp').click(function(e) {
				var ngroup_setting = {};
				$('SPAN[id^="now_unit_cnt_"]').each(function() {
					var id_num = $(this).attr('id').substring(13);
					var card_id = $('#card_id_arr_'+id_num).val();
					ngroup_setting[card_id] = group_setting[card_id];
				});
				group_setting = ngroup_setting;
				localStorage.setItem('ixamoko_group_set', toJSON(group_setting));
				$('#ixamoko_reset_grp_result').html('<SPAN style="color:#000;">Done.</SPAN>');
			});

			$('SPAN[id^="now_unit_cnt_"]').each(function() {
				var $this = $(this);
				var id_num = $this.attr('id').substring(13);
				var card_id = $('#card_id_arr_'+id_num).val();
				var $pparent = $this.parent().parent().parent();
				if (typeof(group_setting[card_id])=='undefined') {
					group_setting[card_id] = 0;
				}
				cardname_setting[card_id] = $.trim($pparent.find('TD:eq(0) A').text());
				if (typeof(hpstatus[card_id])!='undefined') {
					if (hpstatus[card_id]=='100/100') {
						$pparent.css({backgroundColor:groups[group_setting[card_id]]});
					} else {
						$pparent.css({backgroundColor:groupsx[group_setting[card_id]]});
					}
				} else {
					$pparent.css({backgroundColor:groups[group_setting[card_id]]});
				}
				$pparent.find('IMG:eq(0)').addClass('ixamoko_grp').css({cursor:'pointer'}).attr('cardid', card_id);
				if (options['unit_list_icon']) $pparent.find('IMG:eq(0)').get()[0].src = groups_img[group_setting[card_id]];
			});
			localStorage.setItem('ixamoko_card_name', toJSON(cardname_setting));
			var tEvent = (navigator.userAgent.indexOf('Chrome') > 0) ? 'click contextmenu' : 'click';	//Chromeでは、右ボタンクリックでClick発生しない
			$('.ixamoko_grp').live(tEvent, function(e) {
				var $this = $(this);
				var card_id = $this.attr('cardid');
				if ( e.which == 1){		// 左クリック
					++group_setting[card_id];
					if (group_setting[card_id]>=groups.length)
						group_setting[card_id] = 0;
				} else {
					--group_setting[card_id];
					if (group_setting[card_id] < 0)
						group_setting[card_id] =groups.length-1;
				}
				if (typeof(hpstatus[card_id])!='undefined') {
					if (hpstatus[card_id]=='100/100') {
						$this.parent().parent().css({backgroundColor:groups[group_setting[card_id]]});
					} else {
						$this.parent().parent().css({backgroundColor:groupsx[group_setting[card_id]]});
					}
				} else {
					$this.parent().parent().css({backgroundColor:groups[group_setting[card_id]]});
				}
				if (options['unit_list_icon']) $this.get()[0].src = groups_img[group_setting[card_id]];
				localStorage.setItem('ixamoko_group_set', toJSON(group_setting));
				return false;
			});
			$('#ixamoko_grp').click(function(e) {
				for(var i=groups.length-1;i>0;--i) {
					for(var cardid in group_setting) {
						if (group_setting[cardid]==i) {
							$trth.after($('IMG[cardid="'+cardid+'"]').parent().parent());
						}
					}
				}
			});

			if (options['unit_list_sort_def_grp']) {
				for(var i=groups.length-1;i>0;--i) {
					for(var cardid in group_setting) {
						if (group_setting[cardid]==i) {
							$trth.after($('IMG[cardid="'+cardid+'"]').parent().parent());
						}
					}
				}
			}
		}
	}


	function desk_pager_replace() {
		$('UL.pager.cardstock').find('A').each(function() {
			try {
				var $this = $(this);
				var page = parseInt($this.attr('title').substring(1));
				if (page>0) {
					var npage = '<A class="ixamoko_deckpager" page="'+page+'" href="javascript:void(0);"> '+page+'</A>';
					$this.replaceWith(npage);
				}
			} catch(e) {}
		});
	}

	//////////////////////
	//デッキ: 討伐ゲージ回復時間表示、一番最初の武将を部隊に入れやすく
	//////////////////////
	function disp_ToubatsuRestTime(initFlag) {
		if (typeof(this.ajflag)=='undefined') {
			this.ajflag = false;
		}
		if (initFlag) {
			if(location.pathname != "/card/deck.php") return;
			
			var VILLAGE_OPTION_TAG = 'ixamoko_village_opt';
			if (options['pager_ajax']) {
				desk_pager_replace();
			}

			$('A.ixamoko_deckpager').live('click', function(e) {
				if (disp_ToubatsuRestTime.ajflag) return;
				disp_ToubatsuRestTime.ajflag = true;
				var page = $(this).attr('page');
				var ano = $('#assign_form INPUT[name="select_assign_no"]').val();
				var dmo = $('#assign_form INPUT[name="deck_mode"]').val();
				$.ajax({
					type: "POST",
					url: '/card/deck.php',
					/* data: {p:page}, */
					data: {ano:ano, dmo:dmo, myselect:'', p:page},
					cache: false,
					page: page,
					dataType: "text",
					success: function (html){
						var $new_deck = $(html).find('#ig_deckboxInner');
						$('#ig_decksection3').replaceWith($new_deck.find('#ig_decksection3'));
						$('DIV[id^="cardWindow_"]').each(function() {
							$(this).remove();
						});
						$(html).find('DIV[id^="cardWindow_"]').each(function() {
							$('div#sidebar').after($(this));
						});

						$('#ig_deckchoice').replaceWith($new_deck.find('#ig_deckchoice'));
						// 「選択中の部隊へ」を上部に
						var org_card = $(html).find('IMG[title="選択中の部隊へ"]:first');
						var card = org_card.parent().clone();
						var bname = org_card.closest('.ig_deck_smallcardarea').find('.ig_deck_smallcard_cardname').text();

						card.children().css({position:'relative', top:'-7px'}).end().prepend('<SPAN style="position:relative;top:-18px;">'+bname+'</SPAN>');
			
						$('#ig_unitchoice').append('<LI id="add_this"><LI>');
						$('#add_this').append(card);
						delete org_card;
						delete card;
						delete bname;

						tb_init('a.thickbox');
						desk_pager_replace();
						$('INPUT[name="p"]').val(this.page);
						delete html;
						delete $new_deck;
						disp_ToubatsuRestTime(false);
						disp_ToubatsuRestTime.ajflag = false;
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) {
						disp_ToubatsuRestTime.ajflag = false;
						//console.log(textStatus);
					}
				});
				return false;
			});
			
			if (options['def_honjou']) {
				var value = $('#select_village').children(':selected').attr('value'); // なぜ.val()で取れない2??
				if (value=='') $('#select_village > OPTION:eq(1)').attr('selected', true);
			}
			
			// 「出陣状況」のリンク先を「全部隊」に変更
			$('A[href="/facility/unit_status.php"]').attr('href', '/facility/unit_status.php?dmo=all');
			
			// 「選択中の部隊へ」を上部に
			var org_card = $('IMG[title="選択中の部隊へ"]:first');
			var card = org_card.parent().clone();
			var bname = org_card.closest('.ig_deck_smallcardarea').find('.ig_deck_smallcard_cardname').text();

			card.children().css({position:'relative', top:'-7px'}).end().prepend('<SPAN style="position:relative;top:-18px;">'+bname+'</SPAN>');
			
			$('#ig_unitchoice').append('<LI id="add_this"><LI>');
			$('#add_this').append(card);
		}
		
		if ((options['toubatsu']) || (options['refillhp'])) {
			// 討伐ゲージの回復時間
			var firstf = true;
			$('#ig_deck_smallcardarea_out').find('DIV.ig_deck_smallcardarea').each(function() {
				var $this = $(this);
				if (options['toubatsu']) {
					var battlegage = $this.find('SPAN.ig_deck_battlepoint2').text();
					if (battlegage=='') return;
					var tb = 300 - parseInt(battlegage);
					
					if( tb != 0 ) {
						var timeText = getTime( tb );
						var dayText = caddDate(new Date(), timeText);
						var txt = "<DIV>300まで" + timeText + "後(" + dayText + "完了)</DIV>";
						
						$this.children(':eq(2)').prepend(txt);
					}
				}
				if (options['refillhp']) {
					var currentHPrate = $this.find('TABLE.ig_deck_smallcarddata:eq(0) TR:eq(2) TD').text();
					var currentHP = parseInt(currentHPrate.substring(0, currentHPrate.indexOf('/')));
					if (currentHP<100) {
						var ranklvl = $this.find('TABLE.ig_deck_smallcarddata:eq(0) TR:eq(1) TD').text();
						var rank = parseInt(ranklvl.substring(1, 2));
						var lvl = parseInt(ranklvl.substring(3));
						var timeText = getHPMAXTime(currentHP, rank, lvl);
						var dayText = caddDate(new Date(), timeText);
						var txt = "<DIV>HP100まで" + timeText + "後(" + dayText + ")</DIV>";
						
						$this.children(':eq(2)').prepend(txt);
						//alert(internal_lvl);
					}
				}
			});
			if (options['toubatsu'] && initFlag) {
				$('.ig_deck_maincardarea').find('DIV.battlegage').each(function() {
					var $this = $(this);
					var battlegage = $this.find('SPAN.ig_deck_battlepoint').text();

					if (battlegage=='') return;

					var bg_value = parseInt(battlegage); //無駄
					
					if (bg_value<300) {
						var tb = 300 - bg_value;
						
						var timeText = getTime( tb );
						var dayText = caddDate(new Date(), timeText);
						var txt = "<DIV style='position:relative;top:-10px;opacity:0.9;z-index:1000;background-color:#fff;color:#000;'>300まで" + timeText + "後(" + dayText + "完了)</DIV>";
						$this.prepend(txt);
					} else {
					   // $('DIV.deck_navi').find('IMG[alt="解散"]').parent().remove();
						if (bg_value<400) {
							var tb = 400 - bg_value;
							
							var timeText = getTime( tb );
							var dayText = caddDate(new Date(), timeText);
							var txt = "<DIV style='position:relative;top:-10px;opacity:0.9;z-index:1000;background-color:#fff;color:#000;'>400まで" + timeText + "後(" + dayText + "完了)</DIV>";
							$this.prepend(txt);
						} else if (bg_value<500) {
							var tb = 500 - parseInt(battlegage);
							
							var timeText = getTime( tb );
							var dayText = caddDate(new Date(), timeText);
							var txt = "<DIV style='position:relative;top:-10px;opacity:0.9;z-index:1000;background-color:#fff;color:#000;'>500まで" + timeText + "後(" + dayText + "完了)</DIV>";
							$this.prepend(txt);
						}
					}
				});
			}
		}

		function getTime(toubatsu) {
			var tmp = toubatsu * 163;
			var h = Math.floor(tmp / 3600);
			var m = Math.floor((tmp - h*3600 ) / 60 );
			var s = Math.floor(tmp - h*3600 - m*60 );
			var tim = h + ":" +
					  (m+100).toString().substr(-2)  + ":" +
					  (s+100).toString().substr(-2);
			return tim;
		}
		function getHPMAXTime(currentHP, rank, lv) {
			// 適当
			var rate = 0;
			/*
			if (rank>0) {
				//rate = (rank-1)*290+HPres1[lv];
				rate = (rank-1)*72+HPres1[lv];
			} else {
				rate = HPres0[lv];
			}
			*/
			rate = rank * 72 + HPres0[lv];
			var tmp = rate*(100-currentHP);
			var h = Math.floor(tmp / 3600);
			var m = Math.floor((tmp - h*3600 ) / 60 );
			var s = Math.floor(tmp - h*3600 - m*60 );
			var tim = h + ":" +
					  (m+100).toString().substr(-2)  + ":" +
					  (s+100).toString().substr(-2);
			return tim;
		}
	}
	function toHankaku(str) {
		str = str.replace(/[０-９]/g, function(str){return String.fromCharCode(str.charCodeAt(0)-65248);});
		str = str.replace(/[ー|－](\d+)/g, '-$1');
		return str;
	}

	// add start
	//////////////////////
	//一括削除：ランク一定以上の非活性、全選択ボタンの追加
	//////////////////////
	function delList_check() {
		if(location.pathname != "/card/deck_card_delete.php") return;

		//checkboxが有効な場合、特以上は非活性に、また一括選択ボタンを追加
		if ($('DIV.ig_decksection_innermid').find('INPUT[name="delete_card_arr[]"]:eq(0)').attr("type") == "checkbox") {

			$('DIV.ig_decksection_innermid').find('tr').each(function() {
				var a = $(this).find('img').attr('alt');

				// 天・極持ってないからSR・URは未確認
				if ((options['rank_lock'] != 0)
					&& (((a == "UC") && (options['rank_lock'] <= 1)) 
					|| ((a == "R") && (options['rank_lock'] <= 2)) 
					|| ((a == "SR") && (options['rank_lock'] <= 3)) 
					|| ((a == "UR") && (options['rank_lock'] <= 4)))) {

					$(this).find('INPUT[name="delete_card_arr[]"]').attr("disabled","disabled");
				}
			});

			var trth = $('DIV.ig_decksection_innermid').find('TABLE');
			trth.before('<DIV class="left" style="width:640px; margin-left:auto; margin-right:auto;"><INPUT type="button" value="全選択" id="sel_check"/><INPUT type="button" value="全解除" id="unsel_check"/></DIV>');

			$('#sel_check').click(function() {
				$('DIV.ig_decksection_innermid').find('INPUT[name="delete_card_arr[]"]').each(function() {
					if ($(this).attr("disabled") == false) {
						$(this).attr("checked", true);
					}
				});
			});

			$('#unsel_check').click(function() {
				$('DIV.ig_decksection_innermid').find('INPUT[name="delete_card_arr[]"]').each(function() {
					$(this).attr("checked", false);
				});
			});
		}

	}
	//////////////////////
	//メニュー：
	//////////////////////
	function initMenu() {
		if (!options['pulldown_menu']) return;
		var menu = new Array();

		/* 内政 */
		if (location.pathname=="/village.php") {
			const facilities = ['厩舎', '足軽兵舎', '弓兵舎', '兵器鍛冶', '市', '寺', '教会', ];
			menu = [];

			var mapOverlayMap = $('map#mapOverlayMap');
			for (var i = 0; i < facilities.length; i++) {
				mapOverlayMap.find('area[title^="' + facilities[i] + '"]').each(function() {
					menu.push(['/' + $(this).attr('href'), facilities[i]]);
				});
			}
			if (menu.length > 0) {
				br3.makeMenu(menu,"gnavi01");
				$(".gnavi01 > A").mouseover(function() {
					br3.openMenu("gnavi01");
				});
				$(".gnavi01 > A").mouseout(function(){
					br3.closetime();
				});
			}
		}

		/*デッキ*/
		menu = [
			["/card/deck.php","部隊編成"],
			["/facility/unit_status.php?dmo=all","出陣状況"],
			["/facility/set_unit_list.php?show_num=100","簡易兵士編成"],
			["/facility/unit_list.php","待機兵士一覧"],
			["/card/deck_card_delete.php","カード一括破棄"],
			["/union/union_history.php","合成履歴"]
		];
		br3.makeMenu(menu,"gnavi02");
		$(".gnavi02 > A").mouseover(function() {
			br3.openMenu("gnavi02");
		});
		$(".gnavi02 > A").mouseout(function(){
			br3.closetime();
		});

		/*地図*/
		menu = [
			[12,28],
			[28,12],
			[12,52],
			[36,36],
			[52,12],
			[12,76],
			[36,60],
			[60,36],
			[76,12],
			[12,100]
		];
		if(options['toride_count']==20) {
		menu = [
			[12,28],
			[28,12],
			[12,52],
			[36,36],
			[52,12],
			[12,76],
			[36,60],
			[60,36],
			[76,12],
			[12,100],
			[36,84],
			[60,60],
			[84,36],
			[100,12],
			[12,124],
			[36,108],
			[60,84],
			[84,60],
			[108,36],
			[124,12]
		];
		}
		if(options['toride_count']==30) {
		menu = [
			[12,28],
			[28,12],
			[12,52],
			[36,36],
			[52,12],
			[12,76],
			[36,60],
			[60,36],
			[76,12],
			[12,100],
			[36,84],
			[60,60],
			[84,36],
			[100,12],
			[12,124],
			[36,108],
			[60,84],
			[84,60],
			[108,36],
			[124,12],
			[12,148],
			[36,132],
			[60,108],
			[84,84],
			[108,60],
			[132,36],
			[148,12],
			[36,156],
			[60,132],
			[84,108]
		];
		}
		br3.makeMapMenu(menu,"gnavi03");
		$(".gnavi03 > A").mouseover(function() {
			br3.openMenu("gnavi03");
		});
		$(".gnavi03 > A").mouseout(function(){
			br3.closetime();
		});

		/*合戦*/
		menu = [
			["/country/all.php","全国地図"],
			["/war/war_situation.php","合戦状況"],
			["/war/war_ranking.php","合戦格付表"],
			["/war/fight_history.php","敵襲状況"],
			["/war/list.php","合戦報告書"]
		];
		br3.makeMenu(menu,"gnavi05");
		$(".gnavi05 > A").mouseover(function() {
			br3.openMenu("gnavi05");
		});
		$(".gnavi05 > A").mouseout(function(){
			br3.closetime();
		});

		/*同盟*/
		menu = [
			[$(".gnavi07 > A:eq(0)").attr('href'),"同盟情報"],
			["/alliance/level.php","同盟貢物"],
			["/bbs/topic_view.php","同盟掲示板"],
			["/alliance/manage.php","同盟管理"],
			["/alliance/invite.php","同盟募集"]
		];
		br3.makeMenu(menu,"gnavi07");
		$(".gnavi07 > A").mouseover(function() {
			br3.openMenu("gnavi07");
		});
		$(".gnavi07 > A").mouseout(function(){
			br3.closetime();
		});

		/*格付*/
		menu = [
			["/user/ranking.php?m=","国別格付"],
			["/user/ranking.php?m=&c=0","全体格付"],
			["/country/country_ranking.php","天下勢力"]
		];
		br3.makeMenu(menu,"gnavi08");
		$(".gnavi08 > A").mouseover(function() {
			br3.openMenu("gnavi08");
		});
		$(".gnavi08 > A").mouseout(function(){
			br3.closetime();
		});

	}

	function all_check_inbox() {
		if(location.pathname != "/message/inbox.php") return;
		$('p.mt10.mb5').prepend('<input type=button value="このページを全件既読にする" id="all_check">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
		var tmp='<th width="32" class="w30"><input type=button value="選択" id="select_check"></th>';
		$('.common_table1.center:eq(0)').find('th.w30:eq(0)').replaceWith(tmp);
		$('#all_check').click(function() {
			$("#all_check").attr("disabled","disabled");
			var list = new Array();
			$('td.left.comment_wbr').find('a').each(function() {
				var tmp = new Array();
				tmp[0] = $(this).attr("href");
				list = list.concat(tmp);
			});
			nowLoading();
			all_read(list,0);
		});
		$('#select_check').click(function() {
			$("input[name=chk[]]").attr('checked',true);
		});
	}
	function all_read(list,i) {
		if((list.length < i-1)||(list[i] == undefined)) {
			location.href='inbox.php';
		} else {
			$.ajax({
				type: "POST",
				url: '/message/'+list[i],
				cache: false, 
				dataType: "text",
				success: function (html){
					all_read(list,i+1);
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(textStatus);
				}
			});
		}
	}

	function fightlist() {
		if(location.pathname != "/facility/unit_status.php") return;
		if(location.search == '?dmo=wait') return;
		$('div.ig_decksection_mid').find('table.paneltable.table_fightlist').each(function() {
			 if(($(this).find('IMG:eq(3)').attr('src').indexOf('icon_attack.png')!=-1)||($(this).find('IMG:eq(3)').attr('src').indexOf('mode_attack.png')!=-1)) {
				 if($(this).find('TD:eq(2)').find('span').text()=='-'){
					 /*
					 $(this).find('IMG:eq(3)').attr('src','http://www.jj-midi.com/image/mode_jinhari.png');
					 */
					 $(this).find('IMG:eq(3)').attr('src', IMAGES.mode_jinhari);
				 }
			 }
			 //alert($(this).find('IMG:eq(4)').attr('src'));
			if ($(this).find('IMG:eq(4)').attr('src') != undefined) {
			 	if (($(this).find('IMG:eq(4)').attr('src').indexOf('icon_attack.png')!=-1)||($(this).find('IMG:eq(4)').attr('src').indexOf('mode_attack.png')!=-1)) {
					if($(this).find('TD:eq(2)').find('span').text()=='-'){
						 /*
						$(this).find('IMG:eq(4)').attr('src','http://www.jj-midi.com/image/mode_jinhari.png');
						*/
						$(this).find('IMG:eq(4)').attr('src', IMAGES.mode_jinhari);
					}
				}
			}
		});
	}

	//////////////////////
	//出陣：
	//////////////////////
	function merge_fight_info() {
		if(!options['merge_fight_info']) return;
		if(location.pathname == "/facility/send_troop.php") {
			$('div#ig_gofightboxtitle').find('img').each(function() {
				 if($(this).attr('src').indexOf('hd_joinattack.gif')!=-1) {
					 /*
					 $(this).attr('src','http://www.jj-midi.com/image/hd_joinattack.gif');
					 */
					 $(this).attr('src', IMAGES.hd_joinattack);
					 $(this).attr('width','160');
					 $(this).attr('height','15');
					 $(this).attr('alt','攻撃か付近の攻撃に合流');
					 return;
				 }
			});
		}
		if(location.pathname != "/facility/confluence_list.php") return;
		var vx_value = $('input#village_x_value').attr('value');
		var vy_value = $('input#village_y_value').attr('value');
		var u_select = $('input#unit_select').attr('value');
		var data = {village_x_value:vx_value, village_y_value:vy_value,radio_move_type:302,unit_select:u_select,btn_preview:true};
		var data2 = {village_x_value:vx_value, village_y_value:vy_value,radio_move_type:307,unit_select:u_select,btn_preview:true};
		$.ajax({
				type: "POST",
				url: '/facility/send_troop.php',
				data:data,
				cache: false,
				success: function (html){
					var t_dom = $(html).find('div#ig_gofightconfirmboxtitle').clone();
					$('div#ig_deck_search_box_top.center').before(t_dom);
					$('table.paneltable.table_gofight_conftitle').css('margin-left','auto');
					$('table.paneltable.table_gofight_conftitle').css('margin-right','auto');
					var wth = $('table.paneltable.table_gofight_conftitle').find('th:eq(2)').clone();
					var wtd = $('table.paneltable.table_gofight_conftitle').find('td:eq(2)').clone();
					$('table.paneltable.table_gofight_conftitle').find('tr.noborder').remove();
					$('table.paneltable.table_gofight_conftitle').find('td:eq(1)').after(wth);
					$('table.paneltable.table_gofight_conftitle').find('th:eq(2)').after(wtd);
					$('table.paneltable.table_gofight_conftitle').find('td:last').after('<td><a href="javascript:void(0)" onclick="return false;" id="attack"><img src="/img/localmap/btn_gofighthere.png"></a></td>');
					/*
					$('table.paneltable.table_gofight_conftitle').find('td:last').after('<td><a href="javascript:void(0)" onclick="return false;" id="jinhari"><img src="http://www.jj-midi.com/image/btn_gojinhere.png"></a></td>');
					*/
					$('table.paneltable.table_gofight_conftitle').find('td:last').after('<td><a href="javascript:void(0)" onclick="return false;" id="jinhari"><img src="' + IMAGES.btn_gojinhere + '"></a></td>');
					$('#attack').click(function() {
						$.form({
							type: 'post',
							url: '/facility/send_troop.php',
							data: data
						});
					});
					$('#jinhari').click(function() {
						$.form({
							type: 'post',
							url: '/facility/send_troop.php',
							data: data2
						});
					});
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(textStatus);
				}
		});
		$.form = function(s){
			var def = {
					   type: 'get',
					   url: location.href,
					   data: {}
			};
			s = jQuery.extend(true, s, jQuery.extend(true, {}, def, s));
			var form = $('<form>').attr({'method': s.type,'action': s.url}).appendTo(document.body);
			for (var a in s.data) {
				$('<input>').attr({'name': a,'value': s.data[a]}).appendTo(form[0]);
			};
			form[0].submit();
		}
	}

	var ext_info_flag = false;

	function job_extra(){
		var vId;
		if (ext_info_flag) return;
		profTeriDoneflag = false;
		pickJoshuProfData('http://' + window.location.host + '/user/', teridata);
		setViser(vId, 200, function() { return profTeriDoneflag; }, function() {
			var msg;
			if (document.URL.match(/send_troop\.php/)) {
				var spans = $("div#ig_gofightconfirmboxtitle table td span");
				var toplace   = $.trim(spans.eq(0).html());		//目的地
				var re = toplace.match(/\s*\((-?\d+,-?\d+)\)/);
				var topos     = RegExp.$1;		//目的地座標
				toplace = RegExp.leftContext;
				var distance  = $.trim(spans.eq(1).html());		//距離
				var ttime     = $.trim(spans.eq(2).html()).match(/([0-9]+):([0-9]+:[0-9]+)/);	//到達時間
				var fromplace = $('div.sideBoxInner.basename li.on span').eq(0).attr('title');			//出陣地
				re = fromplace.match(/\s*\((-?\d+,-?\d+)\)/);
				var frompos = RegExp.$1;		//出陣座標
				fromplace = RegExp.leftContext;
				var found = -1;
				for (var i = 0; i < teridata.length; i++) {
					if (teridata[i].tname == fromplace) {
						found = i;
						break;
					}
				}
				var c = teridata[i].map;
				var d = parseFloat(distance);
				var p0 = frompos.split(",");
				var p1 = topos.split(",");
				var dx = parseFloat(p1[0]) - parseFloat(p0[0]);
				var dy = parseFloat(p1[1]) - parseFloat(p0[1]);
				//alert(	"frompos:"+frompos+"\n"+
				//			"fromplace:"+fromplace+"\n"+
				//			"c:"+c+"\n"+
				//			"topos:"+topos+"\n"+
				//			"toplace:"+toplace+"\n"+
				//			"distance:"+distance+"\n"
				//		);
				var cutpoz = function( cname, cd, sg) {
					this.cd    = cd;
					this.cname = cname;
					this.sg    = sg;
				}
				var cuttbl = new Array();
				cuttbl[0] = new cutpoz( "-5", (d-5.0)/d ,"-");
				cuttbl[1] = new cutpoz( "-10", (d-10.0)/d,"-" );
				cuttbl[2] = new cutpoz( "-20", (d-20.0)/d,"-" );
				cuttbl[3] = new cutpoz( "-30", (d-30.0)/d,"-" );
				cuttbl[4] = new cutpoz( "-1/3", 2.0/3.0, "-");
				cuttbl[5] = new cutpoz( "半下がり", 0.5, "*");
				cuttbl[6] = new cutpoz( "+1/3", 1.0/3.0, "+" );
				cuttbl[7] = new cutpoz( "+30", 30.0/d, "+" );
				cuttbl[8] = new cutpoz( "+20", 20.0/d, "+" );
				cuttbl[9] = new cutpoz( "+10", 10.0/d, "+" );
				cuttbl.sort( function( a, b) { return b.cd - a.cd; } );
				
				var tmp = "";
				for (var i=0; i< cuttbl.length; i++) {
					if (cuttbl[i].cd > 0.0 && cuttbl[i].cd < 1.0) {
						if ((cuttbl[i].sg == "*") || (cuttbl[i].sg == "-" && cuttbl[i].cd > 0.5) || (cuttbl[i].sg == "+" && cuttbl[i].cd < 0.5) ) {
							x = Number(p0[0]) + Math.round(dx*cuttbl[i].cd);
							y = Number(p0[1]) + Math.round(dy*cuttbl[i].cd);
							tmp += '　<a href="/map.php?x='+x+'&y='+y+'&c='+c+'" style="font-size:12px;">'+cuttbl[i].cname+'</a>';
						}
					}
				}
				$('div.ig_decksection_top').append(tmp);
				ext_info_flag = true;
			} else {
				alert("ここはどこ？");
			}
		});
	}

	function setViser(viserId, timeVise, cond, func )
	{
		viserId = setInterval( function() { 
									//GM_log("setViser:"+"trcnt="+trcnt+",gtcnt="+gtcnt);
									if ( cond() ) {
										clearInterval(viserId);
										func();
									}
								}, timeVise);
	}

	function job_informer(){
		var msg;
		if(location.pathname == "/facility/send_troop.php") {
			var spans = $("div#ig_gofightconfirmboxtitle table td span");
			var place = $.trim(spans.eq(0).html());
			var distance = $.trim(spans.eq(1).html());
			var ttime = $.trim(spans.eq(2).html()).match(/([0-9]+):([0-9]+):([0-9]+)/);
			var hh = RegExp.$1;
			var mm = RegExp.$2;
			var ss = RegExp.$3;
			if ("00" == hh) {
				ttime = mm + ":" + ss;
			} else {
				ttime = hh + ":" + mm + ":" + ss;
			}
			mini_dialog( place+" まで 距離["+distance+"] "+ttime);
		} else {
			alert("ここはどこ？");
		}
	}

	function mini_dialog(msg) {
		var dialog_style =
		'<style type="text/css">'+
		'.mini_style {'+
		'position:absolute;width:400px;height:100px;display:none;z-index:9999;padding:20px;'+
		'background-color:#fff;border:3px solid #f00;-moz-border-radius:5px;-webkit-border-radius:5px;'+
		'}'+
		'</style>';
		var dialog_str = dialog_style +
				'<DIV id="mini_dialog" class="mini_style">'
				+'<B>Information</B><div style="position: absolute; top: 10px; right: 10px"><a style="color:#000; text-decoration: none" href="#" class="mini_close" >[ 閉じる ]</a></div>'
				+'<DIV style="border-top:1px solid #000;padding-top:10px;line-height:2.0em;">'
				+msg
				+'</DIV></DIV>';
		dialog_str += '<DIV style="position:absolute;z-index:9000;background-color:#000;display:none;" id="mini_mask"></DIV>';

		$('BODY').prepend(dialog_str);

		var id = '#mini_dialog';
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#mini_mask').css({'width':maskWidth,'height':maskHeight}).fadeTo(0 ,0.8).show();
		var winH = $(window).height();
		var winW = $(window).width();
		$(id).css('top',  winH/2-$(id).height()/2).css('left', winW/2-$(id).width()/2).fadeIn(500);

		$('#mini_dialog').show();

		$('#mini_dialog .mini_close').click(function(e) {
			e.preventDefault();
			$('#mini_mask, #mini_dialog').hide();
		});	   
		$('#mini_mask').click(function(e) {
			$(this).hide();
			$('#mini_dialog').hide();
		});

	}

	function extra_inform() {
		if(!options['extra_inform']) return;
		if(location.pathname == "/facility/send_troop.php") {
			ext_info_flag = false;
			if (document.URL.match('#ptop$')) {		// for only "http://*.sengokuixa.jp/facility/send_troop.php#ptop"
				var tmp;
				//tmp = '<div><a href="javascript:void(0);" onclick="return false;" id="do_attackinfo"><img src="' + gifdoko + '" alt="Inf_attack" style="position: relative; top: +0px; "></a></div>';
				tmp = '　<a><input type="button" name="string" value="inform" id="do_attackinfo" onclick="javascript:void(0);"></a>';
				tmp += '　<a><input type="button" name="string" value="+" id="do_attackext" onclick="javascript:void(0);"></a>';
				$('div.ig_decksection_top').append(tmp);
				var spans = $("div#ig_gofightconfirmboxtitle table td span");
				var place = $.trim(spans.eq(0).html());
				var distance = $.trim(spans.eq(1).html());
				var ttime = $.trim(spans.eq(2).html()).match(/([0-9]+):([0-9]+:[0-9]+)/);
				var frompos = $('div.sideBoxInner.basename li.on span').eq(0).attr('title');
				var re = frompos.match(/\((-?\d+,-?\d+)\)/);
				var startpos = RegExp.$1;
				//tmp = '　　　<b style="font-size:12px; vertical-align: middle ! important;　font-weight:normal ! important;">'+RegExp.leftContext+'</b><a href="/village_change.php?village_id=16970&from=menu&page=/facility/send_troop.php"> @ </a>';
				tmp = '　　　<a style="font-size:12px; vertical-align: middle ! important;　font-weight:normal ! important;">'+RegExp.leftContext+'</a>';
				$('div.ig_fightunit_title3 h3').append(tmp);
		
				$('#do_attackinfo').live('click',function() {
					job_informer();
				});
				$('#do_attackext').live('click',function() {
					job_extra();
				});
			}
		}
	}

	function facility_selecter() {
		if(!options['facility_selecter']) return;
		if(location.pathname != "/facility/facility.php") return;
		if(($('div.ig_decksection_top').text().indexOf('厩舎')==-1)&&($('div.ig_decksection_top').text().indexOf('弓兵舎')==-1)&&($('div.ig_decksection_top').text().indexOf('足軽兵舎')==-1)&&($('div.ig_decksection_top').text().indexOf('兵器鍛冶')==-1)) return;
		$.ajax({
				type: "POST",
				url: '/village.php',
				cache: false,
				success: function (html){
					var kiba;
					var yari;
					var yumi;
					var kaji;
					var mapOverlayMap = $(html).find('map#mapOverlayMap');
					mapOverlayMap.find('area[title^="厩舎"]').each(function() {
						kiba = '/'+$(this).attr('href');
					});
					mapOverlayMap.find('area[title^="足軽兵舎"]').each(function() {
						yari = '/'+$(this).attr('href');
					});
					mapOverlayMap.find('area[title^="弓兵舎"]').each(function() {
						yumi = '/'+$(this).attr('href');
					});
					mapOverlayMap.find('area[title^="兵器鍛冶"]').each(function() {
						kaji = '/'+$(this).attr('href');
					});
					if(kiba==undefined) kiba='#';
					if(yari==undefined) yari='#';
					if(yumi==undefined) yumi='#';
					if(kaji==undefined) kaji='#';
					var h3link = '<h3><span>施設</span>:[<a href="'+kiba+'">厩舎</a>][<a href="'+yari+'">足軽兵舎</a>][<a href="'+yumi+'">弓兵舎</a>][<a href="'+kaji+'">兵器鍛冶</a>]</h3>';
					$('div.ig_tilesection_mid').eq(0).find('div.ig_tilesection_detailarea').find('h3').replaceWith(h3link);
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(textStatus);
				}
		});
	}

	function set_deck(list,a,b,c,s_assign_no,w_select_village,flg) {
		var set_squad_id = '';
		var set_assign_id = '';
		var w_deck_mode = $('#deck_mode').attr('value');
		var max_page='';
		var w_null='';
		if(((a>4)||(list[a]=='')||(b>c))&&(!flg)) {
			var w_null = '';
			var data2 = {select_assign_no:s_assign_no,unit_assign_id:w_null,unset_unit_squad_id:w_null,change_unit_squad_id:w_null,dungeon_unit_squad_id:w_null,dungeon_card_id:w_null,dungeon_select:w_null,deck_mode:'nomal',p:'1'};
			$.form({
				type: 'post',
				url: '/card/deck.php',
				data: data2
			});
		} else if(((a>4)||(list[a]=='')||(b>c))&&(flg)) {
			s_assign_no++;
			deck_interval(s_assign_no,flg);
			return;
		}

		$.form = function(s){
			var def = {
					   type: 'get',
					   url: location.href,
					   data: {}
			};
			s = jQuery.extend(true, s, jQuery.extend(true, {}, def, s));
			var form = $('<form>').attr({'method': s.type,'action': s.url}).appendTo(document.body);
			for (var a in s.data) {
				$('<input>').attr({'name': a,'value': s.data[a]}).appendTo(form[0]);
			};
			form[0].submit();
		}

		var data = {select_assign_no:s_assign_no,unit_assign_id:w_null,unset_unit_squad_id:w_null,change_unit_squad_id:w_null,dungeon_unit_squad_id:w_null,dungeon_card_id:w_null,dungeon_select:w_null,deck_mode:'nomal',p:b};

		$.ajax({
				type: "POST",
				url: '/card/deck.php',
				data:data,
				cache: false,
				success: function (html){
					$(html).find('div#ig_decksection3.clearfix').find('div#ig_deck_smallcardarea_out').find('span.ig_deck_smallcard_cardname').each(function() {
						var unit_button_img = $(this).parent().parent().find('img[title^="選択中の部隊へ"]');
						if(unit_button_img.attr('src')!=undefined) {
							var work_id = unit_button_img.parent().attr('onclick').toString().split(',');
							set_squad_id = work_id[1].replace(/\'|\"/g,'');
							set_assign_id = work_id[0];
							return false;
						} else {
							set_squad_id='';
						}
					});
					if(set_squad_id!='') {
						set_assign_id=set_assign_id.replace("function onclick(event) {\n",'');
						set_assign_id=set_assign_id.replace('  confirmRegist(','');
						set_assign_id=set_assign_id.replace(/ /g,'');
						set_assign_id = set_assign_id.replace(/\'|\"/g,'');
						var data2 = {target_card:w_null,select_assign_no:s_assign_no,mode:'assign_insert',btn_change_flg:w_null,set_village_id:w_select_village,set_assign_id:set_assign_id,set_squad_id:set_squad_id,deck_mode:'nomal',p:b};
						$.ajax({
							type: "POST",
							url: '/card/deck.php',
							data:data2,
							cache: false,
							success: function (html){
								a++;
								set_deck(list,a,b,c,s_assign_no,w_select_village,flg);
							},
							error: function (XMLHttpRequest, textStatus, errorThrown) {
								//console.log(textStatus);
							}
						});
					}else{
						b++;
						set_deck(list,a,b,c,s_assign_no,w_select_village,flg);
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(textStatus);
				}
		});
	}

	function deck_setting(card_key) {
		var select_assign_no = $('#select_assign_no').attr('value');
		var w_select_village = $('#select_village').children(':selected').attr('value');
		var max_page='';
		$('.cardstockchange.clearfix').find('a[title^=" "]').each(function() {
			max_page=$(this).attr('title');
		});
		if(options['pager_ajax']) {
			$('.cardstockchange.clearfix').find('a[page^=]').each(function() {
				max_page=$(this).attr('page');
			});
		}
		max_page=max_page.replace(' ','');
		var butai_list = secureEvalJSON(localStorage.getItem("ixakaizou_butai_list"));
		var t=butai_list[card_key].split(',');
		$("#s_0").attr("disabled","disabled");
		$("#s_1").attr("disabled","disabled");
		$("#s_2").attr("disabled","disabled");
		$("#s_3").attr("disabled","disabled");
		$("#set_0").attr("disabled","disabled");
		$("#set_1").attr("disabled","disabled");
		$("#set_2").attr("disabled","disabled");
		$("#set_3").attr("disabled","disabled");
		nowLoading();
		set_deck(t,1,1,max_page,select_assign_no,w_select_village,false);
	}

	function deck_all_setting() {
		if($('#select_village2').children(':selected').attr('value')==''){
			alert('部隊の所属が未設定です');
			return;
		}
		var butai_list = {};
		if(localStorage.getItem("ixakaizou_butai_list")!=null) {
			butai_list = secureEvalJSON(localStorage.getItem("ixakaizou_butai_list"));
		}
		var j=0;
		var c=0;
		for(i in butai_list) {
			if($('#d'+c).attr('checked')) {
				j++;
			}
			c++;
		}
		if(j==0) {
			alert('部隊が選択されていません');
			return;
		}
		c=0;
		for(i in butai_list) {
			$('#d'+c).attr("disabled","disabled");
			c++;
		}
		var start_deck=1;
		$('a[onclick^="selectAssignNo"]').each(function(){
			if($(this).text()=='[---新規部隊を作成---]') start_deck++;
		});
		start_deck=5-start_deck;
		$('#butai_all_set').attr("disabled","disabled");
		nowLoading();
		deck_interval(start_deck,true);
	}

	function deck_interval(start_deck,flg) {
		if(start_deck > 3) {
			flg = false;
		}
		var select_assign_no = start_deck;
		var w_select_village = $('#select_village2').children(':selected').attr('value');
		var max_page='';
		$('.cardstockchange.clearfix').find('a[title^=" "]').each(function() {
			max_page=$(this).attr('title');
		});
		if(options['pager_ajax']) {
			$('.cardstockchange.clearfix').find('a[page^=]').each(function() {
				max_page=$(this).attr('page');
			});
		}
		max_page=max_page.replace(' ','');
		var butai_list = secureEvalJSON(localStorage.getItem("ixakaizou_butai_list"));
		var j = 0;
		var card_key = '';
		for (i in butai_list) {
			if($('#d'+j).attr('checked')) {
				card_key = $('#d'+j).attr('value');
				$('#d'+j).attr('checked',false);
				break;
			}
			j++;
		}
		if(card_key=='') {
			location.href='/card/deck.php';
			return;
		}
		var t=butai_list[card_key].split(',');
		$("#s_0").attr("disabled","disabled");
		$("#s_1").attr("disabled","disabled");
		$("#s_2").attr("disabled","disabled");
		$("#s_3").attr("disabled","disabled");
		$("#set_0").attr("disabled","disabled");
		$("#set_1").attr("disabled","disabled");
		$("#set_2").attr("disabled","disabled");
		$("#set_3").attr("disabled","disabled");
		set_deck(t,1,1,max_page,select_assign_no,w_select_village,flg);
	}

	function re_butai() {
			var tmp = '<span id="all_map"><p><table class="common_table1 center" width=100%><tbody>';
			tmp+='<tr><th>選択</th><th>タイプ</th><th>部隊名</th><th>部隊長</th><th>小隊長</th><th>小隊長</th><th>小隊長</th><th></th></tr>';
			var butai_list = {};
			var c=0;
			if(localStorage.getItem("ixakaizou_butai_list")!=null) {
				butai_list = secureEvalJSON(localStorage.getItem("ixakaizou_butai_list"));
				for (i in butai_list) {
					var b_type = '';
					if(butai_list[i][0]==0) {
						b_type='攻撃部隊';
					} else if(butai_list[i][0]==1) {
						b_type='防衛部隊';
					} else if(butai_list[i][0]==3) {
						b_type='秘境部隊';
					} else {
						b_type='両用部隊';
					}
					tmp+= '<tr><td><input type=checkbox id=d'+c+' value="'+i+'"></td><td>'+b_type+'</td><td>'+i+'</td>';
					var t=butai_list[i].split(',');
					for(j=1;j<5;j++){
						tmp+='<td>'+t[j]+'</td>';
					}
					tmp+='<td><input class="del_butai" type=button value=消去 id="'+i+'"></td></tr>';
					c++;
				}
			} else {
				tmp+='<tr><td colspan=7>お気に入り部隊は登録されていません</td></tr></tr>';
			}
			tmp+='</tbody></table></p></span>';
			$('#all_map').replaceWith(tmp);
			tmp = $('.ig_deck_unitdata_assign.deck_wide_select').clone();
			if(tmp.find('#select_village').attr('id')!=undefined){
				tmp.find('#select_village').attr('name','select_village2');
				tmp.find('#select_village').attr('id','select_village2');
				$('#all_map').before(tmp);
				$('#all_map').before('<input type=button value="選択部隊をデッキへセット" id="butai_all_set">');
				$('#butai_all_set').live("click",function() {
					deck_all_setting();
				});
			}
			$('.del_butai').live("click",function() {
				var butai_list = {};
				var butai_list_new = {};
				if(localStorage.getItem("ixakaizou_butai_list")!=null) {
					butai_list = secureEvalJSON(localStorage.getItem("ixakaizou_butai_list"));
				}
				for(i in butai_list) {
					if(i!=$(this).attr('id')) {
						butai_list_new[i] = butai_list[i];
					}
				}
				localStorage.setItem('ixakaizou_butai_list', toJSON(butai_list_new));
				tmp = '<span id="all_map"><table class="common_table1 center" width=100%><tbody>';
				tmp+='<tr><th>選択</th><th>タイプ</th><th>部隊名</th><th>部隊長</th><th>小隊長</th><th>小隊長</th><th>小隊長</th><th></th></tr>';
				var butai_list = {};
				var c=0;
				if(localStorage.getItem("ixakaizou_butai_list")!=null) {
					butai_list = secureEvalJSON(localStorage.getItem("ixakaizou_butai_list"));
					for (i in butai_list) {
						var b_type = '';
						if(butai_list[i][0]==0) {
							b_type='攻撃部隊';
						} else if(butai_list[i][0]==1) {
							b_type='防衛部隊';
						} else if(butai_list[i][0]==3) {
							b_type='秘境部隊';
						} else {
							b_type='両用部隊';
						}
						tmp+= '<tr><td><input type=checkbox id=d'+c+'value="'+i+'"></td><td>'+b_type+'</td><td>'+i+'</td>';
						var t=butai_list[i].split(',');
						for(j=1;j<5;j++){
							tmp+='<td>'+t[j]+'</td>';
						}
						tmp+='<td><input class="del_butai" type=button value=消去 id="'+i+'"></td></tr>';
						c++;
					}
				} else {
					tmp+='<tr><td colspan=7>お気に入り部隊は登録されていません</td></tr></tr>';
				}
				tmp+='</tbody></table></span>';
				$('#all_map').replaceWith(tmp);
				tmp = $('.ig_deck_unitdata_assign.deck_wide_select').clone();
				if(tmp.find('#select_village').attr('id')!=undefined){
					tmp.find('#select_village').attr('name','select_village2');
					tmp.find('#select_village').attr('id','select_village2');
					$('#all_map').before(tmp);
					$('#all_map').before('<input type=button value="選択部隊をデッキへセット" id="butai_all_set">');
					$('#butai_all_set').live("click",function() {
						deck_all_setting();
					});
				}
			});
	}

	function hold_butai() {
		if(!options['hold_butai']) return;
		if(location.pathname != "/card/deck.php") return;

		$('#mokotool').append('<a href="#TB_inline?height=340&amp;width=665&amp;inlineId=allMapThicbox" class="thickbox" title="お気に入り部隊" onclick="return false;">お気に入り部隊</a>');
		$("a.thickbox").live("mousedown",function() {
			tb_init('a.thickbox');
			re_butai();
		});
		if($('#ig_bg_decksection1right.clearfix').find('#ig_deck_unititle.clearfix').find('p:eq(0)').text()=='[------]部隊') {
			var butai_list = {};
			if(localStorage.getItem("ixakaizou_butai_list")!=null) {
				butai_list = secureEvalJSON(localStorage.getItem("ixakaizou_butai_list"));
			} else {
				return;
			}
			$('#ig_bg_decksection1right.clearfix').find('#ig_deck_unititle.clearfix').css('height','95px');
			$('#ig_bg_decksection1right.clearfix').find('#ig_deck_unititle.clearfix').css('font-size','12px');
			$('.deck_navi').css('height','1px');
			var s_0 = '<p style="padding-top: 5px;">攻撃部隊:<select id="s_0" style="font-size:12px"><option>-----選択-----</option>';
			var s_1 = '<p style="padding-top: 5px;">防衛部隊:<select id="s_1" style="font-size:12px"><option>-----選択-----</option>';
			var s_2 = '<p style="padding-top: 5px;">両用部隊:<select id="s_2" style="font-size:12px"><option>-----選択-----</option>';
			var s_3 = '<p style="padding-top: 5px;">秘境部隊:<select id="s_3" style="font-size:12px"><option>-----選択-----</option>';
			for (i in butai_list) {
				if(butai_list[i][0]==0) {
					s_0 += '<option value="'+i+'">'+i+'</option>';
				} else if(butai_list[i][0]==1) {
					s_1 += '<option value="'+i+'">'+i+'</option>';
				} else if(butai_list[i][0]==3) {
					s_3 += '<option value="'+i+'">'+i+'</option>';
				} else {
					s_2 += '<option value="'+i+'">'+i+'</option>';
				}
			}
			s_0 += '</select><input type=button value="セット" id="set_0"></p>';
			s_1 += '</select><input type=button value="セット" id="set_1"></p>';
			s_2 += '</select><input type=button value="セット" id="set_2"></p>';
			s_3 += '</select><input type=button value="セット" id="set_3"></p>';
			$('#ig_bg_decksection1right.clearfix').find('#ig_deck_unititle.clearfix').find('p:eq(0)').replaceWith(s_0+s_1+s_2+s_3);
			$('#set_0').live("click",function(){
			   var s_val = $('#s_0').children(':selected').val();
			   if(s_val=='-----選択-----') return;
			   deck_setting(s_val);
			});
			$('#set_1').live("click",function(){
			   var s_val = $('#s_1').children(':selected').val();
			   if(s_val=='-----選択-----') return;
			   deck_setting(s_val);
			});
			$('#set_2').live("click",function(){
			   var s_val = $('#s_2').children(':selected').val();
			   if(s_val=='-----選択-----') return;
			   deck_setting(s_val);
			});
			$('#set_3').live("click",function(){
			   var s_val = $('#s_3').children(':selected').val();
			   if(s_val=='-----選択-----') return;
			   deck_setting(s_val);
			});
		} else {
			var butai_nm = $('#ig_bg_decksection1right.clearfix').find('#ig_deck_unititle.clearfix').find('p:eq(0)').text().replace('[','');
			butai_nm = butai_nm.replace(']','');
			/*
			var tmp = '<div><font color=#ffffff>部隊名:</font><input type=text value="'+butai_nm+'" maxlength=8 size=15 id="b_name"><select id="b_type"><option value=0>攻撃</option><option value=1>防衛</option><option value=2>両用</option><option value=3>秘境</option></select><a href="javascript:void(0)" onclick="return false;" id="butai_save"><img src="http://www.jj-midi.com/image/btn_butai_save.png"></a></div>';
			*/
			var tmp = '<div><font color=#ffffff>部隊名:</font><input type=text value="'+butai_nm+'" maxlength=8 size=15 id="b_name"><select id="b_type"><option value=0>攻撃</option><option value=1>防衛</option><option value=2>両用</option><option value=3>秘境</option></select><a href="javascript:void(0)" onclick="return false;" id="butai_save"><img src="' + IMAGES.btn_butai_save + '"></a></div>';
			$('#ig_bg_decksection1right.clearfix').find('#ig_deckunitdetail').find('img:last').after(tmp);
			$('#butai_save').click(function(){
				  var butai_list = {};
				  var b_array = new Array();
				  if(localStorage.getItem("ixakaizou_butai_list")!=null) {
					  butai_list = secureEvalJSON(localStorage.getItem("ixakaizou_butai_list"));
				  }
				  b_array[0] = $('#b_type').children(':selected').val();
				  var card_name = $('#ig_decksection1.clearfix').find('#id_deck_card1_front.ig_card_cardStatusFront').find('.ig_card_name:eq(0)').text();
				  card_name = card_name.replace('<br>');
				  b_array[1] = card_name;
				  for(i=2;i<5;i++) {
					  card_name = $('#ig_decksection2.clearfix').find('#id_deck_card'+i+'_front.ig_card_cardStatusFront').find('.ig_card_name:eq(0)').text();
					  if(card_name==undefined) break;
					  card_name = card_name.replace('<br>');
					  b_array[i] = card_name;
				  }
				  if($('#b_name').val()==''){
					  $('#b_name').attr('value',butai_nm);
				  }
				  butai_list[$('#b_name').val()] = b_array.join(',');
				  localStorage.setItem('ixakaizou_butai_list', toJSON(butai_list));
				  re_butai();
				  alert('この部隊を記録しました。');
			});
		}
	}

	function unit_list_hikyou() {
		if(!options['unit_list_hikyou']) return;
		if(!options['hold_butai']) return;
		if(location.pathname != "/facility/set_unit_list.php") return;
		var tmp='&nbsp;&nbsp;<input type=radio name=set_type id=ro1 value=0 checked><label for=ro1>兵士0武将</label>&nbsp;<input type=radio name=set_type id=ro2 value=1><label for=ro2>秘境部隊</label>&nbsp;<input type=button value="兵士をセットする" onclick="return false;" id="hikyou_butai">';
		$('.center.black').find('input:last').after(tmp);
		$('#hikyou_butai').live('click',function(){
			var butai_list = {};
			var card_array = new Array();
			if($('input[name=set_type]:checked').val()=='1'){
				if(localStorage.getItem("ixakaizou_butai_list")!=null) {
					butai_list = secureEvalJSON(localStorage.getItem("ixakaizou_butai_list"));
				} else {
					alert('お気に入り部隊が登録されていません');
					return;
				}
				var j=0;
				for (i in butai_list) {
					if(butai_list[i][0]==3) {
						var t=butai_list[i].split(',');
						for(c=1;c<5;c++){
							card_array[j]=t[c];
							j++;
						}
					}
				}
				if(card_array.length==0) {
					alert('秘境部隊が登録されていません');
					return;
				}
			} else {
				var j=0;
				$('input[id^="unit_cnt_text"]').each(function() {
					if($(this).val()=='0'){
						card_array[j]=$(this).parent().parent().find('.thickbox').parent().find('input:last').val();
						j++;
					}
				});
			}
			var unit_type = '';
			var max_unit = 0;
			$('select[name^="unit_id_select"]').each(function(){
				$(this).children('option').each(function() {
					if($(this).text()=='なし') return true;
					var num = $(this).text().substring($(this).text().indexOf("(")+1,$(this).text().indexOf(")"));
					if(num=='0') return true;
					if(num > max_unit) {
						max_unit=num;
						unit_type=$(this).val();
					}
				});
				return false;
			});
			if(unit_type=='') {
				alert('待機兵がいません');
				return;
			}
			if(max_unit < card_array.length) {
				alert('待機兵が足りません');
				return;
			}
			$('input[onclick^="postSetUnit"]').each(function(){
				$(this).attr("disabled","disabled");
			});
			$('#hikyou_butai').attr("disabled","disabled");
			unit_list_set(card_array,unit_type,0,$('input[name=set_type]:checked').val());
		});
	}

	function unit_list_set(card_array,unit_type,i,radio) {
		if(card_array.length<=i) {
			location.href='/facility/set_unit_list.php?show_num=100';
		}
		var card_id = '';
		if(radio==1) {
			$('.thickbox').each(function(){
				var target = $(this).text().replace(/(^\s+)|(\s+$)/g, "");
				if(target==card_array[i]){
					if($(this).parent().parent().find('input[id^="unit_cnt_text"]').val()!='0') return true;
					card_id = $(this).parent().find('input:last').val();
					return false;
				}
			});
		} else {
			card_id=card_array[i];
		}
		if(card_id != '') {
			var data = {card_id:card_id,unit_type:unit_type,unit_count:1};
			$.ajax({
				type: "POST",
				url: '/facility/set_unit_list_if.php',
				data:data,
				cache: false,
				success: function (html){
					i++;
					unit_list_set(card_array,unit_type,i);
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(textStatus);
				}
			});
		}
	}

	function menu_reversal() {
		if(!options['menu_reversal']) return;
		var tmp = $('#status.clearfix').clone();
		$('#status.clearfix').remove();
		$('#gnavi').prepend(tmp);
	}

	function all_dissolution() {
		if(!options['all_dissolution']) return;
		if(location.pathname != "/card/deck.php") return;

		// 部隊スキルウィンドウを移動
		$('div[id="deck_skill_display"]').css('margin-top', '100px');
		$('div[id="ig_deckunitdetail"]').css('height', '460px');


		var tmp = '<li><a href="javascript:void(0);" onclick="return false;" id="deck_dissolution"><img src="'+IMAGES.btn_all_breakup+'" alt="全部隊解散" style="position: relative; top: -4px; "></a></li>';
		$('ul#ig_unitchoice').find('li:last').before(tmp);
		$('#deck_dissolution').live('click',function() {
			if(!confirm("全部隊を解散しますか？\n(解散すると武将は、HPが減った状態で待機へ戻されます)")) return;
			var butaiNum = jQuery('#ig_unitchoice li a[onclick^="selectAssignNo"]')
				.filter(function(v){ return jQuery(this).text() != '[---新規部隊を作成---]' })
				.add('#ig_unitchoice li.now')
				.length
			;
			nowLoading( butaiNum );
			var p = $('#p').attr('value');
			deck_dissolution(butaiNum-1,'','',p);
		});
	}

	function deck_dissolution(select_assign_no,unit_assign_id,unset_unit_squad_id,p) {
		if(select_assign_no>4 || select_assign_no < 0) {
			location.href='/card/deck.php';
			return;
		}
		var work_id='';
		var w_null='';
		var data = {
			select_assign_no      : select_assign_no,
			unit_assign_id        : unit_assign_id,
			unset_unit_squad_id   : unset_unit_squad_id,
			change_unit_squad_id  : w_null,
			dungeon_unit_squad_id : w_null,
			dungeon_card_id       : w_null,
			dungeon_select        : w_null,
			deck_mode             : 'nomal',
			p                     : p
		};
		$.ajax({
			type: "POST",
			url: '/card/deck.php',
			data:data,
			cache: false,
			success: function (html){
				if($(html).find('img[alt^="解散"]').attr('alt')==undefined) {
					select_assign_no--;
					deck_dissolution(select_assign_no,unit_assign_id,unset_unit_squad_id,p);
					return;
				} else {
					work_id = $(html).find('img[alt^="解散"]').parent().attr('onclick').toString().split(',');
				}
				unit_assign_id = work_id[0];
				unit_assign_id=unit_assign_id.replace("function onclick(event) {\n",'');
				unit_assign_id=unit_assign_id.replace('confirmUnregist\(','');
				unit_assign_id=unit_assign_id.replace(/\s|'|"/g,'');
				unset_unit_squad_id=work_id[1].replace(/'|"/g,'');
				countUpProgress();
				deck_dissolution(select_assign_no,unit_assign_id,unset_unit_squad_id,p);
				return;
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				//console.log(textStatus);
			}
		});
	}

	function all_deck_setting() {
		if(!options['all_dissolution']) return;
		if(location.pathname != "/card/deck.php") return;
		/*
		var tmp = '<li><a href="javascript:void(0);" onclick="return false;" id="all_set"><img src="http://www.jj-midi.com/image/btn_all_setting.png" alt="全部隊配置" style="position: relative; top: -4px; "></a></li>';
		*/
		var tmp = '<li><a href="javascript:void(0);" onclick="return false;" id="all_set"><img src="' + IMAGES.btn_all_setting + '" alt="全部隊配置" style="position: relative; top: -4px; "></a></li>';
		$('ul#ig_unitchoice').find('li:last').before(tmp);
		$('#all_set').live('click',function() {
			if(!confirm("全部隊を設置しますか？\n(現在のソート順で設置可能な武将から順次設置されます)")) return;
			$("#deck_all").remove();
			nowLoading();
			deck_all($("body#deck"),0);
		});
	}

	function deck_all(html,no) {
		if(no>4){
			location.href='/card/deck.php';
			return;
		}
		var w_select_village = $('#select_village').children(':selected').attr('value');
		var max_page='';
		$('.cardstockchange.clearfix').find('a[title^=" "]').each(function() {
			max_page=$(this).attr('title');
		});
		if(options['pager_ajax']) {
			$('.cardstockchange.clearfix').find('a[page^=]').each(function() {
				max_page=$(this).attr('page');
			});
		}
		max_page=max_page.replace(' ','');
		set_deck_asc(html,1,1,max_page,no,w_select_village);
	}

	function set_deck_asc(tmp,start,index_page,max_page,s_assign_no,w_select_village) {
		var set_squad_id = '';
		var set_assign_id = '';
		var w_null='';
		if((start>4)||(index_page>max_page)) {
			s_assign_no++;
			deck_all(tmp,s_assign_no);
			return;
		}

		var data = {select_assign_no:s_assign_no,unit_assign_id:w_null,unset_unit_squad_id:w_null,change_unit_squad_id:w_null,dungeon_unit_squad_id:w_null,dungeon_card_id:w_null,dungeon_select:w_null,deck_mode:'nomal',p:index_page};

		$.ajax({
				type: "POST",
				url: '/card/deck.php',
				data:data,
				cache: false,
				success: function (html){
					$(html).find('div#ig_decksection3.clearfix').find('div#ig_deck_smallcardarea_out').find('span.ig_deck_smallcard_cardname').each(function() {
						var unit_button_img = $(this).parent().parent().find('img[title^="選択中の部隊へ"]');
						if(unit_button_img.attr('src')!=undefined) {
							var work_id = unit_button_img.parent().attr('onclick').toString().split(',');
							set_squad_id = work_id[1].replace(/\'|\"/g,'');
							set_assign_id = work_id[0];
							return false;
						} else {
							set_squad_id='';
						}
					});
					if(set_squad_id!='') {
						set_assign_id=set_assign_id.replace("function onclick(event) {\n",'');
						set_assign_id=set_assign_id.replace('  confirmRegist(','');
						set_assign_id=set_assign_id.replace(/ /g,'');
						set_assign_id = set_assign_id.replace(/\'|\"/g,'');
						var data2 = {target_card:w_null,select_assign_no:s_assign_no,mode:'assign_insert',btn_change_flg:w_null,set_village_id:w_select_village,set_assign_id:set_assign_id,set_squad_id:set_squad_id,deck_mode:'nomal',p:index_page};
						$.ajax({
							type: "POST",
							url: '/card/deck.php',
							data:data2,
							cache: false,
							success: function (html){
								start++;
								set_deck_asc(html,start,index_page,max_page,s_assign_no,w_select_village);
							},
							error: function (XMLHttpRequest, textStatus, errorThrown) {
								//console.log(textStatus);
							}
						});
					}else{
						index_page++;
						set_deck_asc(html,start,index_page,max_page,s_assign_no,w_select_village);
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(textStatus);
				}
		});
	}

	function nowLoading( _initCount ) {
		var id = '#nowLoadingContent';
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		$('#loading_mask').css({'width':maskWidth,'height':maskHeight}).fadeTo(0 ,0.8).show();
		var winH = $(window).height();
		var winW = $(window).width();
		if( _initCount > 0 ){
			$(id).data('progressCount', 0 );
			$(id).find('#progressCount').append( '（', $('<span>0<span>'), '/'+ _initCount +'）') ;
		}
		$(id).css('top',  winH/2-$(id).height()/2).css('left', winW/2-$(id).width()/2).fadeIn(500);
		return false;
	}

	function countUpProgress(){
		var $progressDiag = $('#nowLoadingContent');
		var cnt = $progressDiag.data('progressCount');
		$progressDiag.data('progressCount',cnt+1);
		$progressDiag.find('#progressCount > span').text( cnt );
	}

	function deck_check() {
		if(!options['deck_check']) return;
		if(location.pathname != "/card/deck.php") return;
		var t=$('#lordSiteArea').text().replace("選択中の拠点:","");
		$('#select_village > OPTION[label="' + t + '"]').attr('selected', true);
	}

	function sort_village() {
		if(!options['sort_village']) return;
		$.ajax({
			type: "POST",
			url: '/user/',
			cache: false,
			success: function (html){
				var village_list = [];
				var camp_list = [];
				var honryo_nm = '';
				var dejiro_nm = '';
				var jikoku_flg = true;
				$(html).find('table.common_table1.center').find('tr.fs14').each(function() {
					var type = $(this).find('td:eq(0)').text();
					if(type=='領地') return true;
					var nm = $(this).find('a:eq(0)').text().replace(/^\s+|\s+$/g, "");
					if(type=='本領') {
						honryo_nm = nm;
					} else if(type=='所領') {
						village_list.push(nm);
					} else if(type=='出城') {
						dejiro_nm = nm;
						jikoku_flg = false;
					} else if(type=='陣') {
						camp_list.push(nm);
					}
				});
				if(options['ad_sort']=='1'){
					if(!options['sort_village_as_created']){
						village_list.sort();
					}
					if(!options['sort_camp_as_created']){
						camp_list.sort();
					}
				} else {
					if(!options['sort_village_as_created']){
						village_list.reverse();
					}
					if(!options['sort_camp_as_created']){
						camp_list.reverse();
					}
				}
				var places = []; // 自国、他国
				places[0] = [honryo_nm].concat(village_list);
				if (jikoku_flg) {
					places[0] = places[0].concat(camp_list);
				} else {
					places[1] = [dejiro_nm].concat(camp_list);
				}
				$('div.sideBoxInner.basename').each(function(index, row) {
					var side_basename_ul = $(this).find('ul'); 
					side_basename_ul.find('li.last').removeClass('last');
					for (var i = 0; i < places[index].length; i++) {
						side_basename_ul.find('li').each(function() {
							if ($(this).text() == places[index][i]) {
								side_basename_ul.append($(this).clone());
								$(this).remove();
								return;
							}
						});
					}
					side_basename_ul.find('li:last').addClass('last');
				});
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				//console.log(textStatus);
			}
		});
	}

	function sort_village_fast() {
		if(!options['sort_village']) return;
		$('div.sideBoxInner.basename').each(function() {
			var $list = $(this).find('ul');
			var $listLi = $list.find('li:gt(0)');
			$listLi.sort(function(a, b) {
				if(options['ad_sort']=='1'){
					return $(a).text() > $(b).text();
				} else {
					return $(a).text() < $(b).text();
				}
			});
			$list.find('li.last').removeClass('last');
			$listLi.each(function(index, row) {
				$list.append(row);
			});
			$list.find('li:last').addClass('last');
		});
	}

	function sort_village_org() {
		if(!options['sort_village']) return;
		var page = location.pathname+location.search;
		var dejiro = $('.sideBoxHead > h4:eq(1)').text();
		$.ajax({
			type: "POST",
			url: '/user/',
			cache: false,
			success: function (html){
				var village_list = [];
				var place_list = [];
				var tmp = '<div class="sideBoxInner basename"><ul>';
				var tmp2 = '<div class="sideBoxInner basename"><ul>';
				$(html).find('.common_table1.center:eq(0)').find('.fs14').each(function() {
					if($(this).find('td:eq(0)').text()=='領地') return true;
					var nm = $(this).find('a:eq(0)').text().replace(/^\s+|\s+$/g, "");
					var xy = '('+$(this).find('a:eq(1)').text()+')';
					var url = $(this).find('a:eq(0)').attr('href');
					if($(this).find('td:eq(0)').text()=='本領') {
						if(nm==$('#lordSiteArea').text().replace("選択中の拠点:","")) {
							tmp+='<li class="on"><span title="'+nm+' '+xy+'">'+nm+'</span></li>';
						} else {
							tmp+='<li><a href="'+url+'&from=menu&page='+page+'" title="'+nm+' '+xy+'">'+nm+'</a></li>';
						}
					} else {
						village_list.push({a:nm,b:url,c:xy});
					}
					if(options['ad_sort']=='1'){
						village_list = asort(village_list,'a');
						place_list = asort(place_list,'a');
					} else {
						village_list = dsort(village_list,'a');
						place_list = dsort(place_list,'a');
					}
				});
				if(dejiro=='') {
					tmp2='';
				}
				$(html).find('.common_table1.center:eq(1)').find('.fs14').each(function() {
					if($(this).find('td:eq(0)').text()=='領地') return true;
					var nm = $(this).find('a:eq(0)').text().replace(/^\s+|\s+$/g, "");
					var xy = '('+$(this).find('a:eq(1)').text()+')';
					var url = $(this).find('a:eq(0)').attr('href');
					if((options['place_skip'])&&(options['place_skip_str']!='')&&(nm!=$('#lordSiteArea').text().replace("選択中の拠点:",""))) {
						if(nm.indexOf(options['place_skip_str'])>=0) return true;
					}
					if($(this).find('td:eq(0)').text()=='出城') {
						if(nm==$('#lordSiteArea').text().replace("選択中の拠点:","")) {
							tmp2+='<li class="on"><span title="'+nm+' '+xy+'">'+nm+'</span></li>';
						} else {
							tmp2+='<li><a href="'+url+'&from=menu&page='+page+'" title="'+nm+' '+xy+'">'+nm+'</a></li>';
						}
					} else {
						place_list.push({a:nm,b:url,c:xy});
					}
				});
				if(options['ad_sort']=='1'){
					village_list = asort(village_list,'a');
					place_list = asort(place_list,'a');
				} else {
					village_list = dsort(village_list,'a');
					place_list = dsort(place_list,'a');
				}
				for(i=0;i<village_list.length;i++) {
					if(village_list[i].a==$('#lordSiteArea').text().replace("選択中の拠点:","")) {
						tmp+='<li class="on"><span title="'+village_list[i].a+' '+village_list[i].c+'">'+village_list[i].a+'</span></li>';
					} else {
						tmp+='<li><a href="'+village_list[i].b+'&from=menu&page='+page+'" title="'+village_list[i].a+' '+village_list[i].c+'">'+village_list[i].a+'</a></li>';
					}
				}
				for(i=0;i<place_list.length;i++) {
					if(place_list[i].a==$('#lordSiteArea').text().replace("選択中の拠点:","")) {
						tmp2+='<li class="on"><span title="'+place_list[i].a+' '+place_list[i].c+'">'+place_list[i].a+'</span></li>';
					} else {
						tmp2+='<li><a href="'+place_list[i].b+'&from=menu&page='+page+'" title="'+place_list[i].a+' '+place_list[i].c+'">'+place_list[i].a+'</a></li>';
					}
				}
				if(dejiro=='') {
					tmp2+='</ul></div>';
					$('.sideBoxInner.basename:eq(0)').replaceWith(tmp+tmp2);
				} else {
					tmp+='</ul></div>';
					tmp2+='</ul></div>';
					$('.sideBoxInner.basename:eq(0)').replaceWith(tmp);
					$('.sideBoxInner.basename:eq(1)').replaceWith(tmp2);
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				//console.log(textStatus);
			}
		});
	}

	function ptop_check() {
		if((location.pathname != "/facility/send_troop.php")&&(location.pathname != "/facility/confluence_confirm.php")) return;
		var tmp = $('.btnarea:eq(0)').clone();
		$('#ig_deckheadmenubox').after(tmp);
		$('.btnarea').css('margin-bottom','1px');
		$('INPUT[name="unit_select"]:first').attr('checked', true);
	}

	function asort(hash,key){
		hash.sort ( function (b1, b2) { return b1[key] > b2[key] ? 1 : -1; } );
		return hash;
	}

	function dsort(hash,key){
		hash.sort ( function (b1, b2) { return b1[key] > b2[key] ? -1 : 1; } );
		return hash;
	}

	function war_detail_navi() {
		if(location.pathname != "/war/detail.php") return;
		var target_query = location.search.substr(1,location.search.length-1).split("&");
		target_query = target_query[0];
		var back_query = $('a[href^="list.php"]').attr('href');
		$.ajax({
			type: "POST",
			url: '/war/'+back_query,
			cache: false,
			success: function (html){
				var before_query='';
				var after_query='';
				var target_row=0;
				var i=0;
				var max_row=0;
				$(html).find('a[href^="detail.php"]').each(function() {
					if($(this).attr('href').indexOf(target_query)>=0) {
						target_row=i;
					}
					i++;
					max_row++;
				});
				i=0;
				$(html).find('a[href^="detail.php"]').each(function() {
					if((i==target_row-1)&&(target_row!=0)) {
						after_query=$(this).attr('href');
					}
					if((i==target_row+1)&&(target_row!=max_row)) {
						before_query=$(this).attr('href');
						return false;
					}
					i++;
				});
				war_detail_navi_link(html,before_query,after_query);
				return;
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
			}
		});
	}

	function war_detail_navi_link(argHtml,before_query,after_query) {
		var target_href='';
		var t_num = $(argHtml).find('.ig_battle_pagelist').find('span:eq(0)').text();
		if(before_query==''){
			if(t_num!=''){
				t_num++;
				$(argHtml).find('.ig_battle_pagelist').find('a[href^="/war/list.php"]').each(function(){
					if($(this).text()==t_num) {
						target_href=$(this).attr('href');
						return false;
					}
				});
			}
		} else if(after_query=='') {
			if(t_num!=''){
				t_num--;
				$(argHtml).find('.ig_battle_pagelist').find('a[href^="/war/list.php"]').each(function(){
					if($(this).text()==t_num) {
						target_href=$(this).attr('href');
						return false;
					}
				});
			}
		} else {
			make_navi(before_query,after_query);
			return;
		}
		if(target_href!=''){
			$.ajax({
				type: "POST",
				url: target_href,
				cache: false,
				success: function (html){
					if(before_query==''){
						$(html).find('a[href^="detail.php"]').each(function() {
							before_query=$(this).attr('href');
							return false;
						});
					}
					if(after_query==''){
						$(html).find('a[href^="detail.php"]').each(function() {
							after_query=$(this).attr('href');
						});
					}
					make_navi(before_query,after_query);
					return;
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
				}
			});
		}else{
			make_navi(before_query,after_query);
			return;
		}
	}

	function make_navi(before_query,after_query) {
		var a_query_page = after_query.substr(1,location.search.length-1).split("&");
		a_query_page=a_query_page[2];
		if((a_query_page==undefined)||(a_query_page=='p=0')) {after_query='';}
		var tmp='<div class="report_navi clearfix">';
		if(before_query==''){tmp+='<div class="leftF"></div>';}else{tmp+='<div class="leftF"><a href="'+before_query+'" style="color: #060;">前の報告書へ</a></div>'}
		if(after_query==''){tmp+='<div class="rightF"></div>';}else{tmp+='<div class="rightF"><a href="'+after_query+'" style="color: #060;">次の報告書へ</a></div>'}
		$('.ig_battle_table').before(tmp);
	}

	function facility_tool() {
		if(!options['facility_tool']) return;
		if(location.pathname != "/village.php") return;
		var tmp = '<div id="tooltip"><ul id="facilityUnit" style="text-align:left"></ul></div>';
		$(document.body).append(tmp);
		$("#tooltip").hide().css({ position: "absolute", backgroundColor: "white", border: "solid 1px darkgray", padding: "3px", zIndex: 999});
		$("#mapOverlayMap area[href]").bind("contextmenu", function(event){openTool(this, event.pageX, event.pageY);event.preventDefault();return false;});
	}
	function openTool(target, x, y) {
		$("#tooltip").css({ left: x + "px", top: y + "px"}).show();
		$(document).unbind("click").one("click", function(){$("#tooltip").hide();});
		/*
		$("#facilityUnit").text("").append("<li style='padding:0px 10px'><img src='http://www.jj-midi.com/image/wait.gif' style='opacity: 0.6' /></li>");
		*/
		$("#facilityUnit").text("").append("<li style='padding:0px 10px'><img src='" + IMAGES.wait + "' style='opacity: 0.6' /></li>");
		$.ajax({
				type: "POST",
				url: '/'+$(target).attr('href'),
				cache: false,
				success: function (html){
					var unit_list=[];
					$(html).find('h3').each(function(){
						if($(this).find('a').text()!=''){
							var unit = $(this).find('a').text();
							var lvup = $(this).parent().parent().parent().find('img[alt="この施設をレベルアップする"]').attr('alt');
							var url = $(this).parent().parent().parent().find('a[href^="build.php"]').attr('href');
							url=url.replace('&mode=cp','');
							if(lvup==undefined) {
								unit_list.push({mod:'c',unit:unit,url:url});
							} else {
								unit_list.push({mod:'u',unit:unit,url:url});
							}
						}
					});
					if(unit_list==undefined) {
						$("#tooltip").hide();
						return;
					} else {
						addUnit(unit_list);
						return;
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					$("#tooltip").hide();
				}
		});
	}
	function addUnit(unit_list){
		$("#facilityUnit").text("");
		for(i=0;i<unit_list.length;i++) {
			var mod = unit_list[i].mod=='c' ? '建設':'LvUP';
			$('#facilityUnit').append('<li id="fUnit'+i+'" url="'+unit_list[i].url+'" style="color:black; padding:0px 10px; cursor:default">'+mod+'['+unit_list[i].unit+']</li>');
			$('#fUnit'+i).hover(function() {
				$(this).css({color:'white', 'background-color':'blue'});
			}, function() {
				$(this).css({color:'', 'background-color':''});
			}).click(function(e) {
				location.href="/facility/"+$(this).attr('url');
			});
		}
	}

	function prohibitionArea(){
		if(!options['prohibitionArea']) return;
		if(location.pathname != "/map.php") return;
		base_area = [
			[12,28],[28,12],[12,52],[36,36],[52,12],[12,76],[36,60],[60,36],[76,12],[12,100],
			[36,84],[60,60],[84,36],[100,12],[12,124],[36,108],[60,84],[84,60],[108,36],[124,12],
			[12,148],[36,132],[60,108],[84,84],[108,60],[132,36],[148,12],[36,156],[60,132],[84,108],
			[108,84],[132,60],[156,36],[60,156],[84,132],[108,108],[132,84],[156,60],[84,156],[108,132],
			[132,108],[156,84],[108,156],[132,132],[156,108],[132,156],[156,132],[156,156]
		];
		var c = $('#ig_mapbox_container').find('a:eq(0)').attr('href').match(/c=\d+$/);
		for(var i=0;i<4;++i){
			var x,y;
			switch (i) {
				case 0:x=1;y=1;break;
				case 1:x=1;y=-1;break;
				case 2:x=-1;y=-1;break;
				case 3:x=-1;y=1;break;
			}
			for(var j=0;j<base_area.length;++j){
				var url="/land.php?x="+base_area[j][0]*x+"&y="+base_area[j][1]*y+"&"+c;
				if($('area[href="'+url+'"]').attr('alt')!=undefined) {
					area_loop(base_area[j][0],base_area[j][1],x,y,c);
					return;
				}
			}
		}
	}
	function area_loop(a,b,x,y,c) {
		for(var z=1;z<4;z++) {
			var xx = new Number(a);
			var yy = new Number(b);
			xx = (xx+z)*x;
			yy = (yy)*y;
			var url="/land.php?x="+xx+"&y="+yy+"&"+c;
			overOperation2(url);
			for(s=1;s<4;s++) {
				var ss=yy+s;
				var url="/land.php?x="+xx+"&y="+ss+"&"+c;
				overOperation2(url);
				ss=yy-s;
				var url="/land.php?x="+xx+"&y="+ss+"&"+c;
				overOperation2(url);
			}
		}
		for(var z=1;z<4;z++) {
			var xx = new Number(a);
			var yy = new Number(b);
			xx = (xx-z)*x;
			yy = (yy)*y;
			var url="/land.php?x="+xx+"&y="+yy+"&"+c;
			overOperation2(url);
			for(s=1;s<4;s++) {
				var ss=yy+s;
				var url="/land.php?x="+xx+"&y="+ss+"&"+c;
				overOperation2(url);
				ss=yy-s;
				var url="/land.php?x="+xx+"&y="+ss+"&"+c;
				overOperation2(url);
			}
		}
		for(var z=1;z<4;z++) {
			var xx = new Number(a);
			var yy = new Number(b);
			xx = (xx)*x;
			yy = (yy+z)*y;
			var url="/land.php?x="+xx+"&y="+yy+"&"+c;
			overOperation2(url);
		}
		for(var z=1;z<4;z++) {
			var xx = new Number(a);
			var yy = new Number(b);
			xx = (xx)*x;
			yy = (yy-z)*y;
			var url="/land.php?x="+xx+"&y="+yy+"&"+c;
			overOperation2(url);
		}
	}

	function overOperation2(url){
		if($('area[href="'+url+'"]').attr('alt')!=undefined) {
			var w_script=$('area[href="'+url+'"]').attr('onmouseover').toString();
			w_script = w_script.substring(w_script.indexOf('overOperation'),w_script.length-2);
			w_script=w_script.replace("overOperation(","");
			w_script=w_script.replace(");","");
			w_script=w_script.replace(/\'|\"/g,"");
			w_script=w_script.replace(/\s/g,"");
			w_script=w_script.split(',');
			var tmp=$('img#rollover').clone();
			/*
			tmp.attr('src','http://www.jj-midi.com/image/panel_rollover_pink.png');
			*/
			tmp.attr('src', IMAGES.panel_rollover_pink);
			tmp.attr('id','');
			tmp.css('left',w_script[1]);
			tmp.css('top',w_script[2]);
			$('map#mapOverlayMap').after(tmp);
		}
	}

	function zoomMap() {
		if(!options['zoomMap']) return;
		if(location.pathname != "/map.php") return;
		$('#zoombox').remove();
		var zoom_box = $('<div id="zoombox">').css({fontSize:'10px',zIndex:1000, width:'136px', height:'75px', position:'absolute', top:'100px', left:'10px', padding:'0 0 11px 0'});
		$('#ig_mapbox').prepend(zoom_box);
		zoom_box = $('<div id="zoomboxInner">').css({padding:'5px 7px'});
		$('#zoombox').prepend(zoom_box);
		zoom_box = '<ui><li id="zoomImg"><img src="/img/common/dummy.gif" id="timg"></li></ui>';
		$('#zoomboxInner').prepend(zoom_box);
		$('area').each(function(){
			if($(this).attr('alt').indexOf('空き地')>=0) return true;
			$(this).hover(function(){
				var left = $('img#rollover').css('left');
				var top = $('img#rollover').css('top');
				$('img[class^="mapAll"]').each(function(){
					var t_left = $(this).css('left');
					var t_top = $(this).css('top');
					var w_top = new Number(t_top.replace('px',''));
					w_top=w_top-2;
					w_top=w_top+'px';
					if(((left==t_left)&&(top==t_top))||((left==t_left)&&(top==w_top))) {
						$('#timg').attr('src',$(this).attr('src'));
						$('#timg').css('width','105%');
						return false;
					}
				});
			},function(){$('#timg').attr('src','/img/common/dummy.gif');$('#timg').css('width','1px');});
		});
	}

	function favoriteSort() {
		if(!options['favoriteSort']) return;
		if(location.pathname != "/card/deck.php") return;
		var favorite = $('<div id="favoritebox">').css({'background':'url(/img/deck/box04_title.png) no-repeat left top','width':'729px','height':'34px','padding':'4px 9px 0px 9px','margin-bottom':'8px','margin-left':'12px'});
		$('#ig_deck_cardlistmenu.clearfix.deck_card_menu').after(favorite);
		favorite = $('<div id="favoritearea">').css({'float':'left','width':'729px','padding-top':'6px'});
		$('#favoritebox').append(favorite);
		favorite = '<select id="favoriteselect"></select>&nbsp;&nbsp;&nbsp;&nbsp;<input type=button value="変更する" id="favoriteupdate">&nbsp;&nbsp;&nbsp;&nbsp;<input type=button value="保存する" id="favoritesave">&nbsp;&nbsp;&nbsp;&nbsp;<input type=button value="削除する" id="favoritedelete">';
		$('#favoritearea').append(favorite);
		$('#favoritesave').click(favoriteSave);
		$('#favoritedelete').click(favoriteDelete);
		$('#favoriteupdate').click(favoriteUpdate);
		favoriteView();
	}

	function favoriteView() {
		var favorite_list = {};
		if(localStorage.getItem("ixakaizou_favorite_list")!=null) {
			favorite_list = secureEvalJSON(localStorage.getItem("ixakaizou_favorite_list"));
		}
		$('#favoriteselect').children().remove();
		$('#favoriteselect').append('<option>----お気に入りソート選択----</option>');
		for (i in favorite_list) {
			var tmp='<option value="'+favorite_list[i]+'">'+i+'</option>';
			$('#favoriteselect').append(tmp);
		}
	}

	function favoriteSave() {
		var favorite_list = {};
		var l_key = '';
		var l_val = new Array();
		if(localStorage.getItem("ixakaizou_favorite_list")!=null) {
			favorite_list = secureEvalJSON(localStorage.getItem("ixakaizou_favorite_list"));
		}
		for(i=0;i<3;i++) {
			l_key+=$('#sort_order_'+i).children(':selected').text()+':';
			l_key+=$('#sort_order_type_'+i).children(':selected').text()+'　';
			l_val.push($('#sort_order_'+i).children(':selected').attr('value'));
			l_val.push($('#sort_order_type_'+i).children(':selected').attr('value'));
		}
		favorite_list[l_key] = l_val.join('/');
		localStorage.setItem('ixakaizou_favorite_list', toJSON(favorite_list));
		favoriteView();
	}

	function favoriteDelete() {
		var favorite_list = {};
		var favorite_list_new = {};
		if(localStorage.getItem("ixakaizou_favorite_list")!=null) {
			favorite_list = secureEvalJSON(localStorage.getItem("ixakaizou_favorite_list"));
		}
		var target=$('#favoriteselect').children(':selected').attr('value');
		if(target==undefined) return;
		for (i in favorite_list) {
			if(favorite_list[i]!=target) {
				favorite_list_new[i] = favorite_list[i];
			}
		}
		localStorage.setItem('ixakaizou_favorite_list', toJSON(favorite_list_new));
		favoriteView();
	}

	function favoriteUpdate() {
		var target=$('#favoriteselect').children(':selected').attr('value');
		if(target==undefined) return;
		target = target.split('/');
		$('#sort_order_0').val(target[0]);
		$('#sort_order_type_0').val(target[1]);
		$('#sort_order_1').val(target[2]);
		$('#sort_order_type_1').val(target[3]);
		$('#sort_order_2').val(target[4]);
		$('#sort_order_type_2').val(target[5]);
		$('input.sortSubmit').trigger("onclick");
	}

	function fall_check() {
		if(!options['fall_check']) return;
		if(location.pathname != "/user/") return;
		$('div.common_box3bottom').find('.fs14').each(function() {
			var $this = $(this);
			switch ($this.find('td:eq(0)').text()) {
				case '本領': case '所領': case '出城': break;
				default: return true;
			}
			var nm = $this.find('a:eq(0)').text().replace(/^\s+|\s+$/g, "");
			var tmp = $this.find('a:eq(1)').attr('href').match(/\/land\.php\?(.+)$/);
			var ins_point = $this.find('a:eq(0)');
			$.ajax({
				url: '/map.php?'+tmp[1] + '&type=1', 
				cache: false, 
				dataType: "text",
				success: function (html){
					var imgsrc = $(html).find('div#ig_mapsAll > img[class="mapAll61"]').attr('src');

					if (imgsrc.indexOf('fall_capital') > 0) {
						ins_point.after("<span class='red'>(陥落中)</span>");
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					//console.log(textStatus);
				}
			});
		});
	}

	// add end

	// JSON関連
	// jquey.json-2.2.jsから。MITライセンスに基づき著作権表示を記載します。
/*
 * jQuery JSON Plugin
 * version: 2.1 (2009-08-14)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Brantley Harris wrote this plugin. It is based somewhat on the JSON.org 
 * website's http://www.json.org/json2.js, which proclaims:
 * "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 * I uphold.
 *
 * It is also influenced heavily by MochiKit's serializeJSON, which is 
 * copyrighted 2005 by Bob Ippolito.
 */
	var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
	var _meta = {
		'\b': '\\b',
		'\t': '\\t',
		'\n': '\\n',
		'\f': '\\f',
		'\r': '\\r',
		'"' : '\\"',
		'\\': '\\\\'
	};

	function toJSON(o) {
		if (typeof(JSON) == 'object' && JSON.stringify)
			return JSON.stringify(o);
		
		var type = typeof(o);
	
		if (o === null)
			return "null";
	
		if (type == "undefined")
			return undefined;
		
		if (type == "number" || type == "boolean")
			return o + "";
	
		if (type == "string")
			return quoteString(o);
	
		if (type == 'object')
		{
			if (typeof o.toJSON == "function") 
				return toJSON( o.toJSON() );
			
			if (o.constructor === Date)
			{
				var month = o.getUTCMonth() + 1;
				if (month < 10) month = '0' + month;

				var day = o.getUTCDate();
				if (day < 10) day = '0' + day;

				var year = o.getUTCFullYear();
				
				var hours = o.getUTCHours();
				if (hours < 10) hours = '0' + hours;
				
				var minutes = o.getUTCMinutes();
				if (minutes < 10) minutes = '0' + minutes;
				
				var seconds = o.getUTCSeconds();
				if (seconds < 10) seconds = '0' + seconds;
				
				var milli = o.getUTCMilliseconds();
				if (milli < 100) milli = '0' + milli;
				if (milli < 10) milli = '0' + milli;

				return '"' + year + '-' + month + '-' + day + 'T' +
							 hours + ':' + minutes + ':' + seconds + 
							 '.' + milli + 'Z"'; 
			}

			if (o.constructor === Array) 
			{
				var ret = [];
				for (var i = 0; i < o.length; i++)
					ret.push( toJSON(o[i]) || "null" );

				return "[" + ret.join(",") + "]";
			}
		
			var pairs = [];
			for (var k in o) {
				var name;
				var type = typeof k;

				if (type == "number")
					name = '"' + k + '"';
				else if (type == "string")
					name = quoteString(k);
				else
					continue;  //skip non-string or number keys
			
				if (typeof o[k] == "function") 
					continue;  //skip pairs where the value is a function.
			
				var val = toJSON(o[k]);
			
				pairs.push(name + ":" + val);
			}

			return "{" + pairs.join(", ") + "}";
		}
	};

	function secureEvalJSON(src) {
		
		if (typeof(JSON) == 'object' && JSON.parse)
			return JSON.parse(src);
		
		var filtered = src;
		filtered = filtered.replace(/\\["\\\/bfnrtu]/g, '@');
		filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
		filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
		
		if (/^[\],:{}\s]*$/.test(filtered))
			return eval("(" + src + ")");
		else
			throw new SyntaxError("Error parsing JSON, source is not valid.");
	};

	function quoteString(string) {
		if (string.match(_escapeable))
		{
			return '"' + string.replace(_escapeable, function (a) 
			{
				var c = _meta[a];
				if (typeof c === 'string') return c;
				c = a.charCodeAt();
				return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
			}) + '"';
		}
		return '"' + string + '"';
	};

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

	function getCookie(name) {
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = $.trim(cookies[i]);
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}

////////////////////////////////

	function getUnixTime() {
		return ~~(new Date/1000);
	}
	function formatTime(sec) {
		var h = Math.floor(sec / 3600);
		var m = Math.floor((sec - h*3600 ) / 60 );
		var s = Math.floor(sec - h*3600 - m*60 );
		var tim = h + ":" +
				  (m+100).toString().substr(-2)  + ":" +
				  (s+100).toString().substr(-2);
		return tim;
	}

	function ArraytoJSON(src) {
		var tmp = '';
		for(var i=0;i<src.length;++i) {
			if (tmp!='') tmp += ',';
			tmp += '"'+src[i].replace('"', '\"')+'"';
		}
		return '['+tmp+']';
	}

//---------------------------
// 婆羅門機能追加分 ここから
//---------------------------
	var gifdoko = 'data:image/gif;base64,'+
	'R0lGODlhNwAYAMQAAP////n5+e7u7tfX18zMzMXFxb29vbW1ta2traWlpZmZmZSUlIyMjIWFhXp6'+
	'enNzc2tra2ZmZlpaWlFRUUpKSkJCQjk5OTMzMykpKSEhIRgYGBMTEwkJCQAAAAAAAAAAACH5BAEH'+
	'AAAALAAAAAA3ABgAAAX/ICCOZGmeaKqSBKIoh5sUdGEgCXLsMb0niYPhANzRDAbfQZErDEwCF4LA'+
	'fL0ItQIxyEMiY7kdLpi02XYvYEJAQrjS44Ri6kXidELvGYgYFg9HNAo2VgpsAFpLMHMEBlYFeAlJ'+
	'YESAdTd/d302X45WBCI3OjAFLwwTExIJDg0ZHH1fQTlJdQcMD5E5ChIYC3RpCqE2Y0sFDR0dEAoZ'+
	'HREdGVhHOggMDA6SjsgVchIVG8gdHAyEViKANC4EQMcd1wwcGxISLwvg9h3jNhDIEQ7gGRQeqFFX'+
	'DoAbOzOW+MMHJEIEIFYuXGAGzkKDTQYkZDhwDEOfLXI8vRChIweOUgrq/zWDgOGZHCtBKFLwRQlJ'+
	'ATnhMOjUSYGRnALmTM6igkDDvQ5BCilgYEEBwh0NUE24dbQDhitMEoQSNcaRBA7INlTIVwALgwvz'+
	'DmCZ5EYCuAZuLxBwpuqNGxxb7bhZ0LLDhXElxRyYEK4BjEY1ljxg5qBChwkK6IJ0A4PkJjAUwkE4'+
	'5zTrjm8RlGYp1XJfB8POImjp6sIyLCTI5pm0UlIBMgijHmVpCXbDC8IRvMQYE3Q4IG1qElBhgIBG'+
	'gm8cJNxyIGHChayEwTnAQVgCp9VytrqplJ3DToqqTIGt6stxuLA7d3Iwo0UrAOF9cEC4cDTDNSJL'+
	'QUDBgA71MwcDHVSggIsFVVl1jhcikJHEXVw8ddAQnrQwB1sNbWFLAw04wACIWdUhgjqb2GDSa6LE'+
	'cE4pLpTyBQ931UgEAR6OZ8AT5rjhw02yvOZiDF68gNILO3hRxBtANILHcCQI8EMnw+mol4sGvFQI'+
	'Dnn4ocsLNQJhwCEs2FHLNEJyAUYhkNxRBw6OoNkcjyvUaeedJ4QAADs=';

	var showLinkFlag = false;

	function showLinksAtDeck() {
		function ulno(lname) {
			var lis = $('ul#ig_unitchoice li');
			//var tmp = "";
			for (var i=0; i < lis.length; i++) {
				var re = lis.eq(i).text().match(/\[([^\]]+)\]部隊/);
				if (re != null) {
					if (RegExp.$1 == lname) return i;
				}
			}
			return -1;
		}

		if (showLinkFlag == true) return;
		if(location.pathname != "/card/deck.php") return;
		if ( $('div.ig_deck_unitdata_assign.deck_wide_select select#select_village').length != 0) return;
		var re = $('div#ig_deck_unititle p').text().match(/\[([^\]]+)\]部隊/);
		var lname = RegExp.$1;
		var ano = ulno(lname);
		//alert('lname='+lname+ "\n" + "ano="+ ano +"\n");
		var mplace = $.trim($('div.ig_deck_unitdata_assign.deck_wide_select').text());
		//alert(mplace);
		//alert('mplace='+mplace+"\n"+ ">div.sideBoxInner ul li:contains('"+ mplace + "') a<");
		if ($("div.sideBoxInner ul li.on span").text() == mplace) {
			var tmp = '<span><a style="float:right; position: relative; top: 5px; right: 10px;"> * </a></span>';
			$('div.deck_select_lead p').append(tmp);
		} else {
			var aes = $("div.sideBoxInner ul li:contains('"+ mplace + "') a");
			//alert('aes.eq(0)='+aes.eq(0).html());
			for (var i = 0; i < aes.length; i++) {
				var href = aes.eq(i).attr('href');
				//alert('href='+href);
				var ttl = aes.eq(i).attr('title');
				if (ttl.indexOf(mplace+' ') == 0) {
					var s = href.match(/(village_id=[0-9]+)&/);
					var lnk = RegExp.leftContext + RegExp.$1 +'&amp;from=menu&amp;page=%2Fcard%2Fdeck.php';
					if (ano > 0) lnk += '?ano='+ano;
					var tmp = '<span><a href="' + lnk + '" title="'+ttl+'" style="float:right; position: relative; top: 5px; right: 10px;"> @ </a></span>';
					$('div.deck_select_lead p').append(tmp);
				}
			}
				//alert(tmp);
		}
		//alert('aes.length = '+ aes.length);
		showLinkFlag = true;
	}

	var Territ = function ( ttype, tname, pos, population, cond, map) {
		this.ttype	  = ttype;		//種類 (本領/所領)
		this.tname	  = tname;		//名前
		this.pos		= pos;			//座標 'x,y'
		this.population = population;	//人口
		this.condition  = cond;			//状態
		this.map		= map;			//c
	}

	var ixaPos = new Object();
	ixaPos.txtFall  = "陥落中";
	ixaPos.txtLand  = "領地";
	ixaPos.txtNorm  = "通常拠点";
	ixaPos.txtFalen = "陥落拠点";
	ixaPos.txtDist  = "距離";
	ixaPos.txtE  = "東";
	ixaPos.txtNE = "北東";
	ixaPos.txtN  = "北";
	ixaPos.txtNW = "北西";
	ixaPos.txtW  = "西";
	ixaPos.txtSW = "南西";
	ixaPos.txtS  = "南";
	ixaPos.txtSE = "南東";
	ixaPos.txtTo   = "へ";
	ixaPos.txtFrom = "から";
	ixaPos.x = '0';		//x座標
	ixaPos.y = '0';		//y座標
	ixaPos.c = '12';	//領地
	ixaPos.setPosition = function(x0, y0, c0) {
		this.x = x0;
		this.y = y0;
		this.c = c0;
	}
	ixaPos.dokochikaStr = function(data, stype) {
		function pos2str(x0,y0,x1,y1) {
			// ２点の座標から、方向と距離を示す文字列を作成
			// [方向] へ 距離 [n.nn]
			var dx = x1 - x0;
			var dy = y1 - y0;
			var dist = Math.sqrt(dx*dx + dy*dy);
			var sd;
			var ss = null;
			if (dx == 0.0 && dy == 0.0) {
				ss = " " + ixaPos.txtDist + " " + num2diststr(dist);
			} else if (dx == 0.0) {
				if (dy > 0.0) sd = ixaPos.txtN;
				else		  sd = ixaPos.txtS;
			} else if (dy == 0.0) {
				if (dx > 0.0) sd = ixaPos.txtE;
				else		  sd = ixaPos.txtW;
			} else {
				var v = Math.atan2(dy,dx);
				if (v < -Math.PI * 7/8) sd = ixaPos.txtW;
				else if (v <= -Math.PI * 5/8) sd = ixaPos.txtSW;
				else if (v < -Math.PI * 3/8)  sd = ixaPos.txtS;
				else if (v <= -Math.PI /8)	sd = ixaPos.txtSE;		
				else if (v < Math.PI /8)	  sd = ixaPos.txtE;
				else if (v <= Math.PI*3/8)	sd = ixaPos.txtNE;		
				else if (v < Math.PI * 5/8)   sd = ixaPos.txtN;
				else if (v <= Math.PI*7/8)	sd = ixaPos.txtNW;
				else sd = ixaPos.txtW;
			}
			if (ss == null) {
				ss = " " + sd + " " + ixaPos.txtTo + " " + ixaPos.txtDist + " " + num2diststr(dist);
			}
			return ss;
		}
		//距離を示す文字列を作成（小数点以下２桁)
		function num2diststr(d) {
			var x = d * 100.0 + 1000000.5;
			var s = String(parseInt(x));
			s = s.substr(1);
			var len = s.length;
			s = s.substr(0,len-2) + "." + s.substr(len-2);
			while (s.substr(0,1) == "0") s = s.substr(1);
			if (s.substr(0,1) == ".") s = "0"+s;
			return s;
		}

		var x0 = Number(this.x);
		var y0 = Number(this.y);
		var cn = Number(this.c);
		var dnmin = new Array(999,999,999);	//通常拠点最短距離
		var dlmin = new Array(999,999,999);	//領地最短距離
		var dfmin = new Array(999,999,999);	//陥落拠点最短距離
		var dpx   = -1;
		var dnorm = new Array(-1,-1,-1);
		var dland = new Array(-1,-1,-1);
		var dfall = new Array(-1,-1,-1);
		var x1,y1,d;
		var pos;
		var px = -1;
		for (var i = 0; i < data.length; i++) {
			//alert("cn:"+cn + "  : "+ teridata[i].map);
			if (cn == Number(data[i].map)) {	//同じマップの拠点であること
				pos = data[i].pos.split(",");
				x1 = parseFloat(pos[0]);
				y1 = parseFloat(pos[1]);
				if (x0 == x1 && y0 == y1) continue;	//同じ座標ならスキップ
				d = Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0));
				//alert("x1="+x1+"\n"+ "y1="+y1+"\n" + "x0="+x0+"\n" + "y0="+y0+"\n"+ "d="+d);
				//if (data[i].condition == this.txtFall) {
				if (data[i].condition.indexOf(this.txtFall) == 0) {		//陥落中
					//alert(txtFall +" "+ i);
					if (d <= dfmin[0]) {
						//dfmin[2]=dfmin[1]; dfmin[1]=dfmin[0]; dfmin[0] = d;
						dfmin.unshift(d); dfmin.pop();
						//dfall[2]=dfall[1]; dfall[1]=dfall[0]; dfall[0] = i;
						dfall.unshift(i); dfall.pop();
					}
				//} else if (data[i].ttype == this.txtLand) {
				} else if (data[i].ttype.indexOf(this.txtLand) == 0) {	//領地
					//alert(txtLand +" "+ i);
					if (d <= dlmin[0]) {
						//dlmin[2]=dlmin[1]; dlmin[1]=dlmin[0]; dlmin[0] = d;
						dlmin.unshift(d); dlmin.pop();
						//dland[2]=dland[1]; dland[1]=dland[0]; dland[0] = i;
						dland.unshift(i); dland.pop();
					}
				} else {
					//alert(txtNorm +" "+ i);
					if (d <= dnmin[0]) {
						//dnmin[2]=dnmin[1]; dnmin[1]=dnmin[0]; dnmin[0] = d;
						dnmin.unshift(d); dnmin.pop();
						//dnorm[2]=dnorm[1]; dnorm[1]=dnorm[0]; dnorm[0] = i;
						dnorm.unshift(i); dnorm.pop();
					} else {
						if (dnmin[0] != 0.0) {
							if ((d <= 10.0) || (d/dnmin[0] > 1.25)) {
								if (d <= dnmin[1]) {
									dnmin[2]=dnmin[1]; dnmin[1]=d;
									dnorm[2]=dnorm[1]; dnorm[1]=i;
								}
							} else {
								if ((d <= 10.0) || (d/dnmin[0] > 1.25)) {
									dnmin[2]=d;
									dnorm[2]=i;
								}
							}
						}
					}
				}
				
			}
			//	alert("error i="+i + "\nterridata.length="+teridata.length);
			//}
		}
		for (var i=1; i < dnmin.length; i++) {
			if (dnmin[i] > 10 && dnmin[i] > dnmin[0]*1.25) {
				dnmin[i] = 999;
			}
		}
		for (var i=0; i < dlmin.length; i++) { if (dnmin[0] <= dlmin[i]) dlmin[i] = 999; }
		for (var i=0; i < dfmin.length; i++) { if (dnmin[0] <= dfmin[i]) dfmin[i] = 999; }
		if (stype == 1) {
			var s = "<<< ("+x0+","+y0+") への攻略検討 >>>";
			for (var i=0; i < dnmin.length; i++) {
				if (dnmin[i] < 999) {
					pos = data[dnorm[i]].pos.split(",");
					x1 = parseFloat(pos[0]);
					y1 = parseFloat(pos[1]);
					s += "\n" + data[dnorm[i]].tname + "("+ pos[0] + "," + pos[1] + ")"+this.txtFrom+pos2str(x1,y1,x0,y0);
				}
			}
			for (var i=0; i < dfmin.length; i++) {
				if (dfmin[i] < 999) {
					pos = data[dfall[i]].pos.split(",");
					x1 = parseFloat(pos[0]);
					y1 = parseFloat(pos[1]);
					s += "\n[" + this.txtFalen +"]" + data[dfall[i]].tname + "("+ pos[0] + "," + pos[1] + ")"+this.txtFrom+pos2str(x1,y1,x0,y0);
				}
			}
			for (var i=0; i < dlmin.length; i++) {
				if (dlmin[i] < 999) {
					pos = data[dland[i]].pos.split(",");
					x1 = parseFloat(pos[0]);
					y1 = parseFloat(pos[1]);
					s += "\n["+ this.txtLand +"]" + data[dland[i]].tname + "("+ pos[0] + "," + pos[1] + ")"+this.txtFrom+pos2str(x1,y1,x0,y0);
				}
			}
			return s;
		} else {
			var s = "";
			var ns = null;
			if (dnmin[0] < 999) {
				s += num2diststr(dnmin[0]);
			} else {
				s += "*";
			}
			if (dlmin[0] < 999) {
				ns = num2diststr(dlmin[0]);
			}
			if (ns == null && dfmin[0] < 999) {
				ns = num2diststr(dfmin[0]);
			}
			if (ns != null) {
				s += '(' + ns + ')';
			}
			return s;
		}
	}

	var teridata = new Array();   //城主の拠点データ

	var profTeriDoneflag = false;	//拠点情報読み込み完了フラグ
	var dokojob = false;			//実行中フラグ
	
	var dokoId;
	var dokocnt;

	//
	// 自分の拠点のデータを元に、ixaPosの地点までのどこ近を表示します
	//
	function showAdvice() {
		//alert("teridata.length="+teridata.length);
		var s = ixaPos.dokochikaStr(teridata, 1);
		alert(s);
	}

	//
	// どこ近メイン
	//
	function calc_dokochika(src){
		if (dokojob) return;
		dokojob = true;

		//if (src.match(/\?x=(-?[0-9]+)&y=(-?[0-9]+)(&type=[123])?&c=([0-9]+)/) != null) {
		if (src.match(/displayMenu\((.*)\);/) != null) {
			//ixaPos.setPosition(RegExp.$1, RegExp.$2, RegExp.$4);	//x,y,c
			var p = new Array();
			p = posinfo(src);
//GM_log("p[0]:"+p[0]);
//GM_log("p[1]:"+p[1]);
//GM_log("p[2]:"+p[2]);
//GM_log("p[3]:"+p[3]);
//GM_log("p[4]:"+p[4]);
//GM_log("p[5]:"+p[5]);
//GM_log("p[6]:"+p[6]);
//GM_log("p[7]:"+p[7]);
//GM_log("p[8]:"+p[8]);
			ixaPos.setPosition(p[5], p[6], p[7]);	//x,y,c

			profTeriDoneflag = false;
			pickJoshuProfData('http://' + window.location.host + '/user/', teridata);
			//alert('teridata.length='+teridata.length);
			dokocnt = 0;
			dokoId = setInterval( function() { 
										dokocnt++;
										if (profTeriDoneflag) {
											clearInterval(dokoId);
											showAdvice();
											dokojob = false;
										} else if ( dokocnt > 60 ) {
											clearInterval(dokoId);
											dokojob = false;
										}
										dokocnt;
									}, 500);
		} else {
			alert("ここはどこ？");
		}
	}

	//
	// 城主プロフィール（自分の）から拠点データを収集する
	// 結果は dataに　(teridataが参照されてる）
	//
	function pickJoshuProfData(profUrl, data) {
		data.splice(0,data.length);		//データがあったらクリア
		$.ajax({
			url: profUrl, 
			cache: false, 
			dataType: "text",
			success: function (html){
				var tbls = $(html).find("table.common_table1.center");
				//var mts =getIxaHrefs(tbltxt);
				var trs = tbls.find('tr.fs14');
				//alert('tericount=' + tericount);
				var s, re;
				var territ0 = 0;
				var ctp;
				for (var i = 0; i < trs.length; i++) {
					var tds = trs.eq(i).find('td');
					var ttype = tds.eq(0).text();		//本領・所領 など
					var tname = $.trim(tds.eq(1).find('a').text());
					var tpos  = tds.eq(2).find('a').text();
					var tland = tds.eq(2).find('a').attr('href');
					var tpopu = tds.eq(3).text();
					var tcond = tds.eq(4).find('span').text();
					if (tcond == undefined ) tcond = "";
					ctp = ctype(tland);	//c=1～12
					data[territ0+i] = new Territ(ttype, tname, tpos, tpopu, tcond, ctp);
				}
				profTeriDoneflag = true;
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert('$.ajax pickJoshuProfData("'+profUrl+'") error');
				//console.log(textStatus);
			}
		});	
		return;
	}


	function ctype(urlstr) {
		var reg = new RegExp("c=([0-9]+)$","i");
		var tag = urlstr.match(reg);
		return (tag) ? RegExp.$1 : "";
	}

//---------------------------
// 婆羅門機能追加分 ここまで
//---------------------------

}

// load jQuery and execute the main function
Moko_addJQuery(Moko_main);
