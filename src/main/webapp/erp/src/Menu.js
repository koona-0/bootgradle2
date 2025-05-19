import React from 'react';


export const Menu = function() {

	return (

		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				{/* 메인페이지에 연결해줌 */}
				<a className="navbar-brand" href="/">ERP 시스템</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle active" href="#" id="basicSettingsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								기본설정
							</a>
							<ul className="dropdown-menu" aria-labelledby="basicSettingsDropdown">
								{/* /corp 연결해줌 */}
								<li><a className="dropdown-item" href="/corp">업체정보관리</a></li>
								<li><a className="dropdown-item" href="#">기초코드등록</a></li>
								<li><a className="dropdown-item" href="#">창고등록</a></li>
								<li><a className="dropdown-item" href="#">사용자관리</a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">입출고관리</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">생산관리</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">재고관리</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">시스템관리</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

	);
}