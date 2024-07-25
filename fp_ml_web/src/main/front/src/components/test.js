import React, { useState, EventHandler, ReactNode } from 'react'

const Container = () => {
	return (<div className="w-[418px] h-[842px] flex flex-row items-start justify-start pt-[32px] pr-[24px] pb-[32px] pl-[16px]">
  <div className="flex-1 flex flex-col items-start justify-start">
    <div className="self-stretch flex flex-row items-start justify-center gap-[16px]">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="relative w-[16px] h-[16px] shrink-0 bg-[#fff] rounded-[100px] overflow-hidden">
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#fff]"></div>
          <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="10" height="10" src="misc/dot_04_l303_11940.png"></img>
        </div>
        <img width="0" height="204" src="Divider303_11942.png"></img>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] pt-0 px-0 pb-[24px]">
        <div className="text-[12px] leading-[16px] tracking-[.01em] font-['Outfit'] font-medium text-[#2e2e48] text-center whitespace-nowrap">Experience</div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-center gap-[8px]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="relative w-[12px] h-[12px] shrink-0 rounded-[100px] overflow-hidden">
                <div className="absolute left-0 right-0 top-0 bottom-0"></div>
                <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="7" height="7" src="misc/dot_04_lI303_11944;44_27106.png"></img>
              </div>
              <img width="0" height="30" src="DividerI303_11944;33_26941.png"></img>
            </div>
            <div className="flex-1 self-stretch flex flex-row items-start justify-center gap-[4px] pt-[3px] px-0 pb-[8px]">
              <div className="w-[120px] shrink-0 flex flex-col items-start justify-start gap-[4px] rounded-[4px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#47516b] whitespace-nowrap">Jul 20 - Jan 2022</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                    <img width="6" height="6" src="basic/locationI303_11944;44_26025.png"></img>
                    <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a] whitespace-nowrap">Cupertino</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative w-[20px] h-[20px] shrink-0 rounded-[5px] overflow-hidden">
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="20" height="20" src="VectorI303_11944;33_27006.png"></img>
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="20" height="20" src="VectorI303_11944;33_27007.png"></img>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                    <div className="self-stretch text-[6px] leading-[8px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">Product designer</div>
                    <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">Apple</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa illum optio dolorum aut maxime ipsa. Laborum incidunt enim consectetur perspiciatis. Dolore ullam dolor impedit dolorum recusandae facilis quo et. Et ipsam vel sunt qui ut officia voluptatem.</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[8px]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="relative w-[12px] h-[12px] shrink-0 rounded-[100px] overflow-hidden">
                <div className="absolute left-0 right-0 top-0 bottom-0"></div>
                <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="7" height="7" src="misc/dot_04_lI303_11944;44_27130.png"></img>
              </div>
              <img width="0" height="30" src="DividerI303_11944;33_27805.png"></img>
            </div>
            <div className="flex-1 self-stretch flex flex-row items-start justify-center gap-[4px] pt-[3px] px-0 pb-[8px]">
              <div className="w-[120px] shrink-0 flex flex-col items-start justify-start gap-[4px] rounded-[4px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#47516b] whitespace-nowrap">Oct 2015 - Mar 2020</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                    <img width="6" height="6" src="basic/locationI303_11944;44_26009.png"></img>
                    <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a] whitespace-nowrap">Austin</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative w-[20px] h-[20px] shrink-0 rounded-[5px] overflow-hidden">
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="20" height="20" src="VectorI303_11944;33_27816.png"></img>
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="20" height="20" src="VectorI303_11944;33_27817.png"></img>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                    <div className="self-stretch text-[6px] leading-[8px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">UX designer</div>
                    <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">Tesla</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">Commodi atque sit ut qui assumenda earum aperiam occaecati voluptates. Fuga quas aut soluta nostrum et beatae. Maiores repudiandae quibusdam autem enim ut in possimus ad.</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[8px]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="relative w-[12px] h-[12px] shrink-0 rounded-[100px] overflow-hidden">
                <div className="absolute left-0 right-0 top-0 bottom-0"></div>
                <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="7" height="7" src="misc/dot_04_lI303_11944;44_27064.png"></img>
              </div>
              <img width="0" height="30" src="DividerI303_11944;33_28036.png"></img>
            </div>
            <div className="flex-1 self-stretch flex flex-row items-start justify-center gap-[4px] pt-[3px] px-0 pb-[8px]">
              <div className="w-[120px] shrink-0 flex flex-col items-start justify-start gap-[4px] rounded-[4px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#47516b] whitespace-nowrap">Sep 2014 - Aug 2015</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                    <img width="6" height="6" src="basic/locationI303_11944;44_26017.png"></img>
                    <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a] whitespace-nowrap">Mountain View</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative w-[20px] h-[20px] shrink-0 rounded-[5px] overflow-hidden">
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="20" height="20" src="VectorI303_11944;33_28047.png"></img>
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="20" height="20" src="VectorI303_11944;33_28048.png"></img>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                    <div className="self-stretch text-[6px] leading-[8px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">Design system architect</div>
                    <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">Google</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">Ut molestias animi. Neque voluptate velit corporis adipisci voluptate et qui sed neque. Inventore eos non. Qui eveniet quo incidunt nemo.</div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[8px]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="relative w-[12px] h-[12px] shrink-0 rounded-[100px] overflow-hidden">
                <div className="absolute left-0 right-0 top-0 bottom-0"></div>
                <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="7" height="7" src="misc/dot_04_lI303_11944;44_27074.png"></img>
              </div>
            </div>
            <div className="flex-1 self-stretch flex flex-row items-start justify-center gap-[4px] pt-[3px] px-0 pb-0">
              <div className="w-[120px] shrink-0 flex flex-col items-start justify-start gap-[4px] rounded-[4px]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#47516b] whitespace-nowrap">Sep 2010 - Jul 2013</div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                    <img width="6" height="6" src="basic/locationI303_11944;44_25954.png"></img>
                    <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a] whitespace-nowrap">Berlin </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="relative w-[20px] h-[20px] shrink-0 rounded-[5px] overflow-hidden">
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="20" height="20" src="VectorI303_11944;33_28280.png"></img>
                    <img className="absolute left-0 right-0 top-0 bottom-0" width="20" height="20" src="VectorI303_11944;33_28281.png"></img>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                    <div className="self-stretch text-[6px] leading-[8px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">Design system architect</div>
                    <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">Vectornator</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">Non in fugiat aut consequatur deleniti. Consequuntur impedit modi asperiores impedit ut ea aut eligendi doloremque. Fugit laborum ducimus hic tempore velit. Sed vitae et corrupti omnis temporibus. Unde voluptas quaerat ea rerum aspernatur autem assumenda animi fugit. Omnis laborum velit voluptatum similique accusantium eveniet voluptatem.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-start justify-center gap-[16px]">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="relative w-[16px] h-[16px] shrink-0 bg-[#fff] rounded-[100px] overflow-hidden">
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#fff]"></div>
          <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="10" height="10" src="misc/dot_04_l303_11949.png"></img>
        </div>
        <img width="0" height="170" src="Divider303_11951.png"></img>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] pt-0 px-0 pb-[24px]">
        <div className="text-[12px] leading-[16px] tracking-[.01em] font-['Outfit'] font-medium text-[#2e2e48] whitespace-nowrap">Latest projects</div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
          <div className="flex-1 self-stretch flex flex-col items-center justify-start bg-[#f7f9fc] rounded-tl-[4px] rounded-tr-0 rounded-br-0 rounded-bl-[4px] overflow-hidden">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] p-[12px]">
              <img width="64" height="48" src="ImageI303_11953;33_16672.png"></img>
              <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch text-[8px] leading-[10px] font-['DM_Sans'] font-medium text-[#2e2e48]">Powerful Design System</div>
                <div className="self-stretch text-[7px] leading-[9px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">Figma UI Kit and Design System targeting a wide variety of use cases.</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[6px]">
                <div className="relative w-[12px] h-[12px] shrink-0 rounded-[100px] overflow-hidden">
                  <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#e1e7fe]"></div>
                  <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="7" height="7" src="brand/FigmaI303_11953;33_7729.png"></img>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="text-[8px] leading-[10px] font-['DM_Sans'] font-medium text-[#516cf7] whitespace-nowrap">https//figma.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-start bg-[#f7f9fc] rounded-tl-0 rounded-tr-[4px] rounded-br-[4px] rounded-bl-0 overflow-hidden">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] p-[12px]">
              <img width="64" height="48" src="ImageI303_11953;33_16730.png"></img>
              <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch text-[8px] leading-[10px] font-['DM_Sans'] font-medium text-[#2e2e48]">Modern Website</div>
                <div className="self-stretch text-[7px] leading-[9px] tracking-[.01em] font-['DM_Sans'] text-[#79819a]">Powerful website + dashboard template for your next Chakra UI project.</div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[6px]">
                <div className="relative w-[12px] h-[12px] shrink-0 rounded-[100px] overflow-hidden">
                  <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#e1e7fe]"></div>
                  <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="7" height="7" src="basic/link_02I303_11953;33_7742.png"></img>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch text-[8px] leading-[10px] font-['DM_Sans'] font-medium text-[#516cf7]">https://ui-8.net</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-start justify-center gap-[16px]">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="relative w-[16px] h-[16px] shrink-0 bg-[#fff] rounded-[100px] overflow-hidden">
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#fff]"></div>
          <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="10" height="10" src="misc/dot_04_l303_11958.png"></img>
        </div>
        <img width="0" height="167" src="Divider303_11960.png"></img>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] pt-0 px-0 pb-[24px]">
        <div className="self-stretch text-[12px] leading-[16px] tracking-[.01em] font-['Outfit'] font-medium text-[#2e2e48]">Education</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
            <div className="flex-1 flex flex-col items-start justify-center gap-[4px] py-[8px] px-[12px] bg-[#f7f9fc] rounded-tl-[4px] rounded-tr-0 rounded-br-0">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img width="24" height="24" src="LogoI303_11962;22_10762.png"></img>
                <div className="text-[6px] leading-[8px] font-['DM_Sans'] font-medium text-[#2e2e48] whitespace-nowrap">Memorisely</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[1px]">
                <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">Build a design system</div>
                <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a] text-center whitespace-nowrap">Oct 2021</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-[4px] py-[8px] px-[12px] bg-[#f7f9fc]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img width="24" height="24" src="LogoI303_11962;22_10769.png"></img>
                <div className="text-[6px] leading-[8px] font-['DM_Sans'] font-medium text-[#2e2e48] whitespace-nowrap">UX acadamy</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[1px]">
                <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">UX Design certificate</div>
                <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a] text-center whitespace-nowrap">Nov 2020</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-[4px] py-[8px] px-[12px] bg-[#f7f9fc] rounded-tl-0 rounded-tr-[4px] rounded-br-0 rounded-bl-0">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img width="24" height="24" src="LogoI303_11962;22_10776.png"></img>
                <div className="text-[6px] leading-[8px] font-['DM_Sans'] font-medium text-[#2e2e48] whitespace-nowrap">Coursera</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[1px]">
                <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">Usera research course</div>
                <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a] text-center whitespace-nowrap">Dec 2020</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
            <div className="flex-1 flex flex-col items-start justify-center gap-[4px] py-[8px] px-[12px] bg-[#f7f9fc] rounded-tl-0 rounded-tr-0 rounded-br-0 rounded-bl-[4px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img width="24" height="24" src="LogoI303_11962;22_10809.png"></img>
                <div className="text-[6px] leading-[8px] font-['DM_Sans'] font-medium text-[#2e2e48] whitespace-nowrap">Talent Garden</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[1px]">
                <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">Build a design system</div>
                <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a] text-center whitespace-nowrap">May 2019</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-[4px] py-[8px] px-[12px] bg-[#f7f9fc]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img width="24" height="24" src="LogoI303_11962;22_10816.png"></img>
                <div className="text-[6px] leading-[8px] font-['DM_Sans'] font-medium text-[#2e2e48] whitespace-nowrap">IED Roma</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[1px]">
                <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">Web design master</div>
                <div className="text-[5px] tracking-[.01em] font-['DM_Sans'] text-[#79819a] text-center whitespace-nowrap">Feb 2018</div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-[4px] py-[8px] px-[12px] bg-[#f7f9fc] rounded-tl-0 rounded-tr-0 rounded-br-[4px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                <img width="24" height="24" src="LogoI303_11962;22_10823.png"></img>
                <div className="text-[6px] leading-[8px] font-['DM_Sans'] font-medium text-[#2e2e48] whitespace-nowrap">Awwwards<br/>Academy</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[1px]">
                <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">Web design course </div>
                <div className="text-[6px] leading-[8px] tracking-[.01em] font-['DM_Sans'] text-[#79819a] text-center whitespace-nowrap">Aug 2016</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch flex flex-row items-start justify-center gap-[16px]">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="relative w-[16px] h-[16px] shrink-0 bg-[#fff] rounded-[100px] overflow-hidden">
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#fff]"></div>
          <img className="absolute left-[18.75%] right-[18.75%] top-[18.75%] bottom-[18.75%]" width="10" height="10" src="misc/dot_04_l303_11967.png"></img>
        </div>
        <img width="0" height="190" src="Divider303_11969.png"></img>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] pt-0 px-0 pb-[24px]">
        <div className="self-stretch text-[12px] leading-[16px] tracking-[.01em] font-['Outfit'] font-medium text-[#2e2e48]">Skills</div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
          <div className="flex-1 h-[150px] flex flex-col items-center justify-start gap-[4px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[4px] pt-0 px-0 pb-[4px] rounded-tl-[4px] rounded-tr-0 rounded-br-0">
              <div className="relative w-[12px] h-[12px] shrink-0 rounded-[100px] overflow-hidden">
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#efe2f9]"></div>
                <img className="absolute left-[16.67%] right-[16.67%] top-[16.67%] bottom-[16.67%]" width="8" height="8" src="IconI303_11971;33_15850.png"></img>
              </div>
              <div className="text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48] whitespace-nowrap">Design</div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[4px]">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[4px]">
                <div className="flex-1 self-stretch flex flex-col items-start justify-center p-[8px] bg-[#f7f9fc] rounded-tl-[4px] rounded-tr-0 rounded-br-0">
                  <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#9251f7] text-center">User <br/>Experience</div>
                </div>
                <div className="flex-1 self-stretch flex flex-col items-start justify-center p-[8px] bg-[#f7f9fc] rounded-tl-0 rounded-tr-[4px] rounded-br-0 rounded-bl-0">
                  <div className="self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#9251f7] text-center">Design <br/>System</div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[4px] p-[8px] bg-[#f7f9fc]">
                <div className="flex-1 text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#9251f7] text-center">Web <br/>Design</div>
                <img width="0" height="24" src="DividerI303_11971;33_9455.png"></img>
                <div className="flex-1 text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#9251f7] text-center">Mobile <br/>Design</div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-center gap-[2px] py-[8px] px-[2px] bg-[#f7f9fc] rounded-tl-0 rounded-tr-0 rounded-br-[4px] rounded-bl-[4px]">
                <div className="flex-1 self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#9251f7] text-center flex flex-col justify-center">Wireframing</div>
                <img width="0" height="24" src="DividerI303_11971;33_10678.png"></img>
                <div className="flex-1 self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#9251f7] text-center flex flex-col justify-center">Prototyping</div>
                <img width="0" height="24" src="DividerI303_11971;33_10685.png"></img>
                <div className="flex-1 self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#9251f7] text-center flex flex-col justify-center">Testing</div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-[150px] flex flex-col items-center justify-start gap-[4px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[4px] pt-0 px-0 pb-[4px] rounded-tl-[4px] rounded-tr-0 rounded-br-0">
              <div className="relative w-[12px] h-[12px] shrink-0 rounded-[100px] overflow-hidden">
                <div className="absolute left-0 right-0 top-0 bottom-0 bg-[#e1e7fe]"></div>
                <img className="absolute left-[16.67%] right-[16.67%] top-[16.67%] bottom-[16.67%]" width="8" height="8" src="IconI303_11971;33_16507.png"></img>
              </div>
              <div className="w-[56px] text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#2e2e48]">Development</div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[4px]">
              <div className="flex-1 self-stretch flex flex-col items-center justify-center p-[8px] bg-[#f7f9fc] rounded-tl-[4px] rounded-tr-0 rounded-br-0">
                <div className="text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#516cf7] whitespace-nowrap">React JS</div>
              </div>
              <div className="flex-1 self-stretch flex flex-col items-center justify-center pt-[8px] pr-[8px] pb-[8px] pl-0 bg-[#f7f9fc] rounded-tl-0 rounded-tr-[4px] rounded-br-0 rounded-bl-0">
                <div className="text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#516cf7] text-center whitespace-nowrap">Chakra UI<br/>Emotion<br/>Framer</div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-center gap-[2px] py-[8px] px-[2px] bg-[#f7f9fc]">
              <div className="flex-1 self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#516cf7] text-center flex flex-col justify-center">Typescript</div>
              <img width="0" height="24" src="DividerI303_11971;33_21857.png"></img>
              <div className="flex-1 self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#516cf7] text-center flex flex-col justify-center">NextJS</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
              <div className="flex-1 h-[41px] flex flex-row items-center justify-center gap-[2px] py-[8px] px-[2px] bg-[#f7f9fc] rounded-tl-0 rounded-tr-0 rounded-br-0 rounded-bl-[4px]">
                <div className="flex-1 text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#516cf7] text-center">HTML</div>
                <img width="0" height="24" src="DividerI303_11971;33_21863.png"></img>
                <div className="flex-1 self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#516cf7] text-center flex flex-col justify-center">CSS</div>
                <img width="0" height="24" src="DividerI303_11971;33_21866.png"></img>
                <div className="flex-1 self-stretch text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#516cf7] text-center flex flex-col justify-center">JS</div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center pt-[8px] pr-[8px] pb-[8px] pl-0 bg-[#f7f9fc] rounded-tl-0 rounded-tr-0 rounded-br-[4px]">
                <div className="w-[51px] flex-1 text-[7px] leading-[9px] font-['DM_Sans'] font-medium text-[#516cf7] text-center">Git<br/>Databases<br/>Docker</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>)
}

export default Container