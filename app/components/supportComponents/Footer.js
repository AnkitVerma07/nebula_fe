/* React includes */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');
var Label = require('grommet/components/Label');

/* SASS includes */
//require('../../styles/supportSASS/footer.scss');

var NebulaFooter = React.createClass({
    render: function() {
        return (
            <div className="footer">
                <footer>
                    <div className="links">
                        <Link to="/aboutus" className="grommetux-label--uppercase">About Us</Link>
                        <Link to="/contactus" className="grommetux-label--uppercase">Contact Us</Link>
                        <Link to="/privacypolicy" className="grommetux-label--uppercase">Privacy Policy</Link>
                        <Link to="/termsofuse" className="grommetux-label--uppercase">Terms Of Use</Link>
                    </div>
                    <div className="filler">

                    </div>
                    <div className="ourServices">
                        <div className="students">
                            <Label uppercase={true}>For Students</Label>
                            <Link to="" className="grommetux-label">Our Services</Link>
                        </div>
                        <div className="employers">
                            <Label uppercase={true}>For Employers</Label>
                            <Link to="" className="grommetux-label">Our Services</Link>
                        </div>
                    </div>
                    <div className="filler">

                    </div>
                    <div className="socialMedia">
                        <a href=""><svg version="1.0" width="208.000000pt" height="208.000000pt" viewBox="0 0 208.000000 208.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,208.000000) scale(0.100000,-0.100000)"
                            fill="white" stroke="white">
                            <path fill="#1C2600" stroke="#1C2600" d="M0 1040 l0 -1040 1040 0 1040 0 0 1040 0 1040 -1040 0 -1040 0 0
                            -1040z m1315 946 c467 -141 762 -584 705 -1061 -27 -226 -115 -410 -274 -573
                            -250 -257 -601 -356 -951 -267 -336 85 -596 337 -701 680 -26 84 -28 103 -28
                            270 -1 211 12 273 94 440 132 269 380 463 680 530 46 10 111 14 225 11 139 -3
                            172 -7 250 -30z"/>
                            <path fill="#1C2600" d="M939 1960 c-315 -39 -587 -232 -728 -515 -121 -244 -127 -521 -18
                            -775 43 -100 97 -179 182 -269 122 -129 269 -215 445 -262 110 -30 318 -32
                            424 -6 354 89 614 349 703 703 26 106 24 314 -6 424 -25 96 -83 225 -132 297
                            -72 105 -205 227 -319 291 -158 89 -377 133 -551 112z m-162 -500 c35 -21 51
                            -68 39 -115 -16 -63 -129 -84 -182 -34 -33 31 -34 106 -1 136 42 38 95 43 144
                            13z m555 -240 c51 -15 97 -56 122 -110 18 -39 21 -68 24 -237 l4 -193 -101 0
                            -101 0 0 143 c0 78 -5 159 -10 179 -22 77 -98 99 -147 42 -22 -24 -23 -33 -23
                            -195 l0 -169 -100 0 -100 0 0 270 0 270 100 0 100 0 0 -27 c0 -25 1 -25 19 -9
                            45 41 139 56 213 36z m-522 -270 l0 -270 -90 0 -90 0 0 270 0 270 90 0 90 0 0
                            -270z"/>
                            </g>
                        </svg></a>
                        <a href=""><svg version="1.0" width="208.000000pt" height="208.000000pt" viewBox="0 0 208.000000 208.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,208.000000) scale(0.100000,-0.100000)"
                            fill="white" stroke="white">
                            <path fill="#1C2600" stroke="#1C2600" d="M0 1040 l0 -1040 1040 0 1040 0 0 1040 0 1040 -1040 0 -1040 0 0
                            -1040z m1315 946 c467 -141 762 -584 705 -1061 -29 -239 -126 -433 -303 -601
                            -249 -237 -585 -324 -922 -239 -336 85 -596 337 -701 680 -26 84 -28 103 -28
                            270 -1 211 12 273 94 440 132 269 380 463 680 530 46 10 111 14 225 11 139 -3
                            172 -7 250 -30z"/>
                            <path fill="#1C2600" d="M939 1960 c-315 -39 -587 -232 -728 -515 -121 -244 -127 -521 -18
                            -775 43 -100 97 -179 182 -269 122 -129 269 -215 445 -262 110 -30 318 -32
                            424 -6 354 89 614 349 703 703 26 106 24 314 -6 424 -25 96 -83 225 -132 297
                            -72 105 -205 227 -319 291 -158 89 -377 133 -551 112z m307 -502 c4 -4 3 -36
                            -2 -70 l-9 -63 -58 0 c-71 0 -87 -16 -87 -87 l0 -48 76 0 c74 0 76 -1 70 -22
                            -3 -13 -6 -44 -6 -70 l0 -48 -70 0 -70 0 0 -225 0 -225 -85 0 -85 0 0 225 0
                            225 -45 0 -45 0 0 70 0 70 45 0 45 0 0 83 c0 96 17 140 70 175 32 22 43 23
                            142 20 58 -2 110 -6 114 -10z"/>
                            </g></svg>
                        </a>
                        <a href=""><svg version="1.0" width="208.000000pt" height="208.000000pt" viewBox="0 0 208.000000 208.000000"
                            preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,208.000000) scale(0.100000,-0.100000)"
                            fill="white" stroke="white" >
                            <path fill="#1C2600" stroke="#1C2600" d="M0 1040 l0 -1040 1040 0 1040 0 0 1040 0 1040 -1040 0 -1040 0 0
                            -1040z m1315 946 c518 -156 815 -680 680 -1200 -70 -269 -265 -506 -520 -634
                            -143 -71 -345 -110 -505 -97 -417 34 -752 306 -876 710 -26 84 -28 103 -28
                            270 -1 211 12 273 94 440 132 269 380 463 680 530 46 10 111 14 225 11 139 -3
                            172 -7 250 -30z"/>
                            <path fill="#1C2600" d="M939 1960 c-315 -39 -587 -232 -728 -515 -121 -244 -127 -521 -18
                            -775 43 -100 97 -179 182 -269 122 -129 269 -215 445 -262 110 -30 318 -32
                            424 -6 582 146 885 761 636 1294 -48 102 -88 161 -164 242 -175 183 -378 278
                            -631 294 -44 3 -110 2 -146 -3z m371 -646 l48 -26 47 21 c26 12 49 21 51 21
                            10 0 2 -20 -21 -54 -26 -38 -23 -42 19 -26 39 15 32 -5 -19 -54 -34 -33 -45
                            -52 -45 -75 0 -153 -117 -344 -258 -419 -152 -81 -335 -83 -485 -5 l-52 27 70
                            7 c39 4 94 17 123 29 51 22 67 40 36 40 -41 0 -102 55 -118 107 -7 21 -5 22
                            26 17 l33 -6 -30 20 c-60 39 -95 96 -95 154 0 15 4 16 26 8 36 -14 36 -14 9
                            26 -20 29 -25 50 -25 96 0 33 5 68 11 79 10 19 13 18 58 -24 83 -77 171 -123
                            274 -141 l37 -7 0 41 c0 68 48 140 110 163 42 15 123 6 170 -19z"/>
                            </g>
                        </svg></a>
                        <a href=""><svg version="1.0" width="208.000000pt" height="208.000000pt" viewBox="0 0 208.000000 208.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,208.000000) scale(0.100000,-0.100000)"
                            fill="#1C2600" stroke="white" >
                            <path stroke="#1C2600" d="M0 1040 l0 -1040 1040 0 1040 0 0 1040 0 1040 -1040 0 -1040 0 0
                            -1040z m1315 946 c467 -141 762 -584 705 -1061 -27 -226 -115 -410 -274 -573
                            -250 -257 -601 -356 -951 -267 -336 85 -596 337 -701 680 -26 84 -28 103 -28
                            270 -1 211 12 273 94 440 132 269 380 463 680 530 46 10 111 14 225 11 139 -3
                            172 -7 250 -30z"/>
                            <path fill="#1C2600" d="M939 1960 c-315 -39 -587 -232 -728 -515 -121 -244 -127 -521 -18
                            -775 43 -100 97 -179 182 -269 122 -129 269 -215 445 -262 110 -30 318 -32
                            424 -6 354 89 614 349 703 703 26 106 24 314 -6 424 -25 96 -83 225 -132 297
                            -72 105 -205 227 -319 291 -158 89 -377 133 -551 112z m469 -518 c65 -47 67
                            -55 70 -382 4 -315 0 -347 -44 -399 -49 -58 -77 -62 -409 -59 -332 3 -340 5
                            -387 70 -23 33 -23 36 -26 358 l-3 326 23 34 c13 19 39 45 58 58 l34 23 326
                            -3 c322 -3 325 -3 358 -26z"/>
                            <path fill="#1C2600" d="M1230 1295 l0 -65 70 0 70 0 0 65 0 65 -70 0 -70 0 0 -65z"/>
                            <path fill="#1C2600" d="M966 1161 c-66 -44 -86 -132 -46 -199 27 -43 99 -76 146 -67 72 13
                            134 99 120 167 -8 40 -41 85 -76 103 -40 21 -109 19 -144 -4z"/>
                            <path fill="#1C2600" d="M700 935 c0 -184 0 -186 25 -210 l24 -25 294 0 294 0 21 23 c21 22
                            22 32 22 210 l0 187 -53 0 -54 0 5 -55 c7 -82 -14 -142 -68 -195 -109 -110
                            -293 -88 -375 44 -27 44 -30 58 -30 128 l1 78 -53 0 -53 0 0 -185z"/>
                            </g>
                        </svg></a>
                    </div>
                </footer>
            </div>
        )
    }
});

module.exports = NebulaFooter;