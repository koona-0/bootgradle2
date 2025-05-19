import React from 'react';

export const Corp = () => {
	//react는 onSubmit, onClick, onChange, onKeypress 대소문자 구분 
	
	//검색기능 
	const corp_data = (e) => {
		e.preventDefault();
		var frm = document.querySelector("#frm");
		if(frm.corp_part.value==""){
			alert("검색어를 입력하셔야합니다.")
		}else{
			//axios 쓰려면 npm으로 깔아야함 안써
			//react는 XMLHttpRequest안먹음 
			
			var getdata = "?corp_part="+frm.corp_part.value+"&"+"corp_search="+frm.corp_search.value;
			//react는 fetch 사용하여 동기, 비동기 통신  
			fetch("/erp/dataload.do"+getdata).then(function(result_data){
				return result_data.text();
			}).then(function(data){
				console.log(data);
			}).catch(function(error){
				console.log(error);
			});
		}
		
	}

	return (
		<div className="container mt-5">
			<h1 className="mb-4">거래처 목록</h1>
			<form id="frm" className="row g-3 mb-4" onSubmit={corp_data}>
				<div className="col-md-4">
					<select name="corp_part" className="form-control">
						<option value="">-- 검색 기준 선택 --</option>
						<option value="account_code">거래처코드</option>
						<option value="company_name">회사명</option>
						<option value="contact_info">연락처</option>
					</select>
				</div>
				<div className="col-md-4">
					<input type="text" name="corp_search" className="form-control" placeholder="검색어를 입력하세요" />
				</div>
				<div className="col-12">
					<button type="submit" className="btn btn-primary">검색</button>
				</div>
			</form>
			<table className="table table-bordered table-hover">
				<thead className="table-light">
					<tr>
						<th>거래처코드</th>
						<th>회사명</th>
						<th>대표자</th>
						<th>업태</th>
						<th>종목</th>
						<th>연락처</th>
						<th>사업자번호</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>001</td>
						<td>ABC Corp</td>
						<td>홍길동</td>
						<td>제조업</td>
						<td>전자제품</td>
						<td>010-1234-5678</td>
						<td>123-45-67890</td>
					</tr>
					<tr>
						<td>002</td>
						<td>XYZ Ltd</td>
						<td>김철수</td>
						<td>도소매</td>
						<td>가전제품</td>
						<td>010-9876-5432</td>
						<td>987-65-43210</td>
					</tr>
				</tbody>
			</table>
			<nav aria-label="Page navigation">
				<ul className="pagination justify-content-center">
					<li className="page-item disabled">
						<a className="page-link" href="#" tabindex="-1" aria-disabled="true">이전</a>
					</li>
					<li className="page-item"><a className="page-link" href="#">1</a></li>
					<li className="page-item"><a className="page-link" href="#">2</a></li>
					<li className="page-item"><a className="page-link" href="#">3</a></li>
					<li className="page-item">
						<a className="page-link" href="#">다음</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}