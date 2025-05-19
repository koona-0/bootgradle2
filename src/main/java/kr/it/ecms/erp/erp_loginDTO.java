package kr.it.ecms.erp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//서버 실행시마다 테이블 만들어짐
@Data
@Entity(name="erp_member")	//테이블 이름을 정함 
@NoArgsConstructor	//@파라미터가 없는 default 생성자를 자동으로 생성
//=> @Column안해놔도 자동으로 만들어진다는 뜻  
@AllArgsConstructor	//클래스의 모든 필드 값을 파라미터로 받는 생성자를 자동으로 구성 
//public erp_loginDTO(){} 생성자 메소드를 만들면 자동생성됨 
//@NoArgsConstructor 또는 @AllArgsConstructor 둘중 하나만 써야함 
public class erp_loginDTO {
	//nullable = false => not null
	//nullable = true => null
	//columnDefinition : 해당 컬럼에 옵션을 셋팅할 때 사용하는 속성 
	
	//@UniqueConstraint : unique를 설정할 때 사용 
	@Id	//프라이머리키 설정 
	@Column(nullable = false, columnDefinition = "int auto_increment")
	int uidx;
	
//	@JoinColumn	//외래키 어노테이션
	@Column(nullable = false, columnDefinition = "varchar(50)")
	String uname;
	

}
